<script setup lang="ts">
import Checkbox from '../../components/forms/components/Checkbox.vue';
import MultiImageUpload from '../../components/forms/components/MultiImageUpload.vue';
import TextEditor from '../../components/forms/components/TextEditor.vue';
import SubHeader from '../../components/general/SubHeader.vue';
import MainLauout from '../../components/lauouts/MainLauout.vue';
import ButtonGreen from '../../components/ui/ButtonGreen.vue';
import { useForm } from 'vee-validate';
import { useYupValidation } from '../../utils/useYupValidation';
import { v4 as uuidv4 } from 'uuid';
import useCreatePost from '../../api/posts/useCreatePost';
import useGetPostById from '../../api/posts/useGetPostById';
import useEditPost from '../../api/posts/useEditPost';
import { useRouter } from 'vue-router';
import { apiPutFiteToMinio } from '../../utils/minio/apiPutFiteToMinio';
import { getFileExtension } from '../../utils/GetFileExtention';

const router = useRouter()
const{createPost} = useCreatePost()
const {editPost} = useEditPost()
const schema = useYupValidation({
    isPublished:true,
    description:true,
    images:true
})

const { errors, defineField, handleSubmit,setErrors } = useForm({
    validationSchema:schema,
    validateOnInput:true,
    validateOnChange:true,
    initialValues:{
        description: '',
        is_published: false,
        images: []
    }
})
const [isPublished] = defineField('is_published')
const [description] = defineField('description')
const [images] = defineField('images')


const onFormSubmit = handleSubmit(async (values) => {
    let postId=''
    values.author = null
    const photos = values.images
    const publishingStatus = values.is_published

    delete values.is_published
    values.images = []

    const imageArray:string[] = []

    createPost(values)
        .then((data)=>{
            postId = data
            console.log('asdfaa')
            Promise.all(
                photos.map((file:File)=>{
                    const imageName:string = `${postId}_${uuidv4()}${getFileExtension(file.name)}`
                    imageArray.push(`/feedpost/${imageName}`)
                    apiPutFiteToMinio('feedpost', file,imageName)
                })
            )
        })
        .then(()=>{
            values.images = imageArray
            delete values.author
            values.isPublished = publishingStatus
            editPost(values, postId)
        })
        .then(()=>{
            router.push({name:'posts'})
        })

})


</script>


<template>
    <MainLauout>
        <SubHeader
        title="создание поста"
        nav="posts"/>

        <form @submit.prevent="onFormSubmit" class=" flex flex-col gap-5">
            {{ errors.images }}
            <div class=" flex flex-row gap-5 h-10 ">
                <span
                v-if="isPublished"
                class="w-[150px] bg-green-600 p-2 font-bold rounded-xl text-center"
                >Опубликовано</span>
                <span
                v-else
                class="w-[150px] bg-red-500 text-white p-2 font-bold rounded-xl text-center"
                >Не опубликовано</span>
            <Checkbox
            class="h-full"
            title="статус публикации"
            name="is_published"
            v-model="isPublished"/>

            </div>

            <div class=" flex flex-col gap-3 ">
                <h3>Фотографии</h3>

                <MultiImageUpload
                :error="errors.images"
                v-model="images"/>
            </div>
            <div class=" flex flex-col gap-3 ">
                <h3>Текст поста</h3>
                <TextEditor
                name="description"
                :error="errors.description"
                v-model="description"
                />
            </div>
            <!-- {{ description }} -->
            <ButtonGreen
            class=" mt-8"
            type="submit"
            title="Сохранить"/>




        </form>

    </MainLauout>
</template>
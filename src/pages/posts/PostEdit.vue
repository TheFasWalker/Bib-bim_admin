<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue';
import SubHeader from '../../components/general/SubHeader.vue';
import MainLauout from '../../components/lauouts/MainLauout.vue';
import DeleteButton from '../../components/ui/DeleteButton.vue';
import { useRoute, useRouter } from 'vue-router';
import useGetPostById from '../../api/posts/useGetPostById';
import { PostsState } from '../../store/PostsState';
import { useYupValidation } from '../../utils/useYupValidation';
import { useForm } from 'vee-validate';
import Checkbox from '../../components/forms/components/Checkbox.vue';
import ButtonGreen from '../../components/ui/ButtonGreen.vue';
import TextEditor from '../../components/forms/components/TextEditor.vue';
import MultiImageUpload from '../../components/forms/components/MultiImageUpload.vue';
import PreviewPhotoWithDelete from '../../components/PreviewPhotoWithDelete.vue';
import useEditPost from '../../api/posts/useEditPost';

const { getPostById, postData} = useGetPostById()
const {editPost} = useEditPost()
const elementsLinksToDelete=ref([])
const router = useRouter()
const route = useRoute()
const postId = route.params.id as string
onBeforeMount(()=>{
    getPostById(postId)
})
const schema = useYupValidation({
    isPublished:true,
    description:true,
    images:false,
    newImages:false
})
const { errors, defineField, handleSubmit,setErrors,resetForm } = useForm({
    validationSchema:schema, 
    initialValues:{
        description: '',
        is_published: false,
        images: [],
        newImages:{}
    }
})
const [isPublished] = defineField('is_published')
const [description] = defineField('description')
const [images] = defineField('images')
const [newImages] = defineField('newImages')

const onFormSubmit = handleSubmit(async (values) => {
    if(elementsLinksToDelete.value.length){
        console.log('need to delete elements')
    }
    const newImages = values.newImages
    delete values.newImages

    values.id = postId
    console.log(values)
    const dataToSend = new URLSearchParams(values).toString()
    editPost(dataToSend).then(()=> router.push({name:'posts'}))

})
watch(postData,()=>{
    if(postData.value){
         resetForm({
            values:{
                description: postData.value?.description,
                is_published: postData.value?.isPublished,
                images: postData.value?.images,
                newImages:{}
            }
        })
    }
})
const deletePhoto =(url:string)=>{
    elementsLinksToDelete.value.push(images.value.filter((image: string) => image === url))
    images.value = images.value.filter((image) => image !== url)
}
</script>

<template>
    <MainLauout>
        <SubHeader title="Редактирование поста" nav="posts"/>
        <div class=" w-full p-2 border shadow-sm rounded-lg flex flex-row justify-between items-center mb-5">
            <div class=" flex flex-col gap-2">
                <span>Пост создан: {{ postData?.createDate }} {{ postData?.createTime }}</span>
                <span>Автор : {{ postData?.author || 'NoNameAuthor'  }}</span>
            </div>
            <DeleteButton
            @confirm=""/>

        </div>

        <form @submit.prevent="onFormSubmit" class=" flex flex-col gap-5">
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
                <div 
                    v-if="images.length"
                    class=" flex flex-col gap-2 p-2 shadow-lg rounded-md">
                    <h3>Имеющиеся фотографии</h3>
                    <div class=" grid grid-cols-3 gap-3">
                        <PreviewPhotoWithDelete
                        :key="image"
                        @delete-image="deletePhoto(image)"
                        v-for="image in images"
                        :url="image"
                        />
                    </div>
                </div>
                <div class="shadow-lg rounded-md flex flex-col gap-2 p-2">
                    <h2>Новые фотографии</h2>
                    <MultiImageUpload
                        :error="errors.newImages"
                        v-model:newImages="newImages"/> 
                </div>
                
            </div> 
            <div class=" flex flex-col gap-3 ">
                <h3>Текст поста</h3>
                <TextEditor
                name="description"
                :error="errors.description"
                v-model="description"
                />
            </div>
            <ButtonGreen
            class=" mt-8"
            type="submit"
            title="Сохранить"/>




        </form>


    </MainLauout>
</template>
<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, watch } from 'vue';
import SubHeader from '../../components/general/SubHeader.vue';
import MainLauout from '../../components/lauouts/MainLauout.vue';
import DeleteButton from '../../components/ui/DeleteButton.vue';
import { onBeforeRouteLeave, useRoute } from 'vue-router';
import useGetPostById from '../../api/posts/useGetPostById';
import { PostsState } from '../../store/PostsState';
import { useYupValidation } from '../../utils/useYupValidation';
import { useForm } from 'vee-validate';
import Checkbox from '../../components/forms/components/Checkbox.vue';
import ButtonGreen from '../../components/ui/ButtonGreen.vue';
import TextEditor from '../../components/forms/components/TextEditor.vue';
import MultiImageUpload from '../../components/forms/components/MultiImageUpload.vue';

const { getPostById, postData} = useGetPostById()
const postsState = PostsState()

const route = useRoute()
const postId = route.params.id as string
onBeforeMount(()=>{
    getPostById(postId)
})
const schema = useYupValidation({
    isPublished:true,
    description:true,
    images:true
})
const { errors, defineField, handleSubmit,setErrors,resetForm } = useForm({
    validationSchema:schema,
    validateOnInput:true,
    validateOnChange:true,  
    initialValues:{
        description: postData.value?.description,
        is_published: false,
        images: []
    }
})
const [isPublished] = defineField('is_published')
const [description] = defineField('description')
const [images] = defineField('images')
const onFormSubmit = handleSubmit(async (values) => {

})
watch(postData,()=>{
    if(postData.value){
         resetForm({
            values:{
                description: postData.value?.description,
                is_published: postData.value?.isPublished,
                images: postData.value?.images
            }
        })
    }
})

</script>

<template>
    <MainLauout>
        <SubHeader title="Редактирование поста" nav="posts"/>
{{ postData?.description }}
        <div class=" w-full p-2 border shadow-sm rounded-lg flex flex-row justify-between items-center">
            <div class=" flex flex-col gap-2">
                <span>Пост создан: {{ postData?.createDate }} {{ postData?.createTime }}</span>
                <span>Автор : {{ postData?.author || 'NoNameAuthor'  }}</span>
            </div>
            <DeleteButton
            @confirm=""/>

        </div>

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
<!-- 
            <div class=" flex flex-col gap-3 ">
                <h3>Фотографии</h3>

                <MultiImageUpload
                :error="errors.images"
                v-model:images="images"/>
            </div> -->
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
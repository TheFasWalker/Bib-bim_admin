<script setup lang="ts">
import { useRoute } from 'vue-router';
import SubHeader from '../../components/general/SubHeader.vue';
import MainLauout from '../../components/lauouts/MainLauout.vue';
import { PostsState } from '../../store/PostsState.ts'
import { onMounted } from 'vue';
import useGetPostById from '../../api/posts/useGetPostById.ts';
import { useYupValidation } from '../../utils/useYupValidation.ts';
import ButtonGreen from '../../components/ui/ButtonGreen.vue';
import Checkbox from '../../components/forms/components/Checkbox.vue';
import MultiImageUpload from '../../components/forms/components/MultiImageUpload.vue';
import TextEditor from '../../components/forms/components/TextEditor.vue';
import { useForm } from 'vee-validate';
import DeleteButton from '../../components/ui/DeleteButton.vue';
import useDeletePostById from '../../api/posts/useDeletePostById.ts';
const {deletePostById} = useDeletePostById()
const {getPostById}= useGetPostById()
const postState = PostsState()
const route = useRoute()
const postId = route.params.id

onMounted(() => {
    postState.getPostByIdFromState(postId)
    if (!postState.postItem) {
        getPostById(postId)
    }
})
const schema = useYupValidation({
    isPublished:true,
    description:true,
    files:true
})
const { errors, defineField, handleSubmit,setErrors } = useForm({
    validationSchema:schema,
    validateOnInput:true,
    validateOnChange:true,
    initialValues:{
        description: postState.postItem?.description,
        is_published: postState.postItem?.isPublished,
        files: []
    }
})
const [isPublished] = defineField('is_published')
const [description] = defineField('description')
const [files] = defineField('files')

const onFormSubmit = handleSubmit(async (values) => {})
</script>

<template>
    <MainLauout>
        <SubHeader title="Редактирование поста" nav="posts"/>
        <div class=" w-full p-2 border shadow-sm rounded-lg flex flex-row justify-between items-center">
            <div class=" flex flex-col gap-2">
                <span>Пост создан: {{ postState.postItem?.createDate }} {{ postState.postItem?.createTime }}</span>
                <span>Автор : {{ postState.postItem?.author || 'NoNameAuthor'  }}</span>
            </div>
            <DeleteButton
            @confirm="deletePostById(postState.postItem?.id)"/>

        </div>
        
        
        {{ postState.postItem?.author }}
        <form @submit.prevent="onFormSubmit" class=" flex flex-col gap-5 mt-6">
            {{ errors.files }}
            <div class=" flex flex-row gap-5 h-10 ">
                <span
                v-if="isPublished"
                class="w-[150px] bg-green-600 p-2 font-bold rounded-xl text-center"
                >Опубликовано</span>
                <span
                v-else
                class="w-[150px] bg-red-500 text-white p-2 font-bold rounded-xl"
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
                :error="errors.files"
                v-model:images="files"/>
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
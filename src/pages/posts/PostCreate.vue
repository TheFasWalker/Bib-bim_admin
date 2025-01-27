<script setup lang="ts">
import Checkbox from '../../components/forms/components/Checkbox.vue';
import ImageInput from '../../components/forms/components/ImageInput.vue';
import TextEditor from '../../components/forms/components/TextEditor.vue';
import SubHeader from '../../components/general/SubHeader.vue';
import MainLauout from '../../components/lauouts/MainLauout.vue';
import { ref } from 'vue';
import ButtonGreen from '../../components/ui/ButtonGreen.vue';
import { useForm } from 'vee-validate';
import { useYupValidation } from '../../utils/useYupValidation';
import useCreatePost from '../../api/posts/useCreatePost';
const updateField = (event) => {
    console.log('blur')
}
const imageUrl = ref<string | null>(null);
const{createPost} = useCreatePost()
const schema = useYupValidation({
    isPublished:true,
    // description:true
})

const { errors, defineField, handleSubmit } = useForm({
    validationSchema:schema,
    validateOnInput:true,
    validateOnChange:true,
    initialValues:{
        description: '',
        is_published: false,
    }
})
const [isPublished] = defineField('is_published')
const [description, descriptionAttrs] = defineField('description')

const onFormSubmit = handleSubmit(async(values)=>{
    values.author= null
    values.images =[
        'https://media.gettyimages.com/id/1127317526/nl/foto/scottish-fold-playing.jpg?s=612x612&w=0&k=20&c=Rw8Er7CKOy8tTibwK0J_VuCCcz-yVM9AE-xBM6YUJKM=',
        'https://media.gettyimages.com/id/1286001342/nl/foto/chinchilla-kitten-scottish-fold-longhair-white-kitten-sleeping-on-the-bar.jpg?s=612x612&w=0&k=20&c=RwXcDjJVgrGE5GLb4X1W3DJbOtdz48rYWRAPpP4xmZE='
        ]
        createPost(values)
    })


</script>


<template>
    <MainLauout>
        <SubHeader
        title="создание поста"
        nav="posts"/>
        <form @submit.prevent="onFormSubmit" class=" flex flex-col gap-5">
            {{ errors.description }}
            <div class=" flex flex-row gap-5 h-10 ">
                <span
                v-if="isPublished"
                class="w-[150px] bg-green-600 p-2 font-bold rounded-xl"
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

            <!-- <div class=" flex flex-col gap-3 ">
                <h3>Фотографии</h3>
                <ImageInput
                v-model="imageUrl"/>
            </div> -->
            <div class=" flex flex-col gap-3 ">
                <h3>Текст поста</h3>
                <TextEditor
                name="description"
                :error="errors.description"
                v-model="description"
                @blur="updateField"
                />
            </div>
            <!-- {{ description }} -->
            <ButtonGreen
            type="submit"
            title="Сохранить"/>




        </form>

    </MainLauout>
</template>
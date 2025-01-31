<script setup lang="ts">
import Checkbox from '../../components/forms/components/Checkbox.vue';
import MultiImageUpload from '../../components/forms/components/MultiImageUpload.vue';
import TextEditor from '../../components/forms/components/TextEditor.vue';
import SubHeader from '../../components/general/SubHeader.vue';
import MainLauout from '../../components/lauouts/MainLauout.vue';
import ButtonGreen from '../../components/ui/ButtonGreen.vue';
import { useForm } from 'vee-validate';
import { useYupValidation } from '../../utils/useYupValidation';
import useCreatePost from '../../api/posts/useCreatePost';
// import apiFetchWithFiles from '../../utils/api/apiFetchWithFiles';
import { ICreatePost } from '../../Types';


const{createPost} = useCreatePost()
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
        description: '',
        is_published: false,
        files: []
    }
})
const [isPublished] = defineField('is_published')
const [description] = defineField('description')
const [files] = defineField('files')

// const uploadFiles = async(files:File[])=>{
//     try{
//          const formData = new FormData();
//          files.forEach(file => formData.append('files', file));
//          const data = await apiFetchWithFiles('/upload', {
//                 method:'POST',
//                body: formData
//             })
//         return data
//     }catch(e:any){
//         setErrors({files:e.message})
//         throw new Error(e.message)
//     }
// }

const onFormSubmit = handleSubmit(async (values) => {

    // try{
    //     values.author = null;
    //      if(!imageUrl.value){
    //          setErrors({files:'Должна быть хотя бы 1 фотография'})
    //          return
    //       }
    //     const file = await  fetch(imageUrl.value).then(res => res.blob()).then(blob => new File([blob], 'image.jpg', { type: 'image/jpeg' }))
    //     const uploadedFiles = await uploadFiles([file])
    //     if(uploadedFiles){
    //         values.files = uploadedFiles
    //     }

    //     await createPost(values)
    // }catch(e:any){
    //     console.log(e)
    // }

    // try {
    //       const fileUploadResult = await uploadFiles(values.files)
    //       const postData: ICreatePost = {
    //         description: values.description,
    //         is_published: values.is_published,
    //        file_ids: fileUploadResult.map((item: {id:number})=>item.id)
    //        };
    //        await createPost(postData)


    //    }catch(e:any){
    //     console.log('form error',e.message)
    //    }


    })


</script>


<template>
    <MainLauout>
        <SubHeader
        title="создание поста"
        nav="posts"/>

        <form @submit.prevent="onFormSubmit" class=" flex flex-col gap-5">
            {{ errors.files }}
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
            <!-- {{ description }} -->
            <ButtonGreen
            class=" mt-8"
            type="submit"
            title="Сохранить"/>




        </form>

    </MainLauout>
</template>
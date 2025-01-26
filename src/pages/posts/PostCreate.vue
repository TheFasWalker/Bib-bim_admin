<script setup lang="ts">
import Checkbox from '../../components/forms/components/Checkbox.vue';
import ImageInput from '../../components/forms/components/ImageInput.vue';
import TextEditor from '../../components/forms/components/TextEditor.vue';
import SubHeader from '../../components/general/SubHeader.vue';
import MainLauout from '../../components/lauouts/MainLauout.vue';
import { ref } from 'vue';
import ButtonGreen from '../../components/ui/ButtonGreen.vue';
const isPublished = ref(false)

const imageUrl = ref<string | null>(null);

</script>


<template>
    <MainLauout>
        <SubHeader
        title="создание поста"
        nav="posts"/>
        <div class=" flex flex-col gap-5">
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
                <ImageInput
                v-model="imageUrl"/>
            </div>
            <div class=" flex flex-col gap-3 ">
                <h3>Текст поста</h3>
                <TextEditor/>
            </div>
            <ButtonGreen
            type="submit"
            title="Сохранить"/>




        </div>

    </MainLauout>
</template>
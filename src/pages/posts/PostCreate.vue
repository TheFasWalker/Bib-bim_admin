<script setup lang="ts">
import ImageInput from '../../components/forms/components/ImageInput.vue';
import SubHeader from '../../components/general/SubHeader.vue';
import MainLauout from '../../components/lauouts/MainLauout.vue';
import { ref } from 'vue';


const imageUrl = ref<string|null>(null);
</script>

<template>
    <MainLauout>
        <SubHeader
        title="создание поста"
        nav="posts"/>
        <div class=" grid grid-cols-2">
            <ImageInput
            v-model="imageUrl"/>


        </div>

    </MainLauout>
</template>
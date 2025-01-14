<script setup lang="ts">
import { useRoute } from 'vue-router';
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
const route = useRoute()
const postId = route.params.id
</script>

<template>
    <MainLauout>
        <SubHeader
        title="Страница поста"
        nav="posts"/>
        страница поста c id =  {{ postId }}
    </MainLauout>
</template>
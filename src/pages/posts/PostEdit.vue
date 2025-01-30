<script setup lang="ts">
import { useRoute } from 'vue-router';
import SubHeader from '../../components/general/SubHeader.vue';
import MainLauout from '../../components/lauouts/MainLauout.vue';
import { PostsState } from '../../store/PostsState.ts'
import { onMounted } from 'vue';
import useGetPostById from '../../api/posts/useGetPostById.ts';

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


</script>

<template>
    <MainLauout>
        <SubHeader :title="`редактирвоание поста c id = ${postId}` " nav="posts"/>
        sss{{ postState.postItem }}
    </MainLauout>
</template>
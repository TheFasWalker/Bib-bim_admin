<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import SubHeader from '../../components/general/SubHeader.vue';
import MainLauout from '../../components/lauouts/MainLauout.vue';
import useGetAllPosts from '../../api/posts/useGetAllPosts';
import { PostsState } from '../../store/PostsState';
import PostPreview from '../../components/posts/PostPreview.vue';
import SortingByPublishing from '../../components/SortingByPublishing.vue';

const postsList = PostsState()
const { getAllPosts } = useGetAllPosts()
const currentFilter = ref<boolean | 'all'>(true);
const queryParams = ref('?is_published=true')
onMounted(()=>{
    getAllPosts(queryParams.value)
})
const handleFilterChange = (value: boolean | 'all') => {
  currentFilter.value = value;
  console.log('Фильтр изменен на:', value);
};
</script>

<template>
       <MainLauout>
        <SubHeader
            title="Посты"
            nav="home"
            createPage="createPost"
        >
        <SortingByPublishing
        @filter-change="handleFilterChange"
        :currentFilter="currentFilter"/>
    </SubHeader>
        <div v-if="postsList.postsList" class="grid grid-cols-3 gap-3">
            <PostPreview
                v-for="post in postsList.postsList"
                :key="post.id"
                :data="post"
                v-bind="post"
            />

        </div>
        <div class="" v-else>
            <h1>Упс постов нет</h1>
        </div>
    </MainLauout>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import SubHeader from '../../components/general/SubHeader.vue';
import MainLauout from '../../components/lauouts/MainLauout.vue';
import useGetAllPosts from '../../api/posts/useGetAllPosts';
import { PostsState } from '../../store/PostsState';
import PostPreview from '../../components/posts/PostPreview.vue';
import SortingByPublishing from '../../components/SortingByPublishing.vue';
import PaginationComponent from '../../components/pagination/PaginationComponent.vue';
const itemsPerPage = import.meta.env.VITE_POST_TO_SHOW_AT_ONCE
const postsList = PostsState()
const { getAllPosts } = useGetAllPosts()
const currentFilter = ref<boolean | 'all'>(true);
const activePage = ref<number>(1)
const publishingState = ref<boolean | ''>(true)

// const queryParams = ref(`?is_published=true&limit=${itemsPerPage}`)
const queryParams = computed(()=>{
    return `?is_published=${publishingState.value}&limit=${itemsPerPage}&offset=${activePage.value -1 }`
})
onMounted(()=>{
    getAllPosts(queryParams.value)
})
const handleFilterChange = (value: boolean | 'all') => {
  currentFilter.value = value;
  if (value === true) {
    publishingState.value = true
    activePage.value = 1
  } else if(value === false){
    publishingState.value = false
    activePage.value = 1
  } else {
    publishingState.value = ''
    activePage.value = 1
  }
};
watch(queryParams, (newQueryParams) => {
    console.log('queryParams changed:', newQueryParams)
    getAllPosts(newQueryParams);
});
const handlePageChange =(newPage)=>{
    activePage.value = newPage
}
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
    <div 
    v-if="postsList.postsList?.items"
    class="flex flex-col gap-2">
        <div  class="grid grid-cols-3 gap-3">
            <PostPreview
                v-for="post in postsList.postsList.items"
                :key="post.id"
                :data="post"
                v-bind="post"
            />

        </div>
            <PaginationComponent
            v-if="postsList.postsList.totalItems > postsList.postsList.pageSize"
            :active="postsList.postsList.pageNumber +1"
            :total="postsList.postsList.totalItems"
            :per-page="postsList.postsList.pageSize"
            @page-change="handlePageChange"
            />
    </div>

        <div class="" v-else>
            <h1>Упс постов нет</h1> 
        </div>
    </MainLauout>
</template>
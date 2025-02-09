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
const queryParams = ref(`?is_published=true&limit=${itemsPerPage}`)
onMounted(()=>{
    getAllPosts(queryParams.value)
})
const handleFilterChange = (value: boolean | 'all') => {
  currentFilter.value = value;
  console.log(itemsPerPage)
  if (value === true) {
      queryParams.value = `?is_published=true&limit=${itemsPerPage}`
  } else if(value === false){
     queryParams.value = '?is_published=false&limit=6'
  } else {
       queryParams.value = ''
  }
};
watch(queryParams, (newQueryParams) => {
    console.log('queryParams changed:', newQueryParams)
  getAllPosts(newQueryParams);
});
const handlePageChange =(newPage)=>{
    console.log(newPage)
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
        <span>
            Номер страницы {{ postsList.postsList.pageNumber }}
        </span>
        <span>Количество элементов на странице {{ postsList.postsList.pageSize }}</span>
        <span> всего элементов{{ postsList.postsList.totalItems }}</span>
            <PaginationComponent
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
<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import SubHeader from '../../components/general/SubHeader.vue';
import MainLauout from '../../components/lauouts/MainLauout.vue';
import useGetAllPosts from '../../api/posts/useGetAllPosts';
import { PostsState } from '../../store/PostsState';
import PostPreview from '../../components/posts/PostPreview.vue';
import SortingByPublishing from '../../components/SortingByPublishing.vue';
import PaginationComponent from '../../components/pagination/PaginationComponent.vue';
import { useRoute, useRouter } from 'vue-router';

const itemsPerPage = import.meta.env.VITE_POST_TO_SHOW_AT_ONCE
const postsList = PostsState()
const { getAllPosts } = useGetAllPosts()
const currentFilter = computed(()=>{
    const publishedState = route.query.is_published

    if (publishedState === undefined) {
    return true; 
  } else if (publishedState === 'true') {
    return true;
  } else if (publishedState === 'false') {
    return false;
  } else if (publishedState === 'all' || publishedState === '') {
    return 'all'; 
  }

})

const route  = useRoute()
const router = useRouter()
const activePage = ref(Number(route.query.offset) || 1)
const publishingState = ref<boolean | 'all'>(
    route.query.is_published === 'true' ? true :
    route.query.is_published === 'false' ? false :
    route.query.is_published === '' ? 'all' :
    true
)

const queryParams = computed(()=>{
    return `?offset=${activePage.value -1 }&limit=${itemsPerPage}&is_published=${publishingState.value}`
})

onMounted(() => {
    const pageFromUrl = Number(route.query.offset);
    const isPublishedFromUrl = route.query.is_published?.toString()
    if (pageFromUrl) {
        activePage.value = pageFromUrl;
    }
    if (isPublishedFromUrl) {
        publishingState.value = isPublishedFromUrl === 'true' ? true :isPublishedFromUrl === 'false' ? false : 'all'
    }
    getAllPosts(queryParams.value)
})

const handleFilterChange = (value: boolean | 'all') => {
  if (value === true) {
    publishingState.value = true;
  } else if (value === false) {
    publishingState.value = false;
  } else {
    publishingState.value = 'all'; 
  }
  activePage.value = 1;

  const isPublishedQuery = value === true ? 'true' : value === false ? 'false' : 'all';

  router.push({
    query: {
      ...route.query,
      offset: activePage.value,
      is_published: isPublishedQuery, 
      limit: itemsPerPage,
    },
  });
};

const handlePageChange = (newPage: number) => {

    let isPublishedQuery 
    if(publishingState.value === true){
        isPublishedQuery = true
    }else if(publishingState.value === false){
        isPublishedQuery = false
    }else if(publishingState.value === 'all'){
        isPublishedQuery = 'all'
    }else{
        isPublishedQuery= undefined
    }

    activePage.value = newPage
    router.push({
        query: {
            ...route.query,
            offset: newPage,
            is_published:isPublishedQuery,
            limit:itemsPerPage
        }
    })
}

watch(queryParams, (newQueryParams) => {
    getAllPosts(newQueryParams);
});

watch(() => route.query, (newPage) => {

    if (newPage.page) {
        activePage.value = Number(newPage)
        getAllPosts(queryParams.value)
    }
})

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
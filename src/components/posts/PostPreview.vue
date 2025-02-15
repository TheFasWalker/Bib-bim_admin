<template>
    <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm  flex flex-col gap-5 relative justify-between">
        <div v-if="isPublished" class="absolute top-0 right-0 bg-green-600 h-20 w-20 rounded-bl-full flex items-center " >
            <span class="  rotate-45  text-lg font-bold text-white ">published</span>

        </div>

        <div class="flex flex-col gap-2">
            <div class=" h-40 w-full">
                <img class=" w-full h-full object-contain" :src="previewImgUrl" alt="">
            </div>
            <div class="h-30 overflow-hidden" v-html="description"></div>
        </div>
            <div class="grid grid-cols-2 gap-3">
                <DeleteButton
                    @confirm="deleteItem(id)"
                    addClass="w-full"/>
                    <router-link
                        :to="{name: 'editPost', params: { id: id }}"
                        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm fill-white stroke-white flex items-center justify-center h-12 ">
                        <Icons
                        class="fill-white"
                        iconName="gear"
                        />
            </router-link>
            </div>
          </div>
    </template>

    <script setup lang="ts">
    import { computed } from 'vue';
    import useDeletePostById from '../../api/posts/useDeletePostById';
    const { getAllPosts } = useGetAllPosts()
    const urlEndpoint = import.meta.env.VITE_API_PHOTOS_URL
    import { IPost } from '../../Types';
    import DeleteButton from '../ui/DeleteButton.vue';
    import Icons from '../ui/Icons.vue';
import useGetAllPosts from '../../api/posts/useGetAllPosts';
    const previewImgUrl = computed(()=>{
        if(props.images.length){
            return `${urlEndpoint}/${props.images[0]}`
        }else{
            return '/images/noimage.png'
        }
    })


    const {deletePostById} = useDeletePostById()
    const props = defineProps<IPost>()
    const deleteItem = (id:string) => {
        deletePostById(id)
        useGetAllPosts()
    }
    </script>
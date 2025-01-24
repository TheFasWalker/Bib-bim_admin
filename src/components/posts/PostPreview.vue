<template>
    <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm  flex flex-col gap-5 relative justify-between">
        <div v-if="isPublished" class="absolute top-0 right-0 bg-green-600 h-20 w-20 rounded-bl-full flex items-center " >
            <span class="  rotate-45  text-lg font-bold text-white ">published</span>
    
        </div>
    
        <div class="flex flex-col gap-2">
            <div class=" h-40 w-full">
                <img class=" w-full h-full object-contain" :src="`${images[0]? images[0] : '/images/noimage.png'}`" alt="">
            </div>
            <p class=" h-30 overflow-hidden">{{ description }}</p>
        </div>
            <div class="grid grid-cols-2 gap-3">
                <DeleteButton
                    addClass="w-full"/>
                <EditButton
                    class="w-full"/>
            </div>
          </div>
    </template>
    
    <script setup lang="ts">
    import { IPost } from '../../Types';
    import DeleteButton from '../ui/DeleteButton.vue';
    import EditButton from '../ui/EditButton.vue';

    defineProps<IPost>()
    </script>
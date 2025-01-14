<template>
<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm  flex flex-col gap-5 relative">
    <div v-if="post.isPubllished" class="absolute top-0 right-0 bg-green-600 h-20 w-20 rounded-bl-full flex items-center " >
        <span class="  rotate-45  text-lg font-bold text-white ">published</span>

    </div>

    <div class="flex flex-col gap-2">
        <div class=" h-40 w-full">
            <img class=" w-full h-full object-contain" :src="`${post.imgUrl? post.imgUrl : '/images/noimage.png'}`" alt="">

        </div>

        <h2 class=" text-xl font-semibold tracking-tight text-gray-900 min-w-full whitespace-nowrap overflow-ellipsis overflow-hidden">{{ post.title }}</h2>
        <p >{{ post.desc }}</p>
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
import DeleteButton from '../ui/DeleteButton.vue';
import EditButton from '../ui/EditButton.vue';


interface Data {
    title:string,
    isPubllished?: boolean
    desc: string,
    imgUrl?:string
}
interface Props{
    post:Data
}
    defineProps<Props>()
</script>
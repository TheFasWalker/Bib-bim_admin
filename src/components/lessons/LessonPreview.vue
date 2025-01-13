<template>
<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm  flex flex-col gap-5 relative">
    <div v-if="isPubllished" class="absolute top-0 right-0 bg-green-600 h-20 w-20 rounded-bl-full flex items-center " >
        <span class="  rotate-45  text-lg font-bold text-white ">published</span>

    </div>

    <div class="flex flex-col gap-2">
        <div class=" h-40 w-full">
            <img class=" w-full h-full object-contain" :src="`${imgUrl? imgUrl : '/images/noimage.png'}`" alt="">

        </div>

        <h2 class=" text-xl font-semibold tracking-tight text-gray-900 min-w-full whitespace-nowrap overflow-ellipsis overflow-hidden">{{ title }}</h2>
        <p >{{ desc }}</p>
    </div>
        <div class="grid grid-cols-2 gap-3">
            <button class=" flex flex-row gap-4 items-center justify-center text-xl font-bold focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300  me-2   rounded-lg  px-5 py-2.5 ">
                Редактировать
            </button>
            <EditButton/>
            <button class=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg text-xl px-5 py-2.5 me-2  font-bold">Удалить</button>
        </div>
      </div>
</template>

<script setup lang="ts">
import EditButton from '../ui/EditButton.vue';
import Icons from '../ui/Icons.vue';

interface Props {
    title:String,
    isPubllished?: Boolean
    desc: String,
    imgUrl?:string
}
    defineProps<Props>()
</script>
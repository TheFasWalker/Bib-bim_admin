<template>
    <div class=" flex flex-row py-5 gap-10 items-center">
    <h1 class="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 ">{{ title }}</h1>
     <router-link
        class=" flex flex-row gap-2 justify-center items-center text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center  me-2 mb-2"
        :to="{name: nav}">
        <Icons iconName="left"/>
        back
     </router-link>
    </div>
</template>
<script setup lang="ts">
import { RouteRecordName } from 'vue-router';
import Icons from '../ui/Icons.vue';

interface Props{
    title:String,
    nav:RouteRecordName
}
    defineProps<Props>()
</script>
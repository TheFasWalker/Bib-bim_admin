<template>
    <div class=" flex flex-row py-1 justify-between w-full items-center">
        <div class=" flex flex-row gap-10">
            <h1 class="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 ">{{ title }}</h1>
            <router-link
                class=" flex flex-row gap-2 justify-center items-center text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center  me-2 mb-2"
                :to="{name: nav}">
                <Icons iconName="left"/>
                {{ linkText ? linkText : 'back' }}
            </router-link>
        </div>
        <div class="flex flex-row gap-3 justify-center items-center ">
            <slot></slot>
            <router-link
                v-if="createPage"
                class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center font-bold"
                :to="{name :createPage}"
            >
            <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
            Создать
            </router-link>
    </div>
    </div>
</template>
<script setup lang="ts">
import { RouteRecordName } from 'vue-router';
import Icons from '../ui/Icons.vue';

interface Props{
    title:String,
    nav:RouteRecordName,
    createPage?:RouteRecordName,
    linkText?:string
}
    defineProps<Props>()
</script>
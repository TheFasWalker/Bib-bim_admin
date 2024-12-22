<template>
    <router-link 
    :to="{name:  nav }"
    class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg  hover:bg-gray-100  group relative"
    >
        <svg
            aria-hidden="true"
            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
        <span v-show="store.sidebarState" class="ml-3">{{ title }}</span>
        <span v-if="count" class=" absolute -top-2 -right-2 bg-slate-400 text-sm text-white font-bold rounded-lg p-0.5">{{ count }}</span>
        </router-link>
</template>
<script setup lang="ts">
    import { RouteRecordName } from 'vue-router';
    import { SiteState } from '../../store/SiteState';

    interface Props{
        title:string,
        nav: RouteRecordName,
        count?:number | string
    }
    const store = SiteState()
    defineProps<Props>()
</script>
    <style lang="css" scoped>
        .router-link-active{
            background-color: #e1d9d9; 
        }
    </style>
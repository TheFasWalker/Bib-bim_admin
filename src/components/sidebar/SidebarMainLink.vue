<template>
    <router-link
    :to="{name:  nav }"
    class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg  hover:bg-gray-100  group relative"
    >
        <Icons :iconName="iconName"/>
        <span v-show="store.sidebarState" class="ml-3">{{ title }}</span>
        <span v-if="count" class=" absolute -top-2 -right-2 bg-slate-400 text-sm text-white font-bold rounded-lg p-0.5">{{ count }}</span>
        </router-link>
</template>
<script setup lang="ts">
    import { RouteRecordName } from 'vue-router';
    import { SiteState } from '../../store/SiteState';
    import Icons from '../ui/Icons.vue';
    import { IconType } from '../../Types';
    interface Props{
        title:string,
        nav: RouteRecordName,
        count?:number | string,
        iconName:IconType
    }
    const store = SiteState()

    defineProps<Props>()
</script>
    <style lang="css" scoped>
        .router-link-active{
            background-color: #e1d9d9;
        }
    </style>
<script setup lang="ts">
import { SiteState } from '../../store/SiteState';
import HeaderComp from '../general/HeaderComp.vue';
import Sidebar from '../general/Sidebar.vue';
import ErrorToast from '../Toasts/ErrorToast.vue';

const store = SiteState()
</script>

<template>
<div class="antialiased bg-gray-50 dark:bg-gray-900">

<HeaderComp/>

<Sidebar/>

    <main 
      :class="store.sidebarState ? 'ml-64':'ml-[65px]'"
      class="p-4 min-h-screen pt-20">
      <slot></slot>

    </main>
  </div>
<ErrorToast/>
</template>
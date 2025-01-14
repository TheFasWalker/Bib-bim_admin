<script setup lang="ts">
import { SiteState } from '../../store/SiteState';
import HeaderComp from '../general/HeaderComp.vue';
import Sidebar from '../general/Sidebar.vue';
import ErrorToast from '../Toasts/ErrorToast.vue';
import SucsessTost from '../Toasts/SucsessTost.vue';
import Loader from '../../components/ui/Loader.vue'

const store = SiteState()
</script>

<template>
<div class="antialiased bg-gray-50 ">

<HeaderComp/>

<Sidebar/>

    <main
      :class="store.sidebarState ? 'ml-64':'ml-[65px]'"
      class="p-4 min-h-screen pt-20">
      <Loader v-if="store.loading"/>
      <slot></slot>

    </main>
  </div>
<ErrorToast/>
<SucsessTost/>
</template>
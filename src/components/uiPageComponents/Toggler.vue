<template>
    <div class="flex flex-col justify-between">

        <button
        @click="togglerState= !togglerState"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center flex justify-between"
            type="button">
            {{ title }}
            <svg :class="`w-2.5 h-2.5 ms-3 ${togglerState ? 'rotate-180' : ''}`" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>
        <div v-if="togglerState" class=" w-full pt-3">
            <slot></slot>
        </div>

    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const togglerState = ref(false)
interface Props{
    title:String
}
defineProps<Props>()
</script>
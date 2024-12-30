<template>
<div class=" relative">
    <button
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
    type="button"
    @click="toggleDropDown()">
        {{ userRole }}
        <svg
        :class="`${dropDownState? 'rotate-180' : ''}`"
        class="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
    </button>


    <div v-show="dropDownState" class="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute left-0 top-full">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" >
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
        </li>
        </ul>
    </div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const userRole = ref('Выберите роль')
const dropDownState = ref(false)
const toggleDropDown = () => {
    console.log('asdaa')
    dropDownState.value= !dropDownState.value
}
</script>
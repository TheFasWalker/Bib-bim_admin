<template>
    <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-xl px-5 py-2.5 me-2 mb-2  focus:outline-none "
        >
          {{ title }}
    </button>
</template>
<script setup lang="ts">
interface Props{
    title:String
}
defineProps<Props>()
</script>
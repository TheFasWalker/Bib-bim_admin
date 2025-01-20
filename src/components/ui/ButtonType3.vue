<template>

    <button type="button"
        class=" h-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-xl px-5 py-2.5 me-2 mb-2">
        {{ title }}
    </button>
</template>
<script setup lang="ts">
interface Props{
    title:string
}
defineProps<Props>()
</script>
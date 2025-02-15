<template>
    <div class="relative w-full max-h-96 bg-slate-500 rounded overflow-hidden">
        <button @click="emit('delete-image')"
                    class="absolute top-1 right-1 bg-red-500 hover:bg-red-700 text-white text-xs rounded-full p-1 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-3 h-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </button>
        <img class=" w-full h-auto" :src="url" alt="">
    </div>
</template>
<script setup lang="ts">
interface Props {
    url:string
}
defineProps<Props>()
const emit = defineEmits(['delete-image'])
</script>
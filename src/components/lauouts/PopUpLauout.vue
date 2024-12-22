<script lang="ts" setup>
    import { ref,onMounted, onUnmounted,watch } from 'vue';
    import CloseButton from '../ui/CloseButton.vue';
    const popupContainer = ref<HTMLElement | null>(null)
    const emit = defineEmits(['close-popup'])
    const missCkick =()=>{
        if(event?.target == popupContainer.value){
            emit('close-popup')
        }
    }
    const handleEsc = (event:KeyboardEvent)=>{
        if(event.key == 'Escape'){
            emit('close-popup')
        }
    }
    onMounted(()=>{
        document.addEventListener('keydown',handleEsc)
    })
    onUnmounted(()=>{
        document.removeEventListener('keydown', handleEsc)
    })
</script>
<template>
    <div @click="missCkick"
        ref="popupContainer"
        class=" fixed top-0 right-0 bottom-0 left-0  z-50 flex items-center justify-center bg-[#0000006e]"
    >
        <div class="bg-white rounded-lg shadow  min-w-[360px] min-h-40 relative pt-10 overflow-y-auto">
            <div class=" absolute top-0 right-0">
                <CloseButton @click="$emit('close-popup')"/>
            </div>
            <div class=" w-full h-full px-3 pb-4 ">
                <slot></slot>
            </div>
        </div>
        
    </div>
</template>

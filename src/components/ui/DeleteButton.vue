<template>
    <button
    @click="confirmPopupState = true"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-sm px-5 py-2.5 "
    >
        delete
    </button>
    <PopUpLauout
        v-if="confirmPopupState"
        @close-popup="confirmPopupState = false"
    >
    <div class=" flex flex-col items-center gap-4">
        <h2 class="font-bold text-3xl">    Вы уверены ?</h2>
        <div class="grid grid-cols-2 w-full gap-3">
        <button
        @click="emitConfirm"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-2xl px-5 py-2.5 "
        >
        да</button>
        <button
        @click="confirmPopupState = false"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-2xl px-5 py-2.5"
        >нет</button>
    </div>
    </div>



    </PopUpLauout>
</template>
<script setup lang="ts">
import PopUpLauout from '../lauouts/PopUpLauout.vue';
import { ref } from 'vue';

const confirmPopupState = ref(false)
const emit = defineEmits<{ (e: 'confirm', value: boolean): void }>();

const emitConfirm = () => {
    emit('confirm', true)
    confirmPopupState.value = false
}
</script>
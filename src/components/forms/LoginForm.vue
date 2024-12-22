<template>
        <PopUpLauout
            v-if="loginPopupState"
            @close-popup="emit('close-popup-wrapper')"
        >
        login form
        </PopUpLauout>
</template>
<script setup lang="ts">
import PopUpLauout from '../lauouts/PopUpLauout.vue';

const props = defineProps(['loginPopupState'])
const emit = defineEmits(['close-popup-wrapper'])
</script> 

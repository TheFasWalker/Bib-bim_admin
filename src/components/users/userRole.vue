<template>
<div class=" mr-2">
    <span v-if=" role == 'RootAdmin' " class=" font-bold text-xl flex items-center justify-center bg-amber-400 h-full w-full rounded-md text-white">Админ</span>
    <span v-else-if=" role == 'ContentManager'" class=" font-bold text-xl flex items-center justify-center bg-orange-400 h-full w-full rounded-md text-white">Модератор</span>
    <span v-else-if=" role == 'BussinesPartner'" class=" font-bold text-xl flex items-center justify-center bg-gray-500 h-full w-full rounded-md text-white">Партнёр</span>
    <span v-else class=" font-bold text-xl flex items-center justify-center h-full w-full rounded-md text-black">Божество</span>
</div>
</template>
<script setup lang="ts">
import { UserRoles } from '../../Types';

interface Props{
    role:UserRoles
}
defineProps<Props>()
</script>
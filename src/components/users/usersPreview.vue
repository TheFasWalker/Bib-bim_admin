<template>
    <div class="grid grid-cols-[1fr_1fr_1fr_200px] border-b py-1 px-2">
        <span class="flex items-center">username</span>
        <span class="flex items-center">user@user.user</span>
        <UserRole
        role="admin"/>
        <div class="grid grid-cols-2">
            <button class=" h-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Edit</button>
            <button class=" h-full  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex items-center justify-center ">delete</button>
        </div>
    </div>

</template>
<script setup lang="ts">
import { UserRoles } from '../../Types';
import UserRole from './userRole.vue';


interface Props{
    id: String,
    name: String,
    email: String,
    role:UserRoles
}
defineProps<Props>()

</script>
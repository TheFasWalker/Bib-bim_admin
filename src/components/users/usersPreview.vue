<template>
    <div class="grid grid-cols-[1fr_1fr_1fr_200px] border-b py-1 px-2">
        <span class="flex items-center cursor-pointer" @click="showUserData=true">username</span>
        <span class="flex items-center">user@user.user</span>
        <UserRole
        role="admin"/>
        <div class="grid grid-cols-2">
            <button 
                class=" h-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                @click="editUserData= true"
                >
                Edit
            </button>
            <button 
                class=" h-full  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex items-center justify-center "
                >
                delete
            </button>
        </div>
    </div>
    <PopUpLauout
    v-if="showUserData"
    @close-popup="showUserData = false"
    >
    <div class=" flex flex-col gap-3 ">
    <h2 class="text-2xl font-bold text-center">Просмотр пользователя</h2>
        <div class="flex flex-col gap-2">
            <div class="grid grid-cols-[70px_1fr]">
                <span>Имя</span>
                <span>UserName</span>
            </div>
            <div class="grid grid-cols-[70px_1fr]">
                <span>Роль</span>
                <UserRole
                role="admin"/>
            </div>
            <div class=" grid grid-cols-2 gap-2">
                <button @click="openEditUsetPopup" type="button">Редактировать</button>
                <button type="button">Удалить</button>
            </div>
        </div>
    </div>
    </PopUpLauout>
    
    <PopUpLauout
    v-if="editUserData"
    @close-popup="editUserData = false"
    >
    editUserData
        
    </PopUpLauout>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { UserRoles } from '../../Types';
import UserRole from './userRole.vue';
import PopUpLauout from '../lauouts/PopUpLauout.vue';
const showUserData = ref( false)
const editUserData = ref (false)

interface Props{
    id: String,
    name: String,
    email: String,
    role:UserRoles
}
defineProps<Props>()
const openEditUsetPopup =()=>{
    showUserData.value =false
    editUserData.value = true
}
</script>
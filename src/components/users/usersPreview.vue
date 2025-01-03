<template>
    <div class="grid grid-cols-[1fr_1fr_1fr_200px] border-b py-1 px-2">
        <span class="flex items-center cursor-pointer" @click="showUserData=true">{{user.name}} {{ user.surname }}</span>
        <span class="flex items-center">{{ user.email }}</span>
        <UserRole
        :role="user.role.role"/>
        <div class="grid grid-cols-2">
            <button
                class=" h-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                @click="showUserData= true"
                >
                show
            </button>
            <!-- <button
                class=" h-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                @click="editUserData= true"
                >
                Edit
            </button>
            <button
                class=" h-full  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex items-center justify-center "
                >
                delete
            </button> -->
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
                <span>name</span>
                <span>{{ user.name }}</span>
            </div>
            <div class="grid grid-cols-[70px_1fr]">
                <span>surname</span>
                <span>{{ user.surname }}</span>
            </div>
            <div class="grid grid-cols-[70px_1fr]">
                <span>login</span>
                <span>{{ user.login }}</span>
            </div>
            <div class="grid grid-cols-[70px_1fr]">
                <span>email</span>
                <span>{{ user.email }}</span>
            </div>
            <div class="grid grid-cols-[70px_1fr]">
                <span>Роль</span>
                <UserRole
                :role="user.role.role"/>
            </div>
            <div class=" grid grid-cols-2 gap-2">
                <button @click="openEditUsetPopup" type="button">Редактировать</button>
                <button type="button">Удалить</button>
            </div>
        </div>
    </div>
    </PopUpLauout>


</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Iuser, UserRoles } from '../../Types';
import UserRole from './userRole.vue';
import PopUpLauout from '../lauouts/PopUpLauout.vue';
const showUserData = ref( false)
const editUserData = ref (false)

interface Props {
    user:Iuser
}

const userProps = defineProps<Props>()
console.log(userProps)
const openEditUsetPopup =()=>{
    showUserData.value =false
    editUserData.value = true
}
</script>
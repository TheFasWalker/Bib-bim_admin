<script setup lang="ts">
import {onMounted, ref} from 'vue'
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
import Pagination from '../components/pagination/Pagination.vue';
import UsersPreview from '../components/users/usersPreview.vue';
import useGetUsersList from '../api/users/useGetUsersList';
import { UserListState } from '../store/UsersListState';
import useGetRoles from '../api/useGetRoles';

const userListState = UserListState()
const { getUserList } = useGetUsersList()
const { adminRoles } = useGetRoles()

onMounted(() => {
    getUserList().then((data)=>{
        userListState.setUserList(data)
        console.log(data)
    })
    if (userListState.userRolesList == null) {

        adminRoles().then((data)=>{
            userListState.userRolesList = data
        })
    }
})
</script>

<template>
    <MainLauout>
        <SubHeader
        title="Список пользлователей"
        nav="home"
        createPage="createUser"/>
        <div
        v-if="!userListState.userList?.length"
         class=" flex flex-col h-full w-full items-center gap-4 mt-28"
         >
            <h1 class=" text-3xl font-extrabold tracking-tight text-gray-900">Что то пошло не так</h1>
            <span class=" text-xl">Список пуст</span>
        </div>

    <section v-else class="bg-gray-50  p-3 sm:p-5">

        <div  class="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="" >
                <div class="grid grid-cols-[1fr_1fr_150px_100px]">
                    <span class=" py-2 px-2">Имя</span>
                    <span class=" py-2 ">email</span>
                    <span class=" py-2 px-2 text-center">роль</span>
                    <div class=" py-2 px-2"> управление</div>
                </div>
            </div>
            <UsersPreview v-for="user in userListState.userList"
                :user="user"
            />
        </div>
    </section>


    </MainLauout>
</template>
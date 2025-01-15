<template>
    <div class="grid grid-cols-[1fr_1fr_150px_100px] border-b py-1 px-2">
        <span class="flex items-center cursor-pointer" @click="showUserData=true">{{user.name}} {{ user.surname }}</span>
        <span class="flex items-center">{{ user.email }}</span>
        <UserRole
        :role="user.role.role"/>
        <div :class="`grid ${user.id != userState.getUserId ? 'grid-cols-2 gap-0.5' : ''} `">

        <EditButton
        :class="`${user.id == userState.getUserId ? 'w-full' : ''} `"
            @click="editUserData= true"
        />
        <DeleteButton
            v-if="user.id != userState.getUserId"
            @confirm="deleteElem(user.id)"
        />
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
                <div :class="`${user.id == userState.getUserId ? '':' grid grid-cols-2 gap-2'} `">
                     <EditButton
                        class="!w-full"
                        @click="openEditUsetPopup"
                     />
                    <DeleteButton
                    v-if="user.id != userState.getUserId"
                    addClass="w-full"
                        @confirm="deleteElem(user.id)"
                    />
                </div>
            </div>
        </div>
    </PopUpLauout>
    <PopUpLauout
        v-if="editUserData"
        @close-popup="editUserData = false"
    >
        <UserEdit 
        :userId="user.id"
        @close="editUserData = false"
        />
    </PopUpLauout>


</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Iuser, UserRoles } from '../../Types';
import UserRole from './userRole.vue';
import PopUpLauout from '../lauouts/PopUpLauout.vue';
import DeleteButton from '../ui/DeleteButton.vue';
import useDeleteUser from '../../api/users/useDeleteUser';
import { UserSate } from '../../store/UserState';
import EditButton from '../ui/EditButton.vue';
import UserEdit from './userEdit.vue';
const showUserData = ref( false)
const editUserData = ref(false)
const {deleteUserById} = useDeleteUser()
const userState = UserSate()
const deleteElem = (id: string) => {
    showUserData.value = false
    deleteUserById(id)
}
interface Props {
    user:Iuser
}

defineProps<Props>()

const openEditUsetPopup =()=>{
    showUserData.value =false
    editUserData.value = true
}
const confirmEdit = () => {
    showUserData.value = false
    editUserData.value = false
}
</script>
<script setup lang="ts">
import {onMounted, ref } from 'vue';
import DropDownRoles from '../components/forms/components/DropDownRoles.vue';
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
import InputComp from '../components/forms/components/InputComp.vue';

import ButtonType2 from '../components/ui/ButtonType2.vue';
import { useForm } from 'vee-validate';
import PopUpLauout from '../components/lauouts/PopUpLauout.vue';
import useCreateUser from '../api/users/useCreateUser';
import { useRouter } from 'vue-router';
import { UserListState } from '../store/UsersListState';
import useGetRoles from '../api/useGetRoles';
import { SiteState } from '../store/SiteState';
import { useYupValidation } from '../utils/useYupValidation';
import { passwordGenerator } from '../utils/passwordGenerator';

const siteState = SiteState()
const successfulPopUpState = ref(false)
const userListState = UserListState()
const { createUser } = useCreateUser()
const { adminRoles } = useGetRoles()
const generatePassword = () => {
    password.value =passwordGenerator()
}
const schema = useYupValidation({
    login:true,
    email:true,
    name:true,
    surname:true,
    role:true,
    password:true,
})

const { errors, defineField,handleSubmit,resetForm} = useForm({
        validationSchema:schema,
        validateOnInput:true,
        validateOnChange:true,
        strategy: 'individual'
})
const router = useRouter()
const [login, loginAttrs] = defineField('login')
const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')
const [surname, surnameAttrs] = defineField('surname')
const [role, roleAttrs] = defineField('role')
const [password ,passwordAttrs] = defineField('password')

const formSubmit = handleSubmit(async(values) => {
    createUser(values).then(() => {
        successfulPopUpState.value=true
    })
})
const hideConfirm = () => {
    resetForm()
    successfulPopUpState.value = false
    router.push({name:'users'})
}
onMounted(() => {
    console.log('onmounted')
    if (userListState.userRolesList == null) {
        adminRoles().then((data)=>{
            userListState.userRolesList = data
        })
    } else {
        siteState.loadingFalse()
    }
})
</script>

<template>
    <MainLauout>
        <SubHeader title="Создание пользователя" nav="users" />
        <form class="flex flex-col gap-3" @submit.prevent="formSubmit">
            <div class="grid grid-cols-[1fr_150px] gap-3">
                <DropDownRoles
                    name="role"
                    class=""
                    v-model:roleValue="role"
                    :error="errors.role"
                    />
            </div>
            <div class="grid grid-cols-[1fr_150px] gap-3">
                <InputComp
                    title="Логин пользователя"
                    name="login"
                    type="text"
                    placeholder="userLogin"
                    v-model="login"
                    v-bind="loginAttrs"
                    :error="errors.login"/>
            </div>
            <div class="grid grid-cols-[1fr_150px] gap-3">
                <InputComp
                    title="Почта пользователя"
                    name="email"
                    type="email"
                    placeholder="email"
                    v-model="email"
                    v-bind="emailAttrs"
                    :error="errors.email"/>
            </div>
            <div class="grid grid-cols-[1fr_150px] gap-3">
                <InputComp
                    title="Имя пользователя"
                    name="name"
                    type="text"
                    placeholder="name"
                    v-model="name"
                    v-bind="nameAttrs"
                    :error="errors.name"/>
            </div>

            <div class="grid grid-cols-[1fr_150px] gap-3">
                <InputComp
                    title="Имя пользователя"
                    name="surname"
                    type="text"
                    placeholder="surname"
                    v-model="surname"
                    v-bind="surnameAttrs"
                    :error="errors.surname"/>
            </div>
            <div class="grid grid-cols-[1fr_150px] gap-3">
                <InputComp
                    title="пароль пользователя"
                    name="password"
                    type="text"
                    v-model="password"
                    v-bind="passwordAttrs"
                    :error="errors.password"
                    placeholder="ваш пароль" />
                <button
                type="button"
                @click="generatePassword"
                    class="w-full h-full flex flex-col items-center justify-center shadow-sm bg-slate-300 rounded-2xl font-bold hover:bg-blue-700 hover:text-white ">
                    <span>генерация</span>
                    <span>пароля</span>
                </button>
            </div>
            <ButtonType2 type="submit" title="Создать пользователя" />
        </form>
        <PopUpLauout
        v-if="successfulPopUpState"
        @close-popup="successfulPopUpState = false">
        <div class=" flex flex-col gap-4 w-[500px]">
            <div class=" flex flex-col w-full items-center">
                <img class=" h-14 w-fit" src="../assets/sucsess.png" alt="">
                <h2 class=" font-bold trxt-2xl">Пользователь создан</h2>
            </div>
            <div class="grid grid-cols-[100px_1fr] gap-2">
                <span>UserLogin:</span>
                <span>{{ login }}</span>
            </div>
            <div class="grid grid-cols-[100px_1fr] gap-2">
                <span>UserName:</span>
                <span>{{ name }}</span>
            </div>
            <div class="grid grid-cols-[100px_1fr] gap-2">
                <span>UserSurName:</span>
                <span>{{ surname }}</span>
            </div>
            <div class="grid grid-cols-[100px_1fr] gap-2">
                <span>UserEmail:</span>
                <span>{{ email }}</span>
            </div>

            <div class="grid grid-cols-[100px_1fr] gap-2">
                <span>UserName:</span>
                <span>{{ name }}</span>
            </div>
            <div class="grid grid-cols-[100px_1fr] gap-2">
                <span>UserRole:</span>
                <span>{{ role }}</span>
            </div>
            <ButtonType2
            @click="hideConfirm"
            title="Ясно"/>
        </div>
        </PopUpLauout>

    </MainLauout>
</template>
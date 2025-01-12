<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import DropDown from '../components/forms/components/DropDown.vue';
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
import InputComp from '../components/forms/components/InputComp.vue';
import { passwordGenerator } from '../functions/passwordGenerator';
import ButtonType2 from '../components/ui/ButtonType2.vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import PopUpLauout from '../components/lauouts/PopUpLauout.vue';
import useGetRoles from '../api/useGetRoles';
import useCreateUser from '../api/useCreateUser';
import { sha512 } from 'js-sha512';
import { useRouter } from 'vue-router';

const successfulPopUpState = ref(false)
const {adminRoles} = useGetRoles()
const {createUser} = useCreateUser()
const generatePassword = () => {
    password.value =passwordGenerator()
}
const schema = toTypedSchema(yup.object({
    login: yup.string().required('Обязательное поле'),
    email: yup.string().required('Обязательное поле').email('not vatid email'),
    name: yup.string().required('Обязательное поле').min(3, 'too short name').max(10,'max 10 symbols'),
    surname: yup.string().required('Обязательное поле').min(3, 'too short surname'),
    role: yup.string().required('выберите роль'),
    password:yup.string().required('Нужен пароль').min(6,'минимум 6 знаков')
}))
const userRoles = ref([])
onMounted(() => {
    adminRoles().then((data)=>{
        userRoles.value = data
    })
    email.value='asdfdf@mail.ru'
    login.value='Userlogin1as'
    name.value = 'UserNameFromFront'
    surname.value='UserSurname'
    password.value = passwordGenerator()
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
</script>

<template>
    <MainLauout>
        <SubHeader title="Создание пользователя" nav="users" />
        <form class="flex flex-col gap-3" @submit.prevent="formSubmit">
            <div class="grid grid-cols-[1fr_150px] gap-3">
                <DropDown
                :data="userRoles"
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
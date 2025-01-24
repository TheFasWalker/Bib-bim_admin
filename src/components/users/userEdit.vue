<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { UserListState } from '../../store/UsersListState';
import ButtonType3 from '../ui/ButtonType3.vue';
import { IEditUser, Iuser } from '../../Types';
import InputComp from '../forms/components/InputComp.vue';
import * as yup from 'yup'
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import DropDownRoles from '../forms/components/DropDownRoles.vue';
import useEditUser from '../../api/users/useEditUser';
import { useYupValidation } from '../../utils/useYupValidation';

const adminKey = import.meta.env.VITE_ADMIN_ROLE_CODE
const {updateUser} = useEditUser()

interface Props {
    userId:string
}
const emit = defineEmits(['close']);

const userListState = UserListState()
const userData = computed<Iuser>(()=>{
    return userListState.getElementById(props.userId)
})
const props = defineProps<Props>()

const schema = useYupValidation({
    login:true,
    email:true,
    name:true,
    surname:true,
    role:true,
    user_id:true,
})

const { errors, defineField,handleSubmit,resetForm} = useForm({
        validationSchema:schema,
        validateOnInput:true,
        validateOnChange:true,
        strategy: 'individual'
})
const [login, loginAttrs] = defineField('login')
const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')
const [surname, surnameAttrs] = defineField('surname')
const [role, roleAttrs] = defineField('role')
const [user_id,useridAttrs] = defineField('user_id')

login.value = userData.value.login
email.value = userData.value.email
name.value = userData.value.name
surname.value = userData.value.surname
role.value = userData.value.role.id
user_id.value = userData.value.id

const formSubmit = handleSubmit((values)=>{
    userListState.editUser(values)
    const userDataToEdit = Object.assign({},values)
    if(userListState.getRoleArrById(values.role).role == adminKey){
        if(values.role){
            delete userDataToEdit.role
        }
    }
     let userDataToString = new URLSearchParams(userDataToEdit).toString()
     updateUser(userDataToString)
     .then(()=>{
        userListState.editUser(values)
     })
     .then(()=>{
        emit('close')
     })
})
</script>

<template>

    <div class="flex flex-col gap-2">
        {{ }}
        <h2 class=" text-center">Редактирование пользователя</h2>
        <form @submit.prevent="formSubmit" class="flex flex-col gap-2">
            <input type="text" 
                v-model="user_id" 
                name="userid"
                v-bind="useridAttrs"
                hidden
            >
            <DropDownRoles
            v-if="userData.role.role != adminKey"
                name="role"
                class=""
                v-model:roleValue="role"
                :error="errors.role"
            />
            <span
            v-else
            class=" text-center font-bold text-2xl"
            >{{ userData.role.role }}</span>
            <div class="">
                <InputComp
                    title="Логин"
                    name="login"
                    type="text"
                    placeholder="userLogin"
                    v-model="login"
                    v-bind="loginAttrs"
                    :error="errors.login"/>
            </div>
            <div class="">
                <InputComp
                    title="Почта "
                    name="email"
                    type="email"
                    placeholder="email"
                    v-model="email"
                    v-bind="emailAttrs"
                    :error="errors.email"/>
            </div>
            <div class="">
                <InputComp
                    title="Имя"
                    name="name"
                    type="text"
                    placeholder="name"
                    v-model="name"
                    v-bind="nameAttrs"
                    :error="errors.name"/>
            </div>

            <div class="">
                <InputComp
                    title="Фамилия"
                    name="surname"
                    type="text"
                    placeholder="surname"
                    v-model="surname"
                    v-bind="surnameAttrs"
                    :error="errors.surname"/>
            </div>
            <ButtonType3
                type="submit"
                title="Сохранить изменения"/>
        </form>

    </div>
</template>
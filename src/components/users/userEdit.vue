<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { UserListState } from '../../store/UsersListState';
import ButtonType3 from '../ui/ButtonType3.vue';
import { Iuser } from '../../Types';
import InputComp from '../forms/components/InputComp.vue';
import * as yup from 'yup'
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import DropDown from '../../components/forms/components/DropDown.vue';
import useGetRoles from '../../api/useGetRoles';

const {adminRoles } = useGetRoles()

interface Props {
    userId:string
}
const userListState = UserListState()
const userData = computed<Iuser>(()=>{
    return userListState.getElementById(props.userId)
})
const props = defineProps<Props>()

const schema = toTypedSchema(yup.object({
    login: yup.string().required('Обязательное поле').max(30,'max 30 symbols'),
    email: yup.string().required('Обязательное поле').email('not valid email'),
    name: yup.string().required('Обязательное поле').min(3, 'too short name').max(15,'max 15 symbols'),
    surname: yup.string().required('Обязательное поле').min(3, 'too short surname').max(20,'max 20 symbols'),
    role: yup.string().required('выберите роль'),
}))
const userRoles = ref([])

onMounted(()=>{
    adminRoles().then((data)=>{
        userRoles.value = data
    })
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

login.value = userData.value.login
email.value = userData.value.email
name.value = userData.value.name
surname.value = userData.value.surname
role.value = userData.value.role.id


const formSubmit = handleSubmit((values)=>{
    console.log(values)
})
</script>

<template>
    <div class="flex flex-col gap-2">
        <h2>Редактирование пользователя</h2>
        <form @submit.prevent="formSubmit" class="flex flex-col gap-2">
            <DropDown
                :data="userRoles"
                name="role"
                class=""
                v-model:roleValue="role"
                :error="errors.role"
            />
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
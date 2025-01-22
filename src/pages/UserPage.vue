<script setup lang="ts">
import { ref } from 'vue';
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
import { UserSate } from '../store/UserState';
import EditButton from '../components/ui/EditButton.vue'
import ButtonType2 from '../components/ui/ButtonType2.vue';
import ButtonType3 from '../components/ui/ButtonType3.vue';
import PopUpLauout from '../components/lauouts/PopUpLauout.vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';
import EdittingData from '../components/forms/lk/EdittingData.vue';
import UserRole from '../components/users/userRole.vue';
import EdittingPassword from '../components/forms/lk/EdittingPassword.vue';

const userState = UserSate()
const initialValues ={
    email:userState.getUserEmail,
    name:userState.getUserName?.split(" ")[0],
    surname:userState.getUserName?.split(" ")[1],
    password:''
}


const schema = toTypedSchema(yup.object({
    email: yup.string().required('Обязательное поле').email('not vatid email'),
    name: yup.string().required('Обязательное поле').min(3, 'too short name').max(15,'max 15 symbols'),
    surname: yup.string().required('Обязательное поле').min(3, 'too short surname').max(20,'max 20 symbols'),
    password:yup.string().min(6,'минимум 6 знаков')
}))
const {errors, defineField, handleSubmit,resetForm} =useForm({
    validationSchema:schema,
    validateOnInput:true,
    validateOnChange:true,
    initialValues:initialValues,
    strategy: 'individual'
})
const [name, nameAttrs] = defineField('name')
const [surname, surnameAttrs] = defineField('surname')
const [email, emailAttrs] = defineField('email')
const [password ,passwordAttrs] = defineField('password')




const editting = ref(false)
const confirmPopupState = ref(false)
const edittingPasswordState = ref(false)
const canselEditting =()=>{
    editting.value = false
    confirmPopupState.value = false
    edittingPasswordState.value = false
}
const toggleEdittindPassword =():void=>{
    edittingPasswordState.value = !edittingPasswordState.value
    password.value = ''
}
</script>

<template>
    <MainLauout>
        <SubHeader title="Личный кабинет" nav="home" linkText="На главную" />
        <div class="grid grid-cols-[500px_1fr] gap-2">
        <div class=" w-full flex flex-col gap-5">
            <div class="flex flex-row gap-3">
                        <EditButton 
                        v-if="!editting"
                        @click="editting = true" 
                        />

                        <ButtonType2
                        v-else
                            @click ="editting = false"
                            title="Отменить"/>
            </div>
            <EdittingData
                title="Имя"
                name="name"
                type="text"
                placeholder="Имя"
                v-model = 'name'
                v-bind="nameAttrs"
                :error="errors.name"
                :editing="editting"
            />
            <EdittingData
                title="Фамилия"
                name="surname"
                type="text"
                placeholder="Фамилия"
                v-model = 'surname'
                v-bind="surnameAttrs"
                :error="errors.surname"
                :editing="editting"
            />
            <EdittingData
                title="Email"
                name="email"
                type="email"
                placeholder="email"
                v-model = 'email'
                v-bind="emailAttrs"
                :error="errors.email"
                :editing="editting"
            />
            <EdittingPassword
                v-if="editting"
                v-model="password"
                v-bind="passwordAttrs"
                :errors="errors.password"
                :edittingPasswordState="edittingPasswordState"
                @edittingPassword = 'toggleEdittindPassword'
            />

            <div
                v-if="editting"
             class="grid gap-3 grid-cols-2">
                <ButtonType3
                title="Сохранить"
                @click ="confirmPopupState=true" />
            </div>
 
        </div>
        <div class="w-full flex flex-col shadow-md rounded-lg min-h-16 h-fit p-5 gap-6">
            <h2 class=" text-3xl font-bold items-center text-center">Дополнительная информация</h2>
            <div class=" w-96 flex flex-col gap-4">
                <div class=" grid grid-cols-[100px_1fr] gap-4">
                    <span>Ваша роль</span>
                    <UserRole
                        :role="userState.getUserRole"
                    />
                    
                </div>
            </div>
        </div>
    </div>
    <PopUpLauout
        v-if="confirmPopupState"
        @close-popup="canselEditting()"
    >
    <div class=" flex flex-col items-center gap-4">
        <h2 class="font-bold text-3xl">Вы уверены ?</h2>
        <div class="grid grid-cols-2 w-full gap-3">
        <button
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-2xl px-5 py-2.5 "
        >
        да</button>
        <button
        @click="canselEditting()"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-2xl px-5 py-2.5"
        >нет</button>
    </div>
    </div>



    </PopUpLauout>
    </MainLauout>
</template>
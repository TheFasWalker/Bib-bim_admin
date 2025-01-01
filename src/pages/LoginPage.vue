
<template>
    <Loader v-if="loading"/>
    <ErrorToast/>
    <section class="bg-gray-50 ">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class=" flex flex-col items-center gap-3 w-[250px] h-auto  overflow-hidden pb-3">
                <img class="rounded-3xl w-full" src="../assets/main.jpeg" alt="">
                <h1 class="text-2xl font-semibold tracking-tight text-gray-900">Bim-Bim Admin</h1>
            </div>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                    Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6" @submit.prevent="formSubmit">
                    <div>
                        <InputComp
                        title="Ваш email"
                        name="email"
                        placeholder="email"
                        type="email"
                        v-model="email"
                        v-bind="emailAttrs"
                        :error="errors.email"

                        />

                    </div>
                    <div>
                        <InputComp
                        title="пароль"
                        name="password"
                        placeholder="password"
                        type="password"
                        v-model="password"
                        v-bind="passwordAttrs"
                        :error="errors.password"

                        />
                    </div>
                    <ButtonType2
                        type="submit"
                        title="LogIn"
                        class=" w-full "/>


                </form>
            </div>
        </div>
    </div>

    </section>
</template>
<script setup lang="ts">
import InputComp from '../components/forms/components/InputComp.vue';
import ButtonType2 from '../components/ui/ButtonType2.vue';
import {useForm} from 'vee-validate'
import * as yup from 'yup'
import { toTypedSchema } from '@vee-validate/yup';
import Loader from '../components/ui/Loader.vue'
import ErrorToast from '../components/Toasts/ErrorToast.vue';
import useAuth from '../api/useAuth';
import { SiteState } from '../store/SiteState';

import { useRouter } from 'vue-router';
import { UserSate } from '../store/UserState';
import checkAcessByRole from '../functions/checkAcessByRole';
const store = SiteState();
const userData = UserSate();
const router = useRouter();

const schema = toTypedSchema(yup.object({
    email:yup.string().email('Невалидный email').required('Обязательное поле'),
    password:yup.string().required('Обязательное поле').min(6,'минимум 6 знаков')
}))
const {errors,defineField,handleSubmit,resetForm}= useForm({
    validationSchema:schema,
    validateOnInput:true,
    validateOnChange:true,
    strategy: 'individual'
})
const [email, emailAttrs]= defineField('email')
const [password, passwordAttrs]= defineField('password')
const {loading, auth,error} = useAuth()

const formSubmit = handleSubmit(()=>{
    auth(email.value, password.value)

     if(error){
        store.errorText = error
     }
    if (error.value == '') {
        userData.userRole = 'partner'
        if (checkAcessByRole(userData.userRole)) {
            router.push({ name: 'home' })
        } else {
            store.errorText = 'ошибка авторизации'
        }
     }
})

</script>

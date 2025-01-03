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
                            title="Ваш логин"
                            name="login"
                            placeholder="ваш логин"
                            type="text"
                            v-model="login"
                            v-bind="loginAttrs"
                            :error="errors.login"

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

    import { ref } from 'vue';
    import { SiteState } from '../store/SiteState';
    import { UserSate } from '../store/UserState';
import { useRouter } from 'vue-router';
import useAuth from '../api/useAuth';
import useUserData from '../api/useUserData';

    const url = import.meta.env.VITE_API_DB_URL

    const siteState = SiteState();
    const userState = UserSate()
    const router = useRouter()
    const userLogin = 'blabaldd'
    const userPassword = '9111c5cf0b5a186032b9a90eeef624f852cea81acad47c93ddc5b0c253b80e54e58ab6f7c823bf4e9f34dae55df33808e8fd8b696334ddaa0bf2d12acb630fae'

    const schema = toTypedSchema(yup.object({
        // login:yup.string().required('Обязательное поле'),
        // password:yup.string().required('Обязательное поле').min(6,'минимум 6 знаков')
    }))
    const {errors,defineField,handleSubmit,resetForm}= useForm({
        validationSchema:schema,
        validateOnInput:true,
        validateOnChange:true,
        strategy: 'individual'
    })
    const [login, loginAttrs]= defineField('login')
    const [password, passwordAttrs]= defineField('password')
    const { loading, makeAuth } = useAuth()
    const { getUserData} = useUserData()

    const formSubmit = handleSubmit(async () => {

        makeAuth(userLogin, userPassword)
            .then((data) => {

                if (data.id && data.token) {
                    console.log('fdnjhbpfwbz ecgtiyf')
                    getUserData(data.id).then((data) => {
                        const username =`${data.name} ${data.surname}`
                        userState.writeTokenData(data.id,data.role.token, data.role.role, username, data.email)
                    })
                    router.push({ name:'home'})
                } else {
                    siteState.errorText='ошибка авторизации'
                }
            })


    })

    </script>


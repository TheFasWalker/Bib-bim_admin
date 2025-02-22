    <template>
        <Loader v-if="siteState.loading"/>
        <ErrorToast/>
        <section class="bg-gray-50 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class=" flex flex-col items-center gap-3 w-[250px] h-auto  overflow-hidden pb-3">
                    <img class="rounded-3xl w-full" src="../assets/main.jpeg" alt="">
                    <h1 class="text-2xl font-semibold tracking-tight text-gray-900">Bim-Bim Admin</h1>
                </div>
            <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
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
                        <ButtonBlue
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
    import ButtonBlue from '../components/ui/ButtonBlue.vue';
    import {useForm} from 'vee-validate'
    import Loader from '../components/ui/Loader.vue'
    import ErrorToast from '../components/Toasts/ErrorToast.vue';

    import { SiteState } from '../store/SiteState';
    import { UserState } from '../store/UserState';
    import { useRouter } from 'vue-router';
    import useAuth from '../api/useAuth';
    import useUserData from '../api//users/useUserData';
    import { useYupValidation } from '../utils/useYupValidation';

    const rootLogin = import.meta.env.VITE_ROOT_ADMIN_LOGIN
    const rootPassword = import.meta.env.VITE_ROOT_AMIN_PASSWORD
    const devMode = import.meta.env.VITE_DEV_MODE
    const siteState = SiteState();
    const userState = UserState()
    const router = useRouter()

    const schema = useYupValidation({
        login:true,
        password:true
    })
    const {errors,defineField,handleSubmit,resetForm}= useForm({
        validationSchema:schema,
        validateOnInput:true,
        validateOnChange:true,
        strategy: 'individual'
    })
    const [login, loginAttrs]= defineField('login')
    const [password, passwordAttrs]= defineField('password')
    const { makeAuth } = useAuth()
    const { getUserData } = useUserData()

    const writeUserData = () => {
        if (devMode == "true") {
            login.value = rootLogin
            password.value = rootPassword
        }
    }
    writeUserData()
    const formSubmit = handleSubmit(async () => {

        makeAuth(login.value, password.value)
            .then((data) => {
                if (data.id && data.token) {
                    const userToken = data.token
                    getUserData(data.id).then((data) => {
                        userState.writeTokenData(data.id,userToken, data.role.role)
                        userState.writeUserData(data)

                    }).then(() => {
                router.push({name:'home'})
            })
                } else {
                    siteState.errorText='ошибка авторизации'
                }
            })


    })

    </script>


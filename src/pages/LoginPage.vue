
<template>
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
                <form class="space-y-4 md:space-y-6" >
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="user@email.com" >
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" >
                    </div>
                    <div class="flex items-center justify-between">

                        
                    </div>
                    <ButtonType2
                        class=" w-full ">
                        LogIn
                    </ButtonType2>

                </form>
            </div>
        </div>
    </div>
    </section>
</template>
<script setup lang="ts">
import ButtonType2 from '../components/ui/ButtonType2.vue';


</script>

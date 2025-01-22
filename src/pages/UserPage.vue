<script setup lang="ts">
import { ref } from 'vue';
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
import { UserSate } from '../store/UserState';
import EditButton from '../components/ui/EditButton.vue'
import ButtonType2 from '../components/ui/ButtonType2.vue';
import ButtonType3 from '../components/ui/ButtonType3.vue';
import PopUpLauout from '../components/lauouts/PopUpLauout.vue';
const userState = UserSate()

const editting = ref(false)
const userName = ref('UserName')
const confirmPopupState = ref(false)
const canselEditting =()=>{
    editting.value = false
    confirmPopupState.value = false
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

            <div class="grid grid-cols-[100px_1fr] h-12 justify-center ">
                <span class=" flex items-center  text-xl font-bold">
                    Имя
                </span>
                <label v-if="editting"  class="block text-sm font-medium text-gray-900 ">
                    <input type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2.5 "
                        placeholder="John" :value="`${userName}`">
                </label>
                <span v-else  class="flex items-center pl-2.5 text-gray-900 text-sm">
                    {{ userName }}
                </span>
                
            </div>
            <div class="grid grid-cols-[100px_1fr] h-12 justify-center ">
                <span class=" flex items-center  text-xl font-bold">
                    Фамилия
                </span>
                <label v-if="editting"  class="block text-sm font-medium text-gray-900 ">
                    <input type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2.5 "
                        placeholder="John" :value="`${userName}`">
                </label>
                <span v-else  class="flex items-center pl-2.5 text-gray-900 text-sm">
                    {{ userName }}
                </span>

            </div>
            <div class="grid grid-cols-[100px_1fr] h-12 justify-center ">
                <span class=" flex items-center  text-xl font-bold">
                    Email
                </span>
                <label v-if="editting" class="block text-sm font-medium text-gray-900 ">
                    <input type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2.5 "
                        placeholder="John" :value="`${userName}`">
                </label>
                <span v-else class="flex items-center pl-2.5 text-gray-900 text-sm">
                    {{ userName }}
                </span>
                
            </div>
            <div class="grid grid-cols-[100px_1fr] h-12 justify-center ">
                <span class=" flex items-center  text-xl font-bold">
                    Login
                </span>

                <label v-if="editting"  class="block text-sm font-medium text-gray-900 ">
                    <input type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2.5 "
                        placeholder="John" :value="`${userName}`">
                </label>
                <span v-else class="flex items-center pl-2.5 text-gray-900 text-sm">
                    {{ userName }}
                </span>
            </div>

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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, iste.</p>
            <span>userId = {{ userState.getUserId  }}</span>
        </div>
    </div>
    <PopUpLauout
        v-if="confirmPopupState"
        @close-popup="canselEditting()"
    >
    <div class=" flex flex-col items-center gap-4">
        <h2 class="font-bold text-3xl">    Вы уверены ?</h2>
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
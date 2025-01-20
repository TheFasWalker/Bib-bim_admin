<script setup lang="ts">
import { ref } from 'vue';
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
import { UserSate } from '../store/UserState';
import EditButton from '../components/ui/EditButton.vue'
import ButtonType2 from '../components/ui/ButtonType2.vue';
import ButtonType3 from '../components/ui/ButtonType3.vue';
const userState = UserSate()

const editting = ref(true)
const userName = ref('UserName')
</script>

<template>
    <MainLauout>
        <SubHeader title="Личный кабинет" nav="home" linkText="На главную" >
            <EditButton 
            v-if="editting"
            @click="editting = false" 
            />

        </SubHeader>
        <div class=" w-[500px] flex flex-col gap-5">

            {{ userState.getUserId }}

            <div class="grid grid-cols-[200px_1fr] h-12 justify-center ">
                <span class=" flex items-center justify-center text-xl font-bold">
                    имя пользователя
                </span>
                <span v-if="editting" class="flex items-center pl-2.5 text-gray-900 text-sm">
                    {{ userName }}
                </span>
                <label v-else class="block text-sm font-medium text-gray-900 ">
                    <input type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2.5 "
                        placeholder="John" :value="`${userName}`">
                </label>
            </div>
            <div
                v-if="!editting"
             class="grid gap-3 grid-cols-2">
                <ButtonType2
                @click ="editting = true"
                title="Отменить"/>
                <ButtonType3
                title="Сохранить"
                @click ="editting = true" />
            </div>
        </div>
    </MainLauout>
</template>
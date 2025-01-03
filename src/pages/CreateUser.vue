<script setup lang="ts">
import { ref } from 'vue';
import DropDown from '../components/forms/components/DropDown.vue';
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
import InputComp from '../components/forms/components/InputComp.vue';
import { passwordGenerator } from '../functions/passwordGenerator';


const roleValue = ref('')
const generatePassword = () => {
    console.log(passwordGenerator())
}
</script>

<template>
    <MainLauout>
        <SubHeader
            title="Создание пользователя"
            nav="users"

        />
        <span>роль {{ roleValue }}</span>
        <DropDown
        class="w-[500px]"
        v-model:roleValue="roleValue"
            />
        <div class="grid grid-cols-[1fr_150px] gap-3">
            <InputComp
            title="password"
            name="password"
            type="text"
            placeholder="ваш пароль"/>
            <button
            @click="generatePassword"
            class="w-full h-full flex flex-col items-center justify-center shadow-sm bg-slate-300 rounded-2xl font-bold hover:bg-blue-700 hover:text-white ">
                <span>генерация</span>
                <span>пароля</span>
            </button>
        </div>
    </MainLauout>
</template>
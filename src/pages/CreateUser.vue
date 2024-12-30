<script setup lang="ts">
import { ref } from 'vue';
import DropDown from '../components/forms/components/DropDown.vue';
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
const roleValue = ref('')
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

    </MainLauout>
</template>
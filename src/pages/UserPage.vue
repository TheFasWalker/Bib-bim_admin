<script setup lang="ts">
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
import { UserSate } from '../store/UserState';
const userState = UserSate()



</script>

<template>
    <MainLauout>
        <SubHeader
        title="Личный кабинет"
        nav="home"
        linkText="На главную"/>
        <div class="">
        {{ userState.getUserId }}
        </div>
    </MainLauout>
</template>
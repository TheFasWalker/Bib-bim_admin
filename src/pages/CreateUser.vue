<script setup lang="ts">
import DropDown from '../components/forms/components/DropDown.vue';
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
</script>

<template>
    <MainLauout>
        <SubHeader
            title="Создание пользователя"
            nav="users"
        />
        <DropDown/>

    </MainLauout>
</template>
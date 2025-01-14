<script setup lang="ts">
import SubHeader from '../../components/general/SubHeader.vue';
import MainLauout from '../../components/lauouts/MainLauout.vue';
</script>

<template>
       <MainLauout>
        <SubHeader 
        title="Посты"
        nav="home"
        createPage="createPost"
        />
        <h1>Posts list page</h1>
    </MainLauout>
</template>
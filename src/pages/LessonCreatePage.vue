<script setup lang="ts">
import { ref } from 'vue';
import Checkbox from '../components/forms/components/Checkbox.vue';
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
const isPublished = ref(true)
</script>

<template>
    <MainLauout>
        <SubHeader
            title="Добавление урока"
            nav="lessons"
            />
        <div class="">
            <Checkbox
            title="Публикация"
            name="isPublished"
            v-model="isPublished"/>

        </div>

    </MainLauout>
</template>
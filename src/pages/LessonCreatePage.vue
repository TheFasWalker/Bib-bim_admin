<script setup lang="ts">
import { ref } from 'vue';
import Checkbox from '../components/forms/components/Checkbox.vue';
import SubHeader from '../components/general/SubHeader.vue';
import MainLauout from '../components/lauouts/MainLauout.vue';
import InputField from '../components/forms/components/InputField.vue';

const isPublished = ref(true)
const text = ref('')
</script>

<template>
    <MainLauout>
        <SubHeader
            title="Добавление урока"
            nav="lessons"
            />
        <div class=" flex flex-col gap-4">
                <InputField
                title="Название урока"
                name="title"
                type="text"
                placeholder="Название урока"
                v-model="text"/>

            <Checkbox
                title="Публикация"
                name="isPublished"
                v-model="isPublished"/>
        </div>

    </MainLauout>
</template>
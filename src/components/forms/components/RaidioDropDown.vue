<template>
    <div
    class="relative w-fit flex flex-row gap-2 items-center"
    >
    <p
        v-if="error"
        class=" absolute -top-9 right-0 p-2 text-red-600"

        >{{ error }}</p>
        <span :class="{ 'text-red-600 text-sm font-bold': error }">{{ title }}</span>
        <ButtonWhite
        :class="{ 'text-red-600 text-sm font-bold border-red-600 border': error }"
        :title="selectedTitle"
        @click="toggleVisibility"/>
        <div v-if="visibility" class="z-10 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full">
            <ul class="p-3 space-y-1 text-sm text-gray-700" aria-labelledby="dropdownHelperRadioButton">
                <li v-for="elemData in data" :key="elemData.value">
                    <label class="cursor-pointer flex flex-row w-full gap-4">
                        <input
                            name="name"
                            type="radio"
                            :value="elemData.value"
                            :checked="selectedValue === elemData.value"
                            @change="handleChange(elemData)"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
                        <span class="text-xs font-bold text-gray-500">{{ elemData.title }}</span>
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import ButtonWhite from '../../ui/ButtonWhite.vue';

interface Data {
    title: string;
    value: string;
}

interface Props {
    name: string;
    title: string;
    data: Data[];
    modelValue: string;
    baseText?: string;
    error?:string
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

const visibility = ref(false);
const selectedValue = ref(props.modelValue);
const selectedTitle = ref(props.data.find(item => item.value === props.modelValue)?.title || props.baseText || 'BaseText');

const toggleVisibility = () => {
    visibility.value = !visibility.value;
};

const handleChange = (elemData: Data) => {
    selectedValue.value = elemData.value;
    selectedTitle.value = elemData.title;
    emit('update:modelValue', elemData.value);
    toggleVisibility(); // Закрыть попап после выбора
};

watch(() => props.modelValue, (newValue) => {
    selectedValue.value = newValue;
    selectedTitle.value = props.data.find(item => item.value === newValue)?.title || props.baseText || 'BaseText';
});
</script>
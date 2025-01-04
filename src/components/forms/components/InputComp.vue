<template>
    <label class="block text-sm font-medium text-gray-900">
      <div :class="{'flex flex-row justify-between items-center': error}">
        <span class="block mb-2 text-lg font-bold text-gray-900">{{ title }}</span>
        <p class="text-red-600 text-sm font-bold" v-if="error">{{ error }}</p>
      </div>
      <input
        autocomplete="off"
        :class="{ 'border-red-600': error }"
        :name="name"
        :placeholder="placeholder"
        :type="type"
        :value="modelValue"
        @input="handleInput"
        @blur="handleBlur"
        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
      />
    </label>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue';

  interface Props {
      title: string;
      name: string;
      placeholder: string;
      type: 'number' | 'email' | 'text' | 'password';
      error?: string; // Изменил тип error
      modelValue?: string | number

  }

  interface Emits {
      (e: 'update:modelValue', value: string | number): void;
      (e: 'blur', value: string | number): void;
  }

  const props = defineProps<Props>();
  const emit = defineEmits<Emits>();

  const handleInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit('update:modelValue', target.value);
  };

  const handleBlur = () => {
      emit('blur', props.modelValue);
  };
  </script>

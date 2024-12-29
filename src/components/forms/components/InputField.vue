<template>
    <label class="w-full flex flex-col gap-1">
      <div :class="{ 'flex flex-row justify-between items-center': error }">
        <span class="block mb-2 text-lg font-bold text-gray-900">{{ title }}</span>
        <p class="text-red-600 text-sm font-bold" v-if="error">
          {{ error }}
        </p>
      </div>
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
        :class="{ 'border-red-600': error }"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        :name="name"
        @input="onInput"
        @blur="onBlur"
      />
    </label>
  </template>

  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  interface Props {
    modelValue?: string;
    title: string;
    name: string;
    type?: 'text' | 'email' | 'password' | 'number';
    placeholder?: string;
    error?: string;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'blur', value?: string): void;
  }>();

  function onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
  }

  function onBlur() {
      emit('blur', props.modelValue);
  }
  </script>

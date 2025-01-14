<template>
    <label class="flex items-center cursor-pointer w-fit self-start">
      <input
        type="checkbox"
        :name="name"
        :checked="modelValue"
        @change="onCheckboxChange"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
      />
      <span class="ms-2 text-sm font-medium text-gray-900 ">{{
        title
      }}</span>
    </label>
  </template>

  <script setup lang="ts">
  import { defineEmits, defineProps } from 'vue';
  interface Props {
    title: string;
    name: string;
    modelValue?: boolean;
  }

  const props = defineProps<Props>();
  const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
  }>();

  function onCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.checked);
  }
  </script>


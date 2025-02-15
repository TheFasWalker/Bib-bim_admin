<template>
    <li
    :class ="{' opacity-[0.4]': activity}">
      <button
      :disabled="activity"
        :class="`flex items-center justify-center px-4 h-10 border ${
          activity
            ? 'text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
            : 'leading-tight text-gray-500 bg-white  border-gray-300 hover:bg-gray-100 hover:text-gray-700'
        }`"
      >
        {{ number }}
      </button>
    </li>
  </template>
  
  <script setup lang="ts">
  import { withDefaults, defineProps } from 'vue';
  
  interface Props {
    number: number;
    activity?: boolean;
  }
  
  const props = withDefaults(defineProps<Props>(), {
    activity: false,
  });
  </script>
  
  
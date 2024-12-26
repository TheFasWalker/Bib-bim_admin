<template>

  <svg 
  class="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
    fill="currentColor"
    viewBox="0 0 20 20"
    >
    <use :xlink:href="`/public/images/sprite.svg#icon-${iconName}`"/>
  </svg>
</template>

<script  lang="ts" setup>
import { IconType } from '../../Types';


interface Props {
    iconName: IconType
}
const props = defineProps<Props>();

</script>

<style scoped>
.icon {
  display: inline-block;
  fill: currentColor; /* Используем fill для изменения цвета иконок */
}
</style>
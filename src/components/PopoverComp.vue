<template>
    <div class=" relative inline-block cursor-pointer w-fit" @mouseenter="showTooltip" @mouseleave="hideTooltip">
      <Icons

      iconName="info"/>
  
      <div
        v-if="isVisible"
        ref="tooltip"
    
        class=" min-w-14 max-w-56 shadow-lg rounded-lg absolute flex flex-col  text-sm  whitespace-normal w-max bg-white"
        :style="tooltipStyle"
      >

      <Icons
        iconName="info"/>

        <span class=" px-2 pb-1">{{ text }}</span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import Icons from './ui/Icons.vue';
  interface Props {
    text:string
  }
  defineProps<Props>();
  
  const isVisible = ref(false);
  const tooltip = ref<HTMLElement | null>(null);
  const tooltipStyle = ref({ top: '0', left: '0' });
  

  const showTooltip = () => {
    isVisible.value = true;
    updateTooltipPosition();
  };
  

  const hideTooltip = () => {
    isVisible.value = false;
  };
  

  const updateTooltipPosition = () => {
    if (!tooltip.value) return;
  

    const targetElement = tooltip.value.parentElement;
    if (!targetElement) return;
  
    const targetRect = targetElement.getBoundingClientRect();
  

    let top = targetRect.bottom + window.scrollY + 8; 
    let left = targetRect.left + window.scrollX;
  

    const tooltipRect = tooltip.value.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
  

    if (left + tooltipRect.width > viewportWidth) {
      left = viewportWidth - tooltipRect.width;
    }
  

    if (top + tooltipRect.height > viewportHeight + window.scrollY) {
      top = targetRect.top + window.scrollY - tooltipRect.height - 8; 
    }
  
    tooltipStyle.value = {
      top: `${top}px`,
      left: `${left}px`,
    };
  };
  

  onMounted(() => {
    window.addEventListener('resize', updateTooltipPosition);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateTooltipPosition);
  });
  </script>

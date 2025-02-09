
<template>
  <nav class="w-full flex justify-center">
    <ul class="flex items-center -space-x-px h-10 text-base">
      <PaginationPrev :disabled="active === 1" @click="goToPreviousPage" />

      <PaginationNumber
        v-for="page in visiblePages"
        :key="page"
        :number="page"
        :activity="page === active"
        @click="goToPage(page)"
      />

      <PaginationNext
        :disabled="active === totalPageCount"
        @click="goToNextPage"
      />
    </ul>
    <span>Page count = {{ totalPageCount }}</span>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import PaginationNext from '../pagination/PaginationNext.vue';
import PaginationNumber from '../pagination/PaginationNumber.vue';
import PaginationPrev from '../pagination/PaginationPrev.vue';
import { ref } from 'vue';

interface Props {
  total: number;
  active: number;
  perPage: number;
  maxVisibleButtons?: number; 
}

const props = withDefaults(defineProps<Props>(), {
  maxVisibleButtons: 5,
});

const emit = defineEmits(['page-change']);

const totalPageCount = computed(() => {
  console.log(props.active)
  return Math.ceil(props.total / props.perPage);
});


const active = ref(Math.min(props.active, totalPageCount.value));
const ensureActiveWithinBounds = () => {
  active.value = Math.min(active.value, totalPageCount.value);
  active.value = Math.max(active.value, 1);
};

const visiblePages = computed(() => {
  const total = totalPageCount.value;
  const current = active.value;
  const maxVisible = props.maxVisibleButtons || 5; 

  if (total <= maxVisible) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const start = Math.max(1, current - Math.floor(maxVisible / 2));
  const end = Math.min(total, start + maxVisible - 1);

  let pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  if (start > 1) {
    pages = [1, '...', ...pages];
  }
  if (end < total) {
    pages = [...pages, '...', total];
  }

  return pages;
});

const goToPage = (page: number | string) => {
  if (typeof page === 'number') {
    active.value = page;
    ensureActiveWithinBounds();
    emit('page-change', active.value);
  }
};

const goToNextPage = () => {
  active.value++;
  ensureActiveWithinBounds();
  emit('page-change', active.value);
};

const goToPreviousPage = () => {
  active.value--;
  ensureActiveWithinBounds();
  emit('page-change', active.value);
};

defineExpose({
  active,
  goToPage,
  goToNextPage,
  goToPreviousPage,
});
</script>

<template>
<div class=" relative">
                <button
            class="flex items-center justify-center w-[190px] px-2 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg  focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
            type="button"
            @click = "state = !state">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
              </svg>
             {{  filterText }}
              <svg class=" ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            <div v-if="state"  class="z-10 bg-white divide-y divide-gray-100 rounded shadow w-[170px] absolute">
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                <li>
                  <button
                  @click="handleFilterChange(false)"
                  class=" w-full px-4 py-2 hover:bg-gray-100 "
                  :disabled="isNotPublishedButtonDisabled"
                  :class="{ 'bg-gray-400 hover:bg-gray-400 text-white': props.currentFilter === false }"
                  >Не опубликованы
                    </button>
                </li>
                <li>
                    <button
                    @click="handleFilterChange(true)"
                    :disabled="isPublishedButtonDisabled"
                    class=" w-full px-4 py-2 hover:bg-gray-100 "
                    :class="{ 'bg-gray-400 hover:bg-gray-400 text-white': props.currentFilter === true }"
                    >
                        Опубликованы
                    </button>
                </li>
                <li>
                    <button
                    @click="handleFilterChange('all')"
                    :disabled="isAllButtonDisabled"
                    class=" w-full px-4 py-2 hover:bg-gray-100 "
                    :class="{ 'bg-gray-400 hover:bg-gray-400 text-white': props.currentFilter === 'all' }"
                    >
                        Все
                    </button>
                </li>
              </ul>

            </div>
        </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
const props = defineProps({
  currentFilter: {
    type: [Boolean, String],
    default: 'all'
  }
});
const state = ref(false)
const emit = defineEmits(['filter-change'])
const handleFilterChange=(value: boolean | 'all') => {
    emit('filter-change', value)
    state.value = false
}
const filterText = computed(() => {
  if (props.currentFilter === true) {
    return 'Опубликованы';
  } else if (props.currentFilter === false) {
    return 'Не опубликованы';
  } else {
    return 'Все';
  } 
});
watch(
  () => props.currentFilter,
  (newFilter) => {
    console.log('Текущий фильтр изменен:', newFilter);
  }
);

const isNotPublishedButtonDisabled = computed(() => props.currentFilter === false);
const isPublishedButtonDisabled = computed(() => props.currentFilter === true);
const isAllButtonDisabled = computed(() => props.currentFilter === 'all');

</script>
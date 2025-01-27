<template>
  <div class="relative h-96">
    <div ref="quillEditor" class="border border-gray-300 rounded-md p-2"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:modelValue']);

const quillEditor = ref(null);
const editor = ref<Quill | null>(null);

onMounted(() => {
  editor.value = new Quill(quillEditor.value, {
    theme: 'snow',
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['link'],
      ],
    },
  });


    if (props.modelValue) {
        editor.value.root.innerHTML = props.modelValue;
    }


  editor.value.on('text-change', () => {
    emit('update:modelValue', editor.value?.root.innerHTML);
  });
});

watch(
  () => props.modelValue,
  (newValue) => {
    if (editor.value && editor.value.root.innerHTML !== newValue) {
        editor.value.root.innerHTML = newValue;
    }
  }
);

</script>


<template>
  <div class=" relative h-96">
    <div v-if="error" class=" bg-red-500 text-white font-bold absolute top-0 z-20 right-0 p-2 w-fit rounded-md border border-red-500">{{ error }}</div>
    <div ref="quillEditor" class="border border-gray-300 rounded-md p-2"></div>
  </div>
  <textarea 
  hidden
  :name="name" 
  :value="modelValue" 
  @input="$emit('update:modelValue', $event.target.value)"
  @blur="$emit('blur')"
  ></textarea>
  
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

interface Props{
  modelValue:string,
  error?:string,
  name:string
}
const props = defineProps<Props>();

const emit = defineEmits(['update:modelValue','blur']);

const quillEditor = ref<HTMLElement | null>(null);
const editor = ref<Quill | null>(null);

onMounted(() => {
  if (!quillEditor.value) return;
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


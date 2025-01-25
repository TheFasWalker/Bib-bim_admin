<template>
  <div class="relative h-96">
    <div ref="quillEditor" class="border border-gray-300 rounded-md p-2"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; 

    const quillEditor = ref(null);
    const editor = ref(null);

    onMounted(() => {
      editor.value = new Quill(quillEditor.value, {
        theme: 'snow', // Или 'bubble'
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            // ['image'], 
            ['link'],
            // ['clean']
          ]
        }
      });
      editor.value.on('text-change', (delta, oldDelta, source) => {
        console.log("Text changed:", editor.value.root.innerHTML);
      });
    });


</script>
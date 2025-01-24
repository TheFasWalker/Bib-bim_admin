<template>
    <div class="flex flex-col items-center w-full">
        <label class="w-full flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors hover:bg-gray-100">
            <input type="file" ref="fileInput" class="hidden" accept="image/*" @change="handleFileChange">
              <div v-if="!previewImage" class=" flex flex-col items-center">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve"><g><g id="Download"><path d="M372.939,264.667c-6.641,0-12.03,5.39-12.03,12.03v84.212H24.061v-84.212c0-6.641-5.39-12.03-12.03-12.03 S0,270.056,0,276.697v96.242c0,6.641,5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03v-96.242 C384.97,270.056,379.58,264.667,372.939,264.667z"/><path d="M183.703,285.202c4.68,4.632,12.512,4.68,17.191,0l84.2-83.009c4.752-4.704,4.74-12.319,0-17.011 c-4.74-4.704-12.439-4.704-17.179,0l-63.46,62.558V12.03c0-6.641-5.438-12.03-12.151-12.03s-12.151,5.39-12.151,12.03v235.71 l-63.46-62.558c-4.752-4.704-12.439-4.704-17.179,0c-4.752,4.704-4.752,12.319,0,17.011L183.703,285.202z"/></g></g></svg>
                    <span class=" text-gray-500">
                         Загрузить фото
                    </span>
               </div>
              <img v-else :src="previewImage" alt="Preview" class="max-h-[350px] max-w-full  rounded-md" />
        </label>
        <div v-if="previewImage" class=" mt-1 flex justify-between w-full">
            <ButtonBlue @click="clearPreview" title="Удалить" class="w-full" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonBlue from '../../ui/ButtonBlue.vue';
import { defineEmits, defineProps } from 'vue';
    interface Props {
        modelValue: string | null
    }
 const props = defineProps<Props>()
 const emit = defineEmits(['update:modelValue'])

const previewImage = ref<string| null>(props.modelValue);
const fileInput = ref<HTMLInputElement | null>(null)
 const handleFileChange = (event: Event) => {
     const target = event.target as HTMLInputElement;
        const file = target.files && target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              previewImage.value = e.target?.result as string;
            emit('update:modelValue', e.target?.result as string)
            };
            reader.readAsDataURL(file);
        }
    };

 const clearPreview = () => {
        previewImage.value = null;
        emit('update:modelValue', null)
        if(fileInput.value){
             fileInput.value.value = ''
        }
    };
</script>




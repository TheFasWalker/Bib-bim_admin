<template>
    <div class="flex flex-col items-center w-full">
        <label class="w-full flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors hover:bg-gray-100">
            <input type="file" ref="fileInput" class="hidden" accept="image/*" @change="handleFileChange">
              <div v-if="!previewImage" class=" flex flex-col items-center">
               <Icons
               iconName="download"/>
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
import Icons from '../../ui/Icons.vue';
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




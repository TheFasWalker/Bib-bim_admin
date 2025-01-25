<template>
        <div class="grid grid-cols-3 gap-2">
            <div v-for="(image, index) in images" :key="index" class="w-full px-2 mb-4">
                <div class="relative">
                    <img :src="image.preview" alt="Превью изображения"
                        class="w-full h-auto object-cover rounded shadow-md" />
                    <button @click="removeImage(index)"
                        class="absolute top-1 right-1 bg-red-500 hover:bg-red-700 text-white text-xs rounded-full p-1 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-3 h-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
        <div class="w-full px-1">
                <label for="image-upload"
                    class="cursor-pointer flex items-center justify-center h-10 bg-gray-100 border-2 border-dashed border-gray-400 rounded shadow-md hover:bg-gray-200 transition-colors duration-200">
                    <Icons
                    iconName="download"/>

                </label>
                <input id="image-upload" type="file" multiple accept="image/*" class="hidden"
                    @change="handleImageUpload" />
            </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import Icons from '../../ui/Icons.vue'
const images = ref([]);
const emit = defineEmits(['update:images'])

const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            images.value.push({
                file: file,
                preview: e.target.result,
            });
        };

        reader.readAsDataURL(file);
    });
};

const removeImage = (index) => {
    images.value.splice(index, 1);
};
watch(images, (newValue) => {
    emit('update:images', newValue.map(image => image.file))
})
const props =defineProps({
    images: {
        type: Array,
        default: () => {
            return []
        }
    }
})
watch(() => props.images, (newValue) => {
    images.value = newValue?.map(file => {
        return {
            file: file,
            preview: URL.createObjectURL(file)
        }
    }) ?? []
}, { immediate: true })
</script>

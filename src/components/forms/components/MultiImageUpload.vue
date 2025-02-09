<template>
    <div class="grid grid-cols-3 gap-2 relative">
        <div v-if="error" class=" bg-red-500 text-white font-bold absolute -top-10 z-20 right-0 p-2 w-fit rounded-md border border-red-500">{{ error }}</div>
        <div v-for="(image, index) in localImages" :key="index" class="w-full px-2 mb-4">
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
import { ref, watch, defineProps, defineEmits } from 'vue';
import Icons from '../../ui/Icons.vue'
const localImages = ref([]);
const emit = defineEmits(['update:modelValue'])

const handleImageUpload = (event) => {
const files = Array.from(event.target.files);

files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        localImages.value.push({
            file: file,
            preview: e.target.result,
        });
        emit('update:modelValue', localImages.value.map(image => image.file))
    };

    reader.readAsDataURL(file);
});
};

const removeImage = (index) => {
    localImages.value.splice(index, 1);
    emit('update:modelValue', localImages.value.map(image => image.file))
};

const props =defineProps({
modelValue: {
    type: Array,
    default: () => {
        return []
    }
    },
    error: {
    type:String,
    default:''
}
})
watch(() => props.modelValue, (newValue) => {
    localImages.value = newValue?.map(file => {
    return {
        file: file,
        preview: URL.createObjectURL(file)
    }
}) ?? []
}, { immediate: true })


</script>

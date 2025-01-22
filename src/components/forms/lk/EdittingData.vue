<template>
    <div class="grid grid-cols-[100px_1fr] h-12 justify-center ">
        <span 
        class=" flex items-center  text-xl font-bold "
        :class="{'underline text-orange-600' : error}"
        >
            {{ title }}
        </span>
        <label v-if="editing"  class="block text-sm font-medium text-gray-900  relative">
            <span 
            v-if="error" 
            class=" shadow-md border p-1 border-red-600 rounded-lg absolute -top-6 z-[1] bg-white right-0 text-red-600">
                {{ error }}
            </span>
            <input 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2.5"
                :placeholder="placeholder" 
                :type="type"
                :value="modelValue"
                :class="{ 'border-red-600': error }"
                @input="handleInput"
                @blur="handleBlur">
        </label>
        <span v-else  class="flex items-center pl-2.5 text-gray-900 text-sm">
            {{ modelValue }}
        </span>
    </div>
</template>
<script setup lang="ts">
    interface Props {
        editing:boolean,
        title:string,
        name:string,
        placeholder:string,
        type: 'number' | 'email' | 'text' | 'password',
        error?: string,
        modelValue?: string | number
    }
   const props = defineProps<Props>()
        interface Emits {
        (e: 'update:modelValue', value: string | number): void;
        (e: 'blur', value: string | number): void;
    }
    const emit = defineEmits<Emits>();
    const handleInput = (event: Event) => {
        const target = event.target as HTMLInputElement;
        emit('update:modelValue', target.value);
    };

    const handleBlur = () => {
        emit('blur', props.modelValue);
    };
</script>
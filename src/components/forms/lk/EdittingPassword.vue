<template>
    <div 
    v-if="edittingPasswordState"  
    class="grid grid-cols-[100px_1fr_30px_30px] items-center grid-1">
    <span 
        class="flex items-center  text-xl font-bold ">Пароль</span>
            <label   class="block text-sm font-medium text-gray-900  relative">
                    <span 
                    v-if="error"
                    class=" shadow-md border p-1 border-red-600 rounded-lg absolute -top-6 z-[1] bg-white right-0 text-red-600">
                     {{ error }}
                    </span>
                    <input 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2.5"
                        placeholder="пароль" 
                        type="text"
                        :value="modelValue"
                        @input="handleInput"
                        @blur="handleBlur">
                </label>
                <CloseButton
            @click="emit('edittingPassword')"
            />
            <button 
            @click="generatePassword"
            class=" h-8 w-8 flex items-center justify-center">
                <Icons
                iconName="generate"/>
            </button>
        </div>
    <ButtonType2
    v-else
    @click="emit('edittingPassword')"
        title="Изменить пароль"/>
        
</template>
<script setup lang="ts">
    import { passwordGenerator } from '../../../functions/passwordGenerator';
    import ButtonType2 from '../../ui/ButtonType2.vue';
    import CloseButton from '../../ui/CloseButton.vue';
    import Icons from '../../ui/Icons.vue';
    interface Props {
        edittingPasswordState:boolean,
        error?:string,
        modelValue?:string
    }

    const props = defineProps<Props>()
    interface Emits {
        (e:'edittingPassword'):void
        (e: 'update:modelValue', value: string | number): void;
        (e: 'blur', value: string | number): void;
    }
    const emit = defineEmits<Emits>()
    const handleInput = (event: Event) => {
        const target = event.target as HTMLInputElement;
        emit('update:modelValue', target.value);
    };

    const handleBlur = () => {
        emit('blur', props.modelValue);
    };
    const generatePassword =()=>{
        emit('update:modelValue', passwordGenerator())
    }


</script>
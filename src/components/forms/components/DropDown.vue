<template>
<div class=" relative">
    <input
    hidden 
        type="text"
        :name="name"
        :value="modelValue"
    >
    <button
    :class="`${error ? 'border-red-700 border-2' : ''}`"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 flex flex-row justify-between items-center w-full"
    type="button"
    @click="toggleDropDown"

    >
        {{ firstState !=''? firstState: 'Выберите роль' }}
        <svg
        :class="`${dropDownState? 'rotate-180' : ''}`"
        class="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
    </button>


    <div v-show="dropDownState" class="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow absolute left-0 top-full w-full">
        <ul class="py-2 text-sm text-gray-700 " >
        <li>
            <button
            type="button"
                @click="elemClicked"
                :data-role="adminKey"
                class="block px-4 py-2 hover:bg-gray-100  w-full text-left"
            >
            Администратор
            </button>
        </li>
        <li>
            <button
            type="button"
                @click="elemClicked"
                :data-role="managerKey"
                class="block px-4 py-2 hover:bg-gray-100 w-full text-left"
            >
            Контент менеджер
            </button>
        </li>
        <li>
            <button
            type="button"
                @click="elemClicked"
                :data-role="partnerKey"
                class="block px-4 py-2 hover:bg-gray-100 w-full text-left"
            >
            Партнер
            </button>
        </li>

        </ul>
    </div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
interface Props{
    roleValue?: String,
    name: string,
    modelValue?: string ,
    error?:string
}

const adminKey = import.meta.env.VITE_ADMIN_ROLE_CODE
const managerKey = import.meta.env.VITE_MANAGER_ROLE_CODE
const partnerKey = import.meta.env.VITE_PARTNER_ROLE_CODE

const props = defineProps<Props>()
const emit = defineEmits<{ (e: 'update:roleValue', value: string): void }>();

const firstState = ref(props.roleValue ?? 'Выберите роль')
const dropDownState = ref(false)
const toggleDropDown = () => {
    dropDownState.value= !dropDownState.value
}
const elemClicked = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const role = target.getAttribute('data-role')
    if (role) {
        firstState.value = target.textContent ?? 'Выберите роль'
        emit('update:roleValue', role);
    }
    dropDownState.value = false;
};
</script>
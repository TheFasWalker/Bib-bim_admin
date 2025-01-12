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
        <li v-for="elem in data" :key="elem.id" v-show="outputAdminRole(elem.role) ">
            <button
            type="button"
                @click="elemClicked"
                :data-role="elem.id"
                class="block px-4 py-2 hover:bg-gray-100  w-full text-left"
            >
            {{ readableTitle(elem.role) }}
            </button>
        </li>
        </ul>
    </div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
interface IUserRole{
    id:string,
    role:String
}
interface Props{
    roleValue?: String,
    name: string,
    modelValue?: string ,
    error?:string,
    data:Array<IUserRole>

}

const adminKey = import.meta.env.VITE_ADMIN_ROLE_CODE
const managerKey = import.meta.env.VITE_MANAGER_ROLE_CODE
const partnerKey = import.meta.env.VITE_PARTNER_ROLE_CODE
const devM0de = import.meta.env.VITE_DEV_MODE

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
const outputAdminRole =(role) =>{
    if (!devM0de) {
        if (role == adminKey) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }

}
const readableTitle = (title) =>{
    switch(title){
        case adminKey:
            return 'Администратор'
            break
        case managerKey:
            return 'Контент менеджер'
            break
        case partnerKey:
            return 'Партнёр'
            break
        }
}
</script>
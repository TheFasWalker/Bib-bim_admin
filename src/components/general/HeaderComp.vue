<script lang="ts" setup>
import { ref } from 'vue';
import UserMenu from './header/UserMenu.vue';
import ButtonWhite from '../ui/ButtonWhite.vue';
import { SiteState } from '../../store/SiteState';


const store = SiteState()

const userMenuState = ref(false);



const toggleHeaderMenu = ()=>{
  userMenuState.value = !userMenuState.value
}
</script>
<template>
<nav class="bg-white border-b border-gray-200 px-4 py-2.5  fixed left-0 right-0 top-0 z-50">
      <div class="flex flex-wrap justify-between items-center">
        <div class="flex justify-start items-center">
          <button
          @click="store.toggleSidebarState()"
            class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer  hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100  focus:ring-2 focus:ring-gray-100 "
          >
            <svg
            v-if="!store.getSidebarState"
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
            v-if="store.getSidebarState"
              class=" w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Toggle sidebar</span>
          </button>
          <a href="https://flowbite.com" class="flex items-center justify-between mr-4">
            <img
              src="https://flowbite.s3.amazonaws.com/logo.svg"
              class="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">Flowbite</span>
          </a>

        </div>
        <div  class="flex items-center lg:order-2 relative ">
          <ButtonWhite
          @click="toggleHeaderMenu"
          :title="`${userMenuState ?  'Закрыть' :'Открыть'} меню`">

          </ButtonWhite>
          <Transition name="slide-fade">
            <UserMenu v-if="userMenuState"/>
          </Transition>
        </div>

      </div>
    </nav>


</template>
<style scoped >
.slide-fade-enter-active {
  transition: all 0.5s linear;
}

.slide-fade-leave-active {
  transition: all 0.5s linear;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
<template>
  <div
    class=" absolute right-0 top-10 z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow  rounded-xl overflow-hidden">
    <div class="py-3 px-4">
      <span class="block text-sm font-semibold text-gray-900 ">{{ userStore.userData.name }}</span>
      <span class="block text-sm text-gray-900 truncate ">{{ userStore.userData.email }}</span>
    </div>
    <ul class="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
      <li>
        <a href="#"
          class="block py-2 px-4 text-sm hover:bg-gray-100 ">My
          profile</a>
      </li>
      <li>
        <a href="#"
          class="block py-2 px-4 text-sm hover:bg-gray-100 ">Account
          settings</a>
      </li>
    </ul>


    <ul class=" text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
      <li>
        <button
         class="w-full block py-2 px-4 text-sm hover:bg-gray-100 "
         @click="logOut">
         Sign out</button>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { UserSate } from '../../../store/UserState';

const userStore = UserSate()
const router = useRouter()
const logOut = () => {
  userStore.clearUserData()
  router.push('login')
 }
</script>
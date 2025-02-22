<script setup lang="ts">
import { computed } from 'vue';
import checkAcsessByRole from '../../utils/checkAcessByRole';
import { SiteState } from '../../store/SiteState';
import { UserState } from '../../store/UserState';
import SidebarMainLink from '../sidebar/SidebarMainLink.vue';
import { UserRoles } from '../../Types';
const store = SiteState()
const userState = UserState()

const adminKey = import.meta.env.VITE_ADMIN_ROLE_CODE
const managerKey = import.meta.env.VITE_MANAGER_ROLE_CODE
const partnerKey = import.meta.env.VITE_PARTNER_ROLE_CODE

const userRole = computed<UserRoles | null>(() => {
    const role = userState.getUserRole;

    if (role === null) {
         return null;
    }

    return role as UserRoles; // Type assertion
});

</script>

<template>
     <aside
     :class="store.sidebarState ? 'w-64': 'w-[65px]'"
      class="js-sidebar fixed top-0 left-0 z-40  h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0  "
    >
      <div class="overflow-y-auto py-5 px-3 h-full bg-white ">
        <ul class="space-y-2">
          <li>
            <SidebarMainLink
              title="Главная"
              nav="home"
              iconName="home"
              />
          </li>
          <li>
            <SidebarMainLink
                        v-if="checkAcsessByRole(userRole, [adminKey, managerKey])"
              title="Посты"
              nav="posts"
              iconName="generate"
              />
          </li>
          <li>
            <SidebarMainLink
            v-if="checkAcsessByRole(userRole,  [adminKey])"
              title="Пользователи"
              nav="users"
              iconName="users"
              />
          </li>
          <!-- <li>
            <SidebarMainLink
            v-if="checkAcsessByRole(userRole,  [adminKey, managerKey])"
              title="Уроки"
              nav="lessons"
              iconName="contacts"
              />
          </li>

          <li>
            <SidebarMainLink
              title="О проекте"
              nav="about"
              iconName="home"
              />
          </li>
          <li>
            <SidebarMainLink
                        v-if="checkAcsessByRole(userRole, [adminKey, partnerKey])"
              title="Партнёрам"
              nav="partners"
              iconName="home"
              />
          </li> -->
          <li>
            <SidebarMainLink
            v-if="checkAcsessByRole(userRole, [adminKey])"
              title="serverSettings"
              nav="settings"
              iconName="gear"
              />
          </li>
          <li>
            <SidebarMainLink
            v-if="checkAcsessByRole(userRole, [adminKey])"
              title="UI/docks"
              nav="ui"
              iconName="generate"
              />
          </li>
        </ul>
      </div>
      <div
        class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white  z-20"
      >
footer
      </div>
    </aside>
</template>
import { defineStore } from 'pinia'

export const SiteState = defineStore('siteStates', {
    state: () => ({
      sidebarState: true,
     }),
    getters: {
      getSidebarState :(state)=>state.sidebarState
    },
    actions: {
      toggleSidebarState(){
        this.sidebarState = !this.sidebarState
      },
    },
  })
import { defineStore } from 'pinia'

export const SiteState = defineStore('siteStates', {
    state: () => ({
      sidebarState: true,
      errorText:''
     }),
    getters: {
      getSidebarState :(state)=>state.sidebarState,
      getErrorText:(state)=>state.errorText
    },
    actions: {
      toggleSidebarState(){
        this.sidebarState = !this.sidebarState
      },
      cleanTextError(){
        this.errorText = ''
      }
    },
  })
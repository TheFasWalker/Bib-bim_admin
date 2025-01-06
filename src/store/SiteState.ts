import { defineStore } from 'pinia'

export const SiteState = defineStore('siteStates', {
    state: () => ({
      sidebarState: true,
      errorText: '' as string | '',
      sucsesMessage: '' as string |''
     }),
    getters: {
      getSidebarState :(state)=>state.sidebarState,
      getErrorText: (state) => state.errorText,
      getsucsesMessage : (state)=> state.sucsesMessage
    },
    actions: {
      toggleSidebarState(){
        this.sidebarState = !this.sidebarState
      },
      cleanTextError(){
        this.errorText = ''
      },
      cleanSucsessText() {
        this.sucsesMessage = ''
      }
    },
  })
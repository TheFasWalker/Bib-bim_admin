import { defineStore } from 'pinia'
import { Iuser } from '../Types'


export const SiteState = defineStore('siteStates', {
  state: () => ({
    sidebarState: true,
    errorText: '' as string | '',
    sucsesMessage: '' as string | '',
    userList: null as Iuser[] | null,
  }),
  getters: {
    getSidebarState: (state) => state.sidebarState,
    getErrorText: (state) => state.errorText,
    getsucsesMessage: (state) => state.sucsesMessage
  },
  actions: {
    toggleSidebarState() {
      this.sidebarState = !this.sidebarState
    },
    cleanTextError() {
      this.errorText = ''
    },
    cleanSucsessText() {
      this.sucsesMessage = ''
    },
    setUserList(data: Iuser[] | null) {
      this.userList = data
    },
    deleteUserById(id: string) {
      this.userList = this.userList.filter(user => user.id !== id)
    }
    },
  })
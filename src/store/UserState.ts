import { defineStore } from "pinia";
export const UserSate = defineStore('userState',{
    state: () => ({
        userRole: null as string | null,
        userId: null as string | null,
        userToken: null as string | null,
        userData: {}
    }),
    getters: {
        getUserRole:(state)=>state.userRole
    },
    actions: {
        writeTokenAndId(id:string,token:string) {
            localStorage.setItem('bim-userId', id)
            localStorage.setItem('bim-token', token)
            this.userId = id,
            this.userToken = token
        },
        writeRole(role: string) {
            localStorage.setItem('bim-role', role)
            this.userToken = role
        },
        clearUserData() {
            localStorage.removeItem('bim-role')
            localStorage.setremoveItemItem('bim-userId')
            localStorage.removeItem('bim-token')
            localStorage.removeItem('bim-userData')
            this.userRole = null,
            this.userId = null,
            this.userToken = null,
            this.userData ={}
        }
   }
})

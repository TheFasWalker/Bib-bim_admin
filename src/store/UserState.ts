import { defineStore } from "pinia";
export const UserSate = defineStore('userState',{
    state: () => ({
        userRole:null as string | null
    }),
    getters: {
        getUserRole:(state)=>state.userRole
    },
    actions:{
        setUserRole(role:string | null){
            this.userRole = role
        },
        clearUserData() {
            this.userRole = null
        }
   }
})

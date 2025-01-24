import { defineStore } from "pinia";
import { Iuser } from "../Types";
export const UserSate = defineStore('userState',{
    state: () => ({
        userRole: null as string | null,
        userId: null as string | null,
        userToken: null as string | null,
        userName: null as string | null,
        userEmail: null as string | null,
        userData : null as Array<Iuser> | null
    }),
    getters: {
        getUserRole: (state) => {
            if (state.userRole == undefined) {
                state.userRole = localStorage.getItem('bim-userRole')
                return state.userRole
            } else {
                return state.userRole
            }
        },
        getUserToken: (state) => {
            if (state.userToken == undefined) {
                state.userToken = localStorage.getItem('bim-userToken')
                return state.userToken
            } else {
                return state.userToken = localStorage.getItem('bim-userToken')
            }
        },
        getUserId: (state) => {
            if (state.userId == undefined) {
                state.userId = localStorage.getItem('bim-userId')
                return state.userId
            } else {
                return state.userId
            }
        },
        getUserName: (state) => {
            if (state.userName == undefined) {
                state.userName = localStorage.getItem('bim-userName')
                return state.userName
            } else {
                return state.userName
            }
        },
        getUserEmail: (state) => {
            if (state.userEmail == undefined) {
                state.userEmail = localStorage.getItem('bim-userEmail')
                return state.userEmail
            } else {
                return state.userEmail
            }
        },
        getUserData:(state)=>{
            const userDataFromLocalStorage = localStorage.getItem('bim-userData')
            if(state.userData == null){
                if(userDataFromLocalStorage){
                    state.userData = JSON.parse(userDataFromLocalStorage)
                    return state.userData
                }else{
                    return state.userData
                }
            }

        }
    },
    actions: {
        writeTokenData(id:string,token:string,role:string,name:string, email) {
            localStorage.setItem('bim-userId', id)
            localStorage.setItem('bim-userToken', token)
            localStorage.setItem('bim-userRole', role)
            localStorage.setItem('bim-userName', name)
            localStorage.setItem('bim-userEmail', email)
            this.userId = id,
            this.userToken = token
            this.userRole = role
            this.userName = name,
            this.userEmail = email
        },
        writeUserData(data:Iuser) {
            const dataToStore = JSON.stringify(data)
            localStorage.setItem('bim-userData', dataToStore)
            this.userData = data
        },
        clearUserData() {
            localStorage.removeItem('bim-userId')
            localStorage.removeItem('bim-userToken')
            localStorage.removeItem('bim-userRole')
            localStorage.removeItem('bim-userName')
            localStorage.removeItem('bim-userEmail')
            this.userName = null
            this.userRole = null
            this.userId = null
            this.userToken = null
            this.userData ={}
        }
   }
})

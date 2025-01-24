import { defineStore } from "pinia";
import { Iuser } from "../Types";
export const UserSate = defineStore('userState',{
    state: () => ({
        userRole: null as string | null,
        userId: null as string | null,
        userToken: null as string | null,
        userData : null as Iuser | null
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
        getUserData: (state): Iuser | null => {
            const userDataFromLocalStorage = localStorage.getItem('bim-userData');
            if (userDataFromLocalStorage) {
                    const parsedUserData: Iuser = JSON.parse(userDataFromLocalStorage);
                    state.userData = parsedUserData;
                     return state.userData;
            }
             return state.userData;
        },
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

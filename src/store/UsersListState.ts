import { defineStore } from "pinia";
import { IRoles, Iuser } from "../Types";

export const UserListState = defineStore("userListState", {
  state: () => ({
    userList: null as Iuser[] | null,
    userRolesList : null as IRoles[] | null
  }),
  getters: {},
  actions: {
    setUserList(data: Iuser[] | null) {
      this.userList = data;
    },
    deleteUserById(id: string) {
      this.userList = this.userList.filter((user) => user.id !== id);
    },
    getElementById(id: string) {
      if (!this.userList) {
        return null
      }
      const foundElem = this.userList.find((user) => user.id === id)
      return foundElem || null
    },
    editUser(data){
      console.log(data)
    }
  },
});

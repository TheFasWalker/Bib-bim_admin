import { defineStore } from "pinia";
import { Iuser } from "../Types";

export const UserListState = defineStore("userListState", {
  state: () => ({
    userList: null as Iuser[] | null,
  }),
  getters: {},
  actions: {
    setUserList(data: Iuser[] | null) {
      this.userList = data;
    },
    deleteUserById(id: string) {
      this.userList = this.userList.filter((user) => user.id !== id);
    },
  },
});

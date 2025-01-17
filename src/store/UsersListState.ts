import { defineStore } from "pinia";
import { IEditUser, IRoles, Iuser } from "../Types";

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
    getElementById(id: string):Iuser {
      const foundElem = this.userList.find((user:Iuser) => user.id === id)
      return foundElem 
    },
    getRoleArrById(id:string):IRoles{
      const founRoleName = this.userRolesList.find(item=>item.id == id)
      return founRoleName 
    },
    editUser(data:IEditUser){
      const editingUser:Iuser = this.getElementById(data.user_id)
      const keys:Array<string> = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          if(key !='user_id' && key !='role'){
            keys.push(key);
          }
        }
      }
      
      keys.forEach((key)=>{
        if(editingUser[key] != data[key])
          editingUser[key]= data[key]
      })

      if(editingUser.role.id != data.role){
        console.log('role changing')
        editingUser.role = this.getRoleArrById(data.role)
      }
    }
  },
});

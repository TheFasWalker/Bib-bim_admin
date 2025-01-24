import { UserListState } from "../../store/UsersListState"
import { apiFetch } from "../../utils/api/apiFetch"

export default function () {
   
    const userListState = UserListState()
    
    const deleteUserById = async (id:string) => {
        return apiFetch(`/admin_profile?id=${id}`,{
            method:"DELETE"
        }).then((data)=>{
            userListState.deleteUserById(id)
            return data.text;
        })
    }
    return {
        deleteUserById
    }
}
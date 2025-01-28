import { SiteState } from "../../store/SiteState"
import { UserListState } from "../../store/UsersListState"
import { apiFetch } from "../../utils/api/apiFetch"

export default function () {
    const siteState = SiteState()
    const userListState = UserListState()

    const deleteUserById = async (id:string) => {
        return apiFetch(`/admin_profile?id=${id}`,{
            method:"DELETE"
        }).then((data)=>{
            userListState.deleteUserById(id)
            siteState.sucsesMessage = 'Пользователь успешно удалён'
        })
    }
    return {
        deleteUserById
    }
}
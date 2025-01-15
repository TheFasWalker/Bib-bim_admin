import { SiteState } from "../../store/SiteState"
import { UserSate } from "../../store/UserState"
import { UserListState } from "../../store/UsersListState"

const url = import.meta.env.VITE_API_DB_URL

export default function () {
    const siteState = SiteState()
    const userState = UserSate()
    const userListState = UserListState()
    const deleteUserById = async (id:string) => {
        siteState.loadingTrue()
        if(id == userState.getUserId){
            siteState.errorText = 'Самоудаление не рекомендовано'
            return
        }
        

        const headersData = {
            'Content-Type': 'application/json',
        }
        if (userState.getUserToken) {
            headersData['Authorization'] = `Bearer ${userState.userToken}`
        }

        return fetch(url + `/admin_profile?id=${id}`, {
            method: 'DELETE',
            headers: headersData,
        })
        .then(async (res) => {
            if (!res.ok) {
                const errorMessage = await res.text
                const errorText = `HTTP error! status: ${res.status}, message: ${errorMessage}`
                siteState.errorText = errorText
                throw new Error(errorText);
            }
            userListState.deleteUserById(id)
            return res.text;
        })
        .catch((err) => {
            siteState.errorText = 'Неудалось удалить пользователя';
            throw err;
          })
          .finally(() => {
            siteState.loadingFalse()
          });

    }
    return {
        deleteUserById
    }
}
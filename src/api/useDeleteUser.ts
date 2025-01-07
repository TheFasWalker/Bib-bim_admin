import { computed, ref } from "vue"
import { SiteState } from "../store/SiteState"
import { UserSate } from "../store/UserState"

const url = import.meta.env.VITE_API_DB_URL

export default function () {
    const loading = ref(false)
    const siteState = SiteState()
    const userState = UserSate()
    const deleteUserById = async (id:string) => {
        loading.value = true

        const headersData = {
            'Content-Type': 'application/json',
        }
        if (userState.getUserToken) {
            headersData['Bearer-Token'] = userState.userToken
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
            siteState.deleteUserById(id)
            return res.json();
        })
        .catch((err) => {
            siteState.errorText = 'Неудалось удалить пользователя';
            throw err;
          })
          .finally(() => {
            loading.value = false;
          });

    }
    return {
        loading: computed(() => loading.value),
        deleteUserById
    }
}
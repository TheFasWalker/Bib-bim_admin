import { SiteState } from "../store/SiteState"
import { UserSate } from "../store/UserState"
const url = import.meta.env.VITE_API_DB_URL


export default function () {
    const siteState = SiteState()
    const userState = UserSate()
    siteState.loadingTrue()
    siteState.cleanTextError()

    const adminRoles = async () => {
        const headersData = {
            'Content-Type': 'application/json',
        }
        if (userState.getUserToken) {
            headersData['Authorization'] = `Bearer ${userState.userToken}`
        }
        return fetch(url + `/admin_role`, {
            method: 'GET',
            headers:headersData
        })
        .then(async (res) => {
            if (!res.ok) {
                const errorMessage = await res.text
                const errorText = `HTTP error! status: ${res.status}, message: ${errorMessage}`
                siteState.errorText = errorText
                throw new Error(errorText);
            }
            return res.json();
        })
        .catch((err) => {
            siteState.errorText = 'Ошибка получения ролей';
            throw err;
          })
        .finally(() => {
              siteState.loadingFalse()
          });
    }
    return {adminRoles}
}
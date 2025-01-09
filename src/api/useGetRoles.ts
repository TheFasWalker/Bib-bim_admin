import { SiteState } from "../store/SiteState"
const url = import.meta.env.VITE_API_DB_URL


export default function () {
    const siteState = SiteState()
    siteState.loadingTrue()
    siteState.cleanTextError()

    const adminRoles = async () => {
        return fetch(url + `/admin_role`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              },
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
            siteState.loadingFalse()
            throw err;
          })
        .finally(() => {
              siteState.loadingFalse()
          });
    }
    return adminRoles
}
import { ref,computed } from "vue"
import { SiteState } from "../store/SiteState"

const url = import.meta.env.VITE_API_DB_URL


export default function () {
    const loading = ref(false)
    const siteState = SiteState()

    const getUserData = async (id: string) => {
        loading.value = false
        siteState.cleanTextError()

        return fetch (url + `/admin_profile?id=${id}` ,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
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
            siteState.errorText = err.text
            throw err
        })
            .finally(() => {
            loading.value = false
        })
    }
    return {
        loading: computed(() => loading.value),
        getUserData
    }
}
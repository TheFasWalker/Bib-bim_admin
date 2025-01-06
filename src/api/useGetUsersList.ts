import { computed, ref } from "vue"
import { SiteState } from "../store/SiteState"

const url = import.meta.env.VITE_API_DB_URL

export default function () {
    const loading = ref(false)
    const siteState = SiteState()

    const getUserList = async () => {
        loading.value = false
        siteState.cleanTextError()

        return fetch(url + '/admin_profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(async (res) => {
            if (!res.ok) {
                const errorMessage = await res.text
                const errorText = `HTTP error! status: ${res.status}, message: ${errorMessage}`
                siteState.errorText = errorText
                throw new Error(errorText);
            }
            const data = res.json()
            return data;
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
        getUserList
    }
}
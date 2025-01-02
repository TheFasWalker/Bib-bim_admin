import { ref } from "vue"
import { UserSate } from "../store/UserState"
import { SiteState } from "../store/SiteState"

const url = import.meta.env.VITE_API_DB_URL

export default function () {
    const userState = UserSate()
    const siteState = SiteState()
    const loading = ref(false)
    const userData = async (id: string)=>{
        loading.value = true
        siteState.cleanTextError()
        try {
            const res = await fetch(url + `/admin_profile?id=${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }

            })
            console.log('get data')
            if (res.ok) {
                const resData = await res.json()
                userState.userData = resData
            }
        } catch(e:any) {
            siteState.errorText = e.message

        } finally {
            loading.value = false
        }

    }
    return{loading, userData}

}
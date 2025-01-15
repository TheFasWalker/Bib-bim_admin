import { SiteState } from "../../store/SiteState"
import { UserSate } from "../../store/UserState"
import ErrorsToText from "../../functions/ErrorsToText"

const url = import.meta.env.VITE_API_DB_URL

export default function (){
    const siteState = SiteState()
    const userState = UserSate()
    const updateUser = async(userData:string)=>{
        siteState.loadingTrue()
        siteState.cleanTextError()
        const headersData ={
            'Content-Type': 'application/json',
        }
        if (userState.getUserToken) {
            headersData['Authorization'] = `Bearer ${userState.userToken}`
        }

        return fetch(url + `/admin_profile?${userData}`,{
            method:'PATCH',
            headers:headersData
        }).then(async (res)=>{
            if(!res.ok){
                const errorText = await res.text()
                let errorMessage = ErrorsToText(errorText)
                siteState.errorText = errorMessage
                throw new Error(errorMessage);
            }
            siteState.sucsesMessage='Данные пользователя обновлены'
            return res.text;

        }).catch((err) => {
            siteState.errorText = err.text
            throw err
        })
            .finally(() => {
                siteState.loadingFalse()
        })
    }
    return{
        updateUser
    }
}
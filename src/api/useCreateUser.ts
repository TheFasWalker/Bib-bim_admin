const url = import.meta.env.VITE_API_DB_URL
import { sha512 } from "js-sha512"
import { SiteState } from "../store/SiteState"
import { UserSate } from "../store/UserState"
import { ICreateUser } from "../Types"

export default function(){
    const siteState = SiteState()
    const userState = UserSate()
    const createUser = async (userData:ICreateUser)=>{
        userData.password = sha512(userData.password)
        siteState.loadingTrue()
        siteState.cleanTextError()
        const headersData = {
            'Content-Type': 'application/json',
        }
        if(userState.getUserToken){
            headersData['Authorization'] = `Bearer ${userState.getUserToken}`
        }
        // console.log(userData)
        // console.log(JSON.stringify(userData))

        return fetch(url +'/admin_profile',{
            method:'POST',
            headers: headersData,
            body:JSON.stringify(userData)
        })
        .then(async (res)=>{
            // console.log(res.text)
            if(!res.ok){
                const errorMessage = await res.text
                const errorText = `HTTP error! status: ${res.status}, message: ${errorMessage}`
                siteState.errorText = errorText
                throw new Error(errorText);
            }
            return res.text;
        })
        .catch((error) =>{
            // console.log(error.message)
            siteState.errorText = error.message + 'Ошибка создания'
            throw error
        })
        .finally(()=>{
            siteState.loadingFalse()
        })
    }
    return {createUser}
}
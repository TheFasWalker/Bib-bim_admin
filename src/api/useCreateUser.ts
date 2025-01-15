const url = import.meta.env.VITE_API_DB_URL
import { sha512 } from "js-sha512"
import { SiteState } from "../store/SiteState"
import { UserSate } from "../store/UserState"
import { ICreateUser } from "../Types"
import ErrorsToText from "../functions/ErrorsToText"

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

        return fetch(url +'/admin_profile',{
            method:'POST',
            headers: headersData,
            body:JSON.stringify(userData)
        })
        .then(async (res)=>{
            if(!res.ok){
                const errorText = await res.text()
                let errorMessage = ErrorsToText(errorText)
                siteState.errorText = errorMessage
                throw new Error(errorMessage);
            }
            return res.text;
        })
        .catch(async (error) =>{

            siteState.errorText = error.message 
            throw error
        })
        .finally(()=>{
            siteState.loadingFalse()
        })
    }
    return {createUser}
}
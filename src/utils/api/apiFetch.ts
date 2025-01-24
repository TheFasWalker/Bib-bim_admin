import { UserSate } from "../../store/UserState"
import ErrorsToText from "../../functions/ErrorsToText"
const url = import.meta.env.VITE_API_DB_URL
import { SiteState } from "../../store/SiteState"


interface FethcOptions extends RequestInit {
    body?:any
}

export async function apiFetch(endpoint:string, options:FethcOptions={}):Promise<any>{
    const siteState = SiteState();
    const userState = UserSate();
    siteState.cleanMessages();


    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    } as HeadersInit;

    if(userState.getUserToken){
        headers['Authorization'] = `Bearer ${userState.getUserToken}`
    }
    try{
        const response = await fetch (url + endpoint,{
            ...options,
            headers,
            body:options.body ? JSON.stringify(options.body) : null
        })
        const responseBody = await response.text()
        if (!response.ok) {
            const errorMessage = ErrorsToText(responseBody);
            siteState.errorText = errorMessage;
            throw new Error(errorMessage);
        }
        try {
            return JSON.parse(responseBody);
        } catch (e) {
            return responseBody
        }
    }catch(error:any){
        siteState.errorText = error.message;
        throw error;
    }finally{
        siteState.loadingFalse()
    }
}
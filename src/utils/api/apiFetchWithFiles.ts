// import { UserSate } from "../../store/UserState"

// const url = import.meta.env.VITE_API_DB_URL
// import { SiteState } from "../../store/SiteState"
// import errorsToText from "../errorsToText";


// interface FethcOptions extends RequestInit {
//     body?:any
// }

// export async function apiFetchWithFiles(endpoint:string, options:FethcOptions={}):Promise<any>{
//     const siteState = SiteState();
//     const userState = UserSate();
//     siteState.cleanMessages();
//     siteState.loadingTrue()

//     const headers = {
//         ...options.headers,
//     } as HeadersInit;

//     if(userState.getUserToken){
//         headers['Authorization'] = `Bearer ${userState.getUserToken}`
//     }
//     try{
//         const response = await fetch (url + endpoint,{
//             ...options,
//             headers,
//         })
//            const responseBody = await response.text()
//           if (!response.ok) {
//               const errorMessage = errorsToText(responseBody);
//             siteState.errorText = errorMessage;
//             throw new Error(errorMessage);
//         }
//         try {
//             return JSON.parse(responseBody);
//         } catch (e) {
//             return responseBody
//         }
//     }catch(error:any){
//         siteState.errorText = error.message;
//         throw error;
//     }finally{
//         siteState.loadingFalse()
//     }
// }

import { UserSate } from "../../store/UserState"

const url = import.meta.env.VITE_API_DB_URL
import { SiteState } from "../../store/SiteState"
import errorsToText from "../errorsToText";


interface FethcOptions extends RequestInit {
    body?:any
}

export async function apiFetchWithFiles(endpoint:string, options:FethcOptions={}):Promise<any>{
    const siteState = SiteState();
    const userState = UserSate();
    siteState.cleanMessages();
    siteState.loadingTrue()

    const headers = {
        ...options.headers,
    } as HeadersInit;

    if(userState.getUserToken){
        headers['Authorization'] = `Bearer ${userState.getUserToken}`
    }
    try{
        const response = await fetch (url + endpoint,{
            ...options,
            headers,
           body:options.body,
        })
        const responseBody = await response.text()
        if (!response.ok) {

            const errorMessage = errorsToText(responseBody);
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

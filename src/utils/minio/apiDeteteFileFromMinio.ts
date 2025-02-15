import { UserSate } from '../../store/UserState';
import { SiteState } from '../../store/SiteState';
import errorsToText from '../errorsToText';

const acsesskeyString = import.meta.env.VITE_MINIO_ACCESS_KEY_ID
const secretKeyString = import.meta.env.VITE_MINIO_SECRET_ACCESS_KEY
const url = import.meta.env.VITE_API_PHOTOS_URL
export async function apiDeteteFileFromMinio (fileUrl:string):Promise<any>{
    const siteState = SiteState()
    const userState = UserSate()
    const headers: Record<string, string> = {};
    
    if (userState.getUserToken) {
        headers['Authorization'] = `Bearer ${userState.getUserToken}`;
    }
    try{
        const response = await fetch(`${url}${fileUrl}`, {
            method: 'DELETE',
            headers: headers
        });

        const responseBody = await response.text();
        
        if (!response.ok) {
            const errorMessage = errorsToText(responseBody);
            siteState.errorText = errorMessage;
            throw new Error(errorMessage);
        }

        try {
            return JSON.parse(responseBody);
        } catch (e) {
            return responseBody;
        }
    }catch(error:any){
        siteState.errorText = error.message;
        throw error;
    }finally{
        siteState.loadingFalse()
    }
}
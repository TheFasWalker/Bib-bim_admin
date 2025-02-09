import { UserSate } from '../../store/UserState';
import { SiteState } from '../../store/SiteState';
import errorsToText from '../errorsToText';
const acsesskeyString = import.meta.env.VITE_MINIO_ACCESS_KEY_ID
const secretKeyString = import.meta.env.VITE_MINIO_SECRET_ACCESS_KEY
const url = import.meta.env.VITE_API_PHOTOS_URL


export async function apiFethcWithFiles(endpoint: string,file:File, imageName:string):Promise<any> {
    const siteState = SiteState()
    const userState = UserSate()
    const fileBlob = new Blob([file], { type: file.type })
    const headerData = {
        'x-amz-acl': 'public-read',
        'Content-Type': file.type,
        'Content-Length': file.size.toString()
    }
    if(userState.getUserToken){
        headerData['Authorization'] = `Bearer ${userState.getUserToken}`
    }
    try {
        const response = await fetch(`${url}/${endpoint}/${imageName}`, {
            method: 'PUT',
            body:fileBlob,
            headers: headerData
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
    } catch(error:any){
        siteState.errorText = error.message;
        throw error;
    } finally {
        siteState.loadingFalse()
    }
}
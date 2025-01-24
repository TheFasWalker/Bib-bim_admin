import { apiFetch } from "../../utils/api/apiFetch"

export default function () {
    const getUserData = async(id:string)=>{
        return apiFetch(`/admin_profile?id=${id}`,{
            method:'GET'
        })
    }
    return {
        getUserData
    }
}
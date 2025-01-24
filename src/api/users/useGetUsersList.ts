import { apiFetch } from "../../utils/api/apiFetch"

export default function () {
    const getUserList = async () =>{
        return apiFetch('/admin_profile',{
            method:'GET'
        })
    }
    return {
        getUserList
    }
}
import { apiFetch } from "../utils/api/apiFetch"



export default function () {
    const adminRoles = async()=>{
        return apiFetch('/admin_role',{
            method:'GET'
        })
    }
    
    return {adminRoles}
}
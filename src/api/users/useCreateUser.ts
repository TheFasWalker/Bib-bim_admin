import { sha512 } from "js-sha512"
import { ICreateUser } from "../../Types"
import { apiFetch } from "../../utils/api/apiFetch"

export default function(){
    const createUser = async (userData:ICreateUser)=>{
        userData.password = sha512(userData.password)
            return apiFetch('/admin_profile',{
                method:"POST",
                body:userData
            })
    }
    return {createUser}
}
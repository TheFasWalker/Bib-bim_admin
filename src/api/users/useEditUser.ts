import { SiteState } from "../../store/SiteState"
import { apiFetch } from "../../utils/api/apiFetch"


export default function (){
    const siteState = SiteState()
    const updateUser = async (userData:string)=>{
        return apiFetch(`/admin_profile?${userData}`,{
            method:'PATCH'
        }).then(()=>{
            siteState.sucsesMessage = 'Данные пользователя обновлены' 
        })
    }
    return{
        updateUser
    }
}
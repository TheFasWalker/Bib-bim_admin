import { apiFetch } from "../../utils/api/apiFetch"

export default function (){
    const editPost = async(postData:string)=>{
        return apiFetch(`/posts?${postData}`,{
            method:'PATCH'
        })
    }
    return{ editPost}
}
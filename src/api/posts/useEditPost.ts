import { ICreatePost } from "../../Types"
import { apiFetch } from "../../utils/api/apiFetch"

export default function (){
    const editPost = async(postData:ICreatePost, id:string)=>{
        return apiFetch(`/posts?id=${id}`,{
            method:'PATCH',
            body:postData
        })
    }
    return{ editPost}
}
import { IPost } from "../../Types";
import { apiFetch } from "../../utils/api/apiFetch";

export default function(){
    const createPost = async (postData:IPost)=>{
        return apiFetch('/posts',{
            method:'POST',
            body:postData
        })
    }
    return {createPost}
}
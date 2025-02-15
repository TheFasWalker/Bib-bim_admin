import { ICreatePost } from "../../Types";
import { apiFetch } from "../../utils/api/apiFetch";

export default function(){
    const createPost = async (postData:ICreatePost)=>{
        return apiFetch('/posts',{
            method:'POST',
            body:postData
        })
    }
    return {createPost}
}
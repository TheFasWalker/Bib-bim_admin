import { PostsState } from "../../store/PostsState"
import { apiFetch } from "../../utils/api/apiFetch"

export default function(){
    const postsState = PostsState()
    const getAllPosts = async(query:string)=>{
        return apiFetch(`/posts${query}`,{
            method:"GET"
        })
        .then((data)=>{
            console.log(data)
            postsState.postsList = data
        })

    }
    return{
        getAllPosts
    }
}
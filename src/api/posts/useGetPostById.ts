import { PostsState } from "../../store/PostsState"
import { apiFetch } from "../../utils/api/apiFetch"

export default function () {
    const postsState = PostsState()
    const getPostById = async (id: string) => {
        return apiFetch(`/posts?id=${id}`, {
            method:'GET'
        })
            .then((data) => postsState.postItem = data)
    }
    return {
        getPostById
    }
}
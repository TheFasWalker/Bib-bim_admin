import { PostsState } from './../../store/PostsState';
import { SiteState } from "../../store/SiteState";
import { apiFetch } from '../../utils/api/apiFetch';

export default function () {
    const siteState = SiteState()
    const postsState = PostsState()

    const deletePostById = async (id: string) => {
        return apiFetch(`/posts?id=${id}`, {
            method:'DELETE'
        }).then(() => {
            postsState.deletePostById(id)
            siteState.sucsesMessage='Пост удалён'
        })
    }
    return {
        deletePostById
    }
}
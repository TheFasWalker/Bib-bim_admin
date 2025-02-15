import { ref } from "vue"
import { apiFetch } from "../../utils/api/apiFetch"
import { IPost } from "../../Types"

export default function () {
    const postData = ref<IPost | null>(null)

    const getPostById = async (id: string) => {
            return apiFetch(`/posts?id=${id}`, {
                method:'GET'
            }).then(data=>postData.value = data)
            
    }
    return {
        getPostById,
        postData
    }
}

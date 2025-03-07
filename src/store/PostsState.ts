import { defineStore } from "pinia";
import { IGetPostsList } from "../Types";

export const PostsState = defineStore('postsList',{
    state:()=>({
        postsList: null as IGetPostsList | null,
    }),
    actions: {
        deletePostById(id: string) {
            if (this.postsList.findIndex((post) => post.id === id) !== -1) {
                this.postsList = this.postsList.filter((post)=> post.id != id)
            }
        }
    }
})
import { defineStore } from "pinia";
import { IPost } from "../Types";

export const PostsState = defineStore('postsList',{
    state:()=>({
        postsList: null as IPost[] | null,
        postItem:null as IPost | null
    }),
    actions: {
        deletePostById(id: string) {
            if (this.postsList.findIndex((post) => post.id === id) !== -1) {
                this.postsList = this.postsList.filter((post)=> post.id != id)
            }
        },
        getPostByIdFromState(id: string) {
            if (this.postsList) {
                const post = this.postsList.find((post) => post.id === id);
                this.postItem = post
            }
        },
    }
})
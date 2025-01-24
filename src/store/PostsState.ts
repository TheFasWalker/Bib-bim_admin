import { defineStore } from "pinia";
import { IPost } from "../Types";

export const PostsState = defineStore('postsList',{
    state:()=>({
        postsList:null as IPost[] | null
    })
}) 
import PostCreate from "../../pages/posts/PostCreate.vue";
import PostsListPage from "../../pages/posts/PostsListPage.vue";
import { CustomRouteRecordRaw } from "../types";
import EditPost from "../../pages/posts/PostEdit.vue";

const adminKey = import.meta.env.VITE_ADMIN_ROLE_CODE
const managerKey = import.meta.env.VITE_MANAGER_ROLE_CODE
const partnerKey = import.meta.env.VITE_PARTNER_ROLE_CODE

export const postsRoutes: CustomRouteRecordRaw[] = [
    {
        path: '/posts',
        children:[
            {
                path:'',
                name: 'posts',
                component: PostsListPage,
                meta:{requireAuth:true,acsessRoles: [adminKey, managerKey]}
            },
            {
                path:'create',
                name: 'createPost',
                component: PostCreate ,
                meta:{requireAuth:true,acsessRoles: [adminKey, managerKey]}
            },
            {
                path:'edit/:id',
                name: 'editPost',
                component: EditPost ,
                meta:{requireAuth:true,acsessRoles: [adminKey, managerKey]}
            }
        ]
    }
]
import CreateUser from "../../pages/CreateUser.vue";
import UserListPage from "../../pages/UserListPage.vue";
import { CustomRouteRecordRaw } from "../types";

const adminKey = import.meta.env.VITE_ADMIN_ROLE_CODE

export const usersRoutes: CustomRouteRecordRaw[] = [
    {
        path: '/users',
        children: [
            {
                path: '',
                name: 'users',
                component: UserListPage,
                meta:{requireAuth:true,acsessRoles: [adminKey]}
            },
            {
                path: 'create',
                name: 'createUser',
                component: CreateUser,
                meta:{requireAuth:true,acsessRoles: [adminKey]}
            }
        ]
    }
]
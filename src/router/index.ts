import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginPage from '../pages/LoginPage.vue';
import { UserSate } from "../store/UserState";
import Error505 from "../pages/Error505.vue";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import LessonsListPage from "../pages/LessonsListPage.vue";
import PartnersPage from "../pages/PartnersPage.vue";
import PostsListPage from "../pages/posts/PostsListPage.vue";
import UiPage from "../pages/UiPage.vue";
import UserListPage from "../pages/UserListPage.vue";
import CreateUser from "../pages/CreateUser.vue";
import Error404 from "../pages/Error404.vue";
import { UserRoles } from "../Types";

import PostCreate from "../pages/posts/PostCreate.vue";
import PostPage from "../pages/posts/PostPage.vue";
import EditPost from "../pages/posts/PostEdit.vue";
import UserPage from "../pages/UserPage.vue";
import checkAcsessByRole from "../utils/checkAcessByRole";

const adminKey = import.meta.env.VITE_ADMIN_ROLE_CODE
const managerKey = import.meta.env.VITE_MANAGER_ROLE_CODE
const partnerKey = import.meta.env.VITE_PARTNER_ROLE_CODE

interface RouteMeta {
    requireAuth?: boolean
    requireRole?: string[]
    public?:boolean
}

type CustomRoteRecordRaw = RouteRecordRaw & { meta?: RouteMeta }

const routes: CustomRoteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
        meta:{public:true}
    },
    {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: {requireAuth:true}
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage,
        meta:{requireAuth:true}
    },
    {
        path: '/lessons',
        children: [
            {
                path: '',
                name: 'lessons',
                component: LessonsListPage,
                meta:{requireAuth:true, acsessRoles: [adminKey,managerKey]}
            },
            {
                path: 'create',
                name: 'createLesson',
                component: LessonsListPage,
                meta:{requireAuth: true, acsessRoles: [adminKey,managerKey]}
            }
        ]
    },
    {
        path: '/partners',
        name: 'partners',
        component: PartnersPage,
        meta:{requireAuth:true, acsessRoles:[adminKey, partnerKey]}
    },
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
            },
            {
                path:':id',
                name: 'showPost',
                component: PostPage ,
                meta:{requireAuth:true,acsessRoles: [adminKey, managerKey]}
            },


           
        ]
    },
    {
        path: '/ui',
        name: 'ui',
        component: UiPage,
        meta:{requireAuth:true,acsessRoles: [adminKey]}
    },
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

    },
    {
        path:'/lk',
        name:'lk',
        component:UserPage,
        meta:{requireAuth:true}
    },
    {
        path: '/505',
        name: 'error505',
        component: Error505,
        meta:{public:true}
    },
        {
            path:'/:pathMatch(.*)*',
            name:'error404',
            component: Error404,
            meta:{public:true}
        },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const userSatate = UserSate()
    const isAuth = !!userSatate.getUserToken
    const acsessRoles = to.meta?.acsessRoles as UserRoles[] | undefined
    const requiredAuth = to.meta?.requireAuth
    const publicRoute = to.meta?.public

    if (publicRoute) {
        next()
        return
    }

    if (requiredAuth) {
        if (!isAuth) {
            next({ name: 'error505' })
            return
        }

        if (acsessRoles) {
            const userRole = userSatate.getUserRole as UserRoles | null;
            if(!userRole || !checkAcsessByRole(userRole, acsessRoles)){
                next({ name: 'error505' })
                return
            }
        }
    }
    next();
})
export default router
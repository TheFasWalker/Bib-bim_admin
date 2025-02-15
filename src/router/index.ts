import { createRouter, createWebHistory } from "vue-router";
import Error404 from "../pages/Error404.vue";
import Error505 from '../pages/Error505.vue'
import { errorHandlerMiddleware, guardMiddleware } from "./guards";
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import { postsRoutes } from "./routes/posts";
import { usersRoutes } from "./routes/users";
import PartnersPage from "../pages/PartnersPage.vue";
import UserPage from "../pages/UserPage.vue";
import UiPage from "../pages/UiPage.vue";
import { adminKey } from "./index__old";

const adminKey = import.meta.env.VITE_ADMIN_ROLE_CODE
const managerKey = import.meta.env.VITE_MANAGER_ROLE_CODE
const partnerKey = import.meta.env.VITE_PARTNER_ROLE_CODE

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...postsRoutes,
        ...usersRoutes,
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
            meta:{requireAuth:true}
        },
        {
            path: '/partners',
            name: 'partners',
            component: PartnersPage,
            meta:{requireAuth:true, acsessRoles:[adminKey, partnerKey]}
        },
        {
            path:'/lk',
            name:'lk',
            component:UserPage,
            meta:{requireAuth:true}
        },
        {
            path: '/ui',
            name: 'ui',
            component: UiPage,
            meta:{requireAuth:true,acsessRoles: [adminKey]}
        },
        {
            path: '/error505',
            name:'error505',
            component: Error505
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'error404',
            component: Error404,
            meta:{public:true}
        }
    ]
})

router.beforeEach(guardMiddleware);
router.beforeEach(errorHandlerMiddleware);

export default router;
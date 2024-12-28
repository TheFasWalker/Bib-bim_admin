import {createRouter,createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import Error404 from '../pages/Error404.vue';
import Error505 from '../pages/Error505.vue';
import LessonsListPage from '../pages/LessonsListPage.vue';
import PartnersPage from '../pages/PartnersPage.vue';
import PostsListPage from '../pages/PostsListPage.vue';
import UiPage from '../pages/UiPage.vue';
import UserListPage from '../pages/UserListPage.vue';


const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomePage
        },
        {
            path:'/login',
            name:'login',
            component:LoginPage
        },
        
        {
            path:'/about',
            name:'about',
            component:AboutPage
        },

        {
            path:'/lessons',
            name:'lessons',
            component:LessonsListPage
        },
        {
            path:'/partners',
            name:'partners',
            component:PartnersPage
        },
        {
            path:'/posts',
            name:'posts',
            component:PostsListPage
        },
        {
            path:'/ui',
            name:'ui',
            component:UiPage
        },
        {
            path:'/users',
            name:'users',
            component:UserListPage
        },
        {
            path:'/404',
            name:'error404',
            component:Error404
        },
        {
            path:'/505',
            name:'error505',
            component:Error505
        },

    ]
})

export default router;
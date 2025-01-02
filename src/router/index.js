// import {createRouter,createWebHistory} from 'vue-router'
// import HomePage from '../pages/HomePage.vue';
// import AboutPage from '../pages/AboutPage.vue';
// import LoginPage from '../pages/LoginPage.vue';
// import Error404 from '../pages/Error404.vue';
// import Error505 from '../pages/Error505.vue';
// import LessonsListPage from '../pages/LessonsListPage.vue';
// import PartnersPage from '../pages/PartnersPage.vue';
// import PostsListPage from '../pages/PostsListPage.vue';
// import UiPage from '../pages/UiPage.vue';
// import UserListPage from '../pages/UserListPage.vue';
// import LessonCreatePage from '../pages/LessonCreatePage.vue';
// import CreateUser from '../pages/CreateUser.vue';


// const router = createRouter({
//     history:createWebHistory(import.meta.env.BASE_URL),
//     routes:[
//         {
//             path:'/',
//             name:'home',
//             component:HomePage
//         },
//         {
//             path:'/login',
//             name:'login',
//             component:LoginPage
//         },

//         {
//             path:'/about',
//             name:'about',
//             component:AboutPage
//         },

//         {
//             path:'/lessons',
//             children:[
//                 {
//                     path: '',
//                     name:'lessons',
//                     component: LessonsListPage
//                 },
//                 {
//                     path:'create',
//                     name:'createLesson',
//                     component:LessonCreatePage
//                 }
//             ]
//         },
//         {
//             path:'/partners',
//             name:'partners',
//             component:PartnersPage
//         },
//         {
//             path:'/posts',
//             name:'posts',
//             component:PostsListPage
//         },
//         {
//             path:'/ui',
//             name:'ui',
//             component:UiPage
//         },
//         {
//             path:'/users',
//             children: [
//                 {
//                     path: '',
//                     name:'users',
//                     component:UserListPage
//                 },
//                 {
//                     path: 'create',
//                     name: 'createUser',
//                     component:CreateUser

//                 }
//             ]
//         },
//         {
//             path:'/404',
//             name:'error404',
//             component:Error404
//         },
//         {
//             path:'/505',
//             name:'error505',
//             component:Error505
//         },

//     ]
// })

// export default router;
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
import LessonCreatePage from '../pages/LessonCreatePage.vue';
import CreateUser from '../pages/CreateUser.vue';


const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/login',
            name:'login',
            component:LoginPage
        },
        {
            path:'/',
            name:'home',
            component:HomePage
        },
        {
            path:'/about',
            name:'about',
            component:AboutPage
        },
        {
            path:'/lessons',
            children:[
                {
                    path: '',
                    name:'lessons',
                    component: LessonsListPage
                },
                {
                    path:'create',
                    name:'createLesson',
                    component:LessonCreatePage
                }
            ]
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
            children: [
                {
                    path: '',
                    name:'users',
                    component:UserListPage
                },
                {
                    path: 'create',
                    name: 'createUser',
                    component:CreateUser

                }
            ]
        },
        {
            path:'/505',
            name:'error505',
            component:Error505
        },
        {
            path:'/:pathMatch(.*)*',
            name:'error404',
            component:Error404
        },
    ]
})


export default router;

import {createRouter,createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import CatalogPage from '../pages/CatalogPage.vue';


const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'',
            name:'home',
            component:HomePage
        },
        {
            path:'/about',
            name:'about',
            component:AboutPage
        },
        {
            path:'/catalog',
            name:'catalog',
            component:CatalogPage
        },
    ]
})

export default router;
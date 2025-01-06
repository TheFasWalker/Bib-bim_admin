import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
// import router from './router/index'
import router from './router/index_old'
const pinia = createPinia();


const app = createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')

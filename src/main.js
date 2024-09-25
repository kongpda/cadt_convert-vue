import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import ServicePage from './pages/ServicePage.vue'
import TeamPage from './pages/TeamPage.vue'
import WhyUsPage from './pages/WhyUsPage.vue'
import CoursePage from './pages/CoursePage.vue'
import CoursePageIndex from './pages/course/CoursePageIndex.vue'
import FormComponent from './components/FormComponent.vue'
import Dashboard from './pages/Dashboard.vue'
import Pinia from '@/pages/pinia.vue'
const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/service', component: ServicePage },
    { path: '/why', component: WhyUsPage },
    { path: '/team', component: TeamPage },
    { path: '/course', component: CoursePage },
    { path: '/course/:titleURL', component: CoursePageIndex },
    { path: '/form-login', component: FormComponent },
    { path: '/dashboard', component: Dashboard },
    { path: '/pinia', component: Pinia },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')

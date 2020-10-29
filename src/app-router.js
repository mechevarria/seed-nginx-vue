import Vue from 'vue'
import VueRouter from 'vue-router'
import AppHome from './components/Home.vue'
import AppTable from './components/Table.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/home',
    component: AppHome,
    name: 'Home'
}, {
    path: '/table',
    component: AppTable,
    name: 'Table'
}, {
    path: '*',
    redirect: '/home'
}]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router
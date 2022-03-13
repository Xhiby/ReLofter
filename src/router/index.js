import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../page/login/Login.vue'
import PhoneLogin from '../page/login/PhoneLogin.vue'

import Index from '../page/index/Index.vue'
import PhoneIndex from '../page/index/PhoneIndex.vue'

import More from '../page/more/More.vue'

import User from '../page/user/User.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/phonelogin',
        name: 'PhoneLogin',
        component: PhoneLogin
    },
    {
        path: '/phoneindex',
        name: 'PhoneIndex',
        component: PhoneIndex
    },
    {
        path: '/index',
        name: 'Index',
        component: Index
    },
    {
        path: '/more',
        name: 'More',
        component: More
    },
    {
        path: '/user',
        name: 'User',
        component: User
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
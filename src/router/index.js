import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index'
import Sort from '../views/sort'
import BookList from '../views/bookList'
import Details from '../views/details'
import User from '../views/login/index.vue'
import Login from '../views/login/login.vue'
import Register from '../views/login/register.vue'
Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            component: Index,
        },
        {
            path: '/tag',
            name:'sort',
            component: Sort,
            children: [
                {
                    path:'/tag/:name',
                    component: BookList
                },
                // {
                //     path: '/:name/:sort',
                //     name:'sort',
                //     component: BookList,
                //     // meta: { keepAlive: true },
                // }
            ]
        },
        {
            path: '/details/:id',
            name:'details',
            component:Details
        },
        //登录注册页面路由
        {
            path: '/user',
            component: User,
            name: 'user',
            redirect: '/user/login',
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: Login
                },
                {
                    path: 'register',
                    name: 'register',
                    component: Register
                }
            ]
        }
       

    ]
})
/*
 * @Descripttion: 路由管理
 * @Author: Sandy
 * @Date: 2024-10-13 08:51:52
 * @LastEditTime: 2024-10-13 21:05:35
 */

import {createRouter,createWebHistory} from 'vue-router'
import HomePage from '@/views/HomePage.vue';

const routes=[
    {
        path :'/',
        name:HomePage,
        component:HomePage,
        children:[
            {
                path:'/',
                component:()=>import('@/views/WelcomePage.vue')
            }
        ]
    }
]

const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router;
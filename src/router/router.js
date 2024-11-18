/*
 * @Descripttion: 路由管理
 * @Author: Sandy
 * @Date: 2024-10-13 08:51:52
 * @LastEditTime: 2024-11-17 08:17:14
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
            },
            {
                path:'/topSearchNews',
                component:()=>import('@/views/common/TopSearchNews.vue')
            },
            {
                path:'/cnBlogNews',
                component:()=>import('@/views/common/CnblogNews.vue')
            },
            {
                path:'/aboutMe',
                component:()=>import('@/views/common/AboutMe.vue')
            },
        ]
    }
]

const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router;
/*
 * @Descripttion: 路由管理
 * @Author: Sandy
 * @Date: 2024-10-13 08:51:52
 * @LastEditTime: 2025-04-24 08:35:53
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
            {
                path:'/newsItem',
                component:()=>import('@/views/common/NewsItem.vue')
            },
            {
                path: '/news/:id',
                name: 'newsDetail',
                component: () => import('@/views/common/NewsDetail.vue')
            }
        ]
    }
]

const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router;
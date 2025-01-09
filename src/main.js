/*
 * @Descripttion: 
 * @Author: Sandy
 * @Date: 2024-10-08 22:22:48
 * @LastEditTime: 2025-01-09 21:06:30
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueParticles from 'vue-particles'
import './css/global.css'

createApp(App).use(router).use(VueParticles).use(ElementPlus).mount('#app')

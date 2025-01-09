<!--
 * @Author: Sandy
 * @Date: 2024-10-13 06:30:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-01-09 20:39:50
 * @Description: 
-->

<template>
    <el-container class="layout-container">
        <el-header > 
            <BaseHeader/>
        </el-header>
        <el-main>
            <LoadingSpinner v-if="isLoading" />
            <router-view v-else v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </el-main>
        <el-footer >
            <BaseFooter/>
        </el-footer>
    </el-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const isLoading = ref(false)
const router = useRouter()

// 路由守卫控制加载状态
router.beforeEach((to, from, next) => {
  isLoading.value = true
  next()
})

router.afterEach(() => {
  // 模拟异步加载完成
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
</script>

<style>
 .el-header{
    height: 60px; /* 设置固定高度 */
    border-bottom: 1px solid #dcdfe6;
    
}
.el-main{
    min-height: calc(100vh - 140px);
    width: 100%;
}
/* 定义动画 */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 应用动画到元素 */
.el-main {
  animation: fadeInDown 1s ease-out forwards;
}
</style>
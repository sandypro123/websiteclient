<!--
 * @Descripttion: 
 * @Author: Sandy
 * @Date: 2024-12-18 21:33:19
 * @LastEditTime: 2025-01-12 21:36:57
-->
<template>
  <el-container class="layout-container">
    <el-header>
      <BaseHeader />
    </el-header>
    <el-main>
      <LoadingSpinner v-if="isLoading" />
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" @data-loaded="handleDataLoaded" />
        </transition>
      </router-view>
    </el-main>
    <el-footer>
      <BaseFooter />
    </el-footer>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BaseHeader from '@/components/BaseHeader.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

const isLoading = ref(false);
const router = useRouter();

// 路由守卫控制加载状态
router.beforeEach((to, from, next) => {
  console.log("加载中");
  isLoading.value = true;
  next();
});

const handleDataLoaded = () => {
  console.log('Data loaded, hiding spinner'); // 调试日志
  isLoading.value = false; // 隐藏加载动画
};
</script>

<style>
.el-header {
  height: 60px;
  border-bottom: 1px solid #dcdfe6;
}
.el-main{
    min-height: calc(100vh - 140px); 
    width: 100%;
}
</style>
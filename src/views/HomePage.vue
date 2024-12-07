<!--
 * @Author: Sandy
 * @Date: 2024-10-13 06:30:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-12-07 08:41:16
 * @Description: 
-->

<template>
    <el-container>
        <el-header > 
            <BaseHeader/>
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
        <el-footer >
            <BaseFooter/>
        </el-footer>
    </el-container>
</template>

<script>
 import BaseHeader from "@/components/BaseHeader.vue";
 import BaseFooter from "@/components/BaseFooter.vue";
export default {
    name:"HomePage",
    components:{
        BaseHeader,
        BaseFooter
    }
}
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
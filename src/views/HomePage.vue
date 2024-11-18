<!--
 * @Author: Sandy
 * @Date: 2024-10-13 06:30:44
 * @LastEditors: Sandy
 * @LastEditTime: 2024-11-14 10:02:24
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
</style>
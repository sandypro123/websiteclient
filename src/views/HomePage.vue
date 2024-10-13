<!--
 * @Descripttion: 首页展示
 * @Author: Sandy
 * @Date: 2024-10-13 09:58:49
 * @LastEditTime: 2024-10-13 21:01:24
-->
<template>
    <el-container>
        <el-header :style="{padding: '0px'}"> 
            <BaseHeader/>
        </el-header>
        <el-main :style="{padding: '0px'}">
            <router-view/>
        </el-main>
        <el-footer :style="{padding: '0px'}">
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
    border-bottom: 1px solid #dcdfe6;
}
.el-main{
    background-color: white;
}
html,body{
    height: 100%;
    margin: 0;
}
#app{
    height: 100%;
}
.el-container{
    height: 100%;
} 
</style>
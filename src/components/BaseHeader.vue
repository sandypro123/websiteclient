<!--
 * @Descripttion: 页面头部组件
 * @Author: Sandy
 * @Date: 2024-10-13 09:43:19
 * @LastEditTime: 2024-10-13 16:34:23
-->
<template>
    <div class="header">
        <div id="header_pic">
            <img style="width: 60px;" src="@/assets/logo.png"/>
        </div>
        <el-menu id="header-el-menu" mode="horizontal" border-bottom: none :default-active="activeIndex"  @select="handleSelect">
            <el-menu-item index="1">"主页"</el-menu-item>
            <el-menu-item index="2">"聚合新闻"</el-menu-item>
            <el-menu-item index="3">"每日精选"</el-menu-item>
            <el-menu-item index="4">"关于"</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    name:"BaseHeader"
}
</script>
<style scoped>
.header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
}

@media (min-width: 992px){
    .header-el-menu{
        width: 30%;
    }
}
@media (max-width: 992px){
    .header-el-menu{
        width: 60%;
    }
} 
</style>
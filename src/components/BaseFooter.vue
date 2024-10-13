<!--
 * @Descripttion: 页面尾部组件
 * @Author: Sandy
 * @Date: 2024-10-13 10:05:59
 * @LastEditTime: 2024-10-13 21:00:34
-->
<template>
    <div class="footer">
        <el-space direction="vertical">
            <el-text class="footer-text" type="info">&copy; {{new Date().getFullYear()}} My Company.All rights reserved</el-text>
        </el-space>
    </div>
</template>

<script>
export default {
    name:"BaseFooter",
}
</script>

<style scoped>
.footer{
    background-color: antiquewhite;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding:0 20px;
    position: fixed; 
}
</style>
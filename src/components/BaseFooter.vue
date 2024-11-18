<!--
 * @Descripttion: 页面尾部组件
 * @Author: Sandy
 * @Date: 2024-10-13 10:05:59
 * @LastEditTime: 2024-11-14 09:01:29
-->
<template>
    <div class="Basefooter">
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
.Basefooter{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}

</style>
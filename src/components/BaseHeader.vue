<!--
 * @Descripttion: 
 * @Author: Sandy
 * @Date: 2024-11-19 17:51:47
 * @LastEditTime: 2025-04-24 08:44:03
-->
<template>
    <div class="header">
        <div id="header_pic" class="header-pic">
            <img style="width: 40px;" src="@/assets/logo.png" />
        </div>
        <el-menu class="header-el-menu" mode="horizontal" border-bottom="none" :default-active="activeIndex"
            @select="handleSelect">
            <el-menu-item index="1">主页</el-menu-item>
            <el-menu-item index="2">焦点</el-menu-item>
            <el-menu-item index="3">文章</el-menu-item>
            <el-menu-item index="4">问答</el-menu-item>
            <el-menu-item index="5">关于</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: "1",
        };
    },
    mounted() {
        const route = this.$route; // 正确获取当前路由对象
        if (route.path === "/") {
            this.activeIndex = "1";
        } else if (route.path === "/topSearchNews") {
            this.activeIndex = "2";
        } else if (route.path === "/newsItem") {
            this.activeIndex = "3";
        } else if (route.path === "/cnBlogNews") {
            this.activeIndex = "4";
        } else if (route.path === "/aboutMe") {
            this.activeIndex = "5";
        }
    },
    methods: {
        handleSelect(key) {
            switch (key) {
                case "1":
                    this.$router.push("/");
                    break;
                case "2":
                    this.$router.push("/topSearchNews");
                    break;
                case "3":
                    this.$router.push("/newsItem");
                break;
                case "4":
                    this.$router.push("/cnBlogNews");
                    break;
                case "5":
                    this.$router.push("/aboutMe");
                    break;
            }
        },
    },

};
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: space-between;
    /* 两端对齐 */
    padding: 0 20px;
    /* 可选，为整体左右留间距 */
}

.header-pic {
    margin-left: 20px;
    /* 距离左边 20px */
    display: flex;
    align-items: center;
    /* 图片垂直居中 */
}

.header-el-menu {
    background-color: #f5f5f5;
    display: flex;
    margin-left: auto;
    /*将菜单推到右侧 */
    min-width: 350px;
}

img {
    display: block;
    /* 防止图片默认的间隙问题 */
}
</style>
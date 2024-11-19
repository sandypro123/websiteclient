<!--
 * @Descripttion: 
 * @Author: Sandy
 * @Date: 2024-11-19 17:51:47
 * @LastEditTime: 2024-11-19 18:15:04
-->
<template>
  <div class="header">
      <div id="header_pic" class="header-pic">
          <img style="width: 40px;" src="@/assets/logo.png" />
      </div>
      <el-menu
          class="header-el-menu"
          mode="horizontal"
          border-bottom="none"
          :default-active="activeIndex"
          @select="handleSelect"
      >
          <el-menu-item index="1">主页</el-menu-item>
          <el-menu-item index="2">聚合新闻</el-menu-item>
          <el-menu-item index="3">每日精选</el-menu-item>
          <el-menu-item index="4">关于</el-menu-item>
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
                  this.$router.push("/cnBlogNews");
                  break;
              case "4":
                  this.$router.push("/aboutMe");
                  break;
          }
      },
  },
  watch: {
      $route(to) {
          if (to.path === "/") {
              this.activeIndex = "1";
          } else if (to.path === "/topSearchNews") {
              this.activeIndex = "2";
          } else if (to.path === "/cnBlogNews") {
              this.activeIndex = "3";
          } else if (to.path === "/aboutMe") {
              this.activeIndex = "4";
          }
      },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: space-between; /* 两端对齐 */
  padding: 0 20px; /* 可选，为整体左右留间距 */
}

.header-pic {
  margin-left: 20px; /* 距离左边 20px */
  display: flex;
  align-items: center; /* 图片垂直居中 */
}

.header-el-menu {
  background-color: #f5f5f5;
  display: flex;
  
  margin-left: auto; /* 将菜单推到右侧 */
}

img {
  display: block; /* 防止图片默认的间隙问题 */
}
</style>

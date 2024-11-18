<!--
 * @Descripttion: 页面头部组件
 * @Author: Sandy
 * @Date: 2024-10-13 09:43:19
 * @LastEditTime: 2024-11-18 21:14:58
-->
<template>
    <div class="header">
        <div id="header_pic">
            <img style="width: 40px;" src="@/assets/logo.png"/>
        </div>
        <el-menu class="header-el-menu" mode="horizontal" border-bottom="none" :default-active="activeIndex"  @select="handleSelect">
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
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key) {
      switch (key) {
        case '1':
          this.$router.push('/');
          break;
        case '2':
          this.$router.push('/topSearchNews');
          break;
        case '3':
          this.$router.push('/cnBlogNews');
          break;
        case '4':
          this.$router.push('/aboutMe');
          break;
      }
    }
  },
  watch: {
      '$route'(to) {
        if (to.path === '/') {
          this.activeIndex = '1';
        } else if (to.path === '/topSearchNews') {
          this.activeIndex = '2';
        } else if (to.path === '/cnBlogNews') {
          this.activeIndex = '3';
        } else if (to.path === '/aboutMe') {
          this.activeIndex = '4';
        }
      }
    }
};
</script>
<style scoped>
.header {
    display: flex;
    justify-content: space-between;
}
.header-el-menu{
    background-color: #f5f5f5;
}
.header_pic{

}
</style>
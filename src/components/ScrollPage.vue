<!--
 * @Author: Sandy
 * @Date: 2024-11-14 14:15:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-17 08:13:36
 * @Description: 
-->
<template>
    <el-scrollbar ref="scroll" style="height:100%">
      <slot></slot>
      <div style="height: 40px;margin-top: 10px;z-index: 1" v-loading="loading" element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading" element-loading-background="rgba(245,245,245)"></div>
    </el-scrollbar>
  </template>
  
  <script>
  export default {
    name: "ScrollPage",
    props: {
      loading: Boolean,
      noData: Boolean,
      offset: Number
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      // 移除对整个网页滚动事件的监听
      window.removeEventListener('scroll', this.handleScroll);
    },
    data() {
      return {
        scrollAction: {
          x: undefined,
          y: undefined
        },
        lastScrollTime: 0,
        leadTime: 200
      };
    },
    methods: {
      handleScroll() {
        //加入防抖逻辑
        let now = new Date().getTime();
        if (now - this.lastScrollTime < this.leadTime) {
          return;
        }
        this.lastScrollTime = now;
        if (!this.noData) {
          let curHeight = document.documentElement.scrollTop || document.body.scrollTop;
          //console.log("window.innerHeight"+window.innerHeight+"curHeight"+curHeight+"document.documentElement.scrollHeight"+document.documentElement.scrollHeight+"this.offset"+this.offset)
          if ((window.innerHeight + curHeight +this.offset >= document.documentElement.scrollHeight)) {
            if (!this.loading) {
              this.$emit('load');
            }
          }
        }
      }
    }
  };
  </script>
  
  <style scoped></style>
<!--
 * @Descripttion: 
 * @Author: Sandy
 * @Date: 2024-11-17 08:09:25
 * @LastEditTime: 2024-11-17 08:10:20
-->
<template>
    <el-card class="me-area" :body-style="{ padding: '16px' }">
      <div class="me-article-header">
        <a @click="view(url)" class="me-article-title">{{title}}</a>
      </div>
  
      <div class="me-artile-description">
        {{content}}
      </div>
    </el-card>
  </template>
  
  <script>
    export default {
    name: 'ArticleItem',
    props: {
        id: Number,
        url: String,
        title: String,
        content: String,
        date: String
    },
    data() {
        return {};
    },
    methods: {
        view(url) {
          window.open(url);
        }
    },
}
  </script>
  
  <style scoped>
  
    .me-article-header {
      /*padding: 10px 18px;*/
      padding-bottom: 10px;
    }
  
    .me-article-title {
      font-weight: 600;
      color: black; /* 文字颜色 */
      text-decoration: underline; /* 无下划线 */
      cursor: pointer; /* 鼠标悬停时显示为指针样式 */
      transition: color 0.3s ease; 
    }
    .me-article-title:hover {
      /* 鼠标悬停时的样式 */
      color: black; /* 鼠标悬停时的文字颜色更深 */
    }
  
    .me-artile-description {
      font-size: 13px;
      line-height: 24px;
      margin-bottom: 10px;
    }
  
  </style>
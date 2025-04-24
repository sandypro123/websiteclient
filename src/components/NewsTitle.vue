<!--
 * @Author: Sandy
 * @Date: 2025-04-18 10:04:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-04-24 08:35:35
 * @Description: 
-->
<template>
    <div class="article-item">
      <div class="article-header">
        <h3 class="article-title" @click="handleTitleClick">{{ article.title }}</h3>
        <span class="article-time">{{ article.time }}</span>
      </div>
      <p class="article-summary">{{ article.summary }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "ArticleItem",
    props: {
      article: {
        type: Object,
        required: true,
        default: () => ({
          title: "默认标题",
          time: "默认时间",
          summary: "默认摘要",
          link: "默认link"
        }),
      },
    },
    methods: {
      handleTitleClick() {
        // 假设 this.article.link 是你要跳转的 ID 或路径
        const routeUrl = this.$router.resolve({
          name: 'newsDetail',
          params: { id: this.article.link }
        });
        // 使用 window.open 打开新窗口或新标签页
        window.open(routeUrl.href, '_blank');
      }
    }
  };
  </script>
  
  <style scoped>
  .article-item {
    width: 100%;
    margin-bottom: 16px;
    border-bottom: 1px solid #d7cfcf;
  }
  
  .article-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  
  .article-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    margin: 0;
    cursor: pointer;
    transition: color 0.3s ease;
    max-width: calc(100% - 180px);
    /* 为时间留出120px的空间 */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .article-title:hover {
    color: #1e90ff;
  }
  
  .article-time {
    font-size: 1rem;
    color: #666;
    min-width: 120px;
    /* 确保时间宽度足够 */
  }
  
  .article-summary {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
  }
  </style>
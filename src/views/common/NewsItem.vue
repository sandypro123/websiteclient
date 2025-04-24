<!--
 * @Author: Sandy
 * @Date: 2025-04-18 09:37:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-04-24 08:36:48
 * @Description: 
-->
<template>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px" class="aside">Aside</el-aside>
        <div class="main-layout">
          <el-main>
            <el-header class="header">最新文章</el-header>
            <div class="newsItem-page">
              <article-item v-for="article in articles" :key="article.id" :article="article" class="article-item" />
            </div>
            <div class="pagination">
              <button :disabled="innerPage.pageNumber === 0" @click="lastPage" class="page-button">上一页</button>
              <button :disabled="noMoreData" @click="nextPage" class="page-button">下一页</button>
            </div>
            <div v-if="loading" class="loading-indicator">加载中...</div>
          </el-main>
        </div>
      </el-container>
    </div>
  </template>
  
  <script>
  import ArticleItem from '@/components/NewsTitle.vue'
  import { getNews } from '@/api/GetArticle'
  
  export default {
    name: "NewsItemPage",
    props: {
      offset: {
        type: Number,
        default: 100
      },
      page: {
        type: Object,
        default() {
          return {}
        }
      },
    },
    components: {
      ArticleItem, // 确保正确注册组件
    },
    data() {
      return {
        articles: [], // 用于存储获取到的文章数据
        loading: false,
        noData: false,
        noMoreData: false,
        innerPage: {
          pageSize: 10,
          pageNumber: 0,
        },
      }
    },
    watch: {
      'page': {
        handler() {
          this.noData = false
          this.articles = []
          this.innerPage = this.page
          this.getNews()
        },
        deep: true
      }
    },
    created() {
      this.getNews()
    },
    methods: {
      getNews() {
        this.loading = true
        const params = {
          page: this.innerPage.pageNumber,
          size: this.innerPage.pageSize,
        };
        console.log("Requesting news with parameters:", params);
        getNews(params.page, params.size) // 调用 API 方法获取数据
          .then(response => {
            console.log("Received response:", response);
            if (response.data && response.data.content) {
              this.articles = response.data.content; // 假设 API 返回的数据结构是 { data: { content: [...] } }
              console.log("Articles updated:", this.articles);
              this.noMoreData = this.articles.length < this.innerPage.pageSize;
            } else {
              console.warn("Unexpected response structure");
              this.articles = [];
              this.noMoreData = true;
            }
            this.loading = false;
            this.handleDataLoaded();
          })
          .catch(error => {
            console.error('获取文章失败:', error);
            this.loading = false;
            this.noData = true;
          });
      },
      handleDataLoaded() {
        this.$emit('data-loaded'); // 通知父组件数据已加载
      },
      lastPage() {
        if (this.innerPage.pageNumber > 0) { // 确保页码不小于 0
          this.innerPage.pageNumber -= 1;
          this.getNews();
        }
      },
      nextPage() {
        if (!this.noMoreData) {
          this.innerPage.pageNumber += 1; // 增加页码
          this.getNews(); // 获取下一页数据
        }
      }
    }
  }
  </script>
  
  <style>
  .common-layout {
    padding: 20px;
  }
  
  .el-container {
    display: flex;
  }
  
  .aside {
    background-color: #f0f2f5;
    padding: 20px;
  }
  
  .main-layout {
    background-color: white;
    min-width: 800px;
    margin-left: 20px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .header {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .newsItem-page {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .article-item {
    width: 100%;
    max-width: 800px;
    box-sizing: border-box;
    padding: 15px;
    border-bottom: 1px solid #eaeaea;
  }
  
  .pagination {
    margin-top: 20px;
    text-align: center;
  }
  
  .page-button {
    padding: 10px 20px;
    margin: 0 10px;
    background-color: #409eff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .page-button:hover {
    background-color: #66b1ff;
  }
  
  .page-button:disabled {
    background-color: #c0c4cc;
    cursor: not-allowed;
  }
  
  .loading-indicator {
    margin-top: 20px;
    text-align: center;
    color: #606266;
  }
  </style>
  
  
  
  
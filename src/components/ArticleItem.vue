<!--
 * @Author: Sandy
 * @Date: 2024-12-03 13:25:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-01-08 20:27:37
 * @Description: 
-->
<template>
  <el-card class="article-card" :body-style="{ padding: '16px' }">
    <div class="article-header">
      <a @click="view(url)" class="article-title">{{ title }}</a>
    </div>

    <div class="article-description">
      <div v-html="processedContent"></div>
    </div>
    <div class="article-toggle" v-if="hasLongContent">
      <el-button link @click="toggleContent">
        {{ isFullContent ? '收起' : '查看全文' }}
      </el-button>
    </div>
  </el-card>
</template>

<script>
import showdown from 'showdown';

export default {
  name: 'ArticleItem',
  props: {
    id: Number,
    url: String,
    title: String,
    content: {
      type: String,
      required: true
    },
    date: String
  },
  data() {
    return {
      isFullContent: false,
      showdownConverter: new showdown.Converter({
        simplifiedAutoLink: true,
        excludeTrailingPunctuationFromURLs: true
      })
    };
  },
  computed: {
    hasLongContent() {
      return this.content.length > 50;
    },
    processedContent() {
      const content = this.isFullContent ? this.content : this.getTruncatedContent();
      return this.formatContent(content);
    }
  },
  methods: {
    formatContent(text) {
      let html = this.showdownConverter.makeHtml(text);
      return this.processHTML(html);
    },
    processHTML(html) {
      // 处理HTML的辅助方法
      return html
        .replace(/\n/g, '<br>')
        .replace(/<img(.*?)src="(.*?)"(.*?)>/g, 
          (_, p1, p2, p3) => `<img${p1}src="${p2}" class="article-image"${p3}>`)
        .replace(/!\[\](data:image\/svg\+xml;utf8,<svg[^>]*>.*?<\/svg>)/g, '')
        .replace(/<svg[^>]*>.*?<\/svg>/gi, '');
    },
    getTruncatedContent() {
      if (!this.hasLongContent) return this.content;
      
      const truncated = this.content.substring(0, 50);
      return `${truncated}...`;
    },
    view(url) {
      if (!url) return;
      window.open(url, '_blank', 'noopener noreferrer');
    },
    toggleContent() {
      this.isFullContent = !this.isFullContent; // 切换isFullContent状态
    }
  }
}
</script>

<style>
.article-card {
  transition: box-shadow 0.3s ease;
}

.article-card:hover {
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}

.article-description {
  font-size: 14px;
  line-height: 1.6;
  margin: 12px 0;
  color: #333;
}

.article-image {
  max-width: 30%;
  height: auto;
  border-radius: 4px;
  margin: 8px 0;
}

.article-header {
  padding-bottom: 10px;
}

.article-title {
  font-weight: 600;
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.article-title:hover {
  color: #00008B;
}
</style>
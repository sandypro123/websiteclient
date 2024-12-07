<!--
 * @Author: Sandy
 * @Date: 2024-12-03 13:25:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-12-07 08:37:36
 * @Description: 
-->
<template>
  <el-card class="me-area" :body-style="{ padding: '16px' }">
    <div class="me-article-header">
      <a @click="view(url)" class="me-article-title">{{ title }}</a>
    </div>

    <div class="me-article-description">
      <!-- 根据isFullContent的值显示截取的内容或全文 -->
      <div v-html="isFullContent ? displayContent : truncatedContent"></div>
    </div>
    <div class="me-article-toggle" v-if="!isFullContent">
      <el-button link @click="toggleContent">查看全文</el-button>
    </div>
    <div class="me-article-toggle" v-else>
      <el-button link @click="toggleContent">收起</el-button>
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
    content: String,
    date: String
  },
  data() {
    return {
      isFullContent: false, // 控制是否显示全文
      showdownConverter: new showdown.Converter()
    };
  },
  computed: {
    displayContent() {
      // 如果isFullContent为true，则显示全文，并解析Markdown
      let html = this.showdownConverter.makeHtml(this.content);
      // 替换换行符为 <br>
      html = html.replace(/\n/g, '<br>');
      // 处理图片大小，限制最大宽度为30%，高度自动
      html = html.replace(/<img(.*?)src="(.*?)"(.*?)>/g, function (match, p1, p2, p3) {
        return `<img${p1}src="${p2}" style="max-width: 30%; height: auto;"${p3}>`;
      });
      // 移除SVG元素
      html = html.replace(/!\[\](data:image\/svg\+xml;utf8,<svg[^>]*>.*?<\/svg>)/g, '');
      html = html.replace(/<svg[^>]*>.*?<\/svg>/gi, '');
      return html;
    },
    truncatedContent() {
      if (this.content.length > 50) {
        // 使用DOMParser进行安全的HTML截取
        const parser = new DOMParser();
        const doc = parser.parseFromString(this.content.substring(0, 50) + '...', 'text/html');
        return this.showdownConverter.makeHtml(doc.body.textContent || doc.body.innerText || '');
      }
      return this.content;
    }
  },
  methods: {
    view(url) {
      window.open(url);
    },
    toggleContent() {
      this.isFullContent = !this.isFullContent; // 切换isFullContent状态
    }
  },
}
</script>

<style scoped>
.me-article-header {
  padding-bottom: 10px;
}

.me-article-title {
  font-weight: 600;
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.me-article-title:hover {
  color: #00008B;
}

.me-article-description {
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 10px;
}
</style>
<!--
 * @Author: Sandy
 * @Date: 2025-04-22 14:37:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-04-24 08:36:19
 * @Description: 
-->
<template>
    <div class="news-detail">
        <h2>{{ news.title }}</h2>
        <div v-html="news.content" class="news-content"></div>
    </div>
</template>

<script>
import { getNewsDetail } from '@/api/GetArticle'

export default {
    name: "NewsDetail",
    data() {
        return {
            news: {},
            loading: false,
        };
    },
    created() {
        this.getNewsDetail()
    },
    methods: {
        getNewsDetail() {
            this.loading = true
            const id = this.$route.params.id;
            console.log(id)
            getNewsDetail(id).then(response => {
                console.log(response.data[0])
                this.news = response.data[0]; // 使用 this.news 来更新组件状态
                this.loading = false; // 更新加载状态
            }).catch(error => {
                console.error("Error fetching news detail:", error);
                this.loading = false; // 确保在出错时也更新加载状态
            });
        }
    }
};
</script>

<style scoped>
.news-detail {
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    padding: 24px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.news-detail h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 16px;
    text-align: center;
}

.news-content {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    white-space: pre-wrap;
}

.news-content p {
    margin-bottom: 16px;
}

.news-content img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 16px auto;
}

.news-content a {
    color: #007bff;
    text-decoration: none;
}

.news-content a:hover {
    text-decoration: underline;
}
</style>




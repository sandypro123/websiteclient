<!--
 * @Author: Sandy
 * @Date: 2024-11-14 14:11:02
 * @LastEditors: Sandy
 * @LastEditTime: 2024-11-14 15:54:25
 * @Description: 每日精选新闻
-->
<template>
    <scroll-page :loading="loading" :offset="offset" :no-data="noData" v-on:load="load">
        <article-item v-for="a in cnBlogNews" :key="a.id" v-bind="a"></article-item>
    </scroll-page>
</template>
  
<script>
import { getCnBlogNews } from '@/api/GetArticle'
import ArticleItem from '@/components/ArticleItem.vue'
import ScrollPage from '@/components/ScrollPage.vue'

export default {
    name: "CnBlogNews",
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
    watch: {
        'page': {
            handler() {
                this.noData = false
                this.cnBlogNews = []
                this.innerPage = this.page
                this.getCnBlogNews()
            },
            deep: true
        }
    },
    created() {
        this.getCnBlogNews()
    },
    data() {
        return {
            loading: false,
            noData: false,
            innerPage: {
                pageSize: 10,
                pageNumber: 0,
            },
            cnBlogNews: []
        }
    },
    methods: {
        load() {
            this.getCnBlogNews()
        },
        getCnBlogNews() {
            let that = this
            that.loading = true
            getCnBlogNews(that.innerPage.pageNumber, that.innerPage.pageSize).then(data => {
                let newCnblogNews = data.data.content
                if (newCnblogNews && newCnblogNews.length > 0) {
                    that.cnBlogNews = that.cnBlogNews.concat(newCnblogNews)
                    this.innerPage.pageNumber += 1;
                } else {
                    this.noData = true;
                    this.$message({ type: 'warning', message: '没有更多数据!', showClose: true, showIcon: true })
                }
                that.loading = false;
            }).catch(error => {
                console.log("error :" + error)
                that.loading = false;
            })
        },
    },
    components: {
        'article-item': ArticleItem,
        'scroll-page': ScrollPage
    }
}
</script>
<style></style>
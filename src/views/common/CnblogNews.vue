<!--
 * @Author: Sandy
 * @Date: 2024-11-14 14:11:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-01-12 21:12:13
 * @Description: 每日精选新闻
-->
<template>
    <scroll-page :loading="loading" :offset="offset" :no-data="noData" v-on:load="load">
        <div v-for="a in cnBlogNews" :key="a.id" class="article-wrapper" :class="{ 'fade-in': a.visible }">
            <article-item v-if="a.visible" v-bind="a"></article-item>
        </div>
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
                    newCnblogNews = newCnblogNews.map(item => ({
                        ...item,
                        visible: false
                    }))
                    that.cnBlogNews = that.cnBlogNews.concat(newCnblogNews)
                    this.innerPage.pageNumber += 1
                    this.$nextTick(() => {
                        this.observeArticles()
                    })
                } else {
                    this.noData = true
                    this.$message({ type: 'warning', message: '没有更多数据!', showClose: true, showIcon: true })
                }
                that.loading = false
                this.handleDataLoaded();
            }).catch(error => {
                console.log("error :" + error)
                that.loading = false
                this.handleDataLoaded();
            })
            console.log("data loaded")
        },

        observeArticles() {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const index = entry.target.getAttribute('data-index')
                            this.cnBlogNews[index].visible = true
                            observer.unobserve(entry.target)
                        }
                    })
                },
                { rootMargin: '50px' }
            )

            const articleElements = document.querySelectorAll('.article-wrapper')
            articleElements.forEach((element, index) => {
                element.setAttribute('data-index', index)
                observer.observe(element)
            })
        },
        handleDataLoaded() {
            this.$emit('data-loaded'); // 通知父组件数据已加载
        },
    },
    components: {
        'article-item': ArticleItem,
        'scroll-page': ScrollPage
    }
}
</script>
<style scoped>
.article-wrapper {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
}

.fade-in {
    opacity: 1;
    transform: translateY(0);
}
</style>
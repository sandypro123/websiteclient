<template>
    <div class="hot-search-card">
      <div class="card-image">
        <img :src="image" alt="热搜图片">
      </div>
      <div class="card-content">
        <ul>
          <li v-for="(item, index) in displayedItems" :key="index">
            <a href="#" @click.prevent="handleClick(item.url)" class="item-link" :title="item.title">{{ item.title }}</a>
          </li>
        </ul>
      </div>
      <button class="more-button" @click="handleMoreClick">More</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HotSearchCard',
    props: {
      image: {
        type: String,
        required: true
      },
      hotSearchItems: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        displayedItemsCount: 0, // 初始显示10条
      }
    },
    methods: {
      handleClick(url) {
        console.log('热搜话题被点击:', url);
      },
      handleMoreClick() {
        const itemsPerPage = 10; // 每页显示10条数据
        const totalItems = this.hotSearchItems.length-itemsPerPage;
        if (this.displayedItemsCount >= totalItems) {
          this.displayedItemsCount = 0; // 重置为0，显示前10条
        } else {
          this.displayedItemsCount += itemsPerPage;
          if (this.displayedItemsCount > totalItems) {
            this.displayedItemsCount = totalItems; // 不超过总数据量
          }
        }
      }
    },
    computed: {
      displayedItems() {
        const startIndex = this.displayedItemsCount;
        const endIndex = startIndex + 10;
        return this.hotSearchItems.slice(startIndex, endIndex);
      }
    },
  }
  </script>
  
  <style scoped>
  .hot-search-card {
    display: flex;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 2%;
    width: 100%;
    /* 子组件宽度占满容器 */
    position: relative;
    /* 为绝对定位创建参考 */
  }
  
  .card-image {
    width: 30%;
    /* 图片占据子组件宽度的40% */
    height: 100%;
  }
  
  .card-image img {
    width: 100%;
    /* 图片宽度占满.card-image容器 */
    height: auto;
    /* 高度自适应保持图片比例 */
  }
  
  .card-content {
    width: 57%;
    /* 内容占据子组件宽度的60% */
    margin: 3%;
  }
  
  .card-content ul {
    list-style-type: none;
    /* 移除列表项的默认样式 */
    margin: 0;
    padding: 0;
  }
  
  .item-link {
    width: 100%;
    /* 链接宽度占满.card-content容器 */
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    /* 移除链接的下划线 */
    color: #333;
    /* 设置链接颜色 */
    line-height: 1.5;
  }
  
  /* More按钮样式 */
  .more-button {
    position: absolute;
    /* 绝对定位 */
    top: 10px;
    /* 距离顶部10px */
    right: 10px;
    /* 距离右侧10px */
    padding: 5px 10px;
    /* 内边距 */
    color: #007BFF;
    /* 文字颜色 */
    border: none;
    /* 无边框 */
    border-radius: 5px;
    /* 圆角 */
    cursor: pointer;
    /* 鼠标光标变为指针 */
    font-size: 14px;
    /* 字体大小 */
  }</style>
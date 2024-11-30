<template>
  <div class="hot-search-card">
    <div class="left-bg" :style="leftBgStyle">
      <div class="card-image">
        <img :src="image" alt="热搜图片">
      </div>
    </div>
    <div class="card-content">
      <ul>
        <li v-for="(item, index) in displayedItems" :key="index" class="item-row">
          <span
            :class="`num-${(currentSerialNumber + index) < 3 ? ((currentSerialNumber + index) === 0 ? 'red' : (currentSerialNumber + index) === 1 ? 'orange' : 'yellow') : 'black'}`">
            {{ currentSerialNumber + index + 1 }}.
          </span>
          <a href="#" @click.prevent="handleClick(item.url)" class="item-link" :title="item.title">{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <img src="@/assets/next-page.png" alt="More Button" class="more-button" @click="handleMoreClick" />
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
    },
    backgroundColor: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      displayedItemsCount: 0, // 初始显示10条
      currentSerialNumber: 0, // 当前的序列号
    }
  },
  methods: {
    handleClick(url) {
      console.log('热搜话题被点击:', url);
    },
    handleMoreClick() {
      const itemsPerPage = 10; // 每页显示10条数据
      const totalItems = this.hotSearchItems.length - itemsPerPage;
      if (this.displayedItemsCount >= totalItems) {
        this.displayedItemsCount = 0; // 重置为0，显示前10条
        this.currentSerialNumber = 0; // 重置序列号
      } else {
        this.displayedItemsCount += itemsPerPage;
        this.currentSerialNumber += itemsPerPage; // 更新序列号
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
    },
    leftBgStyle() {
      return {
        backgroundColor: this.backgroundColor
      };
    }
  }
}
</script>

<style scoped>
.hot-search-card {
  display: flex;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  height: 365px;
  /* 子组件宽度占满容器 */
  position: relative;
  /* 为绝对定位创建参考 */
}

.left-bg {
  width: 30%;
  height: 100%;
  border-top-left-radius: 10px;
  /* 左上角圆角 */
  border-bottom-left-radius: 10px;
  /* 左下角圆角 */
  display: flex;
  /* 使用弹性布局 */
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
}

.card-image {
  max-width: 90%;
  /* 限制图片宽度 */
  max-height: 90%;
  /* 限制图片高度 */
  object-fit: contain;
  /* 确保图片完整显示 */
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

.card-content ul li {
  display: flex;
  /* 使用flex布局 */
  align-items: center;
  /* 垂直居中对齐 */
}

.item-link {
  /* 链接宽度占满.card-content容器 */
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  /* 移除链接的下划线 */
  color: #333;
  /* 设置链接颜色 */
  line-height: 2.0;
}

.more-button {
  position: absolute; /* 绝对定位 */
  top: 10px; /* 距离容器顶部10px */
  right: 10px; /* 距离容器右侧10px */
  width: 30px; /* 图片宽度 */
  height: 30px; /* 图片高度 */
  cursor: pointer; /* 鼠标变成指针样式 */
  object-fit: contain; /* 确保图片完整显示 */
}
.num-red {
  color: red;
}

.num-orange {
  color: orange;
}

.num-yellow {
  color: yellow;
}

.num-black {
  color: grey;
}
</style>
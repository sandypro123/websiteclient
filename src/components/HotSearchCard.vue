<template>
  <div class="hot-search-card">
    <div class="left-bg" :style="leftBgStyle">
      <div class="card-image">
        <img :src="image" alt="热搜图片" class="hover-scale">
      </div>
    </div>
    <div class="card-content">
      <ul>
        <li v-for="(item, index) in displayedItems" :key="index" class="item-row hover-effect">
          <span :class="[
            'number',
            `num-${(currentSerialNumber + index) < 3 ? ((currentSerialNumber + index) === 0 ? 'red' : (currentSerialNumber + index) === 1 ? 'orange' : 'yellow') : 'black'}`
          ]">
            {{ currentSerialNumber + index + 1 }}
          </span>
          <a href="#" @click.prevent="handleClick(item.url)" class="item-link" :title="item.title">{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <div class="more-button-wrapper">
      <img src="@/assets/next-page.png" alt="More Button" class="more-button hover-rotate" @click="handleMoreClick" />
    </div>
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
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  width: 100%;
  height: 365px;
  transition: all 0.3s ease;
  overflow: hidden;
}

.hot-search-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.left-bg {
  width: 30%;
  height: 100%;
  border-radius: 16px 0 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.card-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hover-scale {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

.card-content {
  width: 57%;
  padding: 24px;
  overflow: hidden;
}

.item-row {
  display: flex;
  align-items: center;
  padding: 8px 0;
  transition: all 0.2s ease;
}

.hover-effect:hover {
  background-color: rgba(0, 0, 0, 0.02);
  transform: translateX(4px);
}

.number {
  font-weight: bold;
  min-width: 24px;
  margin-right: 12px;
  font-size: 15px;
}

.item-link {
  flex: 1;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: color 0.2s ease;
  position: relative;
}

.item-link:hover {
  color: #1890ff;
}

.item-link:hover::after {
  content: attr(title);
  position: absolute;
  left: 0;
  top: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: normal;
  max-width: 300px;
  z-index: 1000;
}

.more-button-wrapper {
  position: absolute;
  top: 16px;
  right: 16px;
}

.hover-rotate {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hover-rotate:hover {
  transform: rotate(90deg);
}

.num-red { color: #ff4d4f; }
.num-orange { color: #ff7a45; }
.num-yellow { color: #ffc53d; }
.num-black { color: #8c8c8c; }

@media screen and (max-width: 768px) {
  .hot-search-card {
    height: auto;
    min-height: 300px;
  }
  
  .card-content {
    padding: 16px;
  }
  
  .item-row {
    padding: 6px 0;
  }
}
</style>
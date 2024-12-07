<template>
  <div class="parent-component">
    <el-row :gutter="20">
      <el-col
        v-for="(card, index) in hotSearchCards"
        :key="index"
        :span="11"
        :offset="1"
      >
        <div class="child-component">
          <!-- 使用 v-lazy-load -->
          <LazyHotSearchCard
            v-if="card.visible"
            :image="card.image"
            :hotSearchItems="card.hotSearchItems"
            :backgroundColor="card.backgroundColor"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ElRow, ElCol } from 'element-plus';
import HotSearchCard from '@/components/HotSearchCard.vue';
import { getTopSearchNews } from '@/api/GetArticle';
import pic1 from '@/assets/Logo/weibo.png';
import pic2 from '@/assets/Logo/zhihu.png';
import pic3 from '@/assets/Logo/douban.png';
import pic4 from '@/assets/Logo/shaoshupai.png';

export default {
  name: 'HomePage',
  components: {
    LazyHotSearchCard: HotSearchCard, // 懒加载的卡片组件
    ElRow,
    ElCol,
  },
  data() {
    return {
      hotSearchCards: [], // 包含 visible 状态
    };
  },
  created() {
    this.getTopSearchNews();
  },
  methods: {
    getImage(data) {
      const images = {
        weibo: { src: pic1, color: '#FFD954' },
        zhihu: { src: pic2, color: '#66B5F0' },
        douban: { src: pic3, color: '#F5F1EE' },
        shaoshupai: { src: pic4, color: '#E41517' },
      };
      return images[data[0].source] || { src: pic1, color: '#FFFFFF' };
    },
    getTopSearchNews() {
      getTopSearchNews()
        .then((data) => {
          let topSearchNews = data.data.data;
          this.hotSearchCards = topSearchNews.map((item) => {
            const imageInfo = this.getImage(item.hotSearchItems);
            return {
              ...item,
              image: imageInfo.src,
              backgroundColor: imageInfo.color,
              visible: false, // 初始化为不可见
            };
          });
          this.observeCards();
        })
        .catch((error) => {
          console.error('Error fetching top search news:', error);
        });
    },
    observeCards() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = entry.target.getAttribute('data-index');
              this.hotSearchCards[index].visible = true;
              observer.unobserve(entry.target); // 停止观察已加载的卡片
            }
          });
        },
        { rootMargin: '100px' } // 提前 100px 开始加载
      );

      this.$nextTick(() => {
        const cardElements = document.querySelectorAll('.child-component');
        cardElements.forEach((element, index) => {
          element.setAttribute('data-index', index); // 记录索引
          observer.observe(element); // 开始观察
        });
      });
    },
  },
};
</script>

<style scoped>
.parent-component {
  width: 100%;
  height: 100%;
}

.child-component {
  width: 100%;
  margin-bottom: 20px;
}
</style>

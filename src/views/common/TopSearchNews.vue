<template>
  <div class="parent-component">
    <el-row :gutter="20">
      <el-col v-for="(card, index) in hotSearchCards" :key="index" :span="11" :offset="1">
        <div class="child-component">
          <HotSearchCard
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
import HotSearchCard from '@/components/HotSearchCard.vue';
import { ElRow, ElCol } from 'element-plus';
import { getTopSearchNews } from '@/api/GetArticle';
import pic1 from '@/assets/Logo/weibo.png';
import pic2 from '@/assets/Logo/zhihu.png';
import pic3 from '@/assets/Logo/douban.png';
import pic4 from '@/assets/Logo/shaoshupai.png';
export default {
  name: 'HomePage',
  components: {
    HotSearchCard,
    ElRow,
    ElCol
  },
  data() {
    return {
      hotSearchCards: []
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
        shaoshupai: { src: pic4, color: '#E41517' }
      };
      return images[data[0].source] || { src: pic1, color: '#FFFFFF' };
    },
    getTopSearchNews() {
      getTopSearchNews()
        .then(data => {
          let topSearchNews = data.data.data;
          this.hotSearchCards = topSearchNews.map(item => {
            const imageInfo = this.getImage(item.hotSearchItems);
            return {
              ...item,
              image: imageInfo.src,
              backgroundColor: imageInfo.color
            };
          });
        })
        .catch(error => {
          console.error('Error fetching top search news:', error);
        });
    }
  }
};
</script>

<style>
.parent-component {
  width: 100%;
  height: 100%;
}

.child-component {
  width: 100%;
  margin-bottom: 20px;
}
</style>

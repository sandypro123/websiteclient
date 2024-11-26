<!--
 * @Author: Sandy
 * @Date: 2024-11-13 09:23:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-21 18:25:51
 * @Description: 
-->
<template>
  <div class="parent-component">
    <el-row :gutter="20">
      <el-col v-for="(card, index) in hotSearchCards" :key="index" :span="11" :offset="1">
        <div class="child-component">
          <HotSearchCard :image="card.image" :hotSearchItems="card.hotSearchItems" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HotSearchCard from '@/components/HotSearchCard.vue';
import { ElRow, ElCol } from 'element-plus';
import { getTopSearchNews } from '@/api/GetArticle'
import pic1 from '@/assets/Logo/weibo.png'
import pic2 from '@/assets/Logo/zhihu.png'
import pic3 from '@/assets/Logo/douban.png'
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
    }
  },
  created() {
    this.getTopSearchNews()
  },
  methods: {
    getImage(data) {
      const images = {
        weibo: pic1,
        zhihu: pic2,
        douban: pic3,
        shaoshupai: pic1
        // 其他 source 对应的图片路径
      };
      return images[data[0].source]; // 提供默认图片路径
    },
    getTopSearchNews() {
      getTopSearchNews().then(data => {
        let topSearchNews = data.data.data
        this.hotSearchCards = topSearchNews.map(item => ({
          ...item,
          image: this.getImage(item.hotSearchItems)
        }));
      }).catch(error => {
        console.error('Error fetching top search news:', error);
      });
  }
}
}
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

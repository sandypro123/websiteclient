<template>
    <div class="welcome-page-container">
        <!-- 背景动画 -->
        <vue-particles
            class="login-background"
            color="#97D0F2"
            :particleOpacity="0.7"
            :particlesNumber="50"
            shapeType="circle"
            :particleSize="4"
            linesColor="#97D0F2"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push">
        </vue-particles>

        <!-- 内容部分 -->
        <div class="content">
            <div class="text-section">
                <h1 class="main-title">Welcome to my website</h1>
                <p class="sub-title">A passionate Java Developer</p>
                <p class="description">Explore projects, news, and more!</p>
            </div>
            
            <!-- 图片轮播 -->
            <el-carousel
                class="carousel"
                :interval="3000"
                type="card"
                height="300px"
                arrow="always"
                autoplay
            >
                <el-carousel-item
                    v-for="(image, index) in images"
                    :key="index"
                >
                    <img class="carousel-image" :src="image.src" :alt="image.alt" />
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
import img1 from "@/assets/Scenery/Scenery-1.jpg";
import img2 from "@/assets/Scenery/Scenery-2.jpg";
import img3 from "@/assets/Scenery/Scenery-3.jpg";
import img4 from "@/assets/Scenery/Scenery-4.jpg";
export default {
    data() {
        return {
            images: [
                { src: img1, alt: "Beautiful Scenery 1" },
                { src: img2, alt: "Beautiful Scenery 2" },
                { src: img3, alt: "Beautiful Scenery 3" },
                { src: img4, alt: "Beautiful Scenery 4" },
            ],
        };
    },
};
</script>

<style scoped>
/* 全局容器 */
.welcome-page-container {
    position: relative;
    width: 100%;
    height: 100vh;
    text-align: center;
}

/* 背景动画 */
.login-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

/* 内容区 */
.content {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    /* padding: 20px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); */
}

/* 文本部分 */
.text-section {
    margin-bottom: 30px;
}

.main-title {
    font-size: 48px;
    font-weight: bold;
    color: #e74c3c;
}

.sub-title {
    font-size: 24px;
    color: #555;
    margin: 10px 0;
}

.description {
    font-size: 16px;
    color: #777;
    line-height: 1.5;
}

/* 轮播图片 */
.carousel {
    margin-top: 20px;
}

.carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}
</style>

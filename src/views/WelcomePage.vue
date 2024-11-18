<!--
 * @Descripttion: 
 * @Author: Sandy
 * @Date: 2024-11-14 21:53:00
 * @LastEditTime: 2024-11-18 20:54:18
-->
<template>
    <div class="welcome-page-container">
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
        <div class="content">
            <el-row>
                <el-col :span="12">
                    <div class="grid-content text">
                        <el-space direction="vertical">
                            <el-text class="mx-1" type="warning">Sandy</el-text>
                            <el-text class="mx-2" type="warning">A Java Developer</el-text>
                            <el-text class="mx-3" type="warning">A Java Developer</el-text>
                        </el-space>
                    </div>
                </el-col>
                <el-col :span="12" v-for="(image, index) in images" :key="index">
                    <div class="grid-content img">
                        <img class="image" :src="image.src" :alt="image.alt">
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import img1 from '@/assets/Scenery/Scenery-3.jpg'
//import img1 from '@/assets/logo.png'
export default {
    data() {
        return {
            images: [
                { src: img1, alt: "Image 1", title: "Title 1" },
                { src: img1, alt: "Image 2", title: "Title 2" },
                { src: img1, alt: "Image 1", title: "Title 3" }
            ]
        }
    }
}
</script>

<style scoped>
.welcome-page-container {
    position: relative;
    width: 100%;
    text-align: center;
}

.login-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.content {
    position: relative;
    z-index: 1;
    padding: 20px;
}

.grid-content {
    text-align: center;
}

.text {
    margin-bottom: 20px;
}
.grid-content.img {
    margin: 0px 10px; /* 上下间距为20px，左右间距为5px */
}
.mx-1{
    font-family: "Roboto", sans-serif;
    font-size: 48px; /* 大标题 */
    font-weight: 700; /* 加粗 */
    color: #e74c3c; /* 红色 */
}
.mx-2{
    font-family: "Roboto", sans-serif;
    font-size: 24px; /* 副标题 */
    font-weight: 400;
    color: #333;
}
.mx-3{
    font-family: "Roboto", sans-serif;
    font-size: 16px; /* 正文字体 */
    color: #777;
    line-height: 1.5;
}
</style>
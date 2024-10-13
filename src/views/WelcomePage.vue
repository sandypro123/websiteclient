<!--
 * @Descripttion: 
 * @Author: Sandy
 * @Date: 2024-10-13 21:05:44
 * @LastEditTime: 2024-10-13 21:29:01
-->
<template>
    <div class="container">
        <el-row>
            <el-col :span="12">
                <div class="grid-content text">
                    <el-space direction="vertical">
                        <el-text class="mx-1" type="warning">Sandy</el-text>
                        <el-text class="mx-1" type="warning">A Java Developer</el-text>
                        <el-text class="mx-1" type="warning">A Java Developer</el-text>
                    </el-space>
                </div>
            </el-col>
            <el-col :span="12" v-for="(image,index) in images" :key="index">
                <div class="grid-content img">
                    <img class="image" :src="image.src" :alt="image.alt">
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import img1 from '@/assets/logo.png'

export default {
    data(){
        return{
            images:[
                {src: img1, alt:"Image 1", title: "Title 1"},
                {src: img1, alt:"Image 2", title: "Title 2"},
                {src: img1, alt:"Image 1", title: "Title 3"}
            ]
        }
    }
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
}
.grid-content{
    border-radius: 4px;
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.image{
    max-width: 100%;
    height: auto;
    border-radius: 4px;
}

</style>
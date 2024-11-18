<template>
    <div class="image-container" :style="containerStyle">
        <img
            :src="src"
            :alt="alt"
            :style="imageStyle"
            @load="handleImageLoad"
        />
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            default: "Image",
        },
        maxWidth: {
            type: [String, Number],
            default: 300, // 默认最大宽度
        },
        maxHeight: {
            type: [String, Number],
            default: 300, // 默认最大高度
        },
        fit: {
            type: String,
            default: "contain", // 图片适配方式
        },
    },
    data() {
        return {
            naturalWidth: 0,
            naturalHeight: 0,
        };
    },
    computed: {
        containerStyle() {
            return {
                maxWidth: this.parseSize(this.maxWidth),
                maxHeight: this.parseSize(this.maxHeight),
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            };
        },
        imageStyle() {
            return {
                objectFit: this.fit,
                maxWidth: "100%",
                maxHeight: "100%",
            };
        },
    },
    methods: {
        parseSize(size) {
            return typeof size === "number" ? `${size}px` : size;
        },
        handleImageLoad(event) {
            const img = event.target;
            this.naturalWidth = img.naturalWidth;
            this.naturalHeight = img.naturalHeight;
            console.log(`Original Image Size: ${this.naturalWidth}x${this.naturalHeight}`);
        },
    },
};
</script>

<style scoped>
.image-container {
    position: relative;
    text-align: center;
}
</style>

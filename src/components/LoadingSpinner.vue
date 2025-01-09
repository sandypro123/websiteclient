<template>
    <div class="m-spin">
      <div :class="['m-spin-dot', tip ? 'mt60':'mt30']">
        <span :class="['u-dot-item', { infinite: infinite, disposable: !infinite&&running }]"></span>
        <span :class="['u-dot-item', { infinite: infinite, disposable: !infinite&&running }]"></span>
        <span :class="['u-dot-item', { infinite: infinite, disposable: !infinite&&running }]"></span>
        <span :class="['u-dot-item', { infinite: infinite, disposable: !infinite&&running }]"></span>
        <!-- 监听最后一个dot动画完成 -->
        <span :class="['u-dot-item', { infinite: infinite, disposable: !infinite&&running }]" @animationend="callback"></span>
      </div>
      <p class="u-tip">{{ tip }}</p>
    </div>
  </template>
  <script>
  export default {
    name: 'LoadingSpinner',
    props: {
      tip: { // 描述文案
        type: String,
        default: ''
      },
      infinite: { // 是否无限次循环动画
        type: Boolean,
        default: false
      },
      interval: { // 完成一次动画后的间隔时长，单位ms
        type: Number,
        default: 200
      }
    },
    data () {
      return {
        running: true // 动画运行标识，infinite为false时生效
      }
    },
    methods: {
      callback () {
        this.running = false
        setTimeout(() => {
          this.running = true
        }, this.interval)
      }
    }
  }
  </script>
  <style lang="less" scoped>
  .m-spin {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .u-tip {
    position: absolute;
    top: 50%;
    font-size: 16px;
    line-height: 20px;
    color: #FFF;
    width: 100%;
    text-align: center;
    padding-top: 16px;
  }
  .m-spin-dot {
    position: absolute;
    display: inline-block;
    width: 60px;
    height: 60px;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    .u-dot-item { // 单个圆点样式
      position: absolute;
      width: 10px;
      height: 10px;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      background: #000;
      border-radius: 50%;
      transform-origin: 50% 30px; // 50%为自身高度的一半
    }
    .u-dot-item:nth-child(2) {
      animation-delay: .2s;
      -webkit-animation-delay: .2s;
    }
    .u-dot-item:nth-child(3) {
      animation-delay: .4s;
      -webkit-animation-delay: .4s;
    }
    .u-dot-item:nth-child(4) {
      animation-delay: .6s;
      -webkit-animation-delay: .6s;
    }
    .u-dot-item:last-child {
      animation-delay: .8s;
      -webkit-animation-delay: .8s;
    }
    .infinite { // 无限次
      animation: spinMove 2s ease-in-out infinite;
      -webkit-animation: spinMove 2s ease-in-out infinite;
    }
    .disposable { // 一次性
      animation: spinMove 2s ease-in-out;
      -webkit-animation: spinMove 2s ease-in-out;
    }
    @keyframes spinMove {
      to { transform: rotate(360deg); } // from: 0%  to: 100%
    }
  }
  .mt60 {
    margin-top: -60px;
  }
  .mt30 {
    margin-top: -30px;
  }
  </style>
  
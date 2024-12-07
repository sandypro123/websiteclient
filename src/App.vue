<!--
 * @Descripttion: 
 * @Author: Sandy
 * @Date: 2024-10-08 22:22:48
 * @LastEditTime: 2024-12-07 08:35:31
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
// 解决ERROR ResizeObserver loop completed with undelivered notifications.
// 重写ResizeObserver的构造函数，并在其中定义并调用防抖函数
window.ResizeObserver = class ResizeObserver extends window.ResizeObserver {
  constructor(callback) {
    let timer = null;
    const debouncedCallback = function () {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(context, args);
      }, 16);
    };
    super(debouncedCallback);
  }
};

</script>

<style>
* { margin: 0; padding: 0; }

body {
	background-color: #f5f5f5;
	font-weight: 400;
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	line-height: 1.5;
}

html{height:100%;}
body{min-height:100%;}
body{position:relative;}

</style>
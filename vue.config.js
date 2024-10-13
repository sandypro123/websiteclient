/*
 * @Descripttion: 
 * @Author: Sandy
 * @Date: 2024-10-08 22:22:48
 * @LastEditTime: 2024-10-13 09:34:27
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      alias:{
        '@':require('path').resolve(__dirname,'src')
      }
    }
  }
})

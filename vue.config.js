/*
 * @Descripttion: 
 * @Author: Sandy
 * @Date: 2024-11-14 21:53:00
 * @LastEditTime: 2024-11-17 08:28:03
 */
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
  },
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    client: {
      overlay: false
    }
  }
})

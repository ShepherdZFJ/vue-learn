const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer:{
  //   proxy: "http://127.0.0.1:18801"
  // }
  devServer: {
    proxy: {
      '/sms': {// 匹配所有以 '/sms'开头的请求路径
        target: 'http://127.0.0.1:18801',// 代理目标的基础路径
        changeOrigin: true,
        // pathRewrite: {'^/sms': ''}   //配置路径替换成空白
      },
      '/api': {// 匹配所有以 '/api'开头的请求路径
        target: 'http://127.0.0.1:18800',// 代理目标的基础路径
        changeOrigin: true,
        // pathRewrite: {'^/api': ''} 
      }
    }
    /*
    changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
    changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
    changeOrigin默认值为true
    */
  }
})

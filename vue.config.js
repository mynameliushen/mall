module.exports = {
  devServer: {
    host: 'localhost', //主机
    port: 8080,//端口
    proxy: { //代理
      '/api': {
        target: 'https://...',
        changeOrigin: false //是否将主机头更改为url地址
      }
    }
  }
}
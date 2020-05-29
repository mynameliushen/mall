const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }

}
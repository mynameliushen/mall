import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
// import env from './env'

import './styles/index.scss'
/**
 * import 预编译加载
 * require 执行的时候才加载
 * mock 开关
 */
const mock = false
if (mock) {
  require('./mock/api')
}
// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL
// 接口错误拦截
axios.interceptors.response.use(res => {
  const { status, data, msg} = res.data
  if (status === 0) {
    return data
  }
  else if (status === 10) {
    window.location.href = '/#/login'
  } else {
    alert(msg)
  }
})

Vue.use(VueAxios, axios)

Vue.config.productionTip = false // 生产环境的提示

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

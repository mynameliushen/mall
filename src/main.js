import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
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
  let path = location.hash;
  if (status === 0) {
    return data
  }
  else if (status === 10) {
    if (path !== '#/login') {
      window.location.href = '/#/login'
    }
  } else {
    alert(msg)
    return Promise.reject(res);
  }
})

Vue.use(VueAxios, axios)
Vue.use(VueLazyLoad,{
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie)
Vue.prototype.$message = Message

Vue.config.productionTip = false // 生产环境的提示
console.log(router)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

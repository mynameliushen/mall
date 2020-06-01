import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/pages/index'),
      },
      {
        path: 'product/:id', // 动态路由
        name: 'product',
        component: () => import('@/pages/product'),
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: () => import('@/pages/detail'),
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/pages/cart')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/pages/order'),
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: () => import('@/pages/orderList')
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: () => import('@/pages/orderConfirm')
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: () => import('@/pages/orderPay')
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: () => import('@/pages/alipay')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

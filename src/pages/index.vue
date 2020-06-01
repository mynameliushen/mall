<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="sub in item" :key="sub.id">
                    <a :href="sub ? '/#/product/'+sub.id : ''">
                      <img v-lazy="sub ? sub.img : '/imgs/item-box-1.png'" alt="">
                      {{ sub ? sub.name : '小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="item of slideList" :key="item.id">
            <a :href="'/#/product/' + item.id"><img :src="item.img" alt=""></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a v-for="item in adsList" :key="item.id" :href="'/#/product/'+item.id">
          <img v-lazy="item.img" alt="">
        </a>
      </div>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="banner">
          <a href="/#/product/30">
            <img v-lazy="'/imgs/banner-1.png'" alt="">
          </a>
        </div>
        <div class="product-box">
          <div class="container">
            <h2>手机</h2>
            <div class="product-wrapper">
              <div class="banner-left">
                <a href="/#/product/35">
                  <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
                </a>
              </div>
              <div class="list-box">
                <div class="list" v-for="(arr,index) in phoneList" :key="index">
                  <div class="item" v-for="(item,index) in arr" :key="index">
                    <span :class="{'new-pro': index%2===0}">新品</span>
                    <div class="item-img">
                      <img v-lazy="item.mainImage" alt="">
                    </div>
                    <div class="item-info">
                      <h3>{{item.name}}</h3>
                      <p>{{item.subtitle}}</p>
                      <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar />
    <modal
      title="提示"
      sureText="查看购物车"
      modalType="middle"
      :showModal="showModal"
      @submit="goCart"
      @cancel="showModal=false"
      btnType="1"
    >
      <template #body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Modal from '@/components/Modal'
import 'swiper/css/swiper.css'

export default {
  name: 'index',
  data () {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          shadowOffect: 100,
          shoadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        },
        {
          id: '47',
          img: '/imgs/slider/slide-4.jpg'
        },
        {
          id: '48',
          img: '/imgs/slider/slide-5.jpg'
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9'
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          }
        ],
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png' 
        },
        {
          id: 48,
          img: '/imgs/ads/ads-2.jpg' 
        },
        {
          id: 45,
          img: '/imgs/ads/ads-3.png' 
        },
        {
          id: 47,
          img: '/imgs/ads/ads-4.jpg' 
        }
      ],
      phoneList: [],
      showModal: false,
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  filters: {
    currency (val) {
      if(!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.axios.get('/products',{
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then(res => {
        res.list = res.list.slice(6,14)
        this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)]
      })
    },
    addCart (id) {
      this.showModal = true
      this.axios.post('/carts', {
        productId:id,
        selected: true
      }).then(res=> {
        this.showModal = true
        this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
      }).catch(err => {
        console.log(err);
        this.showModel = true
      })
    },
    goCart () {
      this.$router.push('/cart')
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/config.scss';
@import '@/styles/base.scss';
.index {
  .swiper-box {

    .nav-menu{
      position: absolute;
      width: 264px;
      height: 451px;
      z-index:9;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;

      .menu-wrap {

        .menu-item {
          height:50px;
          line-height: 50px;
          a {
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            display: block;
            position: relative;
            &::after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: '';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }

          .children {
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position:absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            display: none;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a{
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }


    .swiper-container{
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width:100%;
        height: 100%;
      }

    }
  }

  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }

  .wrapper{
    background-color: $colorJ;
    .banner {
      margin-bottom: 50px;
    }

    .product-box {
      padding-top: 30px;
      padding-bottom: 50px;

      h2 {
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
      }


      .product-wrapper {
        display: flex;

        .banner-left {
          margin-right: 16px;
          img {
            width:224px;
            height: 619px;
          }
        }
        .list-box {
          flex: 1;
          .list {
            @include flex();
            width: 986px;
            margin-bottom:14px;
            &:last-child {
              margin-bottom: 0;
            }

            .item {
              width: 236px;
              height: 302px;
              background-color: $colorG;
              text-align: center;
              
              &:hover {
                z-index: 2;
                box-shadow: 0 15px 30px rgba(0,0,0,.1);
                -webkit-transform: translate3d(0,-2px,0);
                transform: translate3d(0,-2px,0);
              }
              span {
                display: inline-block;
                width: 67px;
                height: 24px;
                line-height: 24px;
                color: #FFF;
                &.new-pro {
                  background-color: #7ECF68;
                }
                &.kill-pro {
                  background-color: #E82626;
                }
              }
              .item-img {
                
                img {
                  width: 100%;
                  height: 195px;
                }
              }
              .item-info {
                h3 {
                  font-size: $fontJ;
                  color: $colorB;
                  line-height: $fontJ;
                  font-weight: bold;
                }
                p {
                  color: $colorD;
                  line-height: 13px;
                  margin-top: 6px;
                  margin-bottom: 13px;
                }
                .price {
                  color: #F20a0a;
                  font-size: $fontJ;
                  font-weight: bold;
                  cursor: pointer;
                  &:after {
                    content: '';
                    margin-left: 5px;
                    @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                    vertical-align: middle;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

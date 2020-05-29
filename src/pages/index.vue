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
                      <img :src="sub ? sub.img : '/imgs/item-box-1.png'" alt="">
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
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar />
  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
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
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    // this.mySwiper.slideTo(3, 1000, false)
  },
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/config.scss';
.index {
  width: 1226px;
  margin:0 auto;
  
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

}
</style>

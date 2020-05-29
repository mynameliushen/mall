<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;" >MUI</a>
          <a href="javascript:;" >云服务</a>
          <a href="javascript:;" >协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-else @click="login">登陆</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" v-else>注册</a>
          <a href="javascript:;" class="my-cart" @click="gotoCart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="item of phoneList" :key="item.id">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" alt="">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>红米手机</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header',
  data () {
    return {
      username: '刘神',
      phoneList: []
    }
  },
  filters: {
    currency (val) {
      if(!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    getProductList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012',
          pageSize: 6
        }
      }).then(res => {
          this.phoneList = res.list
          console.log(this.phoneList)
      })
    },
    gotoCart () {
      this.$router.push('/cart')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/base.scss';
@import '@/styles/mixin.scss';
@import '@/styles/config.scss';
.header {

  .nav-topbar {
    height:39px;
    line-height: 39px;
    background-color:#333333;
    color: #B0B0B0;

    .container {
      @include flex();

      a {
        display: inline-block;
        color: #B0B0B0;
        margin-right: 17px;
      }

      .my-cart {
        width: 110px;
        margin-right:0;
        background-color: #FF6600;
        text-align:center;
        color: #ffffff;

        .icon-cart {
          @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
          margin-right: 4px;
        }
      }
    }
  }

  .nav-header {
    .container {
      height: 112px;
      @include flex();
      position: relative;

      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        overflow: hidden;
        background-color: #FF6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: '';
            @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
            transition: margin-left .2s;
          }
          &:after {
            content: '';
            @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
          }
          &:hover:before{
            margin-left: -55px;
          }
        }
      }

      .header-menu {
        display:inline-block;
        padding-left:209px;
        width: 643px;

        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;

          span {
            cursor: pointer;
            
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top:1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: all .5s;
            background-color: #fff;
            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: $fontK;
              line-height: $fontK;
              text-align: center;
              position:relative;
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                content: '';
                position: absolute;
                top: 28px;
                right:0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before{
                display:none;
              }
            }

          }
        }
      }

      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #E0E0E0;
          display: flex;
          align-items: center;

          input {
            border: none;
            border-right: 1px solid #e0e0ee;
            width: 264px;
            height: 50px;
            box-sizing: border-box;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px,18px,'/imgs/icon-search.png');
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>

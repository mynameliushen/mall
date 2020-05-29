<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;">小米之家</a><span>|</span>
      <a href="javascript:;">MIUI</a><span>|</span>
      <a href="javascript:;">政企服务</a><span>|</span>
      <a href="javascript:;">小米天猫店</a><span>|</span>
      <a href="javascript:;">小米集团隐私政策</a> 
    </div>
    <div class="copyright">
      © mi.com 京ICP证110507号 <span>京ICP备10046444号</span> 京公网安备11010802020134号 京网文[2020]0276-042号 
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>
<style lang="scss" scoped>
@import '@/styles/config.scss';

.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  color: #999;
  font-size: 16px;
  text-align: center;

  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }

  .footer-link {
    a{
      color: #999;
      display: inline-block;
    }
    span {
      padding-left: 10px;
      padding-right: 10px;
    }
    margin-bottom:13px;
  }

  .copyright {
    span {
      color: $colorA;
    }
  }

}
</style>

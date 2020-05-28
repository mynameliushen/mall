<template>
  <div>
    <order-header />
    alipay
    <nav-footer />
  </div>
</template>

<script>
import OrderHeader from '@/components/OrderHeader'
import NavFooter from '@/components/NavFooter'
export default {
  name: 'alipay',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>

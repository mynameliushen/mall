<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  mounted () {
    this.getUser()
    this.getCartCount()
  },
  methods: {
    ...mapActions([
      'saveUserName',
      'saveCartCount'
    ]),
    getUser () {
      this.axios.get('/user').then((res={}) => {
        this.saveUserName(res.username);
      })
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res=0) => {
        this.saveCartCount(res)
      })
    }
  }
}
</script>

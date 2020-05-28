<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted () {
    // storage.setItem('city',"上海")

    // storage.clear('mall') // 删除第一级
    // storage.clear('a','user')//删除第二级
  }
}
</script>

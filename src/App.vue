<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin 0 -8px
    font-size 14px
    height 100%
</style>
<script>
  beforeCreate:{
    document.querySelector('body').setAttribute('style', 'background-color:#F4F4F4')
  }
</script>

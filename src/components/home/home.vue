<template>
  <ul id="footer">
    <router-link to="" tag="li">就医服务</router-link>
    <router-link to="/product" tag="li">产品信息</router-link>
    <router-link to="" tag="li">关于我们</router-link>
  </ul>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #footer
    position fixed
    bottom 0
    line-height 40px
    width: 100%
    list-style none
    left 0
    background-color #F8F8F8

  li
    display inline-block
    width 32%
    border-right 1px solid #F4F4F4
    padding 4px 0
</style>

<template>
  <div id="header">
    <img class="icon-close" src="./close.png" alt="" @click="back()">
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
  export default {
    name: 'header',
    props: {
      title: {
        type: String
      }
    },
    methods: {
      back() {
        this.$router.back(-1);
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #header
    line-height 40px
    text-align left
    padding 0 6%
    background-color #F8F8F8
    .icon-close
      display inline-block
      width: 18px
      height: 18px
      vertical-align sub
      margin-right 2%
    .title
      font-size 18px

</style>

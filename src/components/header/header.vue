<template>
  <div id="header">
    <!--<img class="icon-close" src="./close.png" alt="" @click="back()">-->
    <i class="cubeic-close" @click="back()"></i>
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
    line-height 42px
    text-align left
    padding 0 3%
    background-color #F8F8F8
    position fixed
    top 0
    left 0
    width 100%
    z-index 1


  .cubeic-close
    margin-right 2%
    font-size 24px
    vertical-align sub
  .title
      font-size 18px

</style>

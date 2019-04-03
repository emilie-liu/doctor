<template>
  <div id="user">
    <Header :title="title"></Header>
    <div class="user">
      <div class="user-header">
        <img class="img-logo" src="./logo.png" alt="">
          <div class="tabs">新用户注册</div><div class="tabs">用户登录</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../header/header'

  export default {
    name: 'user',
    data() {
      return {
        title: '用户注册/登录'
      }
    },
    components: {
      Header
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .user
    position absolute
    top 44px
    margin-left 2%
    width 100%

    .user-header
      background-color #fff


      .img-logo
        margin 6% 20%
        width 60%
      .tabs
        width 50%
        display inline-block
        line-height 50px

</style>

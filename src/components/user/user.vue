<template>
  <div id="user">
    <Header :title="title"></Header>
    <div class="user">
      <div class="user-header">
        <img class="img-logo" src="./logo.png" alt="">
        <div class="tabs" @click="curId=0" :class="{'cur': curId===0}">新用户注册</div>
        <div class="tabs" @click="curId=1" :class="{'cur': curId===1}">用户登录</div>
      </div>
      <div>
        <form action="" name="registered" v-show="curId===0" methods="post">
          <div>就诊人姓名</div>
          <input type="text" name="username">
          <div>密码</div>
          <input type="password" name="pwd">
          <div>添加手机号码</div>
          <input type="text" name="tel">
          <div>请输入短息验证码</div>
          <input type="text" name="obtain">
          <button class="btn-obtain">获取验证码</button>
          <button class="btn-submit" @click="open()">确认注册</button>
        </form>
        <form action="" name="login" v-show="curId===1">
          <div>就诊人姓名</div>
          <input type="text" name="username">
          <div>密码</div>
          <input type="password" name="pwd">
          <button class="btn-submit">确认登录</button>
        </form>
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
        title: '用户注册/登录',
        curId: 0
      }
    },
    methods:{
      open:function () {
        window.open('test.vue');
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
        margin 2% 20%
        width 60%

      .tabs
        width 50%
        display inline-block
        line-height 50px

      .cur
        color #2EA9E2
        border-bottom 2px solid #2EA9E2

    form
      text-align left
      padding 2% 20%

      div
        margin 6% 0
        color #999999

      input
        line-height 40px
        width 100%
        border-radius 5px
        box-shadow 0px 2px 7px 0px rgba(198, 226, 229, 1)
        padding 0 10px
      .btn-obtain
        color #2EA9E2
        border 1px solid #2EA9E2
        background-color rgb(244, 244, 244)
        border-radius 10px
        margin-top 16px
      .btn-submit
        background-color #06C7C5
        border-radius 6px
        width 50%
        margin 10% 25%
        color #fff
        line-height 40px
        border none
</style>

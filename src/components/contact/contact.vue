<template>
  <div id="contact">
    <Header :title="title"></Header>
    <div class="contact-content">
      <span class="contact-title">联系我们</span>
      <p>感谢您使用「港医德」，如您对我们的资讯有任何查询或意见，欢迎您填写一下表格联系我们。</p>
      <form @submit.prevent="submit" >
        <div class="content-title">昵称：</div>
        <input type="text" nam="username" v-model="inputtext.username">
        <div class="content-title">电话：</div>
        <input type="text" name="tel" v-model="inputtext.tel">
        <div class="content-title">内容：</div>
        <textarea name="content" v-model="inputtext.content"></textarea>
        <button class="btn-submit">提交</button>
      </form>
    </div>
    <home></home>
  </div>
</template>

<script>
  import Header from '../header/header'
  import Home from '../home/home'

  export default {
    name: 'contact',
    data() {
      return {
        title: '联系我们',
        inputtext: {
          username: '',
          tel: '',
          content: ''
        }
      }
    },
    methods: {
      //控制台打印表单数据
      submit: function () {
        console.log(this.inputtext);
      }
    },
    components: {
      Header,
      Home
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .contact-content
    text-align left
    padding 6%
    position absolute
    top 40px

  .contact-title
    font-size 16px

  p
    color #999999
    margin 4% 0
    line-height 1.6

  .content-title
    line-height 30px

  input,
  textarea
    width 100%
    line-height 40px
    background-color #F4F4F4
    border 1px solid #D8D8D8
    padding 0 2%
    border-radius 5px
    font-size 14px

  .btn-submit
    background-color #06C7C5
    border-radius 6px
    width 40%
    margin 20% 30%
    color #fff
    line-height 40px
    border none
    font-size 14px
</style>

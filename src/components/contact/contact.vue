<template>
  <div id="contact">
    <Header :title="title"></Header>
    <div class="contact-content">
      <span class="contact-title">联系我们</span>
      <p>感谢您使用「港医德」，如您对我们的资讯有任何查询或意见，欢迎您填写一下表格联系我们。</p>
      <form>
        <div class="content-title">昵称：</div>
        <input></input>
        <div class="content-title">电话：</div>
        <input></input>
        <div class="content-title">内容：</div>
        <textarea></textarea>
      </form>
      <button class="btn-submit">提交</button>
    </div>
    <home></home>
  </div>
</template>

<script>
  import Header from '../header/header'
  import Home from '../home/home'
  import Form from "cube-ui/src/components/form/form";

  export default {
    name: "contact",
    data(){
      return{
        title:'联系我们'
      }
    },
    components: {
      Form,
      Header,
      Home
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .contact-content
    text-align left
    padding 6%
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
  .btn-submit
    background-color #06C7C5
    border-radius 6px
    width 40%
    margin 20% 30%
    color #fff
    line-height 40px
    border none
</style>

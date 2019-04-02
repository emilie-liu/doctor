<template>
  <div class="dialog-border">
    <div class="border">
      <div class="icon-img"></div>
      <span class="msg">是否取消该订单！</span>
      <div class="btn-box">
        <div class="confirm-btn">确定</div>
        <div class="cancel-btn" @click="closeDialog">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dialog',
    data() {
      return {}
    },
    methods: {
      closeDialog() {
        this.$emit('closeDialog', false)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .dialog-border
    position fixed
    bottom 0
    left 0
    background-color rgba(0, 0, 0, 0.3)
    width 100%
    height: 100%
    z-index 2
    .border
      background-color white
      position absolute
      top 30%
      left 15%
      width 70%
      height 44%
      border-radius 16px

    .icon-img
      background-image url("./failed.png")
      width 90px
      height 90px
      background-size 90px 90px
      background-repeat no-repeat
      position absolute
      top 20%
      left 34%
    .msg
      text-align center
      position absolute
      top 66%
      left 25%
      color #999999
      font-size 20px
    .btn-box
      position absolute
      bottom 0
      line-height 50px
      width 100%
      border-top 1px solid #EBEBEB
      .confirm-btn
      .cancel-btn
        width 49.8%
        display inline-block
      .confirm-btn
        border-right 1px solid #EBEBEB
      .cancel-btn
        color #2EA9E2

</style>

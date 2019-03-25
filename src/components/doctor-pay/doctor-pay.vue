<template>
  <div id="doctor-pay">
    <Header :title="title"></Header>
    <div class="order-content">
      <form action="">
        <div class="order-module">
          <div class="package doctor-package">
            <img class="avatar-img" src="./doc-avatar.png" alt="" width="70" height="70">
            <div class="doctor-intro">
              <div class="doctor-name">陈奕迅医生</div>
              <div><span class="doctor-dept">外科</span><span class="doctor-type">主治医生</span></div>
              <div class="doctor-job font-color">就职：香港综合肿瘤中心</div>
            </div>
          </div>
          <div class="package">
            <span>预约类型</span>
            <input type="text" value="门诊预约" dir="rtl">
          </div>
          <div class="package">
            <span>支付金额</span>
            <input type="text" value="388.00" dir="rtl">
          </div>
          <div class="package">
            <span>实付金额</span>
            <input type="text" value="388.00" dir="rtl">
          </div>
        </div>
        <div class="order-module">
          <div class="package">
            <span>订单号</span>
            <input type="text" value="00109653632636322" dir="rtl">
          </div>
          <div class="package">
            <span>就诊时间</span>
            <input type="text" value="9:00～12:00 2019-01-23" dir="rtl">
          </div>
          <div class="package">
            <span>就诊人姓名</span>
            <input type="text" value="请输入姓名" dir="rtl">
          </div>
          <div class="package">
            <span>手机号码</span>
            <input type="text" value="请输入" dir="rtl">
          </div>
          <div class="package">
            <span>身份证号码</span>
            <input type="text" value="请输入" dir="rtl">
          </div>
          <div class="package">
            <span>性别</span>
          </div>
          <div class="package">
            <span>年龄</span>
            <input type="text" value="请输入" dir="rtl">
          </div>
          <div class="package">
            <span>香港身份证</span>
            <input type="text" value="请输入" dir="rtl">
          </div>
          <div class="package">
            <span>港澳台通行证</span>
            <input type="text" value="请输入" dir="rtl">
          </div>
          <div class="package">
            <span>其他护照</span>
            <input type="text" value="请输入" dir="rtl">
          </div>
          <div class="package">
            <span>预约人姓名</span>
            <input type="text" value="请输入" dir="rtl">
          </div>
          <div class="package">
            <span>邮箱</span>
            <input type="text" value="请输入" dir="rtl">
          </div>
          <div class="package">
            <span>微信</span>
            <input type="text" value="请输入" dir="rtl">
          </div>
          <div class="package">
            <span>疾病史</span>
            <input type="text" value="请输入" dir="rtl">
          </div>
          <div class="package">
            <span>过敏史</span>
            <input type="text" value="请输入" dir="rtl">
          </div>
          <div class="package">
            <span>备注</span>
            <input type="text" value="请输入" dir="rtl">
          </div>
        </div>
      </form>
      <button class="btn-submit-cancel" @click="showBtn()">取消订单</button>
      <button class="btn-submit">提交订单</button>
    </div>
  </div>
</template>

<script>
  import Header from '../header/header'

  export default {
    name: 'doctor-pay',
    data() {
      return {
        title: '确认支付'
      }
    },
    methods: {
      showBtn() {
        this.$createDialog({
          type: 'confirm',
          icon: 'cubeic-alert',
          img: './failed.png',
          content: '是否确定取消该订单！',
          confirmBtn: {
            text: '确定',
            active: true,
            disabled: false,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: '取消',
            active: false,
            disabled: false,
            href: 'javascript:;'
          }
          /*       ,
                 onConfirm: () => {
                   this.$createToast({
                     type: 'warn',
                     time: 1000,
                     txt: '点击确认按钮'
                   }).show()
                 },
                 onCancel: () => {
                   this.$createToast({
                     type: 'warn',
                     time: 1000,
                     txt: '点击取消按钮'
                   }).show()
                 }*/
        }, (createElement) => {
          return [
            createElement('div', {
              'class': {
                'my-title-img': true
              },
              slot: 'content'
            },'dfafds')
          ]
        }).show()
      },
      showSlot() {
        this.$createDialog({
          type: 'alert',
          confirmBtn: {
            text: '我知道了',
            active: true
          }
        }, (createElement) => {
          return [
            createElement('div', {
              'class': {
                'my-title': true
              },
              slot: 'title'
            }, [
              createElement('div', {
                'class': {
                  'my-title-img': true
                }
              })
            ]),
            createElement('p', {
              'class': {
                'my-content': true
              },
              slot: 'content'
            }, '价格仍按快车计算')
          ]
        }).show()
      }
    },

    components: {
      Header
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .order-content
    position absolute
    top 44px
    margin-left 2%
    width 100%

  .order-module
    background-color #fff
    margin-bottom 8px
    text-align left
    padding 0 20px

    .package
      border-bottom 1px solid #F8F8F8
      line-height 50px

      &:last-child
        border-bottom none

      input
        float right
        width 60%
        color #999999
        line-height 48px

      .cube-select
        width 60%
        border none
        display inline-block
        float right
        line-height 30px
        text-align right
        color #999999

    >>> .date
      width 10% !important
      float left !important

    >>> .cube-radio
      padding 0

  >>> .doctor-package
    padding 4% 0
    line-height 20px !important

    .avatar-img
      margin-right 2%

    .doctor-intro
      display inline-block
      vertical-align top

      div
        line-height 1.6

        .doctor-dept
          background-color #06C7C5
          color #fff
          padding 2px 10px
          border-radius 8px
          font-size 10px
          margin-right 4%


        .doctor-type
          background-color #2EA9E2
          color #fff
          padding 2px 10px
          border-radius 8px
          font-size 10px

  >>> .doctor-job
    margin-top 4px

  >>> .font-color
    color #999999

  .btn-submit
    background-color #06C7C5
    border-radius 6px
    width 30%
    margin 20% 10%
    color #fff
    line-height 40px
    border none

  .my-title-img
    height 120px
    background-image url("./failed.png")

  .btn-submit-cancel
    background-color #F39281
    border-radius 6px
    width 30%
    margin 20% 10%
    color #fff
    line-height 40px
    border none


</style>

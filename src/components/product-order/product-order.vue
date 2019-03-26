<template>
  <div id="product-order">
    <Header :title="title"></Header>
    <div class="order-content">
      <form class="product-order">
        <div class="order-module">
          <div class="package">
            <span>套餐</span>
            <input type="text" value="套餐" dir="rtl">
          </div>
          <div class="package">
            <span>医院</span>
            <cube-select v-model="value" :options="options"></cube-select>
          </div>
          <div class="package">
            <span>金额</span>
            <input type="text" value="388.00" dir="rtl">
          </div>
        </div>
        <div class="order-module">
          <div class="package">
              <Calender></Calender>
            <div class="dates">
              <!--<cube-radio-group v-model="dated" :options="dates" :hollow-style="true"/>-->
              <div>
                <input class="sex-input" type="radio" id="mor" value="9:00～12:00" v-model="date">
                <label for="mor">9:00～12:00</label>
                <span class="font-color">余10</span>
                <span class="sec-price">¥338.00</span>
              </div>
              <div>
                <input class="sex-input" type="radio" id="after" value="15:00～18:00" v-model="date">
                <label for="after">15:00～18:00</label>
                <span class="font-color">已满</span>
                <span class="sec-price">¥338.00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="order-module">
          <div class="package">
            <span>就诊人姓名<i>*</i></span>
            <input type="text" value="请输入姓名" dir="rtl">
          </div>
          <div class="package">
            <span>手机号码<i>*</i></span>
            <input type="text" value="请输入" dir="rtl">
          </div>
          <div class="package">
            <span>身份证号码<i>*</i></span>
            <input type="text" value="请输入" dir="rtl">
          </div>
          <div class="package">
            <span>性别<i class="i-color">*</i></span>
            <div class="sex">
              <div>
                <input class="sex-input" type="radio" id="female" value="女" v-model="sex">
                <label class="font-color" for="female">女</label>
              </div>
              <div>
                <input class="sex-input" type="radio" id="male" value="男" v-model="sex">
                <label class="font-color" for="male">男</label>
              </div>
            </div>
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
      <button class="btn-submit" @click="ProductPay()">提交订单</button>
    </div>
  </div>
</template>

<script>
  import Header from '../header/header'
  import Calender from '../calender/calender'

  export default {
    name: 'product-order',
    data() {
      return {
        title: '确认订单',
        date: '',
        sex: '',
        value: '香港安生医疗中心',
        options: [
          '香港安生医疗中心', '澳门中心医院', '深证南山医院', '深圳总医院', '上海医院中心', '疫苗中心医院'
        ]
      }
    },
    components: {
      Header,
      Calender
    },
    methods: {
      ProductPay() {
        this.$router.push({
          path: '/product-pay'
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .order-content
    position absolute
    top 44px
    width 100%
    margin-left 2%

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

    >>> .dates
      div
        border-bottom 1px solid #f8f8f8

        label
          margin-right 2%

        .sec-price
          color: #F4B43E
          font-size 12px
          float right

    >>> i
      color #FF6F5C

  >>> .font-color
    color #999999
  >>> .wh_container
    border-bottom 1px solid #f8f8f8
  >>> .package
    .sex
      width 60%
      display inline-block
      text-align right
      float right

      div
        width 30%
        display inline-block

        .sex-input
          display inline-block
          width 10%
          float none
          margin-left 8%
          vertical-align middle
          margin-left -2%


  >>> input[type="radio"]
    position absolute
    clip rect(0, 0, 0, 0)

    ~ label
      &:before
        content "\a0"
        display inline-block
        vertical-align middle
        width 8px
        height 8px
        margin-right 4px
        border-radius 50%
        border 1px solid #999999
        line-height 1
        text-indent 0.15em
        padding 3px

  >>> input[type="radio"]:checked
    ~ label
      &:before
        background-color #2EA9E2
        border 1px solid #2EA9E2
        background-clip content-box
        padding 3px

  .btn-submit
    background-color #06C7C5
    border-radius 6px
    width 40%
    margin 20% 30%
    color #fff
    line-height 40px
    border none


</style>

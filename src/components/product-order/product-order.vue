<template>
    <div id="product-order">
      <Header :title="title"></Header>
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
        <div class="order-module"></div>
        <div class="order-module">
          <div class="package">
            <span>就诊人姓名</span>
            <input type="text" value="请输入姓名" dir="rtl">
          </div>
          <div class="package">
            <span>手机号码</span>
            <input type="text" value="请输入" dir="rtl">
          </div>
          <div class="package">
            <span>性别</span>
            <input type="text" value="请输入" dir="rtl">
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
    </div>
</template>

<script>
  import Header from '../header/header'
    export default {
        name: 'product-order',
        data(){
          return{
            title:'确认订单',
            value:'香港安生医疗中心',
            options:[
              '香港安生医疗中心','澳门中心医院','深证南山医院','深圳总医院','上海医院中心','疫苗中心医院'
            ]
          }
        },
      components:{
          Header
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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
        line-height 40px
        width 60%
        color #999999
      .cube-select
        width 60%
        border none
        display inline-block
        float right
        line-height 30px
        text-align right
        color #999999
</style>

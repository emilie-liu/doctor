<template>
  <div id="product-details">
    <Header :title="title"></Header>
    <div class="product-detail">
      <img class="pro-img" src="./12.png" alt="">
      <div class="pro-details">
        <div class="pro-name">香港13价肺炎疫苗</div>
        <div class="pro-detail">医疗中心13价肺炎球菌疫苗价格为港币+250医生诊金费用……</div>
        <div class="pro-price">¥100.01</div>
      </div>
    </div>
    <ul class="tabs">
      <li class="tab-item" @click="curId=0" :class="{'cur':curId===0}">支持诊所</li>
      <li class="tab-item" @click="curId=1" :class="{'cur':curId===1}">产品详情</li>
      <li class="tab-item" @click="curId=2" :class="{'cur':curId===2}">预约须知</li>
    </ul>
    <div v-show="curId===0">
      <div class="product-detail">
        <img class="pro-img" src="./15.png" alt="">
        <div class="pro-details">
          <div class="pro-name">香港13价肺炎疫苗</div>
          <div class="pro-address">地址：上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号</div>
          <div class="pro-tel">联系电话：4008831114</div>
          <div class="pro-price">¥100.01</div>
        </div>
      </div>
    </div>
    <div v-show="curId===1">
      <h1>产品详情tab</h1>
    </div>
    <div v-show="curId===2">
      <h1>预约须知tab</h1>
    </div>
    <div class="res-div">
      <span class="pro-address">最低价格：</span><span class="res-price">¥338.00</span>
      <cube-button class="res-btn" @click="productOrder()">立即预约</cube-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '../header/header'

  export default {
    name: 'product-details',
    data() {
      return {
        curId: 0,
        title: '服务详情'
      }
    },
    methods: {
      productOrder() {
        this.$router.push({
          path: '/product-order'
        })
      }
    },
    components: {
      Header
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .product-detail
    background-color #fff
    padding 4%
    text-align left
    position relative
    margin-bottom 8px

  .pro-img
    width 30%
    margin-right 2%

  .pro-details
    display inline-block
    width 58%
    line-height 1.2

  .pro-name
    position: absolute
    top 14%

  .pro-detail
    position absolute
    top 36%

  .pro-price
    color #F4B43E

  .tabs
    background-color #fff
    line-height 40px
    border-bottom 1px solid #F8F8F8

  .tab-item
    display inline-block
    width 32%

  .tab-item.cur
    color #41D7A6
    border-bottom 3px solid #41D7A6

  .pro-tel,
  .pro-address
    color #999999
    font-size 12px

  .res-div
    position fixed
    background-color #fff
    text-align left
    padding 0 0 0 4%
    line-height 50px
    width: 100%
    bottom 2.2%
    box-shadow: 0px 2px 8px 0px rgba(117, 117, 117, 0.5)

  .res-btn
    width 30%
    display inline-block
    position absolute
    right 0
    background-color #06C7C5
    height 100%
    text-align center
    border-radius 0

  .res-price
    color #F4B43E
    font-size 22px
</style>

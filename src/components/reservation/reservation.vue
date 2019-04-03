<template>
  <div id="reservation">
    <Header :title="title"></Header>
    <div class="reservation-content">
      <div class="doctor-reservation">
        <div class="doctor-order">
          <span>订单号：2165518652200230</span><span class="cancel-reservation" @click="vm.showDialog = true">取消预约</span>
        </div>
        <div class="doctor-info">
          <img class="avatar-img" src="./doc-avatar.png" alt="" width="70" height="70">
          <div class="doctor-intro">
            <span>医生姓名</span>
            <span class="doctor-dept">外科</span>
            <span class="doctor-category">主治医生</span>
            <div class="font-color">预约时间：2019.09.07</div>
            <div class="font-color">就诊时间：2019.10.10 10:00-11:00</div>
          </div>
        </div>
      </div>
      <div class="product-reservation">
        <div class="doctor-order">
          <span>订单号：2165518652200230</span><span class="cancel-reservation" @click="vm.showDialog = true">取消预约</span>
        </div>
        <div class="doctor-info">
          <img class="avatar-img" src="./9.png" alt="" width="120" height="80">
          <div class="doctor-intro">
            <span>香港流感4价疫苗</span>
            <div class="font-color">预约时间：2019.09.07</div>
            <div class="font-color">就诊时间：2019.10.10 10:00-11:00</div>
            <div class="font-color">就诊诊所：香港安生医疗中心</div>
          </div>
        </div>
      </div>
      <Dialog @closeDialog="close" v-if="vm.showDialog"></Dialog>
    </div>
    <Home></Home>
  </div>
</template>
<script>
  import Header from '../header/header'
  import Dialog from '../dialog/dialog'
  import Home from '../home/home'

  export default {
    name: 'reservation',
    data() {
      return {
        title: '我的预约',
        vm:{
          showDialog: false
        }
      }
    },
    methods:{
      close(){
        this.vm.showDialog = false;
      }
    },
    components: {
      Header,
      Dialog,
      Home
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .reservation-content
    position absolute
    top 44px
    margin-left 2%

    .doctor-reservation
    .product-reservation
      margin 16px 8px 0
      background-color #fff
      padding 10px
      border-radius 16px
      text-align left
      width 96%

      .doctor-order
        border-bottom 1px solid #F8F8F8
        line-height 40px
        .cancel-reservation
          float right
          color #F4BA4E

      .doctor-info
        margin-top 10px

        .avatar-img
          margin-right 8px

        .doctor-intro
          display inline-block
          vertical-align top
          line-height 1.5

          .doctor-category
          .doctor-dept
            padding 2px 12px
            background-color #06C7C5
            color #fff
            border-radius 7px
            font-size 10px
            margin-left 4%

          .doctor-category
            background-color #2EA9E2


    .font-color
      color #999999
      font-size 12px
</style>

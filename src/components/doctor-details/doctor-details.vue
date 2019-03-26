<template>
  <div id="doctor-detail">
    <Header :title="title"></Header>
    <div class="doctor-content">
      <form action="">
        <div class="doctor-detail">
          <div class="details-content">
            <img class="img-avatar" src="" alt="" width="120px" height="120px">
            <div class="doctor-intro">
              <div class="doctor-name">何某某医生</div>
              <div><span class="doctor-dept">泌尿外科</span><span class="doctor-type">专科医生</span></div>
              <div><span class="font-color">预约金：</span><span class="bar-price">¥0.01</span></div>
              <div class="intro-hospital">
                <div class="doctor-icon hospital-icon"></div>
                <span>香港综合肿瘤中心</span></div>
              <div class="intro-honor">
                <div class="doctor-icon honor-icon"></div>
                <span class="honor">香港中文大学内科全科学士 英国皇家放射科医学院院士 英国皇家放射科医学院院士 </span></div>
            </div>
          </div>
          <div class="details-content">
            <div class="intro-specialty">
              <div class="doctor-icon specialty-icon"></div>
              <span class="specialty-name">擅长领域</span>
              <span class="specialty font-color">从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师……</span>
            </div>
          </div>
          <div class="details-content">
            <div class="intro-specialty">
              <div class="doctor-icon introduction-icon"></div>
              <span class="specialty-name">简介</span>
              <span class="specialty font-color">从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师……</span>
            </div>
          </div>
          <div class="details-content">
            <div class="intro-specialty">
              <div class="doctor-icon address-icon"></div>
              <span class="address">香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）</span></div>
          </div>
        </div>
        <div class="date">
          <div class="package">预约排期</div>
          <div class="package">
            <Calender></Calender>
          </div>
          <div class="package"></div>
          <div class="package"></div>
        </div>
      </form>
      <button class="btn-submit" @click="DoctorOrder()">确定预约</button>
    </div>
  </div>
</template>

<script>
  import Header from '../header/header'
  import Calender from '../calender/calender'

  export default {
    name: 'doctor-details',
    data() {
      return {
        title: '医生详情'
      }
    },
    methods: {
      DoctorOrder() {
        this.$router.push({
          path: '/doctor-order'
        })
      }
    },
    components: {
      Header,
      Calender
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .doctor-content
    position: absolute
    top 44px
    margin-left 2%

    .doctor-detail
      margin 0 14px 10px
      background-color #fff
      padding 0 6px 10px
      border-radius 8px
      text-align left

      .details-content
        padding 10px 0
        border-bottom 1px solid #F8F8F8

        .img-avatar
          background-color #999999
          border-radius 100%
          margin-right 2%
          display inline-block

        .doctor-intro
          display inline-block
          width 62%
          vertical-align top
          line-height 1.6
          font-size 12px

          .doctor-name
            font-size 14px

          .doctor-dept
            background-color #41D7A6
            color #fff
            padding 2px 10px
            border-radius 8px
            font-size 10px
            margin-right 4%

          .doctor-type
            background-color #4795FF
            color #fff
            padding 2px 10px
            border-radius 8px
            font-size 10px

    >>> .font-color
      color #999999
      line-height 1.4

     .date
       text-align left
       padding 0 14px
       line-height 1.4

      .package
        border-bottom 1px solid #f8f8f8
        padding-bottom 10px
    .bar-price
      color #4795FF

    .honor
      display inline-block
      width 80%

    >>> .intro-hospital
    >>> .intro-honor
    >>> .intro-specialty
      display flex
      margin-bottom 4px

      .doctor-icon
        width 18px
        height 18px
        background-size 18px 18px
        display inline-block
        margin-right 6px

      .hospital-icon
        background-image url("./hospital.png")

      .honor-icon
        background-image url("./honor.png")

      .specialty-icon
        background-image url("./specialty.png")
        margin-top -2px

      .introduction-icon
        background-image url("./introduction.png")
        margin-top -2px

      .address-icon
        background-image url("./address-hospital.png")
        margin-top -2px

    >>> .specialty-name
      margin-right 6px
      width 18%

    >>> .specialty
      width 70%
      font-size 12px
      margin-top -2px

    >>> .address
      width 92%
      font-size 12px
      line-height 1.4

  .btn-submit
    background-color #06C7C5
    border-radius 6px
    width 40%
    margin 20% 30%
    color #fff
    line-height 40px
    border none
</style>

<template>
  <div id="doctor-detail">
    <Header :title="title"></Header>
    <div class="doctor-content">
      <form action="">
        <div class="doctor-detail" v-for="(doctor, index) in doctors" :key="index" v-if="doctor.id === doctorId">
          <div class="details-content">
            <img class="img-avatar" src="" alt="" width="120px" height="120px">
            <div class="doctor-intro">
              <div class="doctor-name">{{doctor.name}}医生</div>
              <div><span class="doctor-dept">{{doctor.specName}}</span><span
                class="doctor-type">{{doctor.doctorName}}</span></div>
              <div><span class="font-color">预约金：</span><span class="bar-price">¥{{doctor.barPrice}}</span></div>
              <div class="intro-hospital">
                <div class="doctor-icon hospital-icon"></div>
                <span>{{doctor.clinicName}}</span></div>
              <div class="intro-honor">
                <div class="doctor-icon honor-icon"></div>
                <span class="honor">香港中文大学内科全科学士 英国皇家放射科医学院院士 英国皇家放射科医学院院士 </span></div>
            </div>
          </div>
          <div class="details-content">
            <div class="intro-specialty">
              <div class="doctor-icon specialty-icon"></div>
              <span class="specialty-name">擅长领域</span>
              <span class="specialty font-color">{{doctor.specialty}}</span>
            </div>
          </div>
          <div class="details-content">
            <div class="intro-specialty">
              <div class="doctor-icon introduction-icon"></div>
              <span class="specialty-name">简介</span>
              <span class="specialty font-color">{{doctor.desc}}</span>
            </div>
          </div>
          <div class="details-content">
            <div class="intro-specialty">
              <div class="doctor-icon address-icon"></div>
              <span class="address">{{doctor.clinicAddress}}</span></div>
          </div>
        </div>
        <div class="date">
          <div class="package">预约排期</div>
          <div class="package">
            <Calender></Calender>
          </div>
          <div class="dates">
            <div>
              <input v-if="mornumber>=10"  class="sex-input" type="radio" id="mor" value="9:00～12:00" v-model="date" disabled="disabled">
              <input  v-else class="sex-input" type="radio" id="mor" value="9:00～12:00" v-model="date">
              <label for="mor">9:00～12:00</label>
              <span class="number-color" v-if="mornumber<10" >余{{10-mornumber}}</span>
              <span class="font-color"v-else>已满</span>
              <span class="sec-price">¥338.00</span>
            </div>
            <div>
              <input v-if="afternumber>=10" disabled="disabled" class="sex-input" type="radio" id="after" value="15:00～18:00" v-model="date">
              <input v-else class="sex-input" type="radio" id="after" value="15:00～18:00" v-model="date">
              <label for="after">15:00～18:00</label>
              <span class="number-color" v-if="afternumber<10">余{{10-afternumber}}</span>
              <span class="font-color" v-else>已满</span>
              <span class="sec-price">¥366.00</span>
            </div>
          </div>
        </div>
      </form>
      <button class="btn-submit" @click="DoctorOrder(doctorId)">确定预约</button>
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
        title: '医生详情',
        date: '',
        doctorId: '',
        mornumber: 10,
        afternumber: 6,
        doctors: [
          {
            id: '001',
            name: '陈奕迅',
            specName: '临床肿瘤科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '002',
            name: '陈奕迅',
            specName: '临床肿瘤科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '003',
            name: '王某某',
            specName: '临床肿瘤科',
            doctorName: '专科医生',
            imgUrl: '',
            barPrice: '15',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '004',
            name: '李某某',
            specName: '外科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '005',
            name: '陈奕迅',
            specName: '妇科及妇产科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '006',
            name: '陈奕迅',
            specName: '妇科及妇产科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '007',
            name: '陈奕迅',
            specName: '妇科及妇产科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '008',
            name: '陈奕迅',
            specName: '外科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '009',
            name: '陈奕迅',
            specName: '外科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '010',
            name: '陈奕迅',
            specName: '外科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '011',
            name: '陈奕迅',
            specName: '泌尿外科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '012',
            name: '陈奕迅',
            specName: '泌尿外科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '013',
            name: '陈奕迅',
            specName: '泌尿外科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '014',
            name: '陈奕迅',
            specName: '前列腺外科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '015',
            name: '陈奕迅',
            specName: '前列腺外科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '016',
            name: '陈某哦',
            specName: '前列腺外科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '017',
            name: '陈奕迅',
            specName: '前列腺外科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '018',
            name: '陈奕迅',
            specName: '前列腺外科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '019',
            name: '陈某哦',
            specName: '前列腺外科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1000.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          }
        ]
      }
    },
    created() {
      //接收医生列表id
      this.doctorId = this.$route.params.id;
      console.log(this.doctorId + '医生列表到医生页面的传值（医生id）');
    },
    methods: {
      //医生详情跳转订单连接
      DoctorOrder: function (id) {
        this.$router.push({
          path: '/doctor-order/' + id,
          params: {
            doctorId: id
          }
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
        padding 10px 0

      .dates
        div
          border-bottom 1px solid #f8f8f8
          padding 10px 0

          label
            margin-right 2%

          .sec-price
            color: #F4B43E
            font-size 12px
            float right

    .bar-price
      color #4795FF

    .honor
      display inline-block
      width 80%

    >>> .number-color
      color #0AC5C6

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
    font-size 14px
</style>

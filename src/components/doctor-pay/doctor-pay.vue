<template>
  <div id="doctor-pay">
    <Header :title="title"></Header>
    <div class="order-content">
      <form action="product-order.vue" method="get">
        <div class="order-module"  v-for="(doctor, index) in doctors" :key="index" v-show="doctor.id === doctorId">
          <div class="package doctor-package">
            <img class="avatar-img" src="./doc-avatar.png" alt="" width="70" height="70">
            <div class="doctor-intro">
              <div class="doctor-name">{{doctor.name}}医生</div>
              <div><span class="doctor-dept">{{doctor.specName}}</span><span class="doctor-type">{{doctor.doctorName}}</span></div>
              <div class="doctor-job font-color">就职：{{doctor.clinicName}}</div>
            </div>
          </div>
          <div class="package">
            <span>预约类型</span>
            <input type="text" name="outpatient" value="门诊预约" readonly="readonly">
          </div>
          <div class="package">
            <span>支付金额</span>
            <input type="text" name="barprice" :value="doctor.barPrice" readonly="readonly">
          </div>
          <div class="package">
            <span>实付金额</span>
            <input type="text" name="secprice"  :value="doctor.secPrice" readonly="readonly">
          </div>
        </div>
        <div class="order-module">
          <div class="package">
            <span>订单号</span>
            <input type="text" name="number" value="00109653632636322" readonly="readonly">
          </div>
          <div class="package">
            <span>就诊时间</span>
            <input type="text" name="date" value="9:00～12:00 2019-01-23" dir="rtl">
          </div>
          <div class="package">
            <span>就诊人姓名</span>
            <input type="text" name="username" value="" placeholder="请输入">
          </div>
          <div class="package">
            <span>手机号码</span>
            <input type="text" name="tel" value="" placeholder="请输入">
          </div>
          <div class="package">
            <span>身份证号码</span>
            <input type="text" name="cardid" value="" placeholder="请输入">
          </div>
          <div class="package">
            <span>性别</span>
            <div class="sex">
              <div>
                <input class="sex-input" type="radio" name="sex" id="female" value="女" v-model="sex">
                <label class="font-color" for="female">女</label>
              </div>
              <div>
                <input class="sex-input" type="radio" name="sex" id="male" value="男" v-model="sex">
                <label class="font-color" for="male">男</label>
              </div>
            </div>
          </div>
          <div class="package">
            <span>年龄</span>
            <input type="text" name="age" value="" placeholder="请输入">
          </div>
          <div class="package">
            <span>香港身份证</span>
            <input type="text" name="HKcard" value="" placeholder="请输入">
          </div>
          <div class="package">
            <span>港澳台通行证</span>
            <input type="text" name="passid" value="" placeholder="请输入">
          </div>
          <div class="package">
            <span>其他护照</span>
            <input type="text" name="passport" value="" placeholder="请输入">
          </div>
          <div class="package">
            <span>预约人姓名</span>
            <input type="text" name="resername" value="" placeholder="请输入">
          </div>
          <div class="package">
            <span>邮箱</span>
            <input type="text" name="email" value="" placeholder="请输入">
          </div>
          <div class="package">
            <span>微信</span>
            <input type="text" name="weChat" value="" placeholder="请输入">
          </div>
          <div class="package">
            <span>疾病史</span>
            <input type="text" name="disease" value="" placeholder="请输入">
          </div>
          <div class="package">
            <span>过敏史</span>
            <input type="text" name="allergy" value="" placeholder="请输入">
          </div>
          <div class="package">
            <span>备注</span>
            <input type="text" name="remarks" value="" placeholder="请输入">
          </div>
        </div>
      </form>
      <button class="btn-submit-cancel" @click="vm.showDialog=true">取消订单</button>
      <button class="btn-submit">支付</button>
    </div>
    <Dialog class="exam" @closeDialog="close" v-if="vm.showDialog"></Dialog>
  </div>
</template>

<script>
  import Header from '../header/header'
  import Dialog from '../dialog/dialog'

  export default {
    name: 'doctor-pay',
    data() {
      return {
        title: '确认支付',
        vm :{
          showDialog: false
        },

        sex: '',
        doctorId: '',
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
    created(){
      //接收路由传递的id
      this.doctorId = this.$route.params.id;
      console.log(this.doctorId + '医生订单支付页面传值');
    },
    methods: {
      //是否取消订单提示框
      close(){
        this.vm.showDialog = false;
      }
    },
    //注册组件
    components: {
      Header,
      Dialog
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #doctor-pay
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
          text-align right

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

    .btn-submit-cancel
      background-color #F39281
      border-radius 6px
      width 30%
      margin 20% 10%
      color #fff
      line-height 40px
      border none

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

</style>

<template>
  <div id="doctor">
    <Header :title="title"></Header>
    <div class="doctor-nav-wrapper">
      <!--<cube-scroll>
        <cube-tab-bar class="doctor-list-wrapper" v-model="selectedLabel">
          <cube-tab v-for="(item, index) in specialist" :label="item.label" :key="index"></cube-tab>
        </cube-tab-bar>
      </cube-scroll>
      <cube-tab-panels class="doctor-wrapper" v-model="selectedLabel">
        <cube-tab-panel v-for="(item, index) in specialist" :label="item.label" :key="index">
          <cube-scroll>
            <ul>
              <li class="tab-panel-li" v-for="(doctor, index) in item.doctors" :key="index" @click="doctorDetails()">
                <img class="doctor-avatar" src="" alt="" width="46" height="46px">
                <div class="doctor-into">
                  <div class="doctor-name">{{doctor.name}}医生</div>
                  <span class="doctor-dept">{{doctor.specName}}</span>
                  <span class="doctor-type">{{doctor.doctorName}}</span>
                </div>
                <div class="doctor-info">
                  <div>
                    <span class="font-color font-12px">预约金：</span><span class="doctor-bar-price font-12px">¥{{doctor.barPrice}}</span>
                    <span class="font-color font-12px">第二诊疗金：</span><span class="doctor-sec-price font-12px">¥{{doctor.secPrice}}</span>
                  </div>
                  <div class="font-color font-12px">专长：{{doctor.desc}}</div>
                </div>
              </li>
            </ul>
          </cube-scroll>
        </cube-tab-panel>
      </cube-tab-panels>-->
      <cube-scroll-nav
        :side="true"
        :data="specialist"
        :current="current"
        @change="changeHandler"
        @sticky-change="stickyChangeHandler">
        <cube-scroll-nav-panel
          v-for="item in specialist"
          :key="item.id"
          :label="item.label">
          <ul>
            <li class="doctor-li" v-for="doctor in item.doctors" @click="doctorDetails(doctor.id)">
              <div>
                <img class="doctor-avatar" src="" alt="" width="46" height="46px">
                <div class="doctor-into">
                  <div class="doctor-name">{{doctor.name}}医生</div>
                  <span class="doctor-dept">{{doctor.specName}}</span>
                  <span class="doctor-type">{{doctor.doctorName}}</span>
                </div>
                <div class="doctor-info">
                  <div>
                    <span class="font-color font-12px">预约金：</span><span class="doctor-bar-price font-12px">¥{{doctor.barPrice}}</span>
                    <span class="font-color font-12px">第二诊疗金：</span><span class="doctor-sec-price font-12px">¥{{doctor.secPrice}}</span>
                  </div>
                  <div class="font-color font-12px">专长：{{doctor.desc}}</div>
                </div>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
  </div>
</template>

<script>
  import Header from '../header/header'

  export default {
    name: 'doctor',
    data() {
      return {
        title: '医生列表',
        selectedLabel: '',
        specialist: [
          {
            label: '临床肿瘤科',
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
              }
            ]
          },
          {
            label: '妇科及妇产科',
            doctors: [
              {
                id: '004',
                name: '李某某',
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
              }
            ]
          },
          {
            label: '外科',
            doctors: [
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
              }
            ]
          },
          {
            label: '泌尿外科',
            doctors: [
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
              }
            ]
          },
          {
            label: '前列腺外科',
            doctors: [
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
        ]
      }
    },
    // 加载的时候默认显示第一个label的内容
    created() {
      this.selectedLabel = this.specialist[0].label
    },
    methods: {
      doctorDetails(id) {
        this.$router.push({
          path: '/doctor-details/'+id,
          params:{
            doctorId:id
          }
        });
        console.log(id)
      }
    },
    components: {
      Header
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .doctor-nav-wrapper
    display flex
    height calc(100% - 44px)
    position: absolute
    bottom 0
    top 44px
    margin-left 2%

  >>> .cube-scroll-nav-panels
    text-align left
    padding 0 4%

    .doctor-li
      padding 4% 0
      border-bottom 1px solid #F8F8F8

    .doctor-avatar
      width 46px
      background-color #999999
      border-radius 100%
      margin-right 2%
      display inline-block

    .doctor-into
      display inline-block
      vertical-align top
      margin-bottom 12px

    .doctor-name
      margin-bottom 8px

    .doctor-dept
      padding 2px 10px
      background-color #06C7C5
      color #fff
      border-radius 7px
      font-size 10px
      margin-right 4%

    .doctor-type
      padding 2px 10px
      background-color #2EA9E2
      color #fff
      border-radius 7px
      font-size 10px

    .doctor-info
      margin-top 8px

    .font-color
      color #999999

    .font-12px
      font-size 12px
      line-height 1.6

    .doctor-bar-price
      color: #06C7C5
      margin-right 10px

    .doctor-sec-price
      color #F4B43E

  >>> .cube-scroll-nav-panel-title
    display none

  >>> .cube-scroll-nav-bar-item
    padding 14px
    border-bottom 1px solid rgba(151,151,151,0.034)

  >>> .cube-scroll-nav-bar-item_active
    color #06C6C8
</style>

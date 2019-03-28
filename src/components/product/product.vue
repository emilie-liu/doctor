<template>
  <div id="product">
    <Header :title="title"></Header>
    <div class="product-content">
      <ul class="tabs">
        <li class="tab-item" @click="curId=0" :class="{'cur':curId===0}">疫苗</li>
        <li class="tab-item" @click="curId=1" :class="{'cur':curId===1}">医美</li>
        <li class="tab-item" @click="curId=2" :class="{'cur':curId===2}">体检</li>
        <li class="tab-item" @click="curId=3" :class="{'cur':curId===3}">DNA</li>
        <li class="tab-item" @click="curId=4" :class="{'cur':curId===4}">第二治疗</li>
      </ul>
      <div class="tabs-content">
        <ul v-show="curId===0">
          <li class="tab-details" v-for="(product, index) in products" :key="index"
              @click="productDetails(product.id)">
            <img class="pro-img" src="./11.png" alt="">
            <div class="pro-details">
              <div class="pro-name">{{product.name}}</div>
              <div class="pro-price">¥{{product.price}}</div>
            </div>
          </li>
        </ul>
        <div v-show="curId===1">
          <h1>医美tab</h1>
        </div>
        <div v-show="curId===2">
          <h1>体检tab</h1>
        </div>
        <div v-show="curId===3">
          <h1>DNAtab</h1>
        </div>
        <ul v-show="curId===4">
          <li class="doctor-detail" v-for="(doctor, index) in doctors" :key="index" @click="doctorDetails(doctor.id)">
            <img class="doc-avatar" src="./doc-avatar.png" alt=""/>
            <div class="doc-detail">
              <div>
                <span class="doc-name">{{doctor.name}}医生</span>
                <span class="doc-dept">{{doctor.specName}}</span>
                <span class="doc-category">{{doctor.doctorName}}</span>
              </div>
              <div>
                <span class="font-color-12px">预约金:</span>
                <span class="bar-price">¥{{doctor.barPrice}}</span>
                <span class="font-color-12px">第二诊疗金:</span>
                <span class="sec-price">¥{{doctor.secPrice}}</span>
              </div>
            </div>
            <div class="doc-expertise font-color-12px">专长：从事外科20年丰富的男性前列腺疾病，医学博士生导……</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '../header/header'

  export default {
    name: 'product',
    data() {
      return {
        title: '服务列表',
        curId: 0,
        products: [
          {
            id: '001',
            name: '流感4价疫苗01流感4价疫苗流感4价疫苗流感4价疫苗',
            price: '1000.01',
            details: '11医疗中心13价肺炎球菌疫苗价格为1250港币+250医生诊金费用',
            clinics: [
              {
                id: '0001',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111',
              },
              {
                id: '0002',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222',
              },
              {
                id: '0003',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇300号',
                tel: '13333333',
              }
            ]
          },
          {
            id: '002',
            name: '流感4价疫苗02',
            price: '1000.01',
            details: '22医疗中心13价肺炎球菌疫苗价格为1250港币+250医生诊金费用',
            clinics: [
              {
                id: '0004',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },
              {
                id: '0005',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222'
              },
              {
                id: '0006',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇300号',
                tel: '13333333'
              }
            ]
          },
          {
            id: '003',
            name: '流感4价疫苗03',
            price: '1000.01',
            details: '33医疗中心13价肺炎球菌疫苗价格为1250港币+250医生诊金费用',
            clinics: [
              {
                id: '0007',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },
              {
                id: '0008',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222'
              },
              {
                id: '0009',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇300号',
                tel: '13333333'
              }
            ]
          },
          {
            id: '004',
            name: '流感4价疫苗04',
            price: '1000.01',
            details: '44医疗中心13价肺炎球菌疫苗价格为1250港币+250医生诊金费用',
            clinics: [
              {
                id: '0010',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },
              {
                id: '0011',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222'
              },
              {
                id: '0012',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇300号',
                tel: '13333333'
              }
            ]
          },
          {
            id: '005',
            name: '流感4价疫苗05',
            price: '1000.01',
            details: '55医疗中心13价肺炎球菌疫苗价格为1250港币+250医生诊金费用',
            clinics: [
              {
                id: '0013',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },
              {
                id: '0014',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222'
              },
              {
                id: '0015',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇300号',
                tel: '13333333'
              }
            ]
          },
          {
            id: '006',
            name: '流感4价疫苗06',
            price: '1000.01',
            details: '55医疗中心13价肺炎球菌疫苗价格为1250港币+250医生诊金费用',
            clinics: [
              {
                id: '0016',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },
              {
                id: '0017',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222'
              },
              {
                id: '0018',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇300号',
                tel: '13333333'
              }
            ]
          }
        ],
        doctors: [
          {
            id: '001',
            name: '陈奕迅',
            specName: '临床肿瘤科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '1111.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '002',
            name: '陈奕迅',
            specName: '外科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '2222.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '003',
            name: '王某某',
            specName: '内科',
            doctorName: '专科医生',
            imgUrl: '',
            barPrice: '15',
            secPrice: '3333.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '004',
            name: '孟某某',
            specName: '外科',
            doctorName: '主治医生',
            imgUrl: '',
            barPrice: '25',
            secPrice: '2222.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          },
          {
            id: '005',
            name: '周某某',
            specName: '内科',
            doctorName: '专科医生',
            imgUrl: '',
            barPrice: '15',
            secPrice: '3333.01',
            desc: '从事外科20年丰富的男性前列腺疾病，医学博士生导师......',
            specialty: '从事外科20年丰富的男性前列腺疾病，医学博士生导师 从事外科20年丰富的男性前列腺疾病，医学博士生导师从事外科20年丰富的男性前列腺疾病，医学博士生导师',
            clinicName: '香港综合肿瘤中心',
            clinicAddress: '香港九龙尖沙咀弥敦道26号11楼全层（尖沙咀喜来登酒店侧）'
          }
        ]
      }
    },
    components: {
      Header
    },
    methods: {
      productDetails: function (id) {
        this.$router.push({
          path: '/product-details/' + id,
          params: {
            productId: id
          }
        })
        console.log(id)
      },
      doctorDetails: function (id) {
        this.$router.push({
          path: '/doctor-details/' + id,
          params: {
            doctorId: id
          }
        })
        console.log(id)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .tabs
    background-color #fff
    line-height 40px
    position fixed
    top 44px
    width 100%
    z-index 1

  .product-content
    margin-left 2%

  .tabs-content
    position: absolute
    top 88px
    width 100%

  .tab-item
    display inline-block
    width 20%

  .tab-item.cur
    color #41D7A6
    border-bottom 3px solid #41D7A6

  .tab-details
    background-color #fff
    margin-top: 8px
    padding 3%
    text-align left
    position: relative

  .pro-img
    width 34%
    margin-right 2%

  .pro-details
    display inline-block
    vertical-align top
    width 64%

  .pro-name
    height 64px
    line-height 1.4

  .pro-price
    color: #F4B43E

  .doctor-detail
    background-color #fff
    padding 4% 3%
    margin-top 2%
    text-align left

  .doc-detail
    display inline-block
    line-height 1.8
    width 84%

  .doc-avatar
    width 14%
    margin-right 2%
    vertical-align top

  .doc-name
    margin-right 4%

  .doc-dept
    padding 2px 12px
    background-color #06C7C5
    color #fff
    border-radius 7px
    font-size 10px
    margin-right 4%

  .doc-category
    padding 2px 12px
    background-color #2EA9E2
    color #fff
    border-radius 7px
    font-size 10px

  .doc-expertise
    margin-top 2%

  .font-color-12px
    color: #999999
    font-size 12px

  .bar-price
    color: #06C7C5
    font-size 12px
    margin-right 2%

  .sec-price
    color: #F4B43E
    font-size 12px

</style>

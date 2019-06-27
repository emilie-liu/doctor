<template>
  <div id="product-details">
    <Header :title="title"></Header>
    <div class="pro-content" v-for="(product, index) in products" :key="index" v-show="product.id === productId">
      <div class="product-detail">
        <img class="pro-img" src="./12.png" alt="">
        <div class="pro-details">
          <div class="pro-name">{{product.name}}</div>
          <div class="pro-detail">{{product.details}}</div>
          <div class="pro-price">¥{{product.price}}</div>
        </div>
      </div>
      <div class="pro-tabs">
        <ul class="tabs">
          <li class="tab-item" @click="curId=0" :class="{'cur':curId===0}">支持诊所</li>
          <li class="tab-item" @click="curId=1" :class="{'cur':curId===1}">产品详情</li>
          <li class="tab-item" @click="curId=2" :class="{'cur':curId===2}">预约须知</li>
        </ul>
        <div class="tab-content">
          <div v-show="curId===0">
            <div class="tab-detail" v-for="(clinic, index) in product.clinics" :key="index">
              <img class="pro-img" src="./15.png" alt="">
              <div class="pro-details">
                <div class="pro-name">{{clinic.name}}</div>
                <div class="pro-address">地址：{{clinic.address}}</div>
                <div class="pro-tel">联系电话：{{clinic.tel}}</div>
                <div class="pro-price">¥{{product.price}}</div>
              </div>
            </div>
          </div>
          <div v-show="curId===1">
            <div class="details">{{product.details}}</div>
          </div>
          <div v-show="curId===2">
            <div class="details">
              预约时限:可预约未来7天医生号签 取消时间:取消号签需提前一天进行取消,过时号签自动取消并算一次违约 注意事项:只能就诊当天现场取号,不能提前取号 ...
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="res-div">
      <span class="pro-address">最低价格：</span><span class="res-price">￥1000.01</span>
      <cube-button class="res-btn" @click="productOrder(productId)">立即预约</cube-button>
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
        title: '服务详情',
        productId: '',
        products: [
          {
            id: '001',
            name: '流感4价疫苗01流感4价疫苗流感4价疫苗流感4价疫苗',
            price: '1000.01',
            details: '11医疗中心13价肺炎球菌疫苗价格为1250港币+250医生诊金费用',
            clinics: [
              {
                id: '0001',
                name: '1香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111',
              },
              {
                id: '0002',
                name: '2香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222',
              },
              {
                id: '0003',
                name: '3香港安生医疗中心',
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
                name: '16香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },
              {
                id: '0017',
                name: '17香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222'
              },
              {
                id: '0018',
                name: '18香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇300号',
                tel: '13333333'
              }
            ]
          },
          {
            id: '007',
            name: '定制闪耀迷人明星眼',
            price: '16800',
            details: '11定制闪耀迷人明星眼+250医生诊金费用',
            clinics: [
              {
                id: '0019',
                name: '1香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },
              {
                id: '0020',
                name: '2香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222'
              },
              {
                id: '0021',
                name: '3香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇300号',
                tel: '13333333'
              }
            ]
          },
          {
            id: '008',
            name: '鼻综合整形术',
            price: '1000.01',
            details: '22鼻综合整形术',
            clinics: [
              {
                id: '0022',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },
              {
                id: '0023',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222'
              },
              {
                id: '0024',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇300号',
                tel: '13333333'
              }
            ]
          },
          {
            id: '009',
            name: '水光针',
            price: '1000.01',
            details: '33水光针',
            clinics: [
              {
                id: '0025',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },
              {
                id: '0026',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222'
              },
              {
                id: '0027',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇300号',
                tel: '13333333'
              }
            ]
          },
          {
            id: '010',
            name: '卓建医疗-肝功能检查',
            price: '1520.00',
            details: '11定卓建医疗-肝功能检查',
            clinics: [
              {
                id: '0028',
                name: '1香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },
              {
                id: '0029',
                name: '2香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222'
              },
              {
                id: '0030',
                name: '3香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇300号',
                tel: '13333333'
              }
            ]
          },
          {
            id: '011',
            name: '心脏健康检查',
            price: '1000.01',
            details: '22心脏健康检查',
            clinics: [
              {
                id: '0031',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },
              {
                id: '0032',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222'
              },
              {
                id: '0033',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇300号',
                tel: '13333333'
              }
            ]
          },
          {
            id: '012',
            name: '牙齿健康检查',
            price: '1000.01',
            details: '33牙齿健康检查',
            clinics: [
              {
                id: '0034',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },
              {
                id: '0035',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222'
              },
              {
                id: '0036',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇300号',
                tel: '13333333'
              }
            ]
          },
          {
            id: '013',
            name: '卓建医疗-肝功能检查',
            price: '1520.00',
            details: '11定卓建医疗-肝功能检查',
            clinics: [
              {
                id: '0037',
                name: '1香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },
              {
                id: '0038',
                name: '2香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222'
              },
              {
                id: '0039',
                name: '3香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇300号',
                tel: '13333333'
              }
            ]
          },
          {
            id: '014',
            name: '心脏健康检查',
            price: '1000.01',
            details: '22心脏健康检查',
            clinics: [
              {
                id: '0040',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },
              {
                id: '0041',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222'
              },
              {
                id: '0042',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇300号',
                tel: '13333333'
              }
            ]
          },
          {
            id: '015',
            name: '牙齿健康检查',
            price: '1000.01',
            details: '33牙齿健康检查',
            clinics: [
              {
                id: '0043',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },
              {
                id: '0044',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇200号',
                tel: '1122222'
              },
              {
                id: '0045',
                name: '香港安生医疗中心',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇300号',
                tel: '13333333'
              },{
                id: '0046',
                name: '新添加一',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },{
                id: '0047',
                name: '新添加二',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              },{
                id: '0048',
                name: '新添加三',
                address: '上水龙圣路48号上水汇100号上水龙圣 路48号上水汇100号',
                tel: '11111111'
              }
            ]
          }
        ]
      }
    },
    created() {
      this.productId = this.$route.params.id;
      console.log(this.productId + 'product页面的id值传递到详情页面');
    },
    methods: {
      productOrder:function(id) {
        this.$router.push({
          path: '/product-order/'+ id,
          params:{
            productId: id
          }
        })
      }
    },
    components: {
      Header
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .pro-content
    position absolute
    top 44px
    margin-left 2%

  .product-detail
  .tab-detail
    background-color #fff
    padding 3%
    text-align left
    position relative
    margin-bottom 8px

  .product-detail
    position fixed
    top 44px
    left 0
    z-index 1
    width 94%

  .tabs
    position fixed
    top 170px
    width 100%
    z-index 1

  .tab-content
    position relative
    top 171px

  .pro-img
    width 34%
    margin-right 2%

  .pro-details
    display inline-block
    width 64%
    line-height 1.4
    vertical-align top

  .pro-price
    color #F4B43E

  .tabs
    background-color #fff
    line-height 40px
    border-bottom 1px solid #F8F8F8

  .tab-item
    display inline-block
    width 33%

  .tab-item.cur
    color #41D7A6
    border-bottom 3px solid #41D7A6

  .pro-detail,
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
    bottom 0
    box-shadow: 0 2px 8px 0 rgba(117, 117, 117, 0.5)

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
  .details
    padding 10px 8px
    text-align left
    line-height 1.4
</style>

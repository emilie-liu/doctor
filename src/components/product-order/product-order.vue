<template>
  <div id="product-order">
    <Header :title="title"></Header>
    <div class="order-content">
      <form class="product-order" action="product-pay.vue" method="post">
        <div class="order-module" v-for="(product, index) in products" :key="index" v-if="product.id === productId">
          <div class="package">
            <span>套餐</span>
            <input type="text" name="name" :value="product.name" >
          </div>
          <div class="package">
            <span>医院</span>
            <cube-select v-model="value"  :options="options"></cube-select>
          </div>
          <div class="package">
            <span>金额</span>
            <input type="text" name="price" :value="product.price" readonly="readonly">
          </div>
        </div>
        <div class="order-module">
          <div class="package">
              <Calender></Calender>
            <div class="dates">
              <div>
                <input v-if="mornumber>=10" disabled="disabled" class="sex-input" type="radio" id="mor" name="date" value="9:00～12:00" v-model="date">
                <input v-else class="sex-input" type="radio" id="mor" name="date" value="9:00～12:00" v-model="date">
                <label for="mor">9:00～12:00</label>
                <span class="number-color" v-if="mornumber<10">余{{10-mornumber}}</span>
                <span class="font-color" v-else>已满</span>
                <span class="sec-price">¥338.00</span>
              </div>
              <div>
                <input v-if="afternumber>=10" disabled="disabled" class="sex-input" type="radio" id="after" name="date" value="15:00～18:00" v-model="date">
                <input v-else class="sex-input" type="radio" id="after" name="date" value="15:00～18:00" v-model="date">
                <label for="after">15:00～18:00</label>
                <span class="number-color" v-if="afternumber<10">余{{10-afternumber}}</span>
                <span class="font-color" v-else="afternumber>=10">已满</span>
                <span class="sec-price">¥368.00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="order-module">
          <div class="package">
            <span>就诊人姓名<i>*</i></span>
            <input type="text" name="username" value="" placeholder="请输入">
          </div>
          <div class="package">
            <span>手机号码<i>*</i></span>
            <input type="text" name="tel" value="" placeholder="请输入">
          </div>
          <div class="package">
            <span>身份证号码<i>*</i></span>
            <input type="text" name="cardid" value="" placeholder="请输入">
          </div>
          <div class="package">
            <span>性别<i>*</i></span>
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
        <button class="btn-submit" @click="ProductPay(productId)">提交订单</button>
        <!--<button class="btn-submit" @click="onSubmit($event)">表单提交</button>-->
      </form>
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
        productId: '',
        mornumber: 8,
        afternumber: 11,
        value: '香港安生医疗中心',
        options: [
          '香港安生医疗中心', '澳门中心医院', '深证南山医院', '深圳总医院', '上海医院中心', '疫苗中心医院'
        ],
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
    created(){
      this.productId = this.$route.params.id;
      console.log(this.productId + 'productId订单详情到确认订单页面的传值');
    },
    components: {
      Header,
      Calender
    },
    methods: {
      ProductPay:function(id) {
        this.$router.push({
          path: '/product-pay/'+id,
          params: {
            productId: id
          }
        })
      },
  /*    //form表单提交,
      onSubmit(event){
        event.preventDefault();
        let formData = JSON.stringify(this.formObj);
        console.log(formData);
        this.$http.post('',formData).then(function (res) {
          if(res === 200){
            console.log("请求成功");
          }else{
            console.log("请求失败");
          }
        })
      }*/

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
        text-align right

      .cube-select
        width 60%
        border none
        display inline-block
        float right
        line-height 28px
        text-align right
        color #999999
        &:after
          border none

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
  >>> .number-color
    color #0AC5C6
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

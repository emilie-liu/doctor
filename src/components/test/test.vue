<template>
  <div id="test">
    测试页面
    <input type="text" v-model="msg">
    <div>{{msg1}}</div>

    <form action=""  method="post" enctype="multipart/form-data">
      <div class="add-to">
        <div class="address">
          <p class="address-p">地址</p>
          <select class="address-contry address-s" v-model="formObj.contry">
            <option :value="item.id" v-for="(item,index) in contry" :key="index">{{item.text}}</option>
          </select>
          <select class="address-province address-s" v-model="formObj.province">
            <option :value="item.val" v-for="(item,index) in province" :key="index">{{item.text}}</option>
          </select>
          <select class="address-city address-s" v-model="formObj.city">
            <option :value="item.val" v-for="(item,index) in city" :key="index">{{item.text}}</option>
          </select>
          <select class="address-area address-s" v-model="formObj.area">
            <option :value="item.val" v-for="(item,index) in area" :key="index">{{item.text}}</option>
          </select>
          <input type="text" placeholder="请输入详细地址" class="address-text address-s" v-model="formObj.detail"/>
        </div>
        <div class="address-phone">
          <p class="address-num">联系方式</p>
          <input type="text" placeholder="请输入电话号码" class="address-text address-s" v-model="formObj.phone"/>
        </div>
        <div class="address-div">
          <p class="address-detailed">详细地址：{{formObj.contry + formObj.province + formObj.city + formObj.area + formObj.detail + ' ' + formObj.phone}}</p>
        </div>
        <div class="number">
          <p class="address-num">数量</p>
          <input type="number" class="number-input" name="points" min="0" max="100" value="1" v-model="formObj.number"/>
        </div>
        <div class="shopping-cart">
          <button class="add-shopping-buy" @click="onSubmit($event)">购买</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        msg: "vue钩子函数",
        formObj:{
          contry:[{id:1,text:"广东省"},{id:2,text:"广东省"},{id:3,text:"广东省"},{id:4,text:"广东省"}],
          province:'',
          city:'',
          area:'',
          detail:'',
          phone:'',
          number:''
        }
      }
    },
    //实现某一属性的实时计算，现在是实现msg数据的顺序改变
    computed: {
      msg1: function () {
        return this.msg.split("").reverse().join("");
      }
    },
    //监听某一个属性的变化
    watch: {},
    //组件内部的方法
    methods: {
      onSubmit(event){
        event.preventDefault();
        let formData = JSON.stringify(this.formObj);
        console.log(formData);
        this.$http.post('',formData).then(function (res) {
          if(res.status === 200){
            console.log("请求成功");
          }else {
            console.log("请求失败");
          }
        })
      }
    },
/*    //创建之前函数beforeCreat
    beforeCreate() {
      console.group("创建前状态===========");
      console.log("创建之前的元素：" + this.$el);
      console.log("创建之前的数据：" + this.$data);
      console.log("创建之前的msg：" + this.msg);
    },
    //创建之后函数created
    created() {
      console.group("创建完毕状态===========");
      console.log("创建之后的元素：" + this.$el);
      console.log("创建之后的数据：" + this.$data);
      console.log("创建之后的msg：" + this.msg);
    },
    //加载之前函数beforeMount
    beforeMount() {
      console.group("加载前状态==============");
      console.log("加载前的元素：" + this.$el);
      console.log("加载前的数据：" + this.$data);
      console.log("加载前的msg：" + this.msg);
    },
    //加载之后函数mounted
    mounted() {
      console.group("加载后状态==============");
      console.log("加载后的元素：" + this.$el);
      console.log("加载后的数据：" + this.$data);
      console.log("加载后的msg：" + this.msg);
    },
    //更新之前函数beforeUpdate
    beforeUpdate() {
      console.group("更新前状态==============");
      console.log("更新前的元素：" + this.$el);
      console.log("更新前的数据：" + this.$data);
      console.log("更新前的msg：" + this.msg);
    },
    //更新之后函数updated
    updated() {
      console.group("更新后状态==============");
      console.log("更新后的元素：" + this.$el);
      console.log("更新后的数据：" + this.$data);
      console.log("更新后的msg：" + this.msg);
    },
    //销毁之前函数beforeDestroy
    beforeDestroy() {
      console.group("销毁更新前状态==============");
      console.log("销毁前的元素：" + this.$el);
      console.log("销毁前的数据：" + this.$data);
      console.log("销毁前的msg：" + this.msg);
    },
    //销毁之后函数destroyed
    destroyed() {
      console.group("销毁后状态==============");
      console.log("销毁后的元素：" + this.$el);
      console.log("销毁后的数据：" + this.$data);
      console.log("销毁后的msg：" + this.msg);
    }*/
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #test
    text-align left
    margin 6%
    font-size 16px
    line-height 1.6
    width 100%
</style>

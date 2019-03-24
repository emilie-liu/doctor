<template>
  <div id="calender">
    <div id="celender_head">
      <span id="left" class="celender_head" @click="left()"> < </span>
      <span id="celender_head_inner" class="celender_head">{{header}}</span>
      <span id="right" class="celender_head" @click="right()"> > </span>
    </div>
    <div id="calender_body">
      <table>
        <tr class='head'>
          <td v-for="head in heads">{{ head }}</td>
        </tr>
        <tr v-for="item in show">
          <td :class="{now: item1.now, last_month:item1.attr == 'last_month',next_month:item1.attr == 'next_month'}"
              v-for="item1 in item ">{{item1.num}}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.setCalender(new Date())
    },

    methods: {
      initline: function () {
        this.datas = new Array()
        this.show = new Array();

      },
      backToday: function () {
        this.setCalender(new Date())
      },
      getcurrentDates: function (calender_Date) {//传入正常的Date（）类型数据
        this.initline()
        var months = calender_Date.getMonth();
        months = months + 1;
        calender_Date.setMonth(months);
        calender_Date.setDate(0)


        return calender_Date.getDate();
      },
      getlastDates: function (calenderdDate) {//传入正常的Date（）类型数据
        var curDate = calenderdDate;
        curDate.setDate(0);
        return curDate.getDate();
      },
      left: function () {
        this.initline()
        var yy = this.currentYear;
        var mm = this.currentMonth;
        var dd = 1
        if (yy == new Date().getFullYear() && mm == new Date().getMonth() + 1) {
          dd = new Date().getDate();
        }
        if (mm == 0) {
          mm = 12;
          yy = yy - 1;
          this.currentMonth = mm;
          this.currentYear = yy;
        }
        var calenderrDate = yy + "-" + mm + "-" + dd;
        this.setCalender(new Date(calenderrDate));
      },
      right: function () {
        this.initline()
        var yy = this.currentYear;
        var mm = this.currentMonth + 2;
        var dd = 1
        if (yy == new Date().getFullYear() && mm == new Date().getMonth() + 1) {
          dd = new Date().getDate();
        }
        if (mm > 12) {
          mm = 1;
          yy++;
          this.currentMonth = mm;
          this.currentYear = yy;
        }
        var calender__Date = yy + "-" + mm + "-" + dd;
        this.setCalender(new Date(calender__Date));
      },
      setCalender: function (dateNow) {
        //显示日历部分
        var firstday;
        var today = dateNow;
        var yy = today.getFullYear();
        this.currentYear = yy;
        var mm = today.getMonth() + 1;//today=2;mm=3
        this.currentMonth = mm - 1;//this.curr=2
        var dd = today.getDate();
        this.currentDay = dd;//30
        firstday = yy + "-" + mm + "-1";//2018-3-1
        //本月第一天是星期几,也表示前面有几个空的天数
        var firstday_day = new Date(firstday).getDay();
        //日历头
        this.header = yy + '-' + mm;
        var cur_days = this.getcurrentDates(today);
        //上一月有多少天
        var last_days = this.getlastDates(dateNow);

        //上个月从哪天开始出现
        var last_first_day = last_days - firstday_day + 1;
        //firstline
        //存上个月的日期
        for (var i = last_first_day; i <= last_days; i++) {
          var date = new Object();
          date.num = i;
          date.attr = 'last_month'
          date.now = false
          this.datas.push(date);
          // this.dateData.firstline.push(date);
        }
        //temp存放换行前上一个数据
        //下一行第一个数字
        var num_second = 7 - firstday_day + 1;
        //存本月日期
        for (var i = 1; i <= cur_days; i++) {
          var date = new Object();
          date.num = i;
          date.attr = 'this_month'
          if (i == this.currentDay && this.currentMonth == new Date().getMonth() && this.currentYear == new Date().getFullYear()) {
            date.now = true
          } else {
            date.now = false
          }
          this.datas.push(date);
        }
        for (var i = 1; i <= 42 - cur_days - (last_days - last_first_day + 1); i++) {
          var date = new Object();
          date.num = i;
          date.attr = 'next_month'
          this.datas.push(date);
        }

        var k = 0;
        for (var i = 0; i < 6; i++) {
          var line = new Array();
          for (var j = 0; j < 7; j++) {
            line.push(this.datas[k++]);
          }
          this.show.push(line);
        }

      }
    },
    data() {
      return {
        body: '', header: '', currentYear: '', currentMonth: '', currentDay: '',
        heads: ["日", "一", "二", "三", "四", "五", "六"],

        datas: new Array(),
        show: new Array()
      }
    }

  }
</script>
<style lang="stylus">
  #calender
    overflow auto
    position relative
    top 0
    left 0
    width 100%
    #celender_head
      text-align center
      span
        padding 0 20px
</style>

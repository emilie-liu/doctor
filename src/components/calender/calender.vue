<template>
  <section class="wh_container">
    <div class="wh_content_all">
      <div class="wh_top_changge">
        <li @click="PreMonth(myDate,false)">
          <div class="wh_jiantou1"></div>
        </li>
        <li class="wh_content_li">{{dateTop}}</li>
        <li @click="NextMonth(myDate,false)">
          <div class="wh_jiantou2"></div>
        </li>
      </div>
      <div class="wh_content">
        <div class="wh_content_item" v-for="tag in textTop">
          <div class="wh_top_tag">{{tag}}</div>
        </div>
      </div>
      <div class="wh_content">
        <div class="wh_content_item" v-for="(item,index) in list" @click="clickDay(item,index)">
          <div
            class="wh_item_date"
            v-bind:class="[{ wh_isMark: item.isMark},{wh_other_dayhide:item.otherMonth!=='nowMonth'},{wh_want_dayhide:item.dayHide},{wh_isToday:item.isToday},{wh_chose_day:item.chooseDay},setClass(item)]"
          >{{item.id}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import timeUtil from "./calendar";

  export default {
    data() {
      return {
        myDate: [],
        list: [],
        historyChose: [],
        dateTop: ""
      };
    },
    props: {
      markDate: {
        type: Array,
        default: () => []
      },
      markDateMore: {
        type: Array,
        default: () => []
      },
      textTop: {
        type: Array,
        default: () => ["日", "一", "二", "三", "四", "五", "六"]
      },
      sundayStart: {
        type: Boolean,
        default: () => true
      },
      agoDayHide: {
        type: String,
        default: `0`
      },
      futureDayHide: {
        type: String,
        default: `2554387200`
      }
    },
    created() {
      this.intStart();
      this.myDate = new Date();
    },
    methods: {
      intStart() {
        timeUtil.sundayStart = this.sundayStart;
      },
      setClass(data) {
        let obj = {};
        obj[data.markClassName] = data.markClassName;
        return obj;
      },
      clickDay: function (item, index) {
        if (item.otherMonth === "nowMonth" && !item.dayHide) {
          this.getList(this.myDate, item.date);
        }
        if (item.otherMonth !== "nowMonth") {
          item.otherMonth === "preMonth"
            ? this.PreMonth(item.date)
            : this.NextMonth(item.date);
        }
      },
      ChoseMonth: function (date, isChosedDay = true) {
        date = timeUtil.dateFormat(date);
        this.myDate = new Date(date);
        this.$emit("changeMonth", timeUtil.dateFormat(this.myDate));
        if (isChosedDay) {
          this.getList(this.myDate, date, isChosedDay);
        } else {
          this.getList(this.myDate);
        }
      },
      PreMonth: function (date, isChosedDay = true) {
        date = timeUtil.dateFormat(date);
        this.myDate = timeUtil.getOtherMonth(this.myDate, "preMonth");
        this.$emit("changeMonth", timeUtil.dateFormat(this.myDate));
        if (isChosedDay) {
          this.getList(this.myDate, date, isChosedDay);
        } else {
          this.getList(this.myDate);
        }
      },
      NextMonth: function (date, isChosedDay = true) {
        date = timeUtil.dateFormat(date);
        this.myDate = timeUtil.getOtherMonth(this.myDate, "nextMonth");
        this.$emit("changeMonth", timeUtil.dateFormat(this.myDate));
        if (isChosedDay) {
          this.getList(this.myDate, date, isChosedDay);
        } else {
          this.getList(this.myDate);
        }
      },
      forMatArgs: function () {
        let markDate = this.markDate;
        let markDateMore = this.markDateMore;
        markDate = markDate.map(k => {
          return timeUtil.dateFormat(k);
        });
        markDateMore = markDateMore.map(k => {
          k.date = timeUtil.dateFormat(k.date);
          return k;
        });
        return [markDate, markDateMore];
      },
      getList: function (date, chooseDay, isChosedDay = true) {
        const [markDate, markDateMore] = this.forMatArgs();
        this.dateTop = `${date.getFullYear()}-${date.getMonth() + 1}`;
        let arr = timeUtil.getMonthList(this.myDate);
        for (let i = 0; i < arr.length; i++) {
          let markClassName = "";
          let k = arr[i];
          k.chooseDay = false;
          const nowTime = k.date;
          const t = new Date(nowTime).getTime() / 1000;
          //看每一天的class
          for (const c of markDateMore) {
            if (c.date === nowTime) {
              markClassName = c.className || "";
            }
          }
          //标记选中某些天 设置class
          k.markClassName = markClassName;
          k.isMark = markDate.indexOf(nowTime) > -1;
          //无法选中某天
          k.dayHide = t < this.agoDayHide || t > this.futureDayHide;
          if (k.isToday) {
            this.$emit("isToday", nowTime);
          }
          let flag = !k.dayHide && k.otherMonth === "nowMonth";
          if (chooseDay && chooseDay === nowTime && flag) {
            this.$emit("choseDay", nowTime);
            this.historyChose.push(nowTime);
            k.chooseDay = true;
          } else if (
            this.historyChose[this.historyChose.length - 1] === nowTime &&
            !chooseDay &&
            flag
          ) {
            k.chooseDay = true;
          }
        }
        this.list = arr;
      }
    },
    mounted() {
      this.getList(this.myDate);
    },
    watch: {
      markDate: {
        handler(val, oldVal) {
          this.getList(this.myDate);
        },
        deep: true
      },
      markDateMore: {
        handler(val, oldVal) {
          this.getList(this.myDate);
        },
        deep: true
      },
      agoDayHide: {
        handler(val, oldVal) {
          this.getList(this.myDate);
        },
        deep: true
      },
      futureDayHide: {
        handler(val, oldVal) {
          this.getList(this.myDate);
        },
        deep: true
      },
      sundayStart: {
        handler(val, oldVal) {
          this.intStart();
          this.getList(this.myDate);
        },
        deep: true
      }
    }
  };
</script>
<style lang="stylus">
  .wh_content_all
    text-align center
    div
      line-height 49px

    .wh_top_changge
      .wh_content_li
        margin 0 10%

      li
        display inline-block
        text-align center

        .wh_jiantou1
          width: 10px;
          height: 10px;
          border-top: 1px solid #000000;
          border-left: 1px solid #000000;
          transform: rotate(-45deg);

        .wh_jiantou2
          width: 10px;
          height: 10px;
          border-top: 1px solid #000000;
          border-right: 1px solid #000000;
          transform: rotate(45deg);

    .wh_content
      .wh_content_item
        width 14.2%
        display inline-block


        .wh_isToday
          color #25ACE6

        .wh_chose_day
          background-color #0AC5C6
          color #fff
          border-radius 50%
        .wh_want_dayhide
          color #999999

</style>

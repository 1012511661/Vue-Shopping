<template>
  <div id="times">
    <!-- banner 2 -->
    <van-row class="banner  banner_2">
      <van-col span="24"> <router-link :to="{name:'car'}" class="banner_a"><img src="http://dummyimage.com/400x100/b97cc9/FFF.png&text=s2-banner" alt=""></router-link></van-col>    
    </van-row>
    <!-- 商品 -->
    <van-row>
       <van-col span="24" class="time_col" v-for="(itme,index) in Tlist" :key="index">
         <div class="time_col_l">
           <p class="time_col_l_title">{{itme.title}}</p>
           <p class="time_col_l_time"><span class="tiem-h">12</span>:<span class="tiem-m">55</span>:<span class="tiem-s">33</span></p>
           <p  class="time_col_l_start">抢购时间<span class="start_time">22 : 22</span></p>
         </div>
         <div class="time_col_r">
           <router-link :to="{name:'car'}" class="link">
            <img :src="itme.url" alt="">
            <span class="time_col_r_price">￥{{itme.price}}</span>
           </router-link>
         </div>
       </van-col>
    </van-row>
      <!-- banner 3 -->
    <van-row class="banner banner_3">
      <van-col span="24"> <router-link :to="{name:'car'}" class="banner_a banner_3_a"><img src="https://dummyimage.com/400x100/00FFFF/FFF.png&text=s3-banner" alt=""></router-link></van-col>    
    </van-row>
  </div> 
</template>

<script type='text/ecmascript-6'>
import { Row, Col, Icon } from "vant";
export default {
  name: "times",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon
  },
  props: {},
  data() {
    return {
      Tlist: [
        {
          id: 10,
          url: "http://dummyimage.com/320x200/f5f2a5/333.png",
          title: "商品名称",
          timeStart: "",
          timeEnd: "1540569509999",
          price: "109"
        },
        {
          id: 10,
          url: "http://dummyimage.com/320x200/f5f2a5/333.png",
          title: "商品名称",
          timeStart: "",
          timeEnd: "1540569509999",
          price: "1695"
        },
        {
          id: 10,
          url: "http://dummyimage.com/320x200/f5f2a5/333.png",
          title: "商品名称",
          timeStart: "",
          timeEnd: "1540569509999",
          price: "10"
        },
        {
          id: 10,
          url: "http://dummyimage.com/320x200/f5f2a5/333.png",
          title: "商品名称",
          timeStart: "",
          timeEnd: "1540569509999",
          price: "100"
        },
        {
          id: 10,
          url: "http://dummyimage.com/320x200/f5f2a5/333.png",
          title: "商品名称",
          timeStart: "",
          timeEnd: "1540569509999",
          price: "1020"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    // timeFil = time => {
    //   forNumber = n => {
    //     n = n.toString();
    //     return n[1] ? n : "0" + n;
    //   };
    //   let timeStart = new Date(time);
    //   let year = new Date().getFullYear();
    //   let month = new Date().getMonth() + 1;
    //   let day = new Date().getDate();
    //   let hour = new Date().getHours();
    //   let minute = new Date().getMinutes();
    //   let second = new Date().getSeconds();
    //   return (
    //     [year, month, day].map(forNumber).join("-") +
    //     "" +
    //     [hour, minute, second].map(forNumber).join("-")
    //   );
    // };
    //console.log(timeFil(1540542836165));
  }
};
</script>

<style lang='less' scoped>
@fSize: 10px;
#times {
  padding-top: 1vh;
  background: #fff;
  .banner {
    .banner_a {
      display: inline-block;
    }
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .time_col {
    padding: 0 5vw 0 12vw;
    div {
      display: inline-block;
    }
    .time_col_l,
    .time_col_r {
      width: 50%;

      .time_col_l_title {
        font-size: 16px;
        padding-top: 5vh;
        text-align: left;
      }
      .time_col_l_time {
        font-size: 16px;
        padding-top: 2vh;
      }
      .tiem-h,
      .tiem-m,
      .tiem-s {
        display: inline-block;
        text-align: center;
        padding: 1.6vw;
        margin: 1vw;
        color: #fff;
        border-radius: 0.5vw;
        background-color: #444;
        font-size: 13px;
        letter-spacing: 0.3vw;
      }
      .time_col_l_start {
        font-size: 14px;
        padding-top: 2vh;
        letter-spacing: 0.3vw;
      }
    }
    .time_col_r {
      .link {
        display: block;
        padding-top: 10vw;
        position: relative;
        img {
          width: 100%;
          height: auto;
        }
        .time_col_r_price {
          padding: 0.3vh 1.2vw;
          border-radius: 1vw;
          text-align: center;
          position: absolute;
          bottom: 0.8vh;
          right: 1.2vw;
          background-color: #ffaa00;
          color: #fff;
          font-size: 12px;
        }
      }
    }
  }
  .banner_3 {
    .banner_3_a {
      margin: 5vh 0;
    }
  }
}
</style>
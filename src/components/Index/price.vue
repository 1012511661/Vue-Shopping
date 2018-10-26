<template>
    <div id="price">
        <!-- banner -->
         <van-row class="banner">
          <van-col span="24"><img src="http://dummyimage.com/400x100/ffcc33/FFF.png&text=s1-banner" alt=""></van-col>    
        </van-row>

        <van-notice-bar :scrollable="isSwiper" @click="setSwiper">  
            <!-- :scrollable="false" -->
            <div class="img_div" v-for="(img,index) in images" :key="index">
              <img :src="img.url" alt="" class="img_div_img">
              <div class="img_div_context">
                <span class="context_title">{{img.title}}</span><br>
                <span class="context_price">￥<i>{{img.price}}</i></span>
              </div>
            </div>
          <!-- <div class="img_div">
            <img src="http://pic6.nipic.com/20100417/4578581_140045259657_2.jpg" alt="" class="img_div_img">
            <div class="img_div_context">
                <span class="context_title">商品名字</span><br>
                <span class="context_price">￥<i>100.00</i></span>
            </div>
          </div> -->
          
        </van-notice-bar>
        
    </div>
</template>

<script type='text/ecmascript-6'>
import { Row, Col, Icon, NoticeBar } from "vant";
export default {
  name: "price",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [NoticeBar.name]: NoticeBar
  },
  props: {},
  data() {
    return {
      isSwiper: true,
      images: [
        {
          id: 10,
          url: "http://dummyimage.com/200x200/dec4e0/333.png",
          title: "商品名称",
          price: "100.00"
        },
        {
          id: 8,
          url: "http://dummyimage.com/200x200/dec4e0/333.png",
          title: "商品名称",
          price: "100.00"
        },
        {
          id: 7,
          url: "http://dummyimage.com/200x200/dec4e0/333.png",
          title: "商品名称",
          price: "100.00"
        },
        {
          id: 6,
          url: "http://dummyimage.com/200x200/dec4e0/333.png",
          title: "商品名称",
          price: "100.00"
        },
        {
          id: 5,
          url: "http://dummyimage.com/200x200/dec4e0/333.png",
          title: "商品名称",
          price: "100.00"
        },
        {
          id: 4,
          url: "http://dummyimage.com/200x200/dec4e0/333.png",
          title: "商品名称",
          price: "100.00"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    setSwiper() {
      console.log("index");
      this.isSwiper = false;
    }
  },
  created() {},
  mounted() {
    let a = document.getElementsByClassName("van-notice-bar__wrap");
    //console.log(a);
    //  a.style.setProperty('overflow', 'visible', 'important');
    // a.style.overflow = "visible"
    //style.setProperty('height', '300px', 'important');
  }
};
</script>

<style lang='less' >
@fSize: 10px;
#price {
  padding-top: 3vh;
  .banner {
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .van-notice-bar {
    padding: 6vw 0 0;
    height: auto;
    color: #5b6671;
    background-color: rgba(0, 0, 0, 0);
    .van-notice-bar__wrap {
      height: 200px;
    }
  }
  .img_div {
    width: 35vw;
    height: auto;
    display: inline-block;
    margin: 1vh 5vw;
    .img_div_img {
      width: 100%;
      object-fit: contain;
    }
    .img_div_context {
      position: relative;
      .context_title {
        float: left;
        padding-left: 2vw;
      }
      .context_price {
        float: left;
        color: #ef0b0b;
        padding-left: 10vw;
      }
    }
  }
}
</style>
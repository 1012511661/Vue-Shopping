<template>
  <div id="price">
    <!-- banner -->
    <van-row class="banner">
      <van-col span="24"><img src="http://dummyimage.com/400x100/ffcc33/FFF.png&text=s1-banner" alt=""></van-col>
    </van-row>
    <div class="price-list">
      <ul>
        <li class="img_div" v-for="(img,index) in images" :key="index" >
          <router-link :to="{path:'/category'}">
            <img :src="img.url" alt="" class="img_div_img">
            <p class="title">{{img.title}}</p>
            <p class="price">￥{{img.price}}</p>
          </router-link>
        </li>
      </ul>
    </div>

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
      ],
      isTransfrom: false
    };
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
  .price-list {
    overflow-x: auto;
    width: 100%;
    /*原生滑动*/
    -webkit-overflow-scrolling: touch;
    > ul {
      display: flex;
      padding: 6vw;
      li {
        margin-right: 10vw;
        width: 26vw;
        a,
        img {
          display: block;
          width: 100%;
        }
        p {
          float: left;
        }
        .title {
          color: #576282;
          font-size: @fSize*1.6;
          padding-left: 2vw;
        }
        .price {
          color: #ef0b0b;
          padding-left: 10vw;
        }
      }
    }
  }
}
</style>
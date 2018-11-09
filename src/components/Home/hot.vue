<template>
    <div id="hot">
        <!-- 热门推荐 -->
        <van-row class="hot">
          <van-col span="10" offset="6"><span class="hot_tit">热门推荐</span></van-col>
          <van-col span="3" offset="4" class="hot_f"><van-icon name="add-o" class="hot_iocn"/></van-col>     
        </van-row>
        <!-- 热门商品 -->
        <van-row class="hot_goods">
          <van-col span="12" class="hot_goods_col" v-for="(img,index) in images" :key="index"
         
          >
            <img v-lazy="img.url" >
            <!-- <img :src="img.url" alt=""> -->
            <p class="tit" :text="img.title">{{img.title}}</p>
          </van-col>
        </van-row>
    </div>
</template>

<script type='text/ecmascript-6'>
import { Row, Col, Icon } from "vant";
export default {
  name: "hot",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon
  },
  props: {},
  data() {
    return {
      images: [
        {
          id: 10,
          url: "http://dummyimage.com/400x400/b7ddf2/333.png",
          title: "商品名称",
          price: "100.00"
        },
        {
          id: 10,
          url: "http://dummyimage.com/400x400/b7ddf2/333.png",
          title: "商品名称",
          price: "100.00"
        },
        {
          id: 10,
          url: "http://dummyimage.com/400x400/b7ddf2/333.png",
          title: "商品名称",
          price: "100.00"
        },
        {
          id: 10,
          url: "http://dummyimage.com/400x400/b7ddf2/333.png",
          title: "商品名称",
          price: "100.00"
        }
      ],
      // ,
      // styleColoe: {
      //   background: "linear-gradient(to right, red, blue)",
      //   "background-clip": "text",
      //   color: "transparent"
      // }
     
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
@fSize: 10px;
#hot {
  margin-top: 5vh;
  padding-bottom: 1vh;
  background: #fff;
  .hot {
    padding: 4vw 0;
    .hot_tit {
      font-size: @fSize*1.8;
      // background: linear-gradient(to right, red, blue);
      // background-clip: text;
    }
    .hot_f {
      height: 24px;
      line-height: 24px;
      .hot_iocn {
        font-size: @fSize*1.8;
      }
    }
  }
  .hot_goods {
    .hot_goods_col {
      padding: 1vw 1vh;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .tit {
        font-size: 14px;
        color: #5b6671;
        padding: 1vh 2vw 0;
      }
      .tit:before {
        content: attr(text);
        position: absolute;
        z-index: 10;
        color: #ff002d;
        mask: linear-gradient(to left, red, transparent);
      }
    }
  }
}
</style>
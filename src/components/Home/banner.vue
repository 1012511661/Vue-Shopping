<template>
    <div id="banner">
          <!-- banner -->
        <!-- <van-swipe :autoplay="3000"  @click="onChange"  class="banner-swipe">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image" alt="">
          </van-swipe-item>
        </van-swipe> -->
        <van-swipe :autoplay="3000"   @click="onChange"  class="banner-swipe">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
         <!-- icon -->
          <van-row type="flex" justify="center" class="icon">
          <van-col span="6"><van-icon name="certificate"/><span>保证质量</span></van-col>
          <van-col span="6" offset="1"><van-icon name="certificate"/><span>保证品质</span></van-col>
          <van-col span="6" offset="1"><van-icon name="certificate"/><span>保证服务</span></van-col>
        </van-row>
    </div>
</template>

<script type='text/ecmascript-6'>
import { Swipe, SwipeItem, Row, Col, Icon } from "vant";
export default {
  name: "banner",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon
  },
  props: {},
  data() {
    return {
      images: [
        "http://dummyimage.com/800x400/04a1f7/FFF.png",
        "http://dummyimage.com/800x400/04a1f7/FFF.png",
        "http://dummyimage.com/800x400/04a1f7/FFF.png",
        "http://dummyimage.com/800x400/04a1f7/FFF.png"
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    onChange(index) {
      console.log("当前 Swipe 索引：" + index);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
@fSize: 10px;
#banner {
  .banner-swipe {
    // top: 6.5vh;
    .van-swipe__track {
      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
    }
  }
  .icon {
    padding: @fSize 0;
    background: #fff;
    i {
      font-size: @fSize*2;
    }
    .van-icon-certificate::before {
      color: rgb(6, 191, 4);
    }
    span {
      font-size: @fSize*1.4;
      padding-left: @fSize*.5;
      color: #999999;
    }
  }
}
</style>
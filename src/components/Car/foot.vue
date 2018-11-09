<template>
  <div>
    <van-row class="bot-grop">
      <van-col span="8" class="grop-price">
        <span class="price-len">共{{count}}件</span>
        <span class="price-price">{{total}}元</span>
      </van-col>  
      <van-col span="8" class="grop-shop">
        <router-link :to="{name:'category'}" class="grop-link"><span>继续购物</span></router-link>
      </van-col>
      <van-col span="8" class="grop-total"> 
       <router-link :to="{name:'pay'}"> <span>去结算</span> </router-link>
      </van-col>  
    </van-row>
  </div>
</template>

<script type='text/ecmascript-6'>
import { Row, Col } from "vant";
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  },
  props: {},
  data() {
    return {
      allCount: 0, //总数量
      allTotal: 0 //总价格
    };
  },
  watch: {},
  computed: {
    //总价
    total() {
      let Price = 0;
      for (let i in this.shopList) {
        if (this.shopList[i].checked) {
          Price += this.shopList[i].price * this.shopList[i].num;
        }
      }
      this.allTotal = Price;
      return Price;
    },
    //总数
    count() {
      let Num = 0;
      for (let i in this.shopList) {
        if (this.shopList[i].checked) {
          Num += parseInt(this.shopList[i].num);
        }
      }
      this.allCount = Num;
      return Num;
    }
  }
};
</script>

<style lang='less' scoped>
.bot-grop {
  position: absolute;
  width: 100%;
  bottom: 0;
  .grop-price {
    height: 13vw;
    position: relative;
    background-color: #e2e2e2;
    .price-len {
      position: absolute;
      left: 1vw;
      /* top: 1vw; */
      color: #000000;
    }
    .price-price {
      font-size: 18px;
      top: 45%;
      right: 25%;
      position: absolute;
      color: #0e2120;
    }
  }
  .grop-shop,
  .grop-total {
    background-color: #e6d53b;
    height: 13vw;
    .grop-link {
      display: inline-block;
    }
    span {
      line-height: 13vw;
      font-size: 16px;
      color: #f32d70;
    }
  }
  .grop-total {
    background-color: pink;
    a {
      display: inline-block;
    }
  }
}
</style>
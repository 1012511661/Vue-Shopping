<template>
  <div id="pay">
    <!-- 增加收货人 -->
    <van-row  type="flex" justify="end" class="ord-addOrd">
      <van-col span="8"><router-link :to="{path:'/consigAddress'}">收货人列表 <van-icon name="logistics" /></router-link></van-col>
    </van-row>   
    <!-- 收货信息 -->
    <div class="ord-mag">
      <p>收件人：<span class="span">收件人名字</span><i>13011111111</i></p>
      <p>收货地址：<span>收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货</span></p>
    </div>
    <!-- 订单列表 --> 
    <div class="ord-list" v-if="isOrdList">
      <div v-for="(item,index) in ordList" :key="index">
        <van-card :num="item.num" tag="热销" :price="item.price" :desc="item.text"  :title="item.title" :thumb="item.url">
        <div slot="footer">
            <van-button size="mini" @click="red(index)">--</van-button> 
            <van-button size="mini" @click="add(index)">++</van-button>
        </div>
        </van-card>
      </div>
    </div>
    <!-- 支付成功,清空购物清单 -->
    <div class="ord-list-ok" v-else>
      <p>支付成功!!!</p>
      <p>清空购物清单!!!</p>
    </div>
    <!-- 支付按钮 -->
    <div class="ord-pay" @click="isPay" v-if="isOrdFoot"><span>需支付{{total}}元</span></div>
    <!-- {{allPrice}} -->
    <div class="ord-pay" v-else>
      <router-link :to="{path:'/home'}"><span>亲，等你下次购物，返回主页</span></router-link>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import { mapState } from "vuex";
import { Row, Col, Icon, Dialog, Card, Button } from "vant";
export default {
  name: "pay",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Dialog.name]: Dialog,
    [Card.name]: Card,
    [Button.name]: Button
  },
  props: {},
  data() {
    return {
      ordList: [],
      isOrdList: true,
      isOrdFoot: true,
      priceP: 0
    };
  },
  computed: {
    ...mapState(["isFoot"]),
    // ...mapState(["isFoot","allPrice"]),
    //总价
    total() {
      let Price = 0;
      for (let i in this.ordList) {
        Price += this.ordList[i].price * this.ordList[i].num;
      }
      this.priceP = Price;
      return Price;
    }
  },
  methods: {
    red(index) {
      //减
      if (this.ordList[index].num > 1) {
        this.ordList[index].num--;
      } else {
        this.ordList.splice(index, 1);
      }
    },
    add(index) {
      //加
      this.ordList[index].num++;
    },
    isPay() {
      //支付
      Dialog.confirm({
        title: "支付提醒",
        message: `亲，共支付${this.priceP}元`
      })
        .then(() => {
          this.isOrdList = false;
          this.isOrdFoot = false;
        })
        .catch(() => {
          alert("终止交易");
        });
    }
  },
  created() {
    this.$store.commit("IS_FOOT", false);//foot按钮(通用底部/商品详情底部/购物车底部)  
    this.$store.commit('IS_HEAD_ICON',false); //head(logo / back)
    this.axios
      .get(
        `https://easy-mock.com/mock/5bd6aef0775106311984f5bc/VVant/orderList`
      )
      .then(res => {
        this.ordList = res.data.dataList;
        //console.log(res);
      })
      .catch(err => console.log(err));
  },
  beforeRouteLeave(to, from, next) {
    next(
      this.$store.commit("IS_FOOT", true),
      this.$store.commit('IS_HEAD_ICON',true)
    );
  }
};
</script>

<style lang='less' scoped>
@fSize: 10px;
#pay {
  .ord-addOrd {
    padding: 2vw 1vw;
    font-size: @fSize*1.6;
    a {
      display: inline-block;
      color: #3e3d3d;
      i {
        font-size: @fSize*2.2;
        vertical-align: middle;
        color: #f73e3e;
      }
    }
  }
  .ord-mag {
    font-size: @fSize*1.4;
    text-align: left;
    p {
      padding: 1vw 2vw;
      .span {
        padding: 0 2.5vw 0 1.5vw;
      }
    }
  }
  .ord-list {
    height: 435px;
    margin-top: 2vw;
    overflow-y: auto;
    text-align: left;
  }
  .ord-list::-webkit-scrollbar {
    display: none;
  }
  .ord-list-ok {
    margin-top: 10vw;
    padding: 20px 0;
    background-color: #ffaa00;
    text-align: center;
    color: #fff;
    line-height: 30px;
    font-size: 20px;
  }
  .ord-pay {
    position: fixed;
    width: 100%;
    bottom: 0px;
    a {
      display: inline-block;
      width: 100%;
    }
    span {
      display: inline-block;
      width: 100%;
      background-color: red;
      border-radius: 1.3vw;
      color: #fff;
      font-size: 17px;
      padding: 3vw 0;
      text-align: center;
    }
  }
}
</style>
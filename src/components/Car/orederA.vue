<template>
  <div id="order">
    <!-- 增加收货人 -->
    <van-row  type="flex" justify="end" class="ord-addOrd">
      <van-col span="8">添加收货人 <van-icon name="logistics" /></van-col>
    </van-row>   
    <!-- 收货信息 -->
    <div class="ord-mag">
      <p>收件人：<span class="span">收件人名字</span><i>13011111111</i></p>
      <p>收货地址：<span>收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货</span></p>
    </div>
    <!-- 订单列表 --> 
    <div class="ord-list" v-if="isOrdList">
      <ul>
        <li v-for="(item,index) in ordList" :key="index">
          <div class="list-img"><img :src="item.url" alt=""></div>
          <div class="list-t">
            <p class="title">{{item.title}}</p>
            <span class="text">{{item.text}}</span>
            <p class="about">数量：<i>{{item.num}}</i><span>￥<strong>{{item.price}}</strong>元</span></p>
          </div>
        </li>
      </ul>
       <!-- <div v-for="(item,index) in ordList" :key="index">
        <van-card :num="item.num" tag="热销" :price="item.price" :desc="item.text"  :title="item.title" :thumb="item.url">
        <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
        </div>
        </van-card>
      </div> -->
    </div>
    <!-- 支付成功,清空购物清单 -->
    <div class="ord-list-ok" v-else>
      <p>支付成功!!!</p>
      <p>清空购物清单!!!</p>
    </div>
    <!-- 支付按钮 -->
    <div class="ord-pay" @click="isPay" v-if="isOrdFoot"><span>需支付{{123456789}}元</span></div>
    <div class="ord-pay" v-else><router-link :to="{path:'/home'}"><span>亲，等你下次购物，返回主页</span></router-link></div>
  </div>
</template>

<script type='text/ecmascript-6'>
import { mapState } from "vuex";
import { Row, Col, Icon, Dialog, Card, Button } from "vant";
export default {
  name: "order",
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
      isOrdList:true,
      isOrdFoot:true
    };
  },
  watch: {},
  computed: {
    ...mapState(["isFoot"])
  },
  methods: {
    isPay() {
      Dialog.confirm({
        title: "支付提醒",
        message: "亲，共支付100元"
      })
        .then(() => {
          // on confirm
          this.isOrdList = false
          this.isOrdFoot = false
        })
        .catch(() => {
          // on cancel
          alert("终止交易")
        });
    }
  },
  created() {
    this.$store.commit("IS_FOOT", false);
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
    next(this.$store.commit("IS_FOOT", true));
  }
};
</script>

<style lang='less' scoped>
@fSize: 10px;
#order {
  .ord-addOrd {
    padding: 2vw 1vw;
    font-size: @fSize*1.6;
    i {
      font-size: @fSize*2.2;
      vertical-align: middle;
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
    li:nth-child(1) {
      border-top: 1px solid #cfcfd0;
    }
    li {
      padding: 1vw 5vw;
      border-bottom: 1px solid #cfcfd0;
      .list-img {
        width: 26%;
        display: inline-block;
        img {
          width: 100%;
        }
      }
      .list-t {
        width: 55%;
        padding: 0 0 0 3vw;
        text-align: left;
        display: inline-block;
        vertical-align: top;
        .title {
          font-size: @fSize*1.6;
          padding: 1vw 0;
        }
        .text {
          font-size: @fSize*1.2;
        }
        .about {
          padding: 2vw 0 0 0;
          i {
            color: #00ffe9;
            font-size: @fSize*1.6;
          }
          span {
            margin-left: 9vw;
            font-size: @fSize*1.4;
            strong {
              color: red;
            }
          }
        }
      }
    }
  }
  .ord-list::-webkit-scrollbar {
    display: none;
  }
  .ord-list-ok{
    margin-top: 10vw;
    padding: 20px 0;
    background-color: #FFAA00;
    text-align: center;
    color: #fff;
    line-height: 30px;
    font-size: 20px;
  }
  .ord-pay {
    position: fixed;
    width: 100%;
    bottom: 0px;
    a{
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
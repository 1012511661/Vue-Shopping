<template>
  <div>
    <van-goods-action>
      <van-goods-action-mini-btn icon="chat" text="客服" @click="service"/>
      <van-goods-action-mini-btn icon="cart" text="购物车" :info="allCount" @click="goCar"/>
      <van-goods-action-mini-btn icon="shop" text="店铺"  @click="shop"/>
      <van-goods-action-big-btn text="加入购物车"  @click="addCar"/>
      <van-goods-action-big-btn text="立即购买" primary @click="buy"/>
    </van-goods-action>
  </div>
</template>

<script type='text/ecmascript-6'>
import { mapState } from "vuex";
import { GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn } from "vant";
export default {
  name: "botBtn",
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapState(["isFoot", "allCount"])
  },
  methods: {
    service() {//客服
      alert("联系客服");
    },
    goCar() {//去购物车
     // alert("去购物车");
      this.$router.push({'path':'/car'});
    },
    shop() {//查看店铺
      alert("查看店铺");
    },
    addCar() {//加入购物车
      alert("加入购物车  ok");
    },
    buy(){//立即购买
      alert("立即购买  go");
    }
  },
  created() {},
  mounted() {
    this.$store.commit("IS_FOOT", false);
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("IS_FOOT", true);
    //next(this.$store.commit("IS_FOOT", true));
  }
};
</script>

<style lang='less' scoped>
</style>
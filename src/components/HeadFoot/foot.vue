<template>
  <div id="foot">
    <van-tabs v-model="active" swipeable @click="page">
      <van-tab v-for="(item,index) in navList" :title="item" :key="index" >
      </van-tab>
    </van-tabs>
  </div>
</template>

<script type='text/ecmascript-6'>
import { Tab, Tabs } from "vant";
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  props: {},
  data() {
    return {
      active: 0,
      navList: ["首页", "分类", "购物车", "我的"]
    };
  },
  watch: {},
  computed: {},
  methods: {
    page(index, title) {
      switch (index) {
        case 0:
          this.$router.push({ path: "/index" });
          break;
        case 1:
          this.$router.push({ path: "/category" });
          break;
        case 2:
          this.$router.push({ path: "/car" });
          break;
        case 3:
          this.$router.push({ path: "/my" });
          break;
      }
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
@fSize: 10px;
#foot {
  width: 100%;
  position: fixed;
  bottom: 0;
  .van-tabs__content {
    display: none;
  }
}
</style>
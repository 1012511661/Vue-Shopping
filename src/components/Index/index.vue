<template>
    <div id="index">
        <!-- banner + icon-->
        <banner />  
        <!-- 热门推荐 -->
        <Hot />
        <!-- 特价商品 -->
        <Price />
        
        <!-- 限时抢购 -->
        <TimeS />
    </div>
</template>

<script type='text/ecmascript-6'>
import Banner from "@/components/Index/banner";
import Hot from "@/components/Index/hot";
import Price from "@/components/Index/price";
import TimeS from "@/components/Index/times";
export default {
  name: "index",
  components: {
    Banner,
    Hot,
    Price,
    TimeS
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: { },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
@fSize: 10px;
#index {
  background: #f0f1f3;
}
</style>
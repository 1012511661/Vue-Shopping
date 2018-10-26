<template>
  <!-- top -->
  <div>
    <van-row class="top">
      <van-col span="2" offset="1"><img src="@/assets/logo.png" alt="" class="logo"></van-col>
      <van-col span="8" class="title"><span>商城名字</span></van-col>
      <van-col span="2" offset="10"><van-icon name="search" class="search" @click="search"/></van-col>
    </van-row>
  </div>
</template>

<script type='text/ecmascript-6'>
import { Row, Col, Icon} from "vant";
export default {
  name:"headT",
  components:{
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
    search(){
      alert("搜索页面")
    }
  },
  created(){},
  mounted(){}
}
</script>

<style lang='less' scoped>
@fSize: 10px;
 .top {
    width: 98vw;
    padding: 1vh 1vw;
    position: fixed;
    z-index: 5;
    background: #f5f0f0;
    .logo {
      // width: 100%;
      width: 8vw;
      height: auto;
    }
    .title {
      span {
        font-size: @fSize*2;
      }
    }
    .search {
      font-size: @fSize*2;
      padding-top: @fSize*.3;
    }
  }
</style>
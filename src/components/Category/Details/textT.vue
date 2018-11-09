<template>
  <div id="textT">
    <!-- 名字 -->
    <div class="textT-title">
      <h1> {{textT}}</h1>
      <span>(已选 {{colText}} {{sizeText}})</span>
    </div>
    <!-- 描述 -->
    <div class="textT-text">
     <h2>{{shopText}}</h2>
    </div>
    <div class="textT-btn">
      <!-- 颜色 -->
      <div>
        <span v-for="(item,index) in colList" :key="index" :class="colIndex==index?'colSelected':''" @click="colChose(index)" >
          {{item}}
        </span>
      </div>
      <!-- 型号 -->
      <div>
        <span v-for="(item,index) in sizeList" :key="index" :class="sizeIndex==index?'colSelected':''" @click="sizeChose(index)">
          {{item}}
        </span>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import { mapGetters } from "vuex";
export default {
  name: "textt",
  components: {},
  props: {},
  data() {
    return {
      colList: [], //颜色
      sizeList: [], //大小
      colIndex: -1, //选择颜色index
      sizeIndex: -1, //选择大小index
      colText: "", //页面展示颜色
      sizeText: "", //页面展示大小
      shopText: "", //描述
      textT:""//商品名
    };
  },
  watch: {
    cateListActive: {
      handler: function(val, oldVal) {
        this.colList = val[0].colList;
        this.sizeList = val[0].sizeList;
        this.shopText = val[0].text;
        this.textT = val[0].title;

      },
      deep: true
    }
  },
  computed: {
    ...mapGetters(["cateListActive"])
  },
  methods: {
    colChose(index) {
      this.colIndex = index;
      this.colText = this.colList[index];
    },
    sizeChose(index) {
      this.sizeIndex = index;
      this.sizeText = this.sizeList[index];
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
// @import "@/assets/all.less";
@fSize: 10px;

#textT {
  .textT-title {
    h1 {
      padding: 2vw;
      text-align: left;
    }
    span {
      width: 96%;
      color: pink;
      text-align: right;
      padding: 0 2%;
      font-size: @fSize*1.6;
      display: inline-block;
    }
  }
  .textT-text {
    h2 {
      text-align: left;
      padding: 0.5vw 2vw;
    }
  }
  .textT-btn {
    div {
      margin: 5vw 0;
      span {
        padding: 6px 10px;
        border: 1px solid rgb(111, 111, 111);
        margin-right: 6vw;
        color: rgb(111, 111, 111);
      }
      .colSelected {
        display: inline-block;
        color: #ffaa00;
        border-color: #ffaa00;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }
    }
  }
}
</style>
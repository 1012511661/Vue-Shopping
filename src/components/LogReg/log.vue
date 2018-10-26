<template>
    <div id="log">
        <!-- top  -->
          <van-row type="flex" justify="center" >
            <van-col span="18"><p class="title">登录</p></van-col>
        </van-row>
         <!-- 账号 -->
        <van-row type="flex" justify="center" class="name">
            <van-col span="2"><i class="icon iconfont icon-mine"></i></van-col>
            <van-col span="12" offset="1" ><input type="text" placeholder="请输入账号" class="name_input"></van-col>
        </van-row>
        <!-- 密码 -->
           <van-row type="flex" justify="center" class="pwd">
            <van-col span="2"><i class="icon iconfont icon-lock"></i></van-col>
            <van-col span="12" offset="1" ><input type="text" placeholder="请输入密码" class="pwd_input"></van-col>
        </van-row>
        <!-- 登录 btn -->
         <van-row type="flex" justify="center" class="btn">
            <van-col span="15"  class="log_btn"> <a href="javascript:;" @click="log">登录</a></van-col>
        </van-row>
        <!-- 操作按钮 -->
         <van-row type="flex" justify="center" class="set_btn">
            <van-col span="8"> <span class="reg" @click="go(1)">注册账号</span></van-col>
            <van-col span="8"><span class="pop"  @click="go(2)">游客模式</span></van-col>
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
      isReg: false
    };
  },
  methods: {
    log(){
      alert("登录 ok")
      this.$router.push({path:'/index'});
      this.$store.commit('IS_INDEX',false);//index
    },
    go(num) {
      if (num == 1) {//注册
        this.$store.commit('IS_REG',false);
      } else {//游客 index
         this.$router.push({path:'/index'});
      this.$store.commit('IS_INDEX',false);
      }
    }
  }
};
</script>

<style lang='less' scoped>
@wid: 10vw; //1vw = 3.75px  6Splue
@hei: 5vh; //1vh = 6.66px  6Splue
@fontSize: 10px;
i {
  font-size: 4vh;//高度不变
    height: 7vh;
    line-height: 7vh;
}
#log {
  .title {
    font-size: @fontSize*2;
    font-weight: 900;
    padding: 20px;
  }
  .name_input,
  .pwd_input {
    width: 98%;
    height: 4vh;
    margin-top: 1vh;
  }
  .btn {
    margin-top: 3vh;
    .log_btn {
      background: red;
      height: 6vh;
      a {
        color: #fff;
        font-size: @fontSize*1.4;
        height: 6vh;
        line-height: 6vh;
      }
    }
  }
  .set_btn{
    margin-top: 3vh;
    span{
        padding: 5px 20px;
    }
  }
}
</style>
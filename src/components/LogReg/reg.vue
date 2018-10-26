<template>
 <div id="reg">
        <!-- top  -->
          <van-row type="flex" justify="center" >
            <van-col span="18"><p class="title">注册</p></van-col>
        </van-row>
         <!-- 账号 -->
        <van-row type="flex" justify="center" class="name">
            <van-col span="2"><i class="icon iconfont icon-mine"></i></van-col>
            <van-col span="12" offset="1" ><input type="text" placeholder="请输入账号" class="name_input input" v-model="name" trim></van-col>
        </van-row>
        <!-- 密码 -->
           <van-row type="flex" justify="center" class="pwd">
            <van-col span="2"><i class="icon iconfont icon-lock"></i></van-col>
            <van-col span="12" offset="1" ><input type="text" placeholder="请输入密码" class="pwd_input input" v-model="pwd" trim></van-col>
        </van-row>
         <!-- 确认密码 -->
           <van-row type="flex" justify="center" class="pwdOk">
            <van-col span="2"><i class="icon iconfont icon-lock"></i></van-col>
            <van-col span="12" offset="1" ><input type="text" placeholder="请确认密码" class="pwdOk_input input" v-model="pwdOk" trim></van-col>
        </van-row>
         <!-- 手机号码 -->
           <van-row type="flex" justify="center" class="pbone">
            <van-col span="2"><i class="icon iconfont icon-mobilephone"></i></van-col>
            <van-col span="12" offset="1" ><input type="text" placeholder="请输入手机号码" class="phone_input input" v-model="phone" trim></van-col>
        </van-row>
         <!-- 验证码 -->
           <van-row type="flex" justify="center" class="code">
            <van-col span="8.5"><input type="text" placeholder="请输入验证码" class="code_input input"></van-col>
             <van-col span="5" offset="1" ><a href="javascript:;" class="code_input-a"  @click="code">获取验证码</a></van-col>
        </van-row>
         <!-- 邮箱 -->
           <van-row type="flex" justify="center" class="eamil">
            <van-col span="2"><i class="icon iconfont icon-mail"></i></van-col>
            <van-col span="12" offset="1" ><input type="email" placeholder="请输入邮箱" class="eamil_input input"  v-model="eamil"></van-col>
        </van-row>
         <!-- 地区 -->
           <van-row type="flex" justify="center" class="map">
            <van-col span="20">
                 <v-distpicker :province="select.province" @province="changeProvince"
                  :city="select.city" @city="changeCity"
                  :area="select.area" @area="changeArea"
                  class="form-control"></v-distpicker>
            </van-col>
        </van-row>
        <!-- 注册 btn -->
         <van-row type="flex" justify="center" class="btn">
            <van-col span="15"  class="reg_btn"> <a href="javascript:;" @click="reg">注册</a></van-col>
        </van-row>
        <!-- 操作按钮 -->
         <van-row type="flex" justify="center" class="set_btn">
            <van-col span="8"> <span class="reg" @click="go(0)">直接登录</span></van-col>
             <van-col span="8"><span class="pop"  @click="go(2)">游客模式</span></van-col>
        </van-row>
    </div>
</template>

<script type='text/ecmascript-6'>
import { Row, Col } from "vant";
import VDistpicker from "v-distpicker"; //地区选择器
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    VDistpicker
  },
  data() {
    return {
      name: "",
      pwd: "",
      pwdOk: "",
      phone: "",
      eamil: "",
      select: { province: "陕西省", city: "西安市", area: "灞桥区" }
    };
  },
  watch: {},
  computed: {},
  methods: {
    //获取地址
    changeProvince(data) {
      this.select.province = data.value;
    },
    changeCity(data) {
      this.select.city = data.value;
    },
    changeArea(data) {
      this.select.area = data.value;
    },
    //验证码
    code() {
      alert("验证码: 321456");
    },
    // reg
    reg() {
      alert("注册 ok");
      this.$store.commit("IS_REG", true); //log
    },
    // go
    go(num) {
      if (num == 0) {
        this.$store.commit("IS_REG", true); //log
      } else {
        this.$router.push({ path: "/index" });
        this.$store.commit("IS_INDEX", false); //index
      }
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
@wid: 10vw; //1vw = 3.75px  6Splue
@hei: 5vh; //1vh = 6.66px  6Splue
@fontSize: 10px;
i {
  font-size: 4vh; //高度不变
  height: 7vh;
  line-height: 7vh;
}
#reg {
  .title {
    font-size: @fontSize*2;
    font-weight: 900;
    padding: 20px;
  }
  input {
    width: 98%;
    height: 4vh;
    margin-top: 1vh;
  }
  .code_input-a {
    display: inline-block;
    height: 4vh;
    line-height: 4vh;
    margin-top: 1vh;
    padding: 0.3vh 3vw;
    background: #f35454;
    color: #ffffff;
  }
  .map {
    margin-top: 2vh;
  }
  .btn {
    margin-top: 3vh;
    .reg_btn {
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
  .set_btn {
    margin-top: 3vh;
    span {
      padding: 5px 20px;
    }
  }
}
</style>
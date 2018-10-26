<template>
  <div id="app">
    <!-- 登录/注册 -->
    <div v-show="isIndex">
      <Login v-if="isRge" />
      <Reg v-else/>
    </div>
    <!--内容-->
    <div v-show="!isIndex">
      <headT />
      <div class="content">
         <keep-alive>
        <transition name="anim" mode="out-in"> <!-- transition 动画-->
        <router-view></router-view>
        </transition>
      </keep-alive>
      </div>
      <foot />
    </div>
   
  </div>
</template>

<script type='text/ecmascript-6'>
//head
import headT from "@/components/HeadFoot/head";
//foot
import Foot from "@/components/HeadFoot/foot";
//login
import Login from "@/components/LogReg/log";
//reg
import Reg from "@/components/LogReg/reg";
import { mapState } from "vuex";
export default {
  components: {
    headT,
    Foot,
    Login,
    Reg
  },
  computed: {
    ...mapState(["isRge", "isIndex"])
  }
};
</script>


<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content{
   padding-top: 6.5vh;
}
//动画
.anim-enter {
  //进入
  transform: translateX(100%);
}
.anim-enter-to {
  //进入后
  transform: translateX(0);
}
.anim-enter-active {
  //进入动画的时间
  transition: 0.5s;
}
@keyframes bounce {
  0% {
    transform: translate3d(0, -25px, 0);
    opacity: 0;
  }
  25% {
    transform: translate3d(0, 10px, 0);
  }
  50% {
    transform: translate3d(0, -6px, 0);
  }
  75% {
    transform: translate3d(0, 2px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.anim-leave {
  //离开前
  transform: translateX(0);
}
.anim-leave-to {
  //离开后
  transform: translateX(-100%);
}
.anim-leave-active {
  //离开动画的时间
  transition: 0.5s;
}
</style>


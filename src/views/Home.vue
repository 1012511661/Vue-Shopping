<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Login/>
    <Reg/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
//login
import Login from "@/components/LogReg/login";
//reg
import Reg from "@/components/LogReg/registered";
export default {
  name: "home",
  components: {
    HelloWorld,
    Login,
    Reg
  }
};
</script>

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./vuex/store";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import { Lazyload } from "vant";
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: "https://dummyimage.com/400x400/b7ddf2/333.png&text=加载失败",
  loading: "@/assets/images/load.gif",
  attempt: 3
});

import VueTouch from "vue-touch";
Vue.use(VueTouch, {
  name: "v-touch"
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

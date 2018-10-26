import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/index",
      component: () =>
        import(/* webpackChunkName: "index" */ "@/components/Index/index"),
      name: "index"
    },
    {
      path: "/category",
      component: () =>
        import(/* webpackChunkName: "index" */ "@/components/category"),
      name: "category"
    },
    {
      path: "/car",
      component: () =>
        import(/* webpackChunkName: "index" */ "@/components/car"),
      name: "car"
    },
    {
      path: "/my",
      component: () =>
        import(/* webpackChunkName: "index" */ "@/components/my"),
      name: "my"
    }
  ]
});

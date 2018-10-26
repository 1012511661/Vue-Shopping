import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
// import axios from "axios";
import * as types from "@/vuex/types";
Vue.use(Vuex);
const state = {
  isRge: true,
  isIndex: true
};

const mutations = {
  [types.IS_REG](state, res) {
    state.isRge = res;
  },
  [types.IS_INDEX](state, res) {
    state.isIndex = res;
  }
};
// export default {
//   state,
//   mutations
// };
export default new Vuex.Store({
  state,
  mutations
});

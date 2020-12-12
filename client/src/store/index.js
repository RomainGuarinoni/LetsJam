import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    connect: false,
  },
  mutations: {
    CONNECT(state) {
      state.connect = true;
    },
  },
  actions: {
    connect(context) {
      context.commit("CONNECT");
    },
  },
  modules: {},
});

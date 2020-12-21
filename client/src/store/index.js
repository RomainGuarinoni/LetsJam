import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    connect: false,
    Lavoisier: {
      available: true,
    },
    Descartes: {
      available: false,
      user: {
        nom: "Guarinoni",
        prenom: "Romain",
        heure: "15:02",
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});

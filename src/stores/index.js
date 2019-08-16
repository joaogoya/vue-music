import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    charts: [],
    cards: [],
    musics: []
  },
  mutations: {
    GET_CHARTS(state, obj) {
      state.charts = obj;
    },
    GET_CARDS(state, obj) {
      state.cards = obj;
    },
    GET_MUSICS(state, obj) {
      state.musics = obj;
    }
  }
});

import Vue from "vue";
import Vuex from "vuex";
import CovidDataService from "../services/CovidDataService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Global: {},
    Countries: [],
  },
  mutations: {
    SAVE_GLOBAL(state, Global) {
      state.Global = Global;
    },
    SAVE_COUNTRIES(state, Countries) {
      state.Countries = Countries;
    }
  },
  actions: {

    loadUsers({commit}) {
      CovidDataService.getAll()
      .then((response: any) => {
          //this.Countries = response.data.Countries;
          commit('SAVE_COUNTRIES',response.data.Countries);
          commit('SAVE_GLOBAL',response.data.Global);
          
      })
      .catch((e) => {
          console.log(e);
          throw new Error(`API ${e}`);
      });
    }
  },
  modules: {

  },
});

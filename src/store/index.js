import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  isUserLoggedIn: false,
};

const mutations = {
  logInUser(state) {
    state.isUserLoggedIn = true;
  },
};

export default new Vuex.Store({
  state,
  getters: {},
  mutations,
  actions: {},
  modules: {},
});

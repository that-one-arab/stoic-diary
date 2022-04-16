import Vue from 'vue';
import Vuex from 'vuex';

import { DefaultSnackbarArguments } from '@/defaultparams';

Vue.use(Vuex);

const state = {
  isUserLoggedIn: false,
  snackbar: {
    header: '',
    body: '',
    variant: '',
  },
};

const mutations = {
  logInUser(_state) {
    _state.isUserLoggedIn = true;
  },
  showSnackbar(_state, { header, body, variant } = DefaultSnackbarArguments) {
    _state.snackbar = {
      header,
      body,
      variant,
    };
  },

  hideSnackbar(_state) {
    _state.snackbar = {
      header: '',
      body: '',
      variant: '',
    };
  },
};

export default new Vuex.Store({
  state,
  getters: {},
  mutations,
  actions: {},
  modules: {},
});

import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);
const getDefaultState = () => {
  return {
    token: '',
    user: {}
  };
};
export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isLoggedIn: state => {
      return state.token;
    },
    getUser: state => {
      return state.user;
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    RESET: state => {
      Object.assign(state, getDefaultState());
      localStorage.clear()
    }
  },
  actions: {
    login: ({
      commit
    }, {
      token,
      UserId
    }) => {
      commit('SET_TOKEN', token);
      commit('SET_USER', UserId);
      localStorage.setItem('token', token)
      // set auth header
    },
    logout: ({
      commit
    }) => {
      commit('RESET', '');
    }
  }
});
import { createStore } from 'vuex';
import getRandomInt from '../helpers/getRandomInt';

export default createStore({
  state: {
    count: 1,
    lastMutation: 'none',
    isLoading: false,
  },

  mutations: {
    increment(state) {
      state.count++;
      state.lastMutation = 'increment';
    },
    incrementBy(state, value) {
      state.count += value;
      state.lastMutation = 'incrementBy';
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },

  actions: {
    async incrementRandomInt({ commit }, mutations) {
      commit('setLoading', true);
      const randomInt = await getRandomInt();
      commit('incrementBy', randomInt);
      commit('setLoading', false);
    },
  },

  getters: {
    squareCount(state) {
      return Math.pow(state.count, 2);
    },
  },
});

import state from './state';
import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

const counterStore = {
  namespaced: true,
  // state: () => ({
  //   count: 1,
  //   lastMutation: 'none',
  //   isLoading: false,
  // }),
  // state,
  // mutations: {
  //   increment,
  //   incrementBy,
  //   setLoading,
  // },

  // actions: {
  //   incrementRandomInt,
  // },

  // getters: {
  //   squareCount,
  // },
  state,
  mutations,
  actions,
  getters,
};

export default counterStore;

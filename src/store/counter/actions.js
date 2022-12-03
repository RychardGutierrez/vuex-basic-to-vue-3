import getRandomInt from '../../helpers/getRandomInt';

export const incrementRandomInt = async ({ commit }, mutations) => {
  commit('setLoading', true);
  const randomInt = await getRandomInt();
  commit('incrementBy', randomInt);
  commit('setLoading', false);
};

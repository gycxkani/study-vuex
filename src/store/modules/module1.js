export default {
  namespaced: true,
  state: {
    count1: 7,
  },
  mutations: {
    increment1(state, payload) {
      state.count1 += payload.count;
    },
  },
};

export default {
  namespaced: true,
  state: {
    count2: 9,
  },
  mutations: {
    increment2(state, payload) {
      state.count2 += payload.count;
    },
  },
};

export default {
  namespaced: true,
  state: {
    count3: 5,
  },
  mutations: {
    increment3(state, payload) {
      state.count3 += payload.count;
    },
  },
};

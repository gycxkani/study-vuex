import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      count: 0,
    };
  },
  getters: {
    countText1(state) {
      return state.count + "次";
    },
    countText2(state) {
      return (s) => {
        return state.count + s;
      };
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {},
  modules: {},
});

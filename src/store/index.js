import { createStore } from "vuex";
import module1 from "./modules/module1";
import module2 from "./modules/module2";
import module3 from "./modules/module3";

const store = createStore({
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
    increment(state, payload) {
      state.count += payload.count;
    },
  },
  actions: {
    asyncIncrement(context, payload) {
      setTimeout(() => {
        context.commit("increment", payload);
      }, 1000);
    },
  },
  // 注册模块
  modules: { module1, module2 },
});
// 动态进行模块注册
store.registerModule("module3", module3);
export default store;

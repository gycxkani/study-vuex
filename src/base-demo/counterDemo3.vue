<template>
  <!-- 使用计算属性，计算属性名字与状态名字不一致 -->
  <h1>计数器3：{{ countData2 }}</h1>
  <button @click="increment">增加</button>
</template>

<script>
import { mapState } from "vuex";
export default {
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
  // 使用 mapState 辅助函数将 store.state 映射成组件的计算属性
  computed: {
    ...mapState({
      // 通过字符串映射
      countData: "count",
      // 通过函数映射
      countData2(state) {
        return state.count;
      },
    }),
  },
};
</script>

<style></style>

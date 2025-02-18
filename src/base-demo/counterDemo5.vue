<template>
  <!-- 使用计算属性 -->
  <h1>计数器5：{{ countText2("次") }}</h1>
  <button @click="increment">增加</button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  methods: {
    increment() {
      // this.$store.commit({
      //   type: "increment",
      //   count: 2,
      // });
      // 使用action异步修改状态
      this.$store.dispatch("asyncIncrement", {
        count: 2,
        // time: 1000,
      });
    },
  },
  // 使用 mapGetters 辅助函数将 store.getters 映射成组件的计算属性
  computed: { ...mapGetters(["countText2"]) },
};
</script>

<style></style>

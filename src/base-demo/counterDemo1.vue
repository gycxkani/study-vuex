<template>
  <!-- 使用计算属性，计算属性名字与状态名字一致 -->
  <h1>计数器1：{{ count }}</h1>
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
  // 使用 mapState 辅助函数将组件的计算属性映射到 store.state 中
  computed: {
    ...mapState(["count"]),
  },
};
</script>

<style></style>

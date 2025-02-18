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
      // 使用 commit 方法提交一个 mutation, 传递参数 count
      // this.$store.commit({
      //   type: "increment", // type表示要调用的修改状态的方法名
      //   count: 2, // count是要传递的参数
      //   // ...  更多参数
      // });
      // 使用action异步修改状态
      this.$store.dispatch("asyncIncrement", {
        count: 2,
        // time: 1000,
      });
    },
  },
  // 使用 mapState 辅助函数将 store.state 映射成组件的计算属性
  computed: {
    ...mapState(["count"]),
  },
};
</script>

<style></style>

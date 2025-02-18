<template>
  <!-- 直接使用状态数据 -->
  <h1>计数器2：{{ this.$store.state.count }}</h1>
  <button @click="increment">增加</button>
</template>

<script>
export default {
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  methods: {
    increment() {
      // 使用mutation同步修改状态
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
};
</script>

<style></style>

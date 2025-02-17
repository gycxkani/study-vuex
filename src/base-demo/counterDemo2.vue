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
      this.$store.commit("increment");
    },
  },
};
</script>

<style></style>

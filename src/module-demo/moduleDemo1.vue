<template>
  <h1>计数器1：{{ this.$store.state.module1.count1 }}</h1>
  <button @click="increment">增加</button>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit({
        type: "module1/increment1",
        count: 3,
      });
    },
  },
};
</script>

<style></style>

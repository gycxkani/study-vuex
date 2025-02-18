<template>
  <h1>计数器3：{{ this.$store.state.module3.count3 }}</h1>
  <button @click="increment">增加</button>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit({
        type: "module3/increment3",
        count: 5,
      });
    },
  },
};
</script>

<style></style>

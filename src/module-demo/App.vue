<template>
  <module-demo-1></module-demo-1>
  <module-demo-2></module-demo-2>
  <module-demo-3></module-demo-3>
</template>

<script>
import moduleDemo1 from "./moduleDemo1.vue";
import moduleDemo2 from "./moduleDemo2.vue";
import moduleDemo3 from "./moduleDemo3.vue";

export default {
  name: "App",
  components: {
    moduleDemo1,
    moduleDemo2,
    moduleDemo3,
  },
};
</script>

<style></style>

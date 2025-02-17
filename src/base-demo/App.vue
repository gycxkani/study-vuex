<template>
  <counter-demo-1 />
  <counter-demo-2 />
  <counter-demo-3 />
  <counter-demo-4 />
  <counter-demo-5 />
</template>

<script>
import counterDemo1 from "./counterDemo1.vue";
import counterDemo2 from "./counterDemo2.vue";
import counterDemo3 from "./counterDemo3.vue";
import counterDemo4 from "./counterDemo4.vue";
import counterDemo5 from "./counterDemo5.vue";
export default {
  name: "App",
  components: {
    counterDemo1,
    counterDemo2,
    counterDemo3,
    counterDemo4,
    counterDemo5,
  },
};
</script>

<style></style>

<template>
  <div @click="show" id="maskl"></div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$emit("childEvent");
    },
  },
};
</script>

<style scoped>
#maskl {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: 100;
}
</style>

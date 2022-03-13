<template>
  <a id="top" @click="toTop"></a>
</template>

<script>
export default {
  methods: {
    toTop() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
#top {
  position: fixed;
  right: 25px;
  bottom: 25px;
  background: url("../img/Sprite4.png") no-repeat 0 -934px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.5s;
  transform: scale(0.8, 0.8);
}

#top:hover {
  background: url("../img/Sprite4.png") no-repeat -50px -934px;
}
</style>

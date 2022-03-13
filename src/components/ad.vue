<template>
  <div id="ad">
    <img :src="src" />
  </div>
</template>

<script>
export default {
  props: {
    src: String,
  },
};
</script>

<style scoped>

#ad {
    margin-bottom: 25px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.30);
    display: flex;
    align-items: center;
    justify-content: center;
}

img{
    width: 100%;
}
</style>

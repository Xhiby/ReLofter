<template>
  <div class="umnitem">
    <div class="umnitemmask"></div>
    <img class="umnitemimg" v-if="imgsrc" v-bind:src="imgsrc" />
    <div class="umnitemtxt" v-if="title">
      <p>{{ title }}</p>
      <div class="umnitemtwap">
        <span>{{ content }}</span>
      </div>
    </div>
    <div class="umnitemdel">
      <button v-on:click="deletByid(id)">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    imgsrc: String,
    title: String,
    content: String,
  },
  methods: {
  },
};
</script>

<style scoped>
</style>

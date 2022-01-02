<template>
  <div id="mlist">
    <img class="mlistimg" v-bind:src="userimg" />
    <div class="mlistcnt">
      <span class="mlistcntname">{{ username }}</span>

      <div v-if="imgsrc" class="mlistcntmid_img">
        <img v-bind:src="imgsrc" />
        <p class="mlistcnttxt">{{ content }}</p>
      </div>
      <div v-if="title" class="mlistcntmid_text">
        <p>{{ title }}</p>
        <span>{{ content }}</span>
      </div>

      <div class="mlistcntopt">
        <div>
          <span>热度(39)</span>
          <span>评论</span>
          <span>分享</span>
          <span>推荐</span>
          <div class="mlistcntopticon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userid: Number,
    username: String,
    userimg: String,
    imgsrc: String,
    title: String,
    content: String,
  }
};
</script>

<style scoped>
</style>

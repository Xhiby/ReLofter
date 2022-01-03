<template>
  <div id="moreitem">
    <div class="moreitemtit">
      <img src="img/user.jpg" />
      <span>Admin</span>
      <button>关注</button>
    </div>
    <div class="moreitemcnt">
      <img v-bind:src="src" />
      <p>LOFTER——专注兴趣，分享创作</p>
    </div>
    <div class="moreitembottom">
      <div class="likeicon"></div>
      <span class="likenum">292人喜欢</span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
    src: String
  }
};
</script>

<style scoped>
</style>

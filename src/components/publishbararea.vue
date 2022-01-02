<template>
  <div id="publishbararea">
    <div class="pareaitem pareaitemuser">
      <div v-if="topuserimg">
        <img v-bind:src="topuserimg" class="pareaitemuserimg" />
      </div>
    </div>
    <div class="pareaitem pareaitemtxt"></div>
    <div class="pareaitem pareaitemimg"></div>
    <div class="pareaitem pareaitemmusic"></div>
    <div class="pareaitem pareaitemvideo"></div>
    <div class="pareaitem pareaitemlink"></div>
  </div>
</template>

<script>
export default {
  props: {
    topuserimg: String,
  },
};
</script>

<style scoped>
</style>

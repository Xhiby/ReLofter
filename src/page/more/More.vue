<template>
  <div class="more">
    <div id="topbar">
      <topbar></topbar>
    </div>

    <div id="hdview"></div>

    <div id="morecontent">
      <div class="contentitem">
        <moreitem src="img/11.jpg"></moreitem>
        <moreitem src="img/12.jpg"></moreitem>
        <moreitem src="img/9.jpg"></moreitem>
        <moreitem src="img/10.jpg"></moreitem>
      </div>
      <div class="contentitem">
        <moreitem src="img/9.jpg"></moreitem>
        <moreitem src="img/11.jpg"></moreitem>
        <moreitem src="img/10.jpg"></moreitem>
        <moreitem src="img/12.jpg"></moreitem>
      </div>
      <div class="contentitem">
        <moreitem src="img/10.jpg"></moreitem>
        <moreitem src="img/12.jpg"></moreitem>
        <moreitem src="img/11.jpg"></moreitem>
        <moreitem src="img/9.jpg"></moreitem>
      </div>
      <div class="contentitem">
        <moreitem src="img/12.jpg"></moreitem>
        <moreitem src="img/10.jpg"></moreitem>
        <moreitem src="img/9.jpg"></moreitem>
        <moreitem src="img/11.jpg"></moreitem>
      </div>
    </div>
  </div>
</template>

<script>
import topbar from "../../components/topbar.vue";
import moreitem from "../../components/moreitem.vue";

export default {
  components: {
    topbar,
    moreitem,
  },
};
</script>

<style scoped>
</style>

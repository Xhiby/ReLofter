<template>
  <div class="more">
    <topbar></topbar>

    <div id="hdview"></div>

    <div id="morecont">
      <div class="contentitem">
        <moreitem :src="str + '/public/upload_img_art/1.jpg'"></moreitem>
        <moreitem :src="str + '/public/upload_img_art/12.jpg'"></moreitem>
        <moreitem :src="str + '/public/upload_img_art/9.jpg'"></moreitem>
        <moreitem :src="str + '/public/upload_img_art/10.jpg'"></moreitem>
      </div>
      <div class="contentitem">
        <moreitem :src="str + '/public/upload_img_art/9.jpg'"></moreitem>
        <moreitem :src="str + '/public/upload_img_art/1.jpg'"></moreitem>
        <moreitem :src="str + '/public/upload_img_art/10.jpg'"></moreitem>
        <moreitem :src="str + '/public/upload_img_art/12.jpg'"></moreitem>
      </div>
      <div class="contentitem">
        <moreitem :src="str + '/public/upload_img_art/10.jpg'"></moreitem>
        <moreitem :src="str + '/public/upload_img_art/12.jpg'"></moreitem>
        <moreitem :src="str + '/public/upload_img_art/1.jpg'"></moreitem>
        <moreitem :src="str + '/public/upload_img_art/9.jpg'"></moreitem>
      </div>
      <div class="contentitem">
        <moreitem :src="str + '/public/upload_img_art/12.jpg'"></moreitem>
        <moreitem :src="str + '/public/upload_img_art/10.jpg'"></moreitem>
        <moreitem :src="str + '/public/upload_img_art/9.jpg'"></moreitem>
        <moreitem :src="str + '/public/upload_img_art/1.jpg'"></moreitem>
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
  data() {
    return {
      str: this.Global.local,
    };
  },
};
</script>

<style scoped>
#hdview {
  width: 100%;
  height: 100px;
  background-color: white;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
}

#morecont {
  width: 1200px;
  margin: 50px auto;
}

.contentitem {
  width: 25%;
  float: left;
}
</style>

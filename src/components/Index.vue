<template>
  <div class="index">
    <div id="topbar">
      <topbar></topbar>
    </div>

    <div id="content">
      <div id="contentleft">
        <publishbararea v-bind:topuserimg="topuserimg"></publishbararea>
        <uploadtxt v-bind:topuserimg="topuserimg"></uploadtxt>
        <uploadimgtxt v-bind:topuserimg="topuserimg"></uploadimgtxt>
        <mlist
          v-for="mlistobject in mlistobjects"
          v-bind:key="mlistobject.mlistid"
          v-bind:username="mlistobject.username"
          v-bind:imgsrc="mlistobject.imgsrc"
          v-bind:title="mlistobject.title"
          v-bind:content="mlistobject.content"
          v-bind:userimg="mlistobject.userimg"
        ></mlist>
      </div>
      <div id="contentright">
        <rboxuser></rboxuser>
        <rboxcre></rboxcre>
        <rbanner url="./img/banner1.jpg"></rbanner>
        <download></download>
      </div>
      <div style="height: 100px; width: 100%; float: left"></div>
    </div>

    <div id="other">
      <watg></watg>
      <upload></upload>
      <gotop></gotop>
    </div>
  </div>
</template>

<script>
import publishbararea from "../../components/publishbararea.vue";
import mlist from "../../components/mlist.vue";
// import uploadtxt from '../../components/uploadtxt.vue'
// import uploadimgtxt from '../../components/uploadimgtxt.vue'

import axios from "axios";

export default {
  data() {
    return {
      mlistobjects: "",
      topuserimg: "",
    };
  },
  created() {
    axios
      .get("http://localhost:3000/index_tis")
      .then((res) => {
        this.mlistobjects = eval("(" + JSON.stringify(res.data) + ")");
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    publishbararea,
    mlist,
    // uploadtxt: uploadtxt,
    // uploadimgtxt: uploadimgtxt,
  },
};
</script>

<style scoped>
</style>

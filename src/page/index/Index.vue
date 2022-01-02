<template>
  <div class="index">
    <div id="topbar">
      <topbar></topbar>
    </div>

    <div id="content">
      <div id="contentleft">
        <publishbararea v-bind:topuserimg="topuserimg"></publishbararea>
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
        <rbanner></rbanner>
        <download></download>
      </div>
      <div style="height: 100px; width: 100%; float: left"></div>
    </div>

    <div id="other">
      <watg></watg>
      <gotop></gotop>
    </div>
  </div>
</template>

<script>
import topbar from "../../components/topbar.vue";
import publishbararea from "../../components/publishbararea.vue";
import mlist from "../../components/mlist.vue";
import rboxuser from "../../components/rboxuser.vue";
import rboxcre from "../../components/rboxcre.vue";
import rbanner from "../../components/rbanner.vue";
import download from "../../components/download.vue";

import watg from "../../components/watg.vue";
import gotop from "../../components/gotop.vue";

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
    topbar,
    publishbararea,
    mlist,
    rboxuser,
    rboxcre,
    rbanner,
    download,
    watg,
    gotop,
  },
};
</script>

<style scoped>
</style>

<template>
  <div class="index">
    <topbar></topbar>

    <div class="container">
      <div class="leftwrap">
        <createart
          @childEvent="showUpload"
          v-bind:userimg="userimg"
        ></createart>

        <upload
          @childEvent="showUpload"
          :username="username"
          :userimg="userimg"
          :showData="uploadIsShow"
          v-show="uploadIsShow.isShow"
        ></upload>

        <maskl @childEvent="showUpload" v-show="uploadIsShow.isShow"></maskl>

        <mlist
          v-for="mlistobject in mlistobjects"
          v-bind:key="mlistobject.art_id"
          v-bind:username="mlistobject.author"
          v-bind:imgsrc="mlistobject.imgsrc"
          v-bind:title="mlistobject.title"
          v-bind:content="mlistobject.text"
          v-bind:userimg="mlistobject.user_img"
        ></mlist>
      </div>
      <div class="rightwrap">
        <userbox
          v-bind:username="username"
          :class="!topShow ? 'static' : 'fixed1'"
        ></userbox>
        <creator :class="!topShow ? 'static' : 'fixed2'"></creator>
        <ad :src="'img/banner1.jpg'"></ad>
        <activity></activity>
        <ad :src="'img/banner2.png'"></ad>
        <download></download>
      </div>
    </div>

    <top v-show="topShow"></top>
  </div>
</template>

<script>
const axios = require("axios");

import topbar from "../../components/topbar.vue";
import createart from "../../components/createart.vue";
import upload from "../../components/upload.vue";
import mlist from "../../components/mlist.vue";
import userbox from "../../components/userbox.vue";
import creator from "../../components/creator.vue";
import ad from "../../components/ad.vue";
import activity from "../../components/activity.vue";
import download from "../../components/download.vue";

import maskl from "../../components/maskl.vue";
import top from "../../components/top.vue";

export default {
  created() {
    const token = this.Global.checkToken();
    if (token) {
      axios
        .get(this.Global.local + "/article/getArtList", {
          params: {
            token: token,
          },
        })
        .then((res) => {
          if (res.data.message == "OK") {
            console.log("Index Token验证", res.data.message);
            this.mlistobjects = res.data.articleList;
            this.username = res.data.userData[0].user_name;
            this.userimg = this.Global.local + res.data.userData[0].user_img;
          } else {
            alert("Token验证失败");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("请先登录");
      this.$router.push("/login");
    }
  },
  mounted() {
    window.addEventListener(
      "scroll",
      this.Global.throttle(this.scrollEvent, 500)
    );
  },
  data() {
    return {
      mlistobjects: null,
      username: null,
      userimg: null,

      uploadIsShow: {},

      topShow: false,
    };
  },
  methods: {
    showUpload(componentName) {
      //   this.uploadIsShow = {};

      if (componentName === "change_user_img") {
        this.uploadIsShow = {
          isShow: true,
          change_user_img: true,
        };
      } else if (componentName === "upload_txt") {
        this.uploadIsShow = {
          isShow: true,
          upload_txt: true,
        };
      } else if (componentName === "upload_img") {
        this.uploadIsShow = {
          isShow: true,
          upload_img: true,
        };
      } else {
        this.uploadIsShow = {};
      }
    },

    scrollEvent() {
      let ws_height = document.documentElement.scrollTop;

      if (ws_height >= 1650) {
        this.topShow = true;
      } else {
        this.topShow = false;
      }
    },
  },
  components: {
    topbar,
    createart,
    upload,
    mlist,
    userbox,
    creator,
    ad,
    activity,
    download,
    top,
    maskl,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.leftwrap {
  width: 535px;
  margin-right: 25px;
}
.rightwrap {
  width: 185px;
}
.static {
  position: static;
  top: auto;
}
.fixed1 {
  position: fixed;
  top: 20px;
}
.fixed2 {
  position: fixed;
  top: 150px;
}
</style>

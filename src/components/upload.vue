<template>
  <div id="upload">
    <div v-show="showData.change_user_img" class="change_user_img">
      <p>上传头像</p>
      <div class="uploadarea">
        <div class="prewrap">
          <img class="preimg" v-show="previewIs" :src="local + preSrc" />
          <button class="selebtn" v-show="!previewIs" @click="change">
            选择图片
          </button>
          <input
            id="change_user_img"
            name="img"
            type="file"
            @change="upload"
            accept="image/*"
          />
        </div>
        <div class="prewrapmini">
          <p>拖拽或缩放虚线框，生成自己满意的头像</p>
          <div>
            <img class="lpre" :src="local + preSrc" />
            <p>110*110像素</p>
          </div>
          <div>
            <img class="mpre" :src="local + preSrc" />
            <p>64*64像素</p>
          </div>
          <div>
            <img class="spre" :src="local + preSrc" />
            <p>30*30像素</p>
          </div>
        </div>
      </div>
      <div class="surebtn">
        <button class="changecancel" @click="display">取消</button>
        <button class="changesure" @click="onSure" v-show="previewIs">
          保存并关闭
        </button>
      </div>
    </div>
    <div v-show="showData.upload_txt" class="upload_txt">
      <span>{{ username }}</span>
      <div class="uptxtform">
        <input type="text" placeholder="标题" v-model="title" />
        <textarea id="upcontent" type="text" v-model="content"></textarea>
      </div>
      <div class="uptxtbot">
        <button class="uptxtcancel" @click="display">取消</button>
        <button id="upload_txt" v-on:click="upload" class="uptxtsure">
          发布
        </button>
      </div>
    </div>
    <div v-show="showData.upload_img" class="upload_img">
      <span>{{ username }}</span>
      <div class="upmidwrap">
        <div class="upimgwrap">
          <img
            v-show="artImgShow"
            :src="artImgSrc ? local + artImgSrc : null"
          />
        </div>

        <div v-show="!artImgShow" class="selectimg">
          <button class="upimgselect" v-on:click="select">选择图片</button>
          <input
            id="upload_img"
            @change="upload"
            name="artimg"
            type="file"
            accept="image/*"
          />
        </div>
        <input class="upimgtxtcnt" type="text" v-model="describe" />
      </div>
      <div class="upimgbot">
        <button class="upimgcancel" @click="display">取消</button>
        <button class="upimgsure" @click="sureImgArt">发布</button>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  props: ["username", "userimg", "showData"],
  data() {
    return {
      local: this.Global.local,

      preSrc: "/public/change_user_img/default.png",
      previewIs: false,

      title: "",
      content: "",

      artImgSrc: "/public/change_user_img/default.png",
      artImgShow: false,
      describe: "",
    };
  },
  methods: {
    upload(e) {
      console.log(e.target.id);

      const id = e.target.id;

      if (id === "change_user_img") {
        this.changeUserImg(e.target.files[0]);
      } else if (id === "upload_txt") {
        this.createTextArt();
      } else if (id === "upload_img") {
        this.uploadImgArt(e.target.files[0]);
      }
    },

    change() {
      document.getElementsByName("img")[0].click();
    },

    select() {
      document.getElementsByName("artimg")[0].click();
    },

    onSure() {
      axios
        .put(this.Global.local + "/user/sureUserImg", {
          data: {
            src: this.preSrc,
            username: this.username,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.message == "OK") {
            alert("修改成功");
            location.reload();
          } else {
            alert("修改失败");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("修改失败");
        });
    },

    display() {
      this.$emit("childEvent");
    },

    changeUserImg(file) {
      let fileImage = file;

      let formData = new FormData();
      formData.append("fileImage", fileImage, fileImage.name);

      console.log(formData.get("fileImage"));

      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      axios
        .post(this.Global.local + "/user/uploadUserImg", formData, config)
        .then((res) => {
          console.log(res.data.url);

          this.preSrc = "/" + res.data.url;
          this.previewIs = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    createTextArt() {
      axios
        .post(this.Global.local + "/article/addTextArt", {
          data: {
            username: this.username,
            title: this.title,
            content: this.content,
          },
        })
        .then((res) => {
          if (res.data.message === "OK") {
            alert("发布成功");
            location.reload();
          } else {
            alert("发布失败");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    uploadImgArt(file) {
      let fileImage = file;

      let formData = new FormData();
      formData.append("fileImage", fileImage, fileImage.name);

      console.log(formData.get("fileImage"));

      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      axios
        .post(this.Global.local + "/article/uploadImgArt", formData, config)
        .then((res) => {
          console.log(res.data.url);

          this.artImgSrc = "/" + res.data.url;
          this.artImgShow = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    sureImgArt() {
      axios
        .post(this.Global.local + "/article/addImgArt", {
          data: {
            artImgSrc: this.artImgSrc,
            describe: this.describe,
            username: this.username,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.message == "OK") {
            alert("发布成功");
            location.reload();
          } else {
            alert("发布失败");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("修改失败");
        });
    },
  },
};
</script>

<style scoped>
#upload {
  width: 560px;
  height: 388px;
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.change_user_img {
  display: grid;
  grid-gap: 20px;
  padding: 18px;
  align-content: center;
  background-color: white;
}

.change_user_img > p:first-child {
  font-size: 1.2em;
  color: #888;
}

.uploadarea {
  display: grid;
  grid-template-columns: 376px 120px;
  grid-gap: 20px;
}

.prewrap {
  background-color: #f3f3f3;
  display: grid;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.preimg {
  height: 200px;
}

.selebtn {
  width: 130px;
  height: 40px;
  background-color: #5d5d5d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
}

.selebtn:hover {
  background-color: #b5b5b5;
}

.change_user_img input {
  display: none;
}

.prewrap {
  display: grid;
  grid-gap: 8px;
}

.lpre {
  width: 80px;
  height: 80px;
  background-color: #f3f3f3;
}

.mpre {
  width: 50px;
  height: 50px;
  background-color: #f3f3f3;
}

.spre {
  width: 25px;
  height: 25px;
  background-color: #f3f3f3;
}

.prewrapmini {
  display: grid;
  grid-gap: 10px;
}

.prewrapmini p {
  font-size: 0.6em;
  color: #999;
}

.surebtn {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
}

.surebtn button {
  width: 100px;
  height: 30px;
  border: none;
  cursor: pointer;
}

.changesure {
  background-color: #98b623;
  color: white;
}

.changesure:hover {
  background-color: #b0d41e;
}

.changecancel {
  background-color: #e7e7e7;
  color: #888;
}

.changecancel:hover {
  background-color: #ededef;
}

/**------------------------------------------------------------- */
.upload_txt {
  display: grid;
  grid-gap: 20px;
  background-color: white;
  padding: 20px;
}

.upload_txt span {
  font-size: 1.1em;
  color: #888;
}

.uptxtform {
  display: grid;
}

.upload_txt input {
  height: 30px;
  padding-left: 1%;
}

#upcontent {
  height: 160px;
}

.uptxtbot {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
}

.upload_txt button {
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.uptxtcancel {
  background-color: #e7e7e7;
  color: #888;
}

.uptxtcancel:hover {
  background-color: #ededef;
}

.uptxtsure {
  background-color: #82d900;
  color: white;
}

.uptxtsure:hover {
  background-color: #8cea00;
}
/**-------------------------------------------------- */
.upload_img {
  display: grid;
  grid-gap: 15px;
  background-color: white;
  padding: 15px;
}

.upload_img span {
  font-size: 1.1em;
  color: #888;
}

.upimgwrap {
  text-align: center;
}

.upimgwrap img {
  width: 130px;
}

.upmidwrap {
  display: grid;
  grid-gap: 15px;
}

.selectimg {
  text-align: center;
  padding: 15px;
  border: 1px solid #ccc;
}

.selectimg input {
  display: none;
}

.upimgtxtcnt {
  width: 100%;
  height: 130px;
  border: 1px solid #ccc;
}

.upimgselect {
  width: 100px;
  background-color: #b5b5b5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px;
  font-size: 00.8em;
}

.upimgselect:hover {
  background-color: #dedede;
}

.upimgbot {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
}

.upimgcancel,
.upimgsure {
  width: 80px;
  height: 35px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.upimgcancel {
  background-color: #e7e7e7;
  color: #888;
}

.upimgcancel:hover {
  background-color: #ededef;
}

.upimgsure {
  background-color: #82d900;
  color: white;
}

.upimgsure:hover {
  background-color: #8cea00;
}
</style>
<template>
  <div id="createart">
    <div @click="show('change_user_img')" class="article userimg">
      <div v-if="userimg">
        <img v-bind:src="userimg" class="newimg" />
      </div>
    </div>
    <div @click="show('upload_txt')" class="article text"></div>
    <div @click="show('upload_img')" class="article img"></div>
    <div @click="show('changeimg')" class="article music"></div>
    <div @click="show('changeimg')" class="article video"></div>
    <div @click="show('changeimg')" class="article link"></div>
  </div>
</template>

<script>
export default {
  props: {
    userimg: String,
  },
  methods: {
    show(componentName) {
      this.$emit("childEvent",componentName);
    },
  },
};
</script>

<style scoped>
#createart {
  background: url("../img/PostBar.png") no-repeat;
  width: 670px;
  height: 113px;
  margin-left: -68px;
  margin-top: -10px;
  margin-bottom: -10px;
  cursor: pointer;
  display: flex;
  transform: scale(0.8, 0.8);
}

.article {
  width: 110px;
  height: 110px;
}

.userimg:hover {
  background: url("../img/PostBar.png") no-repeat 0 -132px;
  width: 110px;
  height: 110px;
}

.userimg:hover .newimg {
  display: none;
}

.newimg {
  width: 110px;
  height: 110px;
}

.text:hover {
  background: url("../img/PostBar.png") no-repeat -110px -132px;
  width: 109px;
  height: 109px;
}

.img:hover {
  background: url("../img/PostBar.png") no-repeat -220px -132px;
  width: 109px;
  height: 109px;
}

.music:hover {
  background: url("../img/PostBar.png") no-repeat -330px -132px;
  width: 109px;
  height: 109px;
}

.video:hover {
  background: url("../img/PostBar.png") no-repeat -440px -132px;
  width: 109px;
  height: 109px;
}

.link:hover {
  background: url("../img/PostBar.png") no-repeat -550px -132px;
  width: 109px;
  height: 109px;
}
</style>

<template>
  <div id="artitem">
    <img class="userimg" v-bind:src="local + userimg" />
    <div class="itemcont">
      <span class="itemname">{{ username }}</span>

      <div v-if="imgsrc ? local + imgsrc : null" class="itemdraw">
        <img v-bind:src="imgsrc ? local + imgsrc : null" />
        <p class="itemdes">{{ content }}</p>
      </div>
      <div v-if="title" class="itemtit">
        <p>{{ title }}</p>
        <span>{{ content }}</span>
      </div>

      <div class="iitembot">
        <div>
          <span>热度(39)</span>
          <span>评论</span>
          <span>分享</span>
          <span>推荐</span>
          <div class="iitemlike"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
    userimg: String,
    imgsrc: String,
    title: String,
    content: String,
  },
  data() {
    return {
      local: this.Global.local,
    };
  },
};
</script>

<style scoped>
span {
  font-size: 0.6em;
  color: #888;
}

#artitem {
  display: flex;
  margin-top: 25px;
}

.userimg {
  width: 50px;
  height: 50px;
  margin-right: 30px;
}

.itemcont {
  width: 545px;
  float: right;
  background-color: white;
  padding: 20px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
}

.itemdraw,
.itemtit {
  margin-top: 20px;
}

.itemtit p {
  margin-bottom: 10px;
  font-size: 0.8em;
}

.itemcont img {
  width: 150px;
  float: left;
}

.itemdes {
  display: inline;
  margin-left: 20px;
  font-size: 0.8em;
}

.iitembot {
  width: 100%;
  float: right;
  margin-top: 20px;
}

.iitembot div:first-child {
  float: right;
  margin-right: 20px;
}

.iitembot span {
  margin-right: 10px;
}

.iitembot span:hover {
  color: black;
}

.iitemlike {
  background: url("../img/Sprite3.png") no-repeat -83px -2761px;
  width: 16px;
  height: 15px;
  float: right;
  margin-top: 5px;
}

.iitemlike:hover {
  background: url("../img/Sprite3.png") no-repeat -83px -2724px;
}
</style>

<template>
  <div id="moreitem">
    <div class="moretit">
      <img src="../img/user.jpg" />
      <span>Admin</span>
      <button>关注</button>
    </div>
    <div class="moreimg">
      <img v-bind:src="src" />
      <p>LOFTER——专注兴趣，分享创作</p>
    </div>
    <div class="morebot">
      <div class="likeicon"></div>
      <span class="likenum">292人喜欢</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
  },
};
</script>

<style scoped>
#moreitem {
  margin: 0 15px;
  margin-bottom: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 3px 6px -2px rgba(0, 0, 0, 0.3);
}

button {
  width: 70px;
  height: 30px;
  float: right;
  background-color: white;
  border: 1px solid #9ac600;
  color: #9ac600;
  border-radius: 5px;
  cursor: pointer;
}

p {
  padding: 10px;
  border-bottom: 1px solid #ededef;
}

.moretit span {
  font-size: 0.9em;
  line-height: 30px;
}

.moretit {
  padding: 10px;
  height: 30px;
}

.moretit img {
  width: 30px;
  height: 30px;
  float: left;
  margin-right: 10px;
}

.moreimg {
  width: 100%;
}

.moreimg img {
  width: 100%;
}

.morebot {
  padding: 10px;
}

.likeicon {
  display: inline-block;
  background: url("../img/Sprite6.png") no-repeat -4px -477px;
  width: 20px;
  height: 18px;
  margin-bottom: -4px;
  margin-right: 10px;
}

.likeicon:hover {
  background: url("../img/Sprite6.png") no-repeat -4px -366px;
}

.morebot span {
  color: #888;
  font-size: 0.8em;
}
</style>

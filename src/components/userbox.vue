<template>
  <div id="userbox">
    <router-link class="namebox" to="/user">
      <p>{{ username }}</p></router-link
    >
    <div class="usermenu">
      <a href="#"></a>
    </div>
    <div class="userfan">
      <div>
        <span>关注</span>
        <p>7</p>
      </div>
      <div>
        <span>粉丝</span>
        <p>7</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["username"],
};
</script>

<style scoped>
#userbox {
  width: 185px;
  background-color: #f3f3f3;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 25px;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 45% 55%;
}

#userbox a {
  float: left;
  color: black;
}

.namebox {
  grid-column: 1 / 4;
  border-right: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
  font-size: 0.8em;
}

.namebox:hover {
  background-color: white;
}

.namebox p {
  text-align: center;
  line-height: 55px;
  font-weight: bold;
}

.usermenu {
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid white;
  border-bottom: 1px solid #d8d8d8;
}

.usermenu:hover {
  background-color: white;
}

.usermenu a {
  background: url("../img/Sprite2.png") no-repeat -218px -170px;
  width: 11px;
  height: 7px;
}

.userfan {
  grid-column: 1 / 5;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  border-top: 1px solid white;
}

.userfan div {
  display: grid;
  gap: 10px;
  grid-template-rows: 30% 30%;
  align-content: center;
  text-align: center;
}

.userfan span {
  font-size: 0.8em;
}

.userfan p {
  color: #8eb902;
  font-weight: bold;
}
</style>

<template>
  <div class="topbar">
    <router-link to="/index">LOFTER</router-link>
    <router-link to="/index">首页</router-link>
    <router-link to="/more">发现</router-link>
    <router-link to="/index">APP</router-link>
    <input type="text" placeholder="搜索用户、标签" />
    <div class="iconwrap">
      <router-link class="" to="/index"></router-link>
      <router-link class="" to="/index"></router-link>
      <router-link class="" to="/index"></router-link>
    </div>
    <router-link @click.native="exit" to="/login">Exit</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    exit() {
      this.Global.clearToken();
    },
  },
};
</script>

<style scoped>
.topbar {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: black;
}

a {
  color: #999999;
  width: 60px;
  font-size: 0.9em;
}

a:hover {
  color: white;
}

.topbar > a:first-child {
  color: white;
  font-size: 1.4em;
  width: 150px;
}

input {
  height: 25px;
  width: 210px;
  padding-left: 20px;
  margin-right: 20px;
  border: 0;
  border-radius: 25px;
  font-size: 0.6em;
}

.iconwrap {
  line-height: 12px;
  width: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.iconwrap a {
  background: url("../img/Sprite3.png") no-repeat -1px -2916px;
  width: 14px;
  height: 12px;
  transform: scale(1.2, 1.2);
}

.iconwrap a:hover {
  background: url("../img/Sprite3.png") no-repeat -1px -2949px;
  width: 14px;
  height: 12px;
}
</style>

<template>
  <div class="login">
    <div class="logincon">
      <div class="loginwarp">
        <div class="logintit">
          <p>LOFFTER</p>
          <span>看 见 每 一 种 兴 趣</span>
        </div>
        <div class="loginformc">
          <p>欢迎来到乐乎</p>
          <input type="text" v-model="username" placeholder="用户名" />
          <input type="password" v-model="password" placeholder="密码" />
          <button @click="login">登录/注册</button>
          <br />
          <span>Tips:未注册的用户登录后将会自动注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data: function () {
    return {
      userid: "",
      username: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      axios
        .get("http://localhost:3000/user_tis")
        .then((res) => {
          //登录校验
          this.$router.push("/index");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-image: url(../../img/loginbg.jpg);
  background-size: 100%;
}
</style>

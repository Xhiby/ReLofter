<template>
  <div id="login">
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
        <button @click="this.Global.clearToken">ClearToken</button>
        <br />
        <span>Tips:未注册的用户登录后将会自动注册</span>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  created() {
    const token = this.Global.checkToken();
    if (token) {
      axios
        .get(this.Global.local + "/user/login", {
          params: {
            token: token,
          },
        })
        .then((res) => {
          console.log("Login Token登录", res.data.message);
          if (res.data.message == "OK") {
            this.$router.push("/index");
          } else {
            alert("token验证失败");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  data: function () {
    return {
      username: "Wu",
      password: "123",
    };
  },
  methods: {
    login: function () {
      if (this.username && this.password) {
        axios
          .get(this.Global.local + "/user/login", {
            params: {
              username: this.username,
              password: this.password,
            },
          })
          .then((res) => {
            if (res.data.message == "OK") {
              console.log("Login 账号密码登录", res.data.message);
              this.setToken(res.data.token);
              this.$router.push("/index");
            } else {
              alert("用户名或密码不正确");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("用户名或密码不能为空");
      }
    },

    setToken(token) {
      const date = new Date();
      date.setHours(date.getHours() + 1);

      const tokenDate = this.dateToString(date);

      if (token && tokenDate) {
        localStorage.setItem("token", token);
        localStorage.setItem("tokenDate", tokenDate);
      }

      return tokenDate;
    },

    dateToString(date) {
      return (
        date.toLocaleDateString().toString() +
        " " +
        date.getHours().toString() +
        ":" +
        date.getMinutes().toString() +
        ":" +
        date.getSeconds().toString()
      );
    },
  },
};
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-image: url(../../img/loginbg.jpg);
  background-size: 100%;
}

.loginwarp {
  width: 280px;
  margin: 120px auto;
}

.logintit {
  color: white;
  margin-bottom: 30px;
  text-align: center;
}

.logintit p {
  font-size: 2.4em;
  font-weight: lighter;
  margin-bottom: 0;
}

.loginformc {
  background-color: white;
  border-radius: 20px;
  text-align: center;
  padding: 20px 0 30px 0;
}

.loginformc p {
  font-size: 1.2em;
  margin: 15px auto;
}

.loginformc input {
  width: 70%;
  height: 20px;
  border-radius: 20px;
  margin: 10px 0 10px 0;
  padding: 5px;
  border-width: 1px;
  padding-left: 20px;
}

.loginformc button {
  width: 73%;
  border-radius: 20px;
  margin: 10px 0 10px 0;
  padding: 8px;
  border: none;
  background-color: #14c4bc;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.loginformc button:hover {
  background-color: #16dad1;
  border-color: #16dad1;
}

.loginformc span {
  font-size: 0.8em;
  opacity: 0.5;
}
</style>

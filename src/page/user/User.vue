<template>
  <div id="user">
    <userpanel
      v-bind:username="username"
      v-bind:userimg="local + userimg"
    ></userpanel>

    <div>
      <div class="usertop">
        <router-link to="/index">返回首页</router-link>
      </div>

      <div class="umit" v-for="items in userlists" :key="items.id">
        <umnitem
          v-for="item in items.data"
          v-bind:id="item.art_id"
          v-bind:key="item.art_id"
          v-bind:imgsrc="item.imgsrc ? local + item.imgsrc : null"
          v-bind:title="item.title"
          v-bind:content="item.text"
        ></umnitem>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

import umnitem from "../../components/umnitem.vue";
import userpanel from "../../components/userpanel.vue";

export default {
  created() {
    const token = this.Global.checkToken();
    if (token) {
      axios
        .get(this.Global.local + "/article/getUserArt", {
          params: {
            token: token,
          },
        })
        .then((res) => {
          if (res.data.message == "OK") {
            console.log("User Token验证", res.data.message);

            this.username = res.data.userData[0].user_name;
            this.userimg = res.data.userData[0].user_img;

            this.userlists = this.layoutList(res.data.userArtList);
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
  data() {
    return {
      userlists: [],
      username: null,
      userimg: null,
      local: this.Global.local,
    };
  },
  methods: {
    /**
     * 将一定数量的用户文章以固定四列的布局输出
     * 此函数用于确定每列文章数量及填充数据
     */
    layoutList(data) {
      //每列个数
      let [colNum, spotNum] = (data.length / 4).toString().split(".");

      let dataInx = 0;

      let res = [];
      while (res.length !== 4) {
        let colList = { data: [], id: res.length };

        for (let i = 0; i < colNum; i++) {
          colList.data[i] = data[dataInx];
          dataInx++;
        }

        res.push(colList);
      }

      if (spotNum) {
        spotNum = "0." + spotNum;
        spotNum = parseFloat(spotNum) * 4;

        for (let i = 0, j = data.length - spotNum; i < spotNum; i++, j++) {
          res[i].data.push(data[j]);
        }
      }

      return res;
    },
  },
  components: {
    userpanel,
    umnitem,
  },
};
</script>

<style scoped>
#user {
  display: flex;
}

.usertop {
  width: 100%;
  position: absolute;
  left: 0;
  background-color: white;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
}

.usertop a {
  margin-right: 20px;
  line-height: 40px;
  cursor: pointer;
  float: right;
  font-size: 0.8;
}

.umit {
  margin-top: 70px;
  width: 240px;
  margin-left: 40px;
  float: left;
}
</style>

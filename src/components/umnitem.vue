<template>
  <div id="umnitem">
    <div class="usermask"></div>
    <img class="umimg" v-if="imgsrc" v-bind:src="imgsrc" />
    <div class="umtext" v-if="!imgsrc">
      <p>{{ title }}</p>
      <div class="umwrap">
        <span>{{ content }}</span>
      </div>
    </div>
    <div class="umdelbtn">
      <button v-on:click="deletByid(id)">删除</button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  props: {
    id: Number,
    imgsrc: String,
    title: String,
    content: String,
  },
  data() {
    return {
      local: this.Global.local,
    };
  },
  methods: {
    deletByid(id) {
      axios
        .delete(this.Global.local + "/article/delUserArt", {
          data: {
            delId: id,
          },
        })
        .then((res) => {
          if (res.data.id) {
            alert("删除成功");
            location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
#umnitem {
  width: 100%;
  float: left;
  position: relative;
  margin: 25px;
}

.usermask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0;
  transition: all 0.3s;
}

.umimg {
  width: 100%;
  float: left;
}

.umtext {
  width: 100%;
  padding: 30px 0;
  background-color: white;
}

.umtext p {
  color: #5acdb3;
  font-size: 1.2em;
  margin: 0 20px 20px 30px;
}

.umtext span {
  color: #707070;
  font-size: 0.8em;
  margin-left: 30px;
}

.umwrap {
  padding: 0 20px;
}

.umdelbtn {
  width: 120px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

button {
  width: 100px;
  height: 35px;
  background-color: white;
  border: solid 1px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s;
}

#umnitem:hover .umdelbtn button {
  opacity: 1;
}

#umnitem:hover .usermask {
  opacity: 0.7;
}
</style>

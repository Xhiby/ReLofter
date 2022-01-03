<template>
  <div class="user">
    <div id="usd">
      <usd></usd>
    </div>
    <div id="userlistcon" class="umn">
      <div class="umntop">
          <router-link to="/index">返回首页</router-link>
      </div>
      <div id="umnitem">
        <div class="umnitem1">
          <umnitem
            v-for="userlist1 in userlists1"
            v-bind:key="userlist1.id"
            v-bind:id="userlist1.id"
            v-bind:imgsrc="userlist1.imgsrc"
            v-bind:title="userlist1.title"
            v-bind:content="userlist1.content"
          ></umnitem>
        </div>

        <div class="umnitem2">
          <umnitem
            v-for="userlist2 in userlists2"
            v-bind:key="userlist2.id"
            v-bind:id="userlist2.id"
            v-bind:imgsrc="userlist2.imgsrc"
            v-bind:title="userlist2.title"
            v-bind:content="userlist2.content"
          ></umnitem>
        </div>

        <div class="umnitem3">
          <umnitem
            v-for="userlist3 in userlists3"
            v-bind:key="userlist3.id"
            v-bind:id="userlist3.id"
            v-bind:imgsrc="userlist3.imgsrc"
            v-bind:title="userlist3.title"
            v-bind:content="userlist3.content"
          ></umnitem>
        </div>

        <div class="umnitem4">
          <umnitem
            v-for="userlist4 in userlists4"
            v-bind:key="userlist4.id"
            v-bind:id="userlist4.id"
            v-bind:imgsrc="userlist4.imgsrc"
            v-bind:title="userlist4.title"
            v-bind:content="userlist4.content"
          ></umnitem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import umnitem from "../../components/umnitem.vue";
import usd from "../../components/usd.vue";

import dataList from "../../components/dataList.vue"; 

export default {
  data() {
    return {
      userlists: dataList.data,
      userlists1: [],
      userlists2: [],
      userlists3: [],
      userlists4: [],
    };
  },

  created: function () {
    //记录总数
    var listnum = Object.keys(this.userlists).length;

    //每列放置的记录数
    var colnum = (listnum - 1) / 4;

    //i是userlists的索引 将会在4个循环中从1直到listnum
    //j是每个userlist1234的索引 每次循环都会重置为0
    var i = 0;
    var j = 0;

    //这4个循环的作用是将userlists中的项均匀的分配给每个userlist1234
    for (j = 0; i < colnum; i++, j++) {
      this.userlists1[j] = this.userlists[i];
    }
    for (j = 0; i < colnum * 2; i++, j++) {
      this.userlists2[j] = this.userlists[i];
    }
    for (j = 0; i < colnum * 3; i++, j++) {
      this.userlists3[j] = this.userlists[i];
    }
    for (j = 0; i <= colnum * 4; i++, j++) {
      this.userlists4[j] = this.userlists[i];
    }
  },
  components: {
    usd,
    umnitem,
  },
};
</script>

<style scoped>
</style>

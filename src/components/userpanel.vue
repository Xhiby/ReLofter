<template>
  <div id="userpanel">
    <div class="aboutblock">
      <img v-bind:src="userimg" />
    </div>
    <div>
      <p>{{ username }}</p>
      <span>私信</span>
      <span>归档</span>
      <span>搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["username", "userimg"],
};
</script>

<style scoped>
#userpanel {
  width: 330px;
  height: 100vh;
  background: url(../img/my/userbg.jpg) no-repeat;
  text-align: center;
  color: white;
}

.aboutblock {
  padding: 100px 0 40px 0;
}

img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

p {
  font-size: 1.6em;
  padding-bottom: 15px;
}

span {
  margin-right: 10px;
  cursor: pointer;
  font-size: 0.7em;
}
</style>

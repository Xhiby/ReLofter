<template>
  <div class="topbar">
    <div class="topbar_left">
      <router-link to="/index">LOFTER</router-link>
      <router-link to="/index">首页</router-link>
      <router-link to="/more">发现</router-link>
      <a href="#">APP</a>
      <div class="topbar_search">
        <input type="text" placeholder="搜索用户、标签" />
      </div>
    </div>
    <div class="topbar_right">
      <a href="#"><div class="topbar_right_one"></div></a>
      <a href="#"><div class="topbar_right_twe"></div></a>
      <a href="#"><div class="topbar_right_three"></div></a>
      <router-link to="/login">Exit</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>

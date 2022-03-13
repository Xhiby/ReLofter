<template>
  <div id="activity">
    <div class="acttit">
      <p>戏精主子争宠记</p>
      <span>5020人参与</span>
    </div>
    <div class="actimg">
      <img src="../img/act/act1.jpg" />
      <img src="../img/act/act2.jpg" />
      <img src="../img/act/act3.jpg" />
      <img src="../img/act/act4.jpg" />
    </div>
    <div class="actmore">
      <div class="acticon"></div>
      <span>更多话题</span>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
#activity {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 25px;
  font-size: 0.8em;
}

span {
  font-size: 0.8em;
  color: #888;
}

.acttit {
  padding: 10px;
}

.actimg {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.actimg img {
  width: 80px;
  height: 80px;
  padding: 5px;
}

.actmore {
  padding: 10px;
  box-shadow: inset 0 3px 2px -2px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
}

.actmore:hover {
  background-color: white;
}
</style>

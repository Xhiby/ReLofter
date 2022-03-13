<template>
  <div id="creator">
    <a href="#">
      <div class="creatoricon creatormore"></div>
      <span class="creatortit">创作者中心</span>
    </a>
    <a href="#">
      <div class="creatoricon"></div>
      <span>文章</span>
    </a>
    <a href="#">
      <div class="creatoricon"></div>
      <span>合集</span>
    </a>
    <a href="#">
      <div class="creatoricon"></div>
      <span>钱包</span>
    </a>
    <a href="#">
      <div class="creatoricon"></div>
      <span>草稿</span>
    </a>
    <a class="creatorset" style="border-bottom: none" href="#">
      <div class="creatoricon"></div>
      <span class="rboxcreset">个人主页设置</span>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#creator {
  width: 185px;
  background-color: #f3f3f3;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 25px;
}

#creator a {
  display: grid;
  gap: 8px;
  align-items: center;
  padding: 8px;
  grid-template-columns: 15px auto;
  border-top: 1px solid #d8d8d8;
  border-bottom: 1px solid white;
  font-size: 0.65em;
}

#creator a:hover {
  background-color: white;
}

.creatortit {
  font-weight: bold;
}

.creatorset {
  background-color: #e7e7e7;
  box-shadow: inset 0 3px 2px -2px rgba(0, 0, 0, 0.3);
  border-bottom: none;
}

.creatormore {
  background: url("../img/Sprite3.png") no-repeat -92px -237px;
  width: 8px;
  height: 11px;
  float: right;
}

.creatoricon {
  background: url("../img/Sprite3.png") no-repeat -1px -1688px;
  width: 12px;
  height: 11px;
  transform: scale(0.8, 0.8);
}

.rboxcreset {
  color: #888;
}
</style>

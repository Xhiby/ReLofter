<template>
  <div id="download">
    <p>使用手机访问 LOFTER</p>
    <div class="dlcontwrap">
      <div class="dlcont">
        <img src="../img/download/app_android.jpg" />
        <div>
          <p>安卓APP下载</p>
          <span>扫码下载安卓LOFTER APP</span>
        </div>
      </div>
      <div class="dlcont">
        <img src="../img/download/mp_weixin.jpg" />
        <div>
          <p>微信小程序</p>
          <span>使用微信扫码打开LOFTER微信小程序</span>
        </div>
      </div>
      <div class="dlcont">
        <img src="../img/download/mp_qq.jpg" />
        <div>
          <p>QQ小程序</p>
          <span>使用QQ扫码打开LOFTER QQ小程序</span>
        </div>
      </div>
      <div class="dlcont">
        <img src="../img/download/app_ios.jpg" />
        <div>
          <p>苹果APP下载</p>
          <span>扫码下载iOS</span><br />
          <span>LOFTER APP</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#download {
  background-color: #f3f3f3;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
  padding: 10px;
  font-size: 0.5em;
}

.dlcontwrap {
  display: grid;
  gap: 10px;
}

.dlcont {
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 10px;
  background-color: white;
}

.dlcont img {
  width: 100%;
  height: 100%;
}

span {
  color: #999999;
}

p {
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}
</style>

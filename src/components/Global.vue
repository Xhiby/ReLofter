<script>
import router from "../router/index";

const local = "http://175.24.182.154:3000";

function checkToken() {
  const nowDate = new Date();
  const tokenDate = new Date(localStorage.getItem("tokenDate"));

  return tokenDate > nowDate ? localStorage.getItem("token") : false;
}

function clearToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("tokenDate");
}

function throttle(func, delay) {
  let prev = Date.now();
  return function () {
    let context = this;
    let args = arguments;
    let now = Date.now();

    if (now - prev >= delay) {
      func.apply(context, args);
      prev = Date.now();
    }
  };
}

function checkIsPhone() {
  const width = window.innerWidth;

  let page = window.location.href.split("/");
  page = page[page.length - 1];

  console.log(page);

  if (width <= 450) {
    if (page !== "phonelogin") {
      router.push("/phonelogin");
    }
  } else {
    if (page !== "login") {
      router.push("/login");
    }
  }
}

window.onresize = throttle(checkIsPhone, 3000);

export default {
  checkToken,
  clearToken,
  throttle,
  checkIsPhone,
  local,
};
</script>
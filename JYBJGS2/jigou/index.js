document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      if (!username) {
        alert("请输入统一社会信用代码");
        return;
      }
      if (!password) {
        alert("请输入密码");
        return;
      }
      // 模拟登录请求
      alert("登录请求已发送，请等待系统响应");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // 处理自定义复选框
  const checkboxes = document.querySelectorAll(".custom-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", function () {
      this.checked = !this.checked;
    });
  });
  // 处理自定义单选框
  const radios = document.querySelectorAll(".custom-radio");
  radios.forEach((radio) => {
    radio.addEventListener("click", function () {
      const name = this.getAttribute("name");
      if (name) {
        document
          .querySelectorAll(`.custom-radio[name="${name}"]`)
          .forEach((r) => {
            r.checked = false;
          });
        this.checked = true;
      }
    });
  });
  // 处理自定义开关
  const switches = document.querySelectorAll(".custom-switch input");
  switches.forEach((switchInput) => {
    switchInput.addEventListener("change", function () {
      // 开关状态改变时的处理
    });
  });
});
function checkLogin() {
  var username = document.getElementById("username").value;
  if (username) {
    alert("用户名已输入");
  } else {
    alert("请输入用户名");
  }
}

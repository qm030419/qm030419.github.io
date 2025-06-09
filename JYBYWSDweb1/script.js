document.addEventListener("DOMContentLoaded", function () {
  const s = document.querySelector(".search-box input"),
    b = document.querySelector(".search-box button");

  b.addEventListener("click", () => alert("搜索: " + s.value));

  document.querySelectorAll("select").forEach((e) => {
    e.addEventListener("change", () => {
      document.querySelector(".exposure-list").style.opacity = 0.8;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const s = document.querySelector(".search-box input"),
    b = document.querySelector(".search-box button");
  b.addEventListener("click", () => alert("搜索: " + s.value));
  document
    .querySelectorAll("select")
    .forEach((e) =>
      e.addEventListener(
        "change",
        () => (document.querySelector(".exposure-list").style.opacity = 0.8)
      )
    );
});

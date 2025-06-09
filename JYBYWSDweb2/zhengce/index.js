document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(
    'input[placeholder="搜索政策文件..."]'
  );
  const searchButton = searchInput.nextElementSibling.nextElementSibling;
  searchButton.addEventListener("click", function () {
    if (searchInput.value.trim() !== "") {
      alert("搜索: " + searchInput.value);
      searchInput.value = "";
    }
  });
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && searchInput.value.trim() !== "") {
      alert("搜索: " + searchInput.value);
      searchInput.value = "";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(
    ".bg-gray-100.rounded-full button"
  );
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => {
        btn.classList.remove("bg-primary", "text-white");
        btn.classList.add("text-gray-600", "hover:bg-gray-200");
      });
      this.classList.remove("text-gray-600", "hover:bg-gray-200");
      this.classList.add("bg-primary", "text-white");
    });
  });
});

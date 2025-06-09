const navLinks = document.querySelectorAll(".left-nav a");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 20,
        behavior: "smooth",
      });
    }
    navLinks.forEach((navLink) => {
      navLink.classList.remove("bg-blue-50", "text-primary");
      navLink.classList.add("text-gray-700", "hover:bg-gray-50");
    });
    this.classList.remove("text-gray-700", "hover:bg-gray-50");
    this.classList.add("bg-blue-50", "text-primary");
  });
});

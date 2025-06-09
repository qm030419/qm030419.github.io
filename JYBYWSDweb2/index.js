document.addEventListener("DOMContentLoaded", function () {
  const carouselSlides = document.querySelector(".carousel-slides");
  const dots = document.querySelectorAll(".carousel-dot");
  let currentSlide = 0;
  const totalSlides = dots.length;
  let autoSlideInterval;

  // 切换到指定幻灯片
  function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    const translateX = -slideIndex * 20; // 每张图片占20%宽度
    carouselSlides.style.transform = `translateX(${translateX}%)`;

    // 更新指示器
    dots.forEach((dot, index) => {
      if (index === slideIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  // 下一张幻灯片
  function nextSlide() {
    const nextIndex = (currentSlide + 1) % totalSlides;
    goToSlide(nextIndex);
  }

  // 自动轮播
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000); // 每4秒切换一次
  }

  // 停止自动轮播
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // 点击指示器切换
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      goToSlide(index);
      stopAutoSlide();
      setTimeout(startAutoSlide, 2000); // 手动操作后2秒恢复自动轮播
    });
  });

  // 鼠标悬停暂停自动轮播
  const carouselContainer = document.querySelector(".carousel-container");
  carouselContainer.addEventListener("mouseenter", stopAutoSlide);
  carouselContainer.addEventListener("mouseleave", startAutoSlide);

  // 启动自动轮播
  startAutoSlide();
});

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  breakpoints: {
    500: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  mousewheel: true,
  keyboard: true,
});


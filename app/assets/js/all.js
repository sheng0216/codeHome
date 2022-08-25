function initSwiper() {
  var swiper = new Swiper(".learn", {
    slidesPerView: 3,
    spaceBetween: 8,
    breakpoints: {
      992: {
        slidesPerView: 11
      },
      768: {
        slidesPerView: 7,
        spaceBetween: 16,
      },
    },
    autoplay: {
      delay: 1500,
    },
  });
  var swiper = new Swiper(".about", {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev"
    },
    pagination: {
      el: ".swiper-pagination"
    }
  });
  var swiper = new Swiper(".introduce", {
    slidesPerView: 2,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 5,
      },
    },
    autoplay: {
      delay: 1500,
    },
  });
}
initSwiper();
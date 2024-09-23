
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".projects__slider", {
  // loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

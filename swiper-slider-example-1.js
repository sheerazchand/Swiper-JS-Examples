jQuery(document).ready(function(){
  var products_swiper = new Swiper(".au-products-sw", {
    slidesPerView: 2,
    spaceBetween: 0,
    calculateHeight:true,
    mousewheel: true,
    direction:"horizontal",
    followFinger:true,
    mousewheel: {
      thresholdDelta: 0,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });
}

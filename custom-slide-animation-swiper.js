jQuery(document).ready(function(){
  var interleaveOffset = 0.5;
var swiperOptions = {
  loop: false,
  speed: 1000,
  grabCursor: true,
  /*watchSlidesProgress: true,*/
  mousewheelControl: true,
  keyboardControl: true,
  direction: "horizontal",
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    progress: function() {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        var innerOffset = swiper.width * interleaveOffset;
        var innerTranslate = slideProgress * innerOffset;
        swiper.slides[i].querySelector(".swiper-inner").style.transform =
          "translate3d(" + innerTranslate + "px, 0, 0)";
      }      
    },
    touchStart: function() {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition: function(speed) {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".swiper-inner").style.transition =
          speed + "ms";
      }
    }
  }
};
var swiper = new Swiper(".home-slider", swiperOptions);
)};

jQuery(document).ready(function(){
  var menu = ['OUR STORY', 'VISION', 'VALUES', 'COMPLIANCE', 'AWARDS & ACHIEVEMENTS', 'SUCCESS STORIES', 'OUR CLIENTS', 'OUR PARTNERS'];
  var ourstory_swiper = new Swiper(".our-story", {
    preventInteractionOnTransition: true,
    noSwiping: true,
    simulateTouch:false,
    allowTouchMove:false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      draggable: true,
      renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
    },
  });
)};

$(document).ready(function(){
  $("#fullPage").fullpage({
    menu:".topMenu",
    anchors:['m1st','m2st','m3st','m4st'],

  })
  // $(".slider").bxSlider({
  //
  // })

  const swiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  loop:true,


});
// let h = $(window).innerHeight()
$(window).resize(function(){
            sHeight();
         });

         function sHeight(){
            var sliderHeight = $(window).height();
            $(".slider").height(sliderHeight);
         }

         sHeight();





});

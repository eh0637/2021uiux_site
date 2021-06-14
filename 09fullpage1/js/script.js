$(document).ready(function(){
  $("#fullPage").fullpage({
    menu:".topMenu",
    anchors:['m1st','m2st','m3st','m4st'],

  })
  // $(".slider").bxSlider({
  //
  // })

  const swiper = new Swiper('.page1 .swiper-container', {
  speed: 400,
  spaceBetween: 10,
  loop:true,
  autoplay: true,


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



         const swiper2 = new Swiper('.page3 .swiper-container', {
         speed: 400,
         spaceBetween: 50,
         loop:true,
         autoplay: true,


       });





});

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
  spaceBetween: 0,
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



         new Swiper('.page3 .swiper-container', {
           speed: 400,
           spaceBetween: 30,
           loop:true,
           autoplay: true,
           slidesPerView: 3,
           });






});

$(document).ready(function(){
  $("#fullPage").fullpage({
    menu:".topMenu",
    anchors:['m1st','m2st','m3st','m4st'],
    navigation:true,
    navigationTooltips:['HOME','COMPANY','NEWS','JOINUS',],
    showActiveTooltips:true,
    responsiveWidth: 1000,
    afterLoad:function(anchorslink,index){
          console.log(anchorslink + ',' + index);
          if( index == 2){
              $(".company1").addClass("down");
              $(".company2").addClass("down");
              $(".company3").addClass("down");
          }else{
              $(".company1").removeClass("down");
              $(".company2").removeClass("down");
              $(".company3").removeClass("down");
          }
          if( index == 3){
              $(".contSlider ").addClass("right");
              $(".navTop").addClass("border")
              $(".topMenu a").addClass("c33")
          }else{
              $(".contSlider ").removeClass("right");
              $(".navTop").removeClass("border")
              $(".topMenu a").removeClass("c33")
          }
      }

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
           spaceBetween: 15,
           loop:true,
           autoplay: true,
           slidesPerView: 3,
           navigation : {
              nextEl : '.swiper-next', // 다음 버튼 클래스명
              prevEl : '.swiper-prev', // 이번 버튼 클래스명
            },

           });









});

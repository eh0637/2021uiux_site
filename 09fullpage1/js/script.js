$(document).ready(function(){
  $("#fullPage").fullpage({
    menu:".topMenu",
    anchors:['m1st','m2st','m3st','m4st' ,'m5st'],
    navigation:true,
    navigationTooltips:['m1st','m2st','m3st','m4st','footer'],
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


  const swiper = new Swiper('.page1 .swiper', {
  speed: 400,
  spaceBetween: 0,
  loop:true,
  autoplay: true,
  observer: true,
  observeParents: true,
  observeSlideChildren:true,


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

         $(".tabC").hide().eq(0).show();

         $(".tabMenu li").click(function(){
           let t = $(this).index();
           console.log(t)


           $(".tabMenu li").removeClass("active2");
           $(this).addClass("active2")
           $(".tabC").hide().eq(t).fadeIn();


         });



         new Swiper('.page3 .swiper', {
           speed: 400,
           spaceBetween: 15,
           loop:true,
           autoplay: true,
           loopFillGroupWithBlank: true,
           observer: true,
           observeParents: true,
           slidesPerView: 3,
           breakpoints:{
             0:{slidesPerView: 1},
             720:{slidesPerView: 2},
             1000:{slidesPerView: 3},

           },


           });
















});

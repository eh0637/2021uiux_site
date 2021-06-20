$(document).ready(function(){
  $("#fullPage").fullpage({
    menu:".topMenu",
    anchors:['m1st','m2st','m3st','m4st'],


    afterLoad:function(anchorslink,index){
          console.log(anchorslink + ',' + index);
          if( index == 1){
            $(".aniWrap img").addClass("mainA");
            $(".aniWrapb img").addClass("mainA");
            $(".mainAniT").addClass("mainAleft");
            $(".mainAniB").addClass("mainAright");
            $(".shd1").addClass("sdh0");
            $(".shd2").addClass("sdh0");


          }else{
            $(".mainAniT").removeClass("mainAleft");
            $(".mainAniB").removeClass("mainAright");
            $(".aniWrap img").removeClass("mainA");
            $(".aniWrapb img").removeClass("mainA");
            $(".shd1").removeClass("sdh0");
            $(".shd2").removeClass("sdh0");


          }
          if( index == 2){
            $(".an1").addClass("an1M");
            $(".an2").addClass("an2M");
            $(".an25").addClass("an25M");
            $(".an3").addClass("an3M");
            $(".text2Wrap").addClass("text2");
            $(".cdWrap").addClass("cardM");


          }else{
            $(".an1").removeClass("an1M");
            $(".an2").removeClass("an2M");
            $(".an25").removeClass("an25M");
            $(".an3").removeClass("an3M");
            $(".text2Wrap").removeClass("text2");
            $(".cdWrap").removeClass("cardM");

          }
          if( index == 3){
            $(".p3c").addClass("pc3m")
          }else {
            $(".p3c").removeClass("pc3m")
          }
      }



  });









});

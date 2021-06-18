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


          }else{
            $(".mainAniT").removeClass("mainAleft");
            $(".mainAniB").removeClass("mainAright");
            $(".aniWrap img").removeClass("mainA");
            $(".aniWrapb img").removeClass("mainA");


          }
          if( index == 2){
              $(".se2ProIB").addClass("aniM2");
              $(".se2ProIT").addClass("aniM1");
              $(".amiM3").addClass("aniM4");
              $(".amiM3").addClass("ani0");

          }else{
              $(".se2ProIB").removeClass("aniM2")
              $(".se2ProIT").removeClass("aniM1")
              $(".amiM3").removeClass("aniM4")
              // $(".amiM3").removeClass("ani0");
          }
      }



  });









});

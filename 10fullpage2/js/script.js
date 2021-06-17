$(document).ready(function(){
  $("#fullPage").fullpage({
    menu:".topMenu",
    anchors:['m1st','m2st','m3st','m4st'],


    afterLoad:function(anchorslink,index){
          console.log(anchorslink + ',' + index);
          if( index == 2){
              $(".company").addClass("down")
          }else{
              $(".company").removeClass("down")
          }
      }



  });









});

$(document).ready(function(){
  var mySlider = $(".slider").bxSlider({
    auto:true,
    controls:false,
    pager:false
  });


  $(".accordion").on('click',function(){
    $(this).next(".list_subCon").slideToggle(100);
  });


  $(".cont_menu li").click(function(){
    let t = $(this).index();
    console.log(t)

    $(".cont_menu li").removeClass("active");
    $(this).addClass("active")
    $(".tab_menuWrap .tab_contList").hide().eq(t).fadeIn();
  });

 // $( ".accordion" ).accordion();
});

$(document).ready(function(){
  var mySlider = $('.slider').bxSlider({
    auto:true,
    controls:false,
    pager:false

  });
  $('.nextBtn').click(function(){
    mySlider.goToNextSlide();
    });
  $('.prevBtn').click(function(){
    mySlider.goToPrevSlide();
    });


  $(".toggleMenu").click(function(){
    const toggle = $(".toggleMenu").attr("class");

    if(toggle == "toggleMenu"){
      $(".toggleMenu").addClass("change");

      $(".menuTop").animate({top:0});

    }else {
      $(".toggleMenu").removeClass("change");

      $(".menuTop").stop().animate({top:"-100%"});
    }
  });

  $(window).resize(function(){
    $(".menuTop").removeAttr("style");
    $(".toggleMenu").removeClass("change");
  });

  $(".sliderSc").bxSlider({
    auto:true,
    controls:false,
    pager:false

  });
  $('.youtube').colorbox({
      iframe:true,
      innerWidth:700,
      innerHeight:393.75
  });

  $(".tab li").click(function(){
    let t = $(this).index();
    console.log(t)

    $(".tab li").removeClass("active");
    $(this).addClass("active")
    $(".menu_contWrap .subCont").hide().eq(t).fadeIn();
  });

});

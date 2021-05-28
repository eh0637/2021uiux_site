$(document).ready(function(){

  let navOffset = $(" #header .navbar").height()+100;

  $(window).scroll(function(){
    hScroll();
  });
  function hScroll(){
    let scroll = $(window).scrollTop();
    if( navOffset < scroll ){
      $("#header .navbar").addClass("fixed-top");
    }else {
      $("#header .navbar").removeClass("fixed-top");

    }
    }
    hScroll();


 $(".sliderM").bxSlider({
    auto:true,
    controls:false,

  });


  $(".release #slider2").owlCarousel({
    center:true,
    loop:true,
    margin:40,
    autoplay:true,
    responsive:{
      0:{items:3},
      600:{items:3},
      1000:{items:5}

    }
  });
    $(".view .popup_link").magnificPopup({type:"image"});

  const btns = $(".management .btn-group button");
  btns.click(function(){
    let i = $(this).index();
    console.log(i);
    btns.removeClass("active");
    btns.eq(i).addClass("active")

    let selector  = btns.eq(i).attr("data-filter");
    console.log(selector);

    $(".management .view").isotope({
      filter:selector
    })



  });
  $(".youtube").colorbox({
      iframe:true,
      innerWidth:700,
      innerHeight:393.75
  });





});

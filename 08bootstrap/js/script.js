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
    autoplay:false,
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
    // console.log(selector);

    $(".management .view").isotope({
      filter:selector
    })



  });
  $(".youtube").colorbox({
      iframe:true,
      innerWidth:700,
      innerHeight:393.75
  });


  // let hoverSize = $( ".owl-item.cloned.active " ).width();
  // console.log(hoverSize);

  // $(".tab li").click(function(){
  //   let t = $(this).index();
  //   console.log(t)
  //
  //   $(".tab li").removeClass("active2");
  //   $(this).addClass("active2")
  //   $(".subCont_pageWrap .subCont_page").hide().eq(t).show();
  // });
  //

  $(".subCont_pageWrap .subCont_page").hide().eq(0).show();

  $(".tab li").click(function(){
    let t = $(this).index();
    console.log(t)

    $(".tab li").removeClass("active2");
    $(this).addClass("active2")
    $(".subCont_pageWrap .subCont_page").hide().eq(t).fadeIn();
  });


$(".hoverscript").hover(function(){
  let i = $(this).index();
  console.log(i)
  $(".hoverscript > div").eq(i).find(".card_boxhover").attr("class",".card_boxhover")
},function(){
  $(".hoverscript").attr("class",".card_boxhover moon")
})


});

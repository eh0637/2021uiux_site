  $(document).ready(function(){
    $(".menu> ul > li").mouseover(function(){
        $(".sub").slideDown();
    });
    $(".menu > ul > li").mouseout(function(){
        $(".sub").slideUp();
    });
  });
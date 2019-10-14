$(function(){
  $('.header-show').on('click', function(){
    // $('.header-none').toggleClass('none');
    if($('.header-none').is(':hidden') ){
      $('.header-none').slideDown(600);
      // $('.brand > img').css({'position':'fixed' });
    } else {
      $('.header-none').slideUp('slow');
      // $('.main').css({'position':'relative', 'top': '200px' });
    }
  });
  $(window).resize(function(){
    var width = $(window).width();
    var x = 900
    if(width > x){
      $('.header-none').attr('style', 'display: block;');
    } else {
      setTimeout(function(){
        $('.header-none').slideUp();
      },300)
    }
  });
  
  $('.background').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in',
    fade: true,
  });

});

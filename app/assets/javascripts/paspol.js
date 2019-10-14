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
  var checkResize;
  $(window).on(' load resize',function(){
    clearTimeout(checkResize);
    checkResize = setTimeout( resizing, 100 );
  });
  function resizing() {
    var width = $(window).width();
    var x = 900
    if(width > x){
      $('.header-none').attr('style', 'display: block;');
      $('.header-none').css({'display':'block'});
      $('.header-category').animate({
       'right': '50px',
       'bottom': 0
      });
    } else {
      setTimeout(function(){
        $('.header-none').slideUp();
      },300)
      $('.header-category').removeAttr('style');
    }
  }
  
  $('.background').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in',
    fade: true,
  });

});

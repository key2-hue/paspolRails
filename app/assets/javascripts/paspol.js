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
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

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
  // $('.slider').slick({
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // });
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
  

});

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
  $(window).on('resize',function(){
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
       'right': '30px',
       'bottom': 0
      });
      // $('.header-category').removeClass('header-background',{duration:500});
      // $('.header-list').removeClass('header-bottom',{duration: 500});
    } else {
      setTimeout(function(){
        $('.header-none').slideUp();
      },300)
      $('.header-category').removeAttr('style');
      $('.header-category').css({'bottom':'50px','right': 0});
      // $('.header-category').addClass('header-background');
      // $('.header-list').addClass('header-bottom');
    }
  }
  
  $('.background').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    cssEase: 'ease-in',
    fade: true,
  });

  $('.main').vegas({
    slides: [
      {src: "https://pas-pol.jp/wp-content/uploads/2014/11/main_visual_13-0x0.jpg"},
      {src: "https://pas-pol.jp/wp-content/uploads/2014/11/main_visual_2-0x0.jpg"},
      {src: "https://pas-pol.jp/wp-content/uploads/2014/11/main_visual_6-0x0.jpg"},
      {src: "https://pas-pol.jp/wp-content/uploads/2014/11/main_visual_7-0x0.jpg"},
      {src: "https://pas-pol.jp/wp-content/uploads/2014/11/main_visual_111-0x0.jpg"}
    ],
    loop: true,
    timer: false
  })

  $('.sns-button > a').on('click', function(){
    $('.main').vegas({
      slides: [
        {src: "https://pas-pol.jp/wp-content/uploads/2014/11/main_visual_13-0x0.jpg"},
        {src: "https://pas-pol.jp/wp-content/uploads/2014/11/main_visual_2-0x0.jpg"},
        {src: "https://pas-pol.jp/wp-content/uploads/2014/11/main_visual_6-0x0.jpg"},
        {src: "https://pas-pol.jp/wp-content/uploads/2014/11/main_visual_7-0x0.jpg"},
        {src: "https://pas-pol.jp/wp-content/uploads/2014/11/main_visual_111-0x0.jpg"}
      ],
      loop: true,
      timer: false
    })
  });

  $('.news-arrow').on('click', function(){
    $("html,body").animate({
      scrollTop: 0
    });
  });

});

$(function() {
  $('.btn').click(function(){
    var $display = $('.active');
    $display.removeClass('active');
    if($(this).hasClass('prev')) {
      $display.prev().addClass('active');
    } else {
      $display.next().addClass('active');
    };
    
    $
    if($display.index() == 0) {
      $('.prev').hide();
    }
  });
  
  $('.index').click(function() {
    var $slideIndex = $('.index').index($(this));
    $('.active').removeClass('active');
    $('.main-wrapper').eq($slideIndex - 1).addClass('active');
  });
  
  
});

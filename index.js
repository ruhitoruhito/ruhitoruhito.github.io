$(function() {
  $(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1500);
	},500);
	setTimeout(function(){
		$('.start h4').fadeIn(1500);
	},500);//0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(1000);
	},1500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});
  
  $('.btn').click(function(){
    var $display = $('.active');
    $display.removeClass('active');
    if($(this).hasClass('prev')) {
      $display.prev().addClass('active');
    } else {
      $display.next().addClass('active');
    };
    
    
    var slideIn = $('.main-wrapper').index($('.active'));
    $('.btn').show();
    if(slideIn == 0) {
      $('.prev').hide();
    } else if(slideIn == 3) {
      $('.next').hide();
    }
  });
  
  $('.index').click(function() {
    var $slideIndex = $('.index').index($(this));
    $('.active').removeClass('active');
    $('.main-wrapper').eq($slideIndex).addClass('active');
    
    var slideIn = $('.main-wrapper').index($('.active'));
    $('.btn').show();
    if(slideIn == 0) {
      $('.prev').hide();
    } else if(slideIn == 3) {
      $('.next').hide();
    };
  });
  
  
});

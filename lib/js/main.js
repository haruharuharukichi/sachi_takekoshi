jQuery(document).ready(function($) {
	$(function() {
	  // inview処理
	  $('.Inview').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
	  	if (isInView) {
	  		$(this).stop().addClass('Viewing');
	  	}
	  });

	  //ナビゲーション操作
	  $('#navbarToggler').click(function () {
	  	$(this).stop().toggleClass('active');
	  });

	  //ボタン固定
	  var $win = $(window),
	  $nav = $('.ScrollAppear'),
	  navHeight = $nav.outerHeight(),
	  navPos = $nav.offset().top,
	  fixedClass = 'fixed';
	  $win.on('load scroll', function() {
	  	var value = $(this).scrollTop();
	  	if ( value > 100 ) {
	  		$nav.addClass(fixedClass);
	  	} else {
	  		$nav.removeClass(fixedClass);
	  	}
	  });
	  //TOPへスクロール
	  $('#footerScroller').on('click',function(){
	  	$("html,body").animate({scrollTop:$('#wrapper').offset().top});
	  });
	});
});
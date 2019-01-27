jQuery(document).ready(function($) {
  $(function() {
	  // inview処理
	  $('.Inview').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
	    if (isInView) {
	      $(this).stop().addClass('Viewing');
	    }
	  });

	  //ナビゲーション固定
	  var $win = $(window),
	      $nav = $('#globalNavi'),
	      navHeight = $nav.outerHeight(),
	      navPos = $nav.offset().top,
	      fixedClass = 'fixed';
	  $win.on('load scroll', function() {
	    var value = $(this).scrollTop();
	    if ( value > navPos ) {
	      $nav.addClass(fixedClass);
	    } else {
	      $nav.removeClass(fixedClass);
	    }
	  });
	  //ナビゲーション操作
	  $('#navbarToggler').click(function () {
	    $(this).stop().toggleClass('active');
	  });
  });
});
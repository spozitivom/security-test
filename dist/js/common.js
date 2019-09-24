$(function () {

    $('#my-menu').mmenu({
        extensions: ['effect-menu-slide', 'pagedim-blck', 'position-right'],
        pageScroll: true,
        navbar: {
            title: '<img src="img/logo/logo.svg" alt="ПРОЕКТСТРОЙСНАБ охранные системы">'
        },
    });

    var api = $('#my-menu').data('mmenu');
    api.bind('open:start', function () {
        $('.hamburger').addClass('is-active');
    }).bind('close:finish', function () {
        $('.hamburger').removeClass('is-active');
    });

    $('.reviews_carousel_box').slick({
        dots: true,
        draggable: true,
        appendDots: $('.slick-dotted'),
        prevArrow: $('.arrow_prev'),
        nextArrow: $('.arrow_next')
    });

    var $wnd = $(window);
	var $top = $('.top');
	
	$wnd.scroll(function() {
		if($wnd.scrollTop() > $wnd.height()) {
			$top.addClass('active');
		} else {
			$top.removeClass('active');
		}
	});

	$top.click(function() {
		$('html, body').stop().animate({ scrollTop: 0}, 'slow', 'swing');
	})
});
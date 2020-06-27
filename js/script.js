// JavaScript Document
$(function(){
	/*
	Hamburger Icon Effect
	*/
	$HamburgerIconContainer = $('.HamburgerIconContainer');
	$HamburgerIconContainer.on('click',function(){
		scrollPosition = $(window).scrollTop();
		$('body').addClass('fixed').css({'top':-scrollPosition});
		$HamburgerIconContainer.toggleClass('open');
		if($HamburgerIconContainer.hasClass('open')){
			$(this).find('.HamburgerIcon__line1')
		.css({
			'position':'absolute',
			'top':'50%',
			'left':'50%',
			'transform':'translate(-50%,-50%) rotate(45deg)',
			'border':'1.5px solid #fff',
			'z-index':1
		});
		$(this).find('.HamburgerIcon__line2')
		.css({
			'position':'absolute',
			'top':'50%',
			'left':'50%',
			'transform':'translate(-50%,-50%)',
			'opacity': 0,
			'border':'1.5px solid #fff',
			'z-index':2
		});
		$(this).find('.HamburgerIcon__line3')
		.css({
			'position':'absolute',
			'top':'50%',
			'left':'50%',
			'transform':'translate(-50%,-50%) rotate(-45deg)',
			'border':'1.5px solid #fff',
			'z-index':3
		});
		$('.global-nav-sp').stop(true).fadeIn(800);
		}else{
			$('body').removeClass('fixed');
			$(this).find('.HamburgerIcon__line1')
		.css({
			'position':'static',
			'transform':'',
			'border':'1.5px solid rgba(0, 0, 0, 0.6)',
			'z-index':1
		});
		$(this).find('.HamburgerIcon__line2')
		.css({
			'position':'static',
			'transform':'',
			'opacity': '1',
			'border':'1.5px solid rgba(0, 0, 0, 0.6)',
			'z-index':2
		});
		$(this).find('.HamburgerIcon__line3')
		.css({
			'position':'static',
			'transform':'',
			'border':'1.5px solid rgba(0, 0, 0, 0.6)',
			'z-index':3
		});
		$('.global-nav-sp').stop(true).fadeOut(800);
		}
	});
	/*
	Global Nav SP Menu Jump
	*/
	$('.nav-item-sp').on('click',function(){
		$('.global-nav-sp').fadeOut(1000);
		$HamburgerIconContainer.find('.HamburgerIcon__line1')
		.css({
			'position':'static',
			'transform':'',
			'border':'1.5px solid rgba(0, 0, 0, 0.6)',
			'z-index':1
		});
		$HamburgerIconContainer.find('.HamburgerIcon__line2')
		.css({
			'position':'static',
			'transform':'',
			'opacity': '1',
			'border':'1.5px solid rgba(0, 0, 0, 0.6)',
			'z-index':2
		});
		$HamburgerIconContainer.find('.HamburgerIcon__line3')
		.css({
			'position':'static',
			'transform':'',
			'border':'1.5px solid rgba(0, 0, 0, 0.6)',
			'z-index':3
		});
		$('body').removeClass('fixed');
	});
	/*
	Global Nav SP Overlay disapears when the window is wider than 768px
	*/
	$(window).resize(function(){
		var w = $(window).innerWidth();
		var x = 768;
		if(w <= x){
		$HamburgerIconContainer.find('.HamburgerIcon__line1')
		.css({
		'position':'static',
		'transform':'',
		'border':'1.5px solid rgba(0, 0, 0, 0.6)',
		'z-index':1
		});
		$HamburgerIconContainer.find('.HamburgerIcon__line2')
		.css({
		'position':'static',
		'transform':'',
		'opacity': '1',
		'border':'1.5px solid rgba(0, 0, 0, 0.6)',
		'z-index':2
		});
		$HamburgerIconContainer.find('.HamburgerIcon__line3')
		.css({
		'position':'static',
		'transform':'',
		'border':'1.5px solid rgba(0, 0, 0, 0.6)',
		'z-index':3
		});
		}else{
		$HamburgerIconContainer.fadeOut(800);
		$('.global-nav-sp').fadeOut(800);
		}
	});
	/*
	Global Nav PC Menu Jump
	*/
	$('.nav-item').find('a').on('click',function(){
		var id = $(this).attr('href'),
			position = $(id).offset().top
		$('html, body').animate({
			'scrollTop': position
		},1000);
	});
	/*
	Back To Top
	*/
	$('.back-to-top').on('click',function(){
		$('html, body').animate({
			'scrollTop': 0
		},1500);
	});
	/*
	Back To Top Appearance
	*/
	$('.back-to-top-icon').each(function(){
		var $window = $(window),
			$BackToTopIcon = $(this),
			$GlobalNav = $('.global-nav'),
			GlobalNavOffsetTop = $GlobalNav.offset().top;
		
		$window.on('scroll',function(){
			if($window.scrollTop() > GlobalNavOffsetTop){
				$BackToTopIcon.css('display','block');
			}else{
				$BackToTopIcon.css('display','none');
			}
		});
		$window.trigger('scroll');
	});
	/*
	Fade-in Effect
	*/
	$(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 250){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});

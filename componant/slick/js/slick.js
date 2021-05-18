$(document).ready(function(){
	// componant.zip
	var slick = '.slick',
		slickController = $(slick + '-controller'),
		slickAlert = $(slick + '-alert');
	// horizon
	$('.slick-container.-h.-default').slick({
		slide: 'div',
		swipeToSlide: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
	});
	$('.slick-container.-h.-multiple').slick({
		swipeToSlide: false,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 4,
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
	});
	$('.slick-container.-h.-fluid').slick({
		speed: 400,
		variableWidth: true,
		adaptiveHeight: true,
		centerMode: true,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
		focusOnSelect:true,
	});
	$('.slick-container.-h.-alignment').slick({
		speed: 400,
		variableWidth: true,
		centerMode: true,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
		focusOnSelect:true,
	});
	$('.slick-container.-h.-column').slick({
		swipeToSlide: false,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 4,
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
	});
	$('.slick-container.-h.-center').slick({
		speed: 400,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: '0',
		centerMode: true,
		infinite: false,
		dots: false,
		arrows: false,
	});
	$('.slick-container.-h.-autoplay').slick({
		// autoplay: true,
		// autoplaySpeed: 400,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: '0',
		centerMode: true,
		infinite: true,
		dots: false,
		arrows: false,
	});
	// auto-play controller
	$('.slick-container.-h.-autoplay').siblings(slickController).click(function(){
		var _this = $(this),
			_thisAlert = _this.siblings(slickAlert);
		_this.text() === 'stop' ? (
			_this.text('play').siblings('.slick-container').slick('slickPause'),
			_thisAlert.addClass('-active').find('span').text('stop'),
			setTimeout(function(){
				_thisAlert.removeClass('-active');
			}, 800)
		) : (
			_this.text('stop').siblings('.slick-container').slick('slickPlay'),
			_thisAlert.addClass('-active').find('span').text('play'),
			setTimeout(function(){
				_thisAlert.removeClass('-active');
			}, 800)
		);
	});
	$('.slick-container.-h.-controller').slick({
		swipeToSlide: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: false,
		dots: true,
		arrows: true,
	});
	// pagination controller
	// $('.slick-container.-h.-controller').each(function(){
	// 	$(slick + '-arrow.slick-prev').text('');
	// 	$(slick + '-arrow.slick-next').text('');
	// });
	$('.slick-container.-h.-bullet').slick({
		swipeToSlide: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: false,
		dots: true,
		arrows: false,
	});
	// vertical
	$('.slick-container.-v.-default').slick({
		vertical: true,
		verticalSwiping: true,
		draggable: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
	});
	// wheel
	$(slick + '-container.-v').hover(function(){
		$('body').css('overflow', 'hidden');
		this.addEventListener('wheel', function(e){
			var _this = $(this),
				_wheelDetect = Math.sign(e.deltaY);
			if (_wheelDetect > 0) _this.slick('slickNext');
			else _this.slick('slickPrev');
		});
	}, function(){
		$('body').css('overflow', 'auto');
	});
	$('.slick-container.-v.-multiple').slick({
		vertical: true,
		verticalSwiping: true,
		draggable: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
	});
	$('.slick-container.-v.-column').slick({
		vertical: true,
		verticalSwiping: true,
		draggable: true,
		speed: 400,
		slidesToShow: 2,
		slidesToScroll: 2,
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
	});
	$('.slick-container.-v.-autoplay').slick({
		vertical: true,
		verticalSwiping: true,
		draggable: true,
		// autoplay: true,
		// autoplaySpeed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: true,
		dots: false,
		arrows: false,
	});
	// auto-play controller
	$('.slick-container.-v.-autoplay').siblings(slickController).click(function(){
		var _this = $(this),
			_thisAlert = _this.siblings(slickAlert);
		_this.text() === 'stop' ? (
			_this.text('play').siblings('.slick-container').slick('slickPause'),
			_thisAlert.addClass('-active').find('span').text('stop'),
			setTimeout(function(){
				_thisAlert.removeClass('-active');
			}, 800)
		) : (
			_this.text('stop').siblings('.slick-container').slick('slickPlay'),
			_thisAlert.addClass('-active').find('span').text('play'),
			setTimeout(function(){
				_thisAlert.removeClass('-active');
			}, 800)
		);
	});
	$('.slick-container.-v.-controller').slick({
		vertical: true,
		verticalSwiping: true,
		draggable: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: false,
		dots: true,
		arrows: true,		
	});
	// pagination controller
	// $('.slick-container.-v.-controller').each(function(){
	// 	$(slick + '-arrow.slick-prev').text('');
	// 	$(slick + '-arrow.slick-next').text('');
	// });
	$('.slick-container.-v.-bullet').slick({
		vertical: true,
		verticalSwiping: true,
		draggable: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: false,
		dots: true,
		arrows: false,
	});
	// combination and development
	$('.slick-container.-gallery.-item').slick({
		asNavFor: '.slick-container.-gallery.-list',
		swipeToSlide: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
	});
	$('.slick-container.-gallery.-list').slick({
		asNavFor: '.slick-container.-gallery.-item',
		swipeToSlide: true,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
		focusOnSelect: true,
	});
	$('.slick-container.-connect.-ed').slick({
		asNavFor: '.slick-container.-connect.-ion',
		vertical: true,
		verticalSwiping: true,
		draggable: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
	});
	$('.slick-container.-connect.-ion').slick({
		asNavFor: '.slick-container.-connect.-ed',
		vertical: true,
		verticalSwiping: true,
		draggable: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
	});
	$('.slick-container.-mismatch.-v.-left').slick({
		asNavFor: '.slick-container.-mismatch.-right',
		vertical: true,
		verticalSwiping: true,
		draggable: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
	});
	$('.slick-container.-mismatch.-v.-right').slick({
		asNavFor: '.slick-container.-mismatch.-left',
		vertical: true,
		verticalSwiping: true,
		draggable: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
	});
});
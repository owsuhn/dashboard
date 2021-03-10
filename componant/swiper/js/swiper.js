$(document).ready(function(){
    // horizon
    new Swiper('.swiper-container.-h.-default', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 40,
	});
	var hSildeTo = new Swiper('.swiper-container.-h.-to', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 0,
	});
	hSildeTo.slideTo(1);
    new Swiper('.swiper-container.-h.-multiple', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 'auto',
        spaceBetween: 0,
		slidesPerGroup: 4,
	});
    new Swiper('.swiper-container.-h.-column', {
		direction: 'horizontal',
        speed: 400,
        slidesPerView: 4,
		slidesPerColumn: 2,
        spaceBetween: 0,
		slidesPerGroup: 4,
	});
    new Swiper('.swiper-container.-h.-loop', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 'auto',
		spaceBetween: 0,
		centeredSlides: true,
        loop: true,
	});
    new Swiper('.swiper-container.-h.-autoplay', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 'auto',
		spaceBetween: 0,
		centeredSlides: true,
        loop: true,

		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
	});
    new Swiper('.swiper-container.-h.-controler', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 0,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		pagination: {
			el: '.swiper-pagination',
            clickable: true,
		},
	});
    // var arr = ['A', 'B', 'C', 'D'];
    new Swiper('.swiper-container.-h.-bullet', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 0,
        
		pagination: {
			el: '.swiper-pagination',
            clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
				// return '<span class="' + className + '">' + (arr[index]) + '</span>';
	        },
		},
	});
    new Swiper('.swiper-container.-h.-progress', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 0,

		pagination: {
			el: '.swiper-pagination',
            type: 'progressbar',
		},
	});
    new Swiper('.swiper-container.-h.-fraction', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 0,

		pagination: {
			el: '.swiper-pagination',
            type: 'fraction',
		},
	});
    // vertical
    new Swiper('.swiper-container.-v.-default', {
		direction: 'vertical',
        mousewheel: true,
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 0,
	});
	var vSildeTo = new Swiper('.swiper-container.-v.-to', {
		direction: 'vertical',
        mousewheel: true,
		speed: 400,
		slidesPerView: 1,
		spaceBetween: 0,
	});
	vSildeTo.slideTo(1);
	new Swiper('.swiper-container.-v.-complex', {
		direction: 'vertical',
        mousewheel: true,
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 0,
	});
	new Swiper('.swiper-container.-v.-column', {
		direction: 'vertical',
        mousewheel: true,
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 0,
	});
	new Swiper('.swiper-container.-v.-loop', {
		direction: 'vertical',
        mousewheel: true,
		speed: 400,
		slidesPerView: 1,
		spaceBetween: 0,
        loop: true,
	});
    new Swiper('.swiper-container.-v.-autoplay', {
		direction: 'vertical',
        mousewheel: true,
		speed: 400,
		slidesPerView: 1,
		spaceBetween: 0,
        loop: true,

		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
	});
	new Swiper('.swiper-container.-v.-controler', {
		direction: 'vertical',
		mousewheel: true,
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 0,

		pagination: {
			el: '.swiper-pagination',
            clickable: true,
		},
	});
	// var arr = ['A', 'B', 'C', 'D'];
    new Swiper('.swiper-container.-v.-bullet', {
		direction: 'vertical',
		mousewheel: true,
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 0,
        
		pagination: {
			el: '.swiper-pagination',
            clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
				// return '<span class="' + className + '">' + (arr[index]) + '</span>';
	        },
		},
	});
	new Swiper('.swiper-container.-v.-progress', {
		direction: 'vertical',
		mousewheel: true,
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 0,

		pagination: {
			el: '.swiper-pagination',
            type: 'progressbar',
		},
	});
	new Swiper('.swiper-container.-v.-fraction', {
		direction: 'vertical',
		mousewheel: true,
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 0,

		pagination: {
			el: '.swiper-pagination',
            type: 'fraction',
		},
	});
	// combination and development
	var galleryThumbs = new Swiper('.swiper-container.-thumbs', {
		slidesPerView: 4,
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
	});
	new Swiper('.swiper-container.-gallery', {
		thumbs: {
			swiper: galleryThumbs,
		},
	});
	var connected = new Swiper('.swiper-container.-connected', {
		direction: 'vertical',
	});
	var connection = new Swiper('.swiper-container.-connection', {
		direction: 'vertical',
		mousewheel: true,
	});
	connection.controller.control = connected;
	connected.controller.control = connection;
});
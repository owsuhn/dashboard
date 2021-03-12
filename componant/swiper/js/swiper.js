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

		// autoplay: {
		// 	delay: 2000,
		// 	disableOnInteraction: false,
		// },
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

		// autoplay: {
		// 	delay: 2000,
		// 	disableOnInteraction: false,
		// },
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
	var galleryList = new Swiper('.swiper-container.-gallery.-list', {
		slidesPerView: 4,
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
	});
	new Swiper('.swiper-container.-gallery.-item', {
		thumbs: {
			swiper: galleryList,
		},
	});
	var connectEd = new Swiper('.swiper-container.-connect.-ed', {
		direction: 'vertical',
	});
	var connectTion = new Swiper('.swiper-container.-connect.-ion', {
		direction: 'vertical',
		mousewheel: true,
	});
	connectTion.controller.control = connectEd;
	connectEd.controller.control = connectTion;
	// mismatch - n(2) column horizon
	var mismatchHTop = new Swiper('.swiper-container.-mismatch.-h.-top', {
		direction: 'horizontal',
	});
	var mismatchHBottom = new Swiper('.swiper-container.-mismatch.-h.-bottom', {
		direction: 'horizontal',
	});
	mismatchHTop.controller.control = mismatchHBottom;
	mismatchHBottom.controller.control = mismatchHTop;
	// mismatch - n(2) row horizon
	var mismatchHLeft = new Swiper('.swiper-container.-mismatch.-h.-left', {
		direction: 'horizontal',
	});
	var mismatchHRight = new Swiper('.swiper-container.-mismatch.-h.-right', {
		direction: 'horizontal',
	});
	mismatchHLeft.controller.control = mismatchHRight;
	mismatchHRight.controller.control = mismatchHLeft;
	// mismatch - n(2) column vertical
	var mismatchVTop = new Swiper('.swiper-container.-mismatch.-v.-top', {
		direction: 'vertical',
		mousewheel: true,
	});
	var mismatchVBottom = new Swiper('.swiper-container.-mismatch.-v.-bottom', {
		direction: 'vertical',
		mousewheel: true,
	});
	mismatchVTop.controller.control = mismatchVBottom;
	mismatchVBottom.controller.control = mismatchVTop;
	// mismatch - n(2) row vertical
	var mismatchVLeft = new Swiper('.swiper-container.-mismatch.-v.-left', {
		direction: 'vertical',
		mousewheel: true,
	});
	var mismatchVRight = new Swiper('.swiper-container.-mismatch.-v.-right', {
		direction: 'vertical',
		mousewheel: true,
	});
	mismatchVLeft.controller.control = mismatchVRight;
	mismatchVRight.controller.control = mismatchVLeft;
});
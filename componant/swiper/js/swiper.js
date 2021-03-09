






$(document).ready(function(){
    // componant.zip
    // var swiper = '.swiper';







    // -default
    new Swiper('.swiper-container.-default', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 40,
	});
    // -multiple
    new Swiper('.swiper-container.-multiple', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 'auto',
        spaceBetween: 0,
		slidesPerGroup: 4,
	});
    // -column
    new Swiper('.swiper-container.-column', {
		direction: 'horizontal',
        speed: 400,
        slidesPerView: 4,
		slidesPerColumn: 2,
        spaceBetween: 0,
		slidesPerGroup: 4,
	});
    // -loop
    new Swiper('.swiper-container.-loop', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 'auto',
		spaceBetween: 0,
        slidesPerGroup: 1,
		centeredSlides: true,
        loop: true,
	});
    // -autoplay
    new Swiper('.swiper-container.-autoplay', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 'auto',
		spaceBetween: 0,
        slidesPerGroup: 1,
		centeredSlides: true,
        loop: true,

		// autoplay: {
		// 	delay: 2000,
		// 	disableOnInteraction: false,
		// },
	});
    // -controler
    new Swiper('.swiper-container.-controler', {
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
    // -bullet
    // var qwerty = ['A', 'B', 'C', 'D'];
    new Swiper('.swiper-container.-bullet', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 0,
        
		pagination: {
			el: '.swiper-pagination',
            clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
				// return '<span class="' + className + '">' + (qwerty[index]) + '</span>';
	        },
		},
	});
    // -progress
    new Swiper('.swiper-container.-progress', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 0,

		pagination: {
			el: '.swiper-pagination',
            type: 'progressbar',
		},
	});
    // -fraction
    new Swiper('.swiper-container.-fraction', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 1,
        spaceBetween: 0,

		pagination: {
			el: '.swiper-pagination',
            type: 'fraction',
		},
	});
    





    
});







// $(function(){
// 	// swiper start


// 	// dot control -> 문자(*A참조) : var 변수명 = ['', '', '']


// 	var swiper = new Swiper('.motherSwiper-container', { // inner swiper를 사용하지 않는 경우에는 원래대로 .swiper-container 사용하면 됌(*B참조)


// 		// direction: 'vertical', // 슬라이드 방향(horizontal:가로/vertical:세로)
// 		// speed: 600, // 슬라이드 속도
// 		// parallax: true, // 슬라이드 내에서 시차가 있는 요소를 사용할 때
// 		// freeMode: true, // 스와이프 시 슬라이드의 이동 모습이 비자동(navigation/pagination 사용 시에는 자동)
// 		// mousewheel: true, // 마우스 휠로 작동(단, direction이 vertical일 경우만 해당)


// 		// autoplay control
// 		// autoplay: {
// 		// 	delay: 2000, // 멈춤 시간
// 		// 	disableOnInteraction: false, // autoplay 중 사용자 control 후에 멈춤:true/안 멈춤:false
// 		// },
		

// 		slidesPerView: 1, // 한 면에 보여줄 갯수('auto'/3) *중요 : 가로 값을 바꾸고 싶다면 css에서 .swiper-slide{width:auto;}
// 		// slidesPerColumn: 2, // 한 면에 보여줄 단(column) 수 *중요 : css에서 swiper-container/swiper-slide의 값을 조정해야 적용된 모습을 가시적으로 볼 수 있음
// 		// autoHeight: true, // *중요 : 세로 값을 바꾸고 싶다면 css에서 .swiper-slide{height:;}
// 		spaceBetween: 30, // 슬라이드 간의 간격
// 		// slidesPerGroup: 3, // 페이지 넘김 시 그룹된 슬라이드 갯수(3)
// 		// loopFillGroupWithBlank: true, // slidesPerGroup(그룹된 슬라이드 갯수)가 지정되었는데 슬라이드의 갯수가 그와 맞지 않을 때 빈 칸으로 매우기
// 		centeredSlides: false, // 센터 맞추기
// 		loop: false, // 무한 반복의 유무
// 		// observer: true, // display:none/block 시에도 스크립트 유지
// 		// observeParents: true, // display:none/block 시에도 스크립트 유지


// 		// arrow control
// 		navigation: {
// 			nextEl: '.swiper-button-next',
// 			prevEl: '.swiper-button-prev',
// 		},


// 		pagination: {
// 			el: '.motherSwiper-pagination', // inner swiper를 사용하지 않는 경우에는 원래대로 .swiper-pagination 사용하면 됌(*B참조)
// 			// type: 'progressbar', // bar 형태(bar/페이지넘버링/dot 중 택 1만 가능)
// 			// type: 'fraction', // 1/10 형태(bar/페이지넘버링/dot 중 택 1만 가능)


// 			// dot control
// 			clickable: true, // dot 형태 선택 시 클릭/이동의 유무
// 			renderBullet: function (index, className) {
// 				/* 정수 */return '<span class="' + className + '">' + (index + 1) + '</span>';
// 				/* 문자(*A참조) : return '<span class="' + className + '">' + (변수명[index]) + '</span>'; */
// 	        },
// 		},


// 		scrollbar: {
// 			el: '.swiper-scrollbar',
// 			hide: true,
// 		},


// 	});


// 	// inner swiper control
// 	// (*B참조) mother swiper와 inner swiper가 겹치는 기능(예를 들어 pagination과 같은)의 경우에는 각자 추가로 부여받은 class명을 사용해야
// 	// 이벤트(예를 들어 click과 같은) 시에 혼동되지 않음
// 	var swiperV = new Swiper('.innerSwiper-container', {
// 		direction: 'vertical',
// 		spaceBetween: 30,
// 		pagination: {
// 			el: '.innerSwiper-pagination',
// 			clickable: true,
// 		},
// 	});


// 	// 특정 슬라이드부터 시작하기
// 	// swiper.slideTo(index, speed, runCallbacks);









	
// });
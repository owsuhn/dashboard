$(document).ready(function(){
    // componant.zip
    var carousel = '.carousel',
        carouselItem = $(carousel + '__item'),
        slide = $(carousel + '__slide'),    
        slideTrack = $(carousel + '__slide-track'),
        slideItem = $(carousel + '__slide-item'),
        slideAlert = $(carousel + '__slide-alert'),
        carouselButton = $(carousel + '__button');
    // vertical carousel
    slide + $('.-vertical').each(function(){
        var _this = $(this),
            _thisTrack = _this.find(slideTrack);
        // create method
        function vertical () {
            var _active = _thisTrack.find($(carousel + '__slide-item.-active'));
            if (_active.is(':first-child')) {
                _thisTrack.animate({
                    'margin-top': '-10rem'
                }, 400, function(){
                    _active.removeClass('-active').next(slideItem).addClass('-active')
                });
            } else {
                _thisTrack.append('<li class="carousel__slide-item">' + _active.prev(slideItem).text() + '</li>');
                _active.prev(slideItem).animate({
                    'margin-top': '-20rem'
                }, 400, function(){
                    _active.removeClass('-active').next(slideItem).addClass('-active');
                    _active.prev(slideItem).remove();
                });
            };
        };
        // auto play
        var play = setInterval(function(){
            vertical();
        }, 2000);
        // carousel control
        _this.closest(carouselItem).find(carouselButton).click(function(){
            var _this = $(this),
                _thisSlide = $('#' + _this.attr('aria-controls')),
                _thisAlert = _thisSlide.find(slideAlert);
            // alert
            var alertRise = (function(){
                _thisAlert.animate({
                    'opacity': '1'
                }, 400, function(){
                    setTimeout(function(){
                        _thisAlert.animate({
                            'opacity': '0'
                        }, 400);
                    }, 800);
                });
            });
            // stop and play
            if (_this.hasClass('-stop')) {
                if (_this.attr('aria-disabled') === 'false') {
                    _thisAlert.find('span').text('stop');
                    alertRise();
                    clearInterval(play);
                    _this.attr('aria-disabled', 'true').siblings($(carousel + '__button.-play')).attr('aria-disabled', 'false');
                } else {
                    alert('이미 자동 실행이 정지 되었습니다.\n다시 자동 실행을 재생하고 싶으실 경우, 해당 버튼의 우측 "PLAY" 버튼을 클릭하여 주십시오.');
                };
            } else {
                if (_this.attr('aria-disabled') === 'false') {
                    _thisAlert.find('span').text('play');
                    alertRise();
                    play = setInterval(function(){
                        vertical();
                    }, 2000);
                    _this.attr('aria-disabled', 'true').siblings($(carousel + '__button.-stop')).attr('aria-disabled', 'false');
                } else {
                    alert('이미 자동 실행이 재생 되었습니다.\n다시 자동 실행을 정지하고 싶으실 경우, 해당 버튼의 좌측 "STOP" 버튼을 클릭하여 주십시오.');
                };
            };
        });
    });







    // horizon carousel
    slide + $('.-horizon').each(function(){
        var _this = $(this),
            _thisTrack = _this.find(slideTrack);
        // create method
        function horizon () {
            var _active = _thisTrack.find($(carousel + '__slide-item.-active'));
            if (_active.is(':first-child')) {
                _thisTrack.animate({
                    'margin-left': '-10rem'
                }, 400, function(){
                    _active.removeClass('-active').next(slideItem).addClass('-active')
                });
            } else {
                _thisTrack.append('<li class="carousel__slide-item">' + _active.prev(slideItem).text() + '</li>');
                _active.prev(slideItem).animate({
                    'margin-left': '-10rem'
                }, 400, function(){
                    _active.removeClass('-active').next(slideItem).addClass('-active');
                    _active.prev(slideItem).remove();
                });
            };
        };
        // auto play
        var play = setInterval(function(){
            horizon();
        }, 2000);
        // carousel control
        _this.closest(carouselItem).find(carouselButton).click(function(){
            var _this = $(this),
                _thisSlide = $('#' + _this.attr('aria-controls')),
                _thisAlert = _thisSlide.find(slideAlert);
            // alert
            var alertRise = (function(){
                _thisAlert.animate({
                    'opacity': '1'
                }, 400, function(){
                    setTimeout(function(){
                        _thisAlert.animate({
                            'opacity': '0'
                        }, 400);
                    }, 800);
                });
            });
            // stop and play
            if (_this.hasClass('-stop')) {
                if (_this.attr('aria-disabled') === 'false') {
                    _thisAlert.find('span').text('stop');
                    alertRise();
                    clearInterval(play);
                    _this.attr('aria-disabled', 'true').siblings($(carousel + '__button.-play')).attr('aria-disabled', 'false');
                } else {
                    alert('이미 자동 실행이 정지 되었습니다.\n다시 자동 실행을 재생하고 싶으실 경우, 해당 버튼의 우측 "PLAY" 버튼을 클릭하여 주십시오.');
                };
            } else {
                if (_this.attr('aria-disabled') === 'false') {
                    _thisAlert.find('span').text('play');
                    alertRise();
                    play = setInterval(function(){
                        horizon();
                    }, 2000);
                    _this.attr('aria-disabled', 'true').siblings($(carousel + '__button.-stop')).attr('aria-disabled', 'false');
                } else {
                    alert('이미 자동 실행이 재생 되었습니다.\n다시 자동 실행을 정지하고 싶으실 경우, 해당 버튼의 좌측 "STOP" 버튼을 클릭하여 주십시오.');
                };
            };
        });
    });
});
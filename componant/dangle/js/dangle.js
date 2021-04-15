$(document).ready(function(){
    // componant.zip
    var dangle = '.dangle',
        dangleEaves = $(dangle + '__eaves'),
        dangleWindChime = $(dangle + '__wind-chime'),
        dangleButton = $(dangle + '__button'),
        dangleDesc = $(dangle + '__desc');
    // -finite
    setTimeout(function(){
        dangleWindChime + $('.-finite').removeClass('-active');
    }, 1000);
    // click event
    dangleButton.click(function(){
        var _this = $(this),
            _thisWindChime = _this.siblings(dangleEaves).find(dangleWindChime);
        if (_thisWindChime.hasClass('-active')) {
            alert('애니메이션이 이미 진행 중입니다.\n애니메이션 총 진행 시간(1초) 후에 다시 시도하여 주십시오.');
        } else {
            _thisWindChime.addClass('-active');
            setTimeout(function(){
                _thisWindChime.removeClass('-active');
            }, 1000);
        };
    });
    // -repeat
    setInterval(function(){
        dangleWindChime + $('.-repeat').toggleClass('-active');
    }, 2000);
    // repeat timer
    var repeatTimer = 4;
    setInterval(function(){
        repeatTimer -= 1;
        if (repeatTimer < 1) repeatTimer = 4;
        dangleDesc.find('span').text(repeatTimer);
    }, 1000);
});
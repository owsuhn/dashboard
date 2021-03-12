$(document).ready(function(){
    // componant.zip
    var roll = '.roll',
        rollDice = $(roll + '__dice'),
        rollButton = $(roll + '__button'),
        _clickCount = 0,
        _wheelValue = 0;
    // click
    rollButton.click(function(){
        var _this = $(this),
            _thisDice = _this.closest('.roll__content').find(rollDice),
            _thisDiceFace = _thisDice.find($(roll + '__dice-face'));
        _thisDice.css('transition', '2s');
        if (_this.hasClass('-view')) {
            _clickCount += 1,
            _clickCount %= 2 ;
            if (_clickCount !=0) _thisDiceFace.css('opacity', '.4');
            else _thisDiceFace.css('opacity', '1');
        } else {
            if (_thisDice.hasClass('-active')) {
                alert('애니메이션이 이미 진행 중입니다.\n애니메이션 총 진행 시간(2초) 후에 다시 시도하여 주십시오.');
            } else {
                _thisDice.addClass('-active');
                if (_this.hasClass('-lt')) _thisDice.css('transform', 'rotate3d(1, -1, 0, 360deg)');
                else if (_this.hasClass('-lb')) _thisDice.css('transform', 'rotate3d(-1, -1, 0, 360deg)');
                else if (_this.hasClass('-rt')) _thisDice.css('transform', 'rotate3d(1, 1, 0, 360deg)');
                else _thisDice.css('transform', 'rotate3d(-1, 1, 0, 360deg)');
                setTimeout(function(){
                    _thisDice.css({
                        'transition': '0',
                        'transform': 'rotate3d(0, 0, 0, 0deg)'
                    });
                    _thisDice.removeClass('-active');
                }, 2000);
            };
        };
    });
    // wheel
    document.getElementById('wheel-area').addEventListener('wheel', function(e){
        document.body.style.overflow = 'hidden';
        var wheelDetect = Math.sign(e.deltaY);
        if (wheelDetect > 0) _wheelValue -= 10; // wheel down
        else _wheelValue += 10; // wheel up
        $(this).find(rollDice).css({
            'transition': '.2s',
            'transform': 'rotate3d(1, -1, 0, ' + _wheelValue + 'deg)'
        });
        $(window).click(function(){
            document.body.style.overflow = 'auto';
        });
    });
});
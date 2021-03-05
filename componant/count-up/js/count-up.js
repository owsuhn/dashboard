$(document).ready(function(){
    // componant.zip
    var countUp = '.count-up',
        countUpInteger = $(countUp + '__integer'),
        countUpButton = $(countUp + '__button'),
        countUpReLoad = $(countUp + '__re-load'),
        countUpForm = $(countUp + '__form'),
        countUpInput = $(countUp + '__input'),
        countUpResult = $(countUp + '__result');
    // integer
    countUpButton + $('.-passive').click(function(){
        $(this).siblings(countUp + '__integer').each(function(){
            var _this = $(this),
                interalDigit = _this.text().toString().length - 1; // check interal digit
            // if repeat
            _this.text(_this.text().replace(/,/gi, ''));
            // check duration
            if (_this.hasClass('-active')) {
                alert('카운트 업이 이미 진행 중입니다.\n카운트 업 총 진행 시간(2초) 후에 다시 시도하여 주십시오.');
            } else {
                // if double click 
                _this.addClass('-active');
                setTimeout(function(){
                    _this.removeClass('-active');
                }, 2000);
                // check start point
                if (_this.hasClass('-half')) var _thisPoint = _this.text() / _this.text().toString().length;
                else var _thisPoint = 0;
                // counter
                _this.prop('count', _thisPoint).animate({
                    count: _this.text()
                }, {
                    duration: 2000,
                    step: function(value){
                        var currentDigit = Math.floor(value).toString().length, // check current digit
                            fill = '0'.repeat((interalDigit - currentDigit)); // fill rest digit
                        if (_this.hasClass('-digit')) var val = fill + Math.floor(value);
                        else var val = Math.floor(value);
                        _this.text(val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    }
                });
            };
        });
    });
    // integer - landing
    countUpInteger + $('.-landing').each(function(){
        var _this = $(this),
            interalDigit = _this.text().toString().length - 1; // check interal digit
        // if repeat
        _this.text(_this.text().replace(/,/gi, ''));
        // check start point
        if (_this.hasClass('-half')) var _thisPoint = _this.text() / _this.text().toString().length;
        else var _thisPoint = 0;
        // counter
        _this.prop('count', _thisPoint).animate({
            count: _this.text()
        }, {
            duration: 2000,
            step: function(value){
                var currentDigit = Math.floor(value).toString().length, // check current digit
                    fill = '0'.repeat((interalDigit - currentDigit)); // fill rest digit
                if (_this.hasClass('-digit')) var val = fill + Math.floor(value);
                else var val = Math.floor(value);
                _this.text(val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            }
        });
    });
    // integer - landing(re-load)
    countUpReLoad.click(function(){
        window.location.reload();
    });
    // integer - textfield
    countUpButton + $('.-enter').click(function(){
        var _this = $(this),
            _departureValue = countUpForm.eq(0).find(countUpInput).val(),
            _ArrivalValue = countUpForm.eq(1).find(countUpInput).val();
        if (_this.hasClass('-active')) {
            alert('카운트 업이 이미 진행 중입니다.\n카운트 업 총 진행 시간(2초) 후에 다시 시도하여 주십시오.');
        } else {
            // check input
            if (!_departureValue || !_ArrivalValue) {
                alert('카운트 업 출발 값과 도착 값을 입력해주세요.');
            } else {
                // check integer
                function isNumber(n){return /^-?[\d.]+(?:e-?\d+)?$/.test(n);}
                if (isNumber(_departureValue) === false || isNumber(_ArrivalValue) === false) {
                    alert('정수 형태의 올바른 카운트 업 출발 값과 도착 값을 입력해주세요.');
                } else {
                    // check double click
                    $(countUp + '__button.-enter').addClass('-active');
                    setTimeout(function(){
                        $(countUp + '__button.-enter').removeClass('-active');
                    }, 2000);                
                    countUpResult.prop('count', _departureValue).animate({
                        count: _ArrivalValue
                    }, {
                        duration: 2000,
                        step: function(value){
                            countUpResult.text(Math.floor(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                        }
                    });
                };
            };
        };
    });
});
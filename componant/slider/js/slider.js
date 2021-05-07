$(document).ready(function(){
    // componant.zip
    var slider = '.slider',
        sliderContent = $(slider + '__content'),
        sliderInput = $(slider + '__input'),
        sliderRange = $(slider + '__range'),
        sliderFill = $(slider + '__fill'),
        sliderFlag = $(slider + '__flag');
    // create method
    function sliding(_this){
        var _thisInput = _this.find(sliderInput),
            _thisRange = _this.find(sliderRange),
            _thisFill = _this.find(sliderFill),
            _thisFlag = _this.find(sliderFlag);
        // range
        _thisRange.find('span').eq(0).text(
            _thisInput.attr('min')
        ).css(
            'left', (_thisInput.offset().left - 56) - (_thisRange.find('span').eq(0).width() / 2) + 'px' // 56 => layout padding
        );

        _thisRange.find('span').eq(1).text(
            _thisInput.attr('max')
        ).css(
            'left', _thisInput.width() + (_thisInput.offset().left - 56) - (_thisRange.find('span').eq(1).width() / 2) // input width + (input left - 56) - (range width / 2)
        );
        // create method
        function slidingCalc(){
            // bidirection
            if (_this.hasClass('-bidirection')) {
                var _thisInputValue = _thisInput.eq(1).val() - _thisInput.eq(0).val();
                // default - fill
                if (_thisInput.eq(0).val() / 100 < _thisInput.eq(1).val() / 100) {
                    _thisFill.css({
                        'left': _thisInput.eq(0).val() + '%',
                        'width':_thisInputValue + '%'
                    });
                // reverse - fill
                } else {
                    _thisFill.css({
                        'left': _thisInput.eq(1).val() + '%',
                        'width': _thisInput.eq(0).val() - _thisInput.eq(1).val() + '%'
                    });
                };
                // calc - flag
                _thisFlag.css({
                    'left': _thisFill.css('left'),
                    'margin-left': _thisFill.width() / 2 - _thisFlag.width() / 2 + 'px'
                }).text(
                    _thisInputValue + ', ' + Math.floor(_thisInputValue / _thisInput.attr('max') * 100) + '%'
                );
            } else {
                _thisFill.css({
                    'left': _thisInput.attr('min') + '%',
                    'width': _thisInput.val() - _thisInput.attr('min') + '%'
                });
                _thisFlag.css(
                    'left', _thisInput.val() / _thisInput.attr('max') * (_thisInput.outerWidth(true) - 10) + 'px'
                    // syntax: value / max * (slide track - slide thumb) + 'px'
                ).text(
                    _thisInput.val() + ', ' + Math.floor((_thisInput.val() - _thisInput.attr('min')) / (_thisInput.attr('max') - _thisInput.attr('min')) * 100) + '%'
                );
            };
        };
        // check case
        slidingCalc(); // initial
        $(window).resize(function(){slidingCalc();}) // resize
        _thisInput.on('input change', function(){slidingCalc();}); // sliding
    };
    // call method
    sliderContent.each(function(){
        sliding($(this));
    });
});
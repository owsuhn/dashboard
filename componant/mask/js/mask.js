$(document).ready(function(){
    // componant.zip
    var mask = '.mask',
        maskFrom = $(mask + '__form'),
        maskInput = $(mask + '__input'),
        maskDataOriginal = $(mask + '__data-original'),
        maskDataMasking = $(mask + '__data-masking');
    // text field
    for (var i = 0; i < maskInput.length; i++) {
        if (maskInput.eq(i).hasClass('-at')) {
            var _this = maskInput.eq(i);
            _this.keyup(function(){
                var _thisValue = $(this).val(),
                    _thisTarget = _thisValue.split('@')[0].length - 2,
                    _thisFirstValue =  _thisValue.replace(new RegExp('.(?=.{0,' + _thisTarget + '}@)', 'g'), '*');
                $(this).val(_thisFirstValue);
            });
        } else if (maskInput.eq(i).hasClass('-mirror')) {
            var _this = maskInput.eq(i);
            _this.keyup(function(){
                var _thisValue = $(this).val(),
                    _thisFirstValue = _thisValue.slice(0, 3),
                    _thisLastValue = _thisValue.slice(_thisValue.length - 3);
                if (_thisValue.length > 6) {
                    var maskingMark = '';
                    for (var j = (_thisValue.length) - 6; j > 0; j--) maskingMark += '*';
                    $(this).val(_thisFirstValue + maskingMark + _thisLastValue);
                } else {
                    return;
                };
            });
        } else if (maskInput.eq(i).hasClass('-direct')) {
            var _this = maskInput.eq(i),
                _thisSelect = _this.siblings('.mask__select');
            _this.keyup(function(){
                var _thisValue = $(this).val(),
                    _thisFirstValue = _thisValue.slice(0, 1),
                    maskingMark = '';
                for (var j = (_thisValue.length) - 1; j > 0; j--) maskingMark += '*';
                $(this).val(_thisFirstValue + maskingMark);
            });
            _thisSelect.on('change', function(){
                if ($(this).val() === 'i') {
                    $(this).closest(maskFrom).find(maskInput).after('<input type="text" placeholder="placeholder" id="default4-1" class="mask__input -direct" value="" />');
                } else {
                    maskInput + $('.-direct').eq(1).hide();
                };
            });
        } else {
            var _this = maskInput.eq(i);
            _this.keyup(function(){
                var _thisValue = $(this).val(),
                    _thisFirstValue = _thisValue.slice(0, 1),
                    maskingMark = '';
                for (var j = (_thisValue.length) - 1; j > 0; j--) maskingMark += '*';
                $(this).val(_thisFirstValue + maskingMark);
            });
        };
    };
    // data table
    // create method
    var dataMasking = (function(){
        var _this = maskDataOriginal.eq(k),
            _thisPrintValue = _this.text().slice(0, printCondition),
            maskingMark = '';
        for(var l = _this.text().slice(printCondition).length; l > 0; l--) maskingMark += '*';
        _this.siblings(maskDataMasking).text(_thisPrintValue + maskingMark);
    });
    // option check
    for (var k = 0; k < maskDataOriginal.length; k++) {
        if (maskDataOriginal.eq(k).text().length > 2) {
            var printCondition = 2;
            dataMasking();                                
        } else {
            var printCondition = 1;
            dataMasking(); 
        };
    };
});
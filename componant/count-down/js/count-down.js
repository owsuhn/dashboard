$(document).ready(function(){
    // componant.zip
    var countDown = '.count-down',
        countDownDateCalc = $(countDown + '__date-calc'),
        countDownDateBase = $(countDown + '__date.-base'),
        countDownDateCompare = $(countDown + '__date.-compare'),
        countDownDateResult = $(countDown + '__date.-result'),
        countDownDateDiff = $(countDown + '__date-diff'),
        countDownDatePresent = $(countDown + '__date.-present'),
        countDownFieldset = $(countDown + '__fieldset'),
        countDownForm = $(countDown + '__form'),
        countDownInput = $(countDown + '__input'),
        countDownSetPresent = $(countDown + '__set.-present'),
        countDownReset = $(countDown + '__set.-reset'),
        countDownDiff = $(countDown + '__button.-diff');
    // date - data(calc)
    countDownDateCalc.each(function(){
        var _this = $(this),
            _thisDateBase = new Date(_this.find(countDownDateBase).text()),
            _thisDateCompare = new Date(_this.find(countDownDateCompare).text()),
            _thisDateResult = Math.round((_thisDateCompare - _thisDateBase) / (1000 * 60 * 60 * 24));
        _this.find(countDownDateResult).text(_thisDateResult);
    });
    // date - data(diff)
    countDownDateDiff.each(function(){
        var _this = $(this);
            _thisDateBase = new Date(_this.find(countDownDateBase).text()),
            _present = new Date(),
            _thisDateResult = Math.round((_present - _thisDateBase) / (1000 * 60 * 60 * 24));
        _this.find(countDownDatePresent).text(_present.getFullYear() + '-' + (_present.getMonth() + 1) + '-' + _present.getDate());
        _this.find(countDownDateResult).text(_thisDateResult);
    });
    // data - textfield
    countDownInput.keyup(function(){
        var _this = $(this),
            _thisValue = _this.val(),
            _thisValueMask = _thisValue.replace(/\D/g, '').match(/(\d{0,4})(\d{0,2})(\d{0,2})/);
        _this.val(!_thisValueMask[2] ? _thisValueMask[1] : _thisValueMask[1] + '-' + _thisValueMask[2] + (_thisValueMask[3] ? '-' + _thisValueMask[3] : ''));
    });
    // data - textfield(set present)
    countDownSetPresent.click(function(){
        var _this = $(this),
            _thisSetInput = _this.siblings(countDown + '__input'),
            _present = _present = new Date();
        // check present month digit
        if ((_present.getMonth() + 1) < 10) var _printMonth = '0'+ (_present.getMonth() + 1);
        else var _printMonth = (_present.getMonth() + 1);
        // check present date digit
        if (_present.getDate() < 10) var _printDate = '0'+ _present.getDate();
        else var _printDate = _present.getDate();
        _thisSetInput.val(_present.getFullYear() + '-' + _printMonth + '-' + _printDate);
    });
    // data - textfield(reset)
    countDownReset.click(function(){
        var _this = $(this),
            _thisSetInput = _this.siblings(countDown + '__input');
        _thisSetInput.val(null);
    });
    // data - textfield(diff)
    countDownDiff.click(function(){
        var _this = $(this),
            _thisDateBase = _this.siblings(countDownForm).eq(0).find(countDownInput).val(),
            _thisDateCompare = _this.siblings(countDownForm).eq(1).find(countDownInput).val();
        if (_thisDateBase.length + _thisDateCompare.length === 20) {
            var _thisDateBase = new Date(_thisDateBase),
                _thisDateCompare = new Date(_thisDateCompare),
                _thisDateResult = Math.round((_thisDateCompare - _thisDateBase) / (1000 * 60 * 60 * 24));
            if (isNaN(_thisDateResult)) alert('yyyymmdd 형식의 올바른 기준일과 비교일을 입력해주세요.');
            else _this.closest(countDownFieldset).siblings(countDown + '__result').text(_thisDateResult);
        } else {
            alert('yyyymmdd 형식의 올바른 기준일과 비교일을 입력해주세요.');
        };
    });
});
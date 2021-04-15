$(document).ready(function(){
    // componant.zip
    var random = '.random',
        randomForm = $(random + '__form'),
        randomInput = $(random + '__input'),
        randomDesc = $(random + '__desc'),
        randomButton = $(random + '__button'),
        randomReLoad = $(random + '__re-load');
    // create method
    var intCode = Math.floor(Math.random() * 10000),
        engCode = Math.random().toString(36).substr(2, 8);
    // int 4
    randomInput + $(' .-int').each(function(){
        var _this = $(this);
        _this.attr('value', intCode);
        // vaild time
        var vaildCode = (function(){
            intCode = Math.floor(Math.random() * 11000);
            _this + $('.-validtime').attr('value', intCode);
        });
        vaildCode();
        setInterval(function(){vaildCode();}, 10000);
        // valid timer
        var validTimer = 10;
        setInterval(function(){
            validTimer -= 1;
            if (validTimer < 1) validTimer = 10;
            randomDesc.find('span').text(validTimer);
        }, 1000);
    });
    // eng 8
    randomInput + $(' .-eng').attr('value', engCode);
    // copy and cut
    randomButton.click(function(){
        var _thisCode = $(this).closest(randomForm).find(randomInput).select();
        if ($(this).hasClass('-copy')) {
            if (!_thisCode.val()) alert('복사할 코드가 없습니다.');
            else document.execCommand('copy');
        } else {
            if (!_thisCode.val()) alert('잘라낼 코드가 없습니다.');
            else document.execCommand('cut');
        };
    });
    // re-load
    randomReLoad.click(function(){
        window.location.reload();
    });
});
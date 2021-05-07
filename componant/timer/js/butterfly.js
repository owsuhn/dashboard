$(document).ready(function(){
    // componant.zip
    var butterfly = '.butterfly',
        butterflyCounter = $(butterfly + '__counter'),
        butterflyCount = $(butterfly + '__count'),
        butterflyCardValue = $(butterfly + '__card-value');
    // create method
    function counter (digit) {
        var _this = digit,
            _thisActive = _this.find($(butterfly + '__count.-active'));
        _thisActive.removeClass('-active').addClass('-passive').closest(butterflyCounter).find(butterflyCount).not(_thisActive).removeClass('-passive');
        if (_thisActive.html() === undefined) _this.find(butterflyCount).eq(0).addClass('-passive').next(butterflyCount).addClass('-active');
        else if (_thisActive.is(':last-child')) _this.find(butterflyCount).eq(0).addClass('-active');
        else _thisActive.next(butterflyCount).addClass('-active');
    }
    // digit10 default setting
    setTimeout(function(){
        butterflyCounter + $('.-digit10').find(butterflyCount).eq(0).addClass('-passive').next(butterflyCount).addClass('-active');
    }, 1000);
    // 1s repeat after
    setInterval(function(){
        var _present = new Date(),
            _presentSec = _present.getSeconds();
        if (_presentSec > 9) var digit10 = Math.floor(_presentSec / 10), digit01 = _presentSec % 10;
        else var digit10 = 0, digit01 = _presentSec % 10;
        // digit01 animation
        butterflyCounter + $('.-digit01').each(function(){
            counter($(this));
        });
        // digit10, digit01 value
        butterflyCounter + $('.-digit10').find($(butterfly + '__count.-passive')).find(butterflyCardValue).text(digit10);
        butterflyCounter + $('.-digit01').find($(butterfly + '__count.-active')).find(butterflyCardValue).text(digit01);
        // digit10 detect
        var beforeCount = butterflyCounter + $('.-digit10').find($(butterfly + '__count.-active')).find(butterflyCardValue).text(),
            afterCount = butterflyCounter + $('.-digit10').find($(butterfly + '__count.-passive')).find(butterflyCardValue).text();
        // digit10 aniamtion
        if (beforeCount != afterCount) butterflyCounter + $('.-digit10').each(function(){
            counter($(this));
        });
    }, 1000);
});
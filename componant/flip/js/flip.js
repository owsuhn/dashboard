$(document).ready(function(){
    // componant.zip
    var flip = '.flip',
        flipCardList = $(flip + '__card-list'),
        flipCard = $(flip + '__card'),
        flipReLoad = $(flip + '__re-load');
    // landing event(shuffle/option: -shuffle, -reflip)
    if (flipCardList.hasClass('-shuffle')) {
        var _shuffleList = $(flip + '__card-list.-shuffle'),
            _shuffleItem = _shuffleList.find(flipCard);
        _shuffleItem.addClass('-active');
        for (var i = 0; i < _shuffleList.length; i ++) {
            for (var j = 0; j < (_shuffleItem.length) / _shuffleList.length; j ++) {
                _shuffleList.eq(i).find(flipCard).eq(j).delay((j + 1) * 50).queue(function(){
                    $(this).removeClass('-active');
                });
            };
        };
        if (flipCardList.hasClass('-reflip')) {
            setTimeout(function(){
                $(flip + '__card-list.-reflip').find(flipCard).eq(0).addClass('-active');
            }, 800);
        } else {
            return;
        };
    } else {
        return;
    };
    // re load
    flipReLoad.click(function(){
        window.location.reload();
    });
    // click event(flip/option: -ripple, -multi)
    flipCard.click(function(){
        var _this = $(this),
            _thisCardList = _this.closest(flipCardList);
        if (_thisCardList.hasClass('-ripple')) {
            if (_thisCardList.hasClass('-multi')) {
                if (_this.hasClass('-active')) _this.removeClass('-active').addClass('-passive');
                else _this.removeClass('-passive').addClass('-active');
            } else {
                _thisCardList.find($(flip + '__card.-active')).removeClass('-active').addClass('-passive');
                _this.removeClass('-passive').addClass('-active');
            };
        } else {
            if (_thisCardList.hasClass('-multi')) _this.toggleClass('-active');
            else _this.addClass('-active').closest(flipCardList).find(flipCard).not(_this).removeClass('-active');
        };
    });
});
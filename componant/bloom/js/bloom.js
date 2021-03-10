$(document).ready(function(){
    // componant.zip
    var bloom = '.bloom',
        bloomLikeButton = $(bloom + '__like-button');
    // option: -default
    bloomLikeButton + $('.-default').click(function(){
        var _this = $(this);
        if (_this.hasClass('-active')) {
            _this.removeClass('-active');
            setTimeout(function(){
                bloomLikeButton + $('.-default').addClass('-active');
            }, 100);
        } else {
            _this.addClass('-active');
        };
    });
    // click count
    var count = 0;
    // option: -random
    bloomLikeButton + $('.-random').click(function(){
        var _this = $(this);
            count = count + 1,
            count = count % 2;
        if (count != 0) {
            if (_this.hasClass('-odd')) {
                _this.removeClass('-odd');
                setTimeout(function(){
                    bloomLikeButton + $('.-random').addClass('-odd');
                }, 100);
            } else {
                _this.addClass('-odd');
            };
        } else {
            if (_this.hasClass('-even')) {
                _this.removeClass('-even');
                setTimeout(function(){
                    bloomLikeButton + $('.-random').addClass('-even');
                }, 100);
            } else {
                _this.addClass('-even');
            };
        };
    });
});
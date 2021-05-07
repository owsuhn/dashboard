$(document).ready(function(){
    // componant.zip
    var bloom = '.bloom',
        bloomLikeButton = $(bloom + '__like-button'),
        _clickCount = 0;
    // create method
    function likey (_this, _thisOption1, _thisOption2) {
        _clickCount += 1,
        _clickCount %= 2;
        if (_clickCount != 0) {
            if (_this.hasClass(_thisOption1)) {
                _this.removeClass(_thisOption1);
                setTimeout(function(){
                    _this.addClass(_thisOption1);
                }, 100);
            } else {
                _this.addClass(_thisOption1);
            };
        } else {
            if (_this.hasClass(_thisOption2)) {
                _this.removeClass(_thisOption2);
                setTimeout(function(){
                    _this.addClass(_thisOption2);
                }, 100);
            } else {
                _this.addClass(_thisOption2);
            };
        };
    };
    // option: -constant
    bloomLikeButton + $('.-constant').click(function(){
        likey($(this), '-odd', '-even');
    });
    // option: -unconstant
    bloomLikeButton + $('.-unconstant').click(function(){
        likey($(this), '-left', '-right');
    });
});
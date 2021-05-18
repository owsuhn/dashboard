$(document).ready(function(){
    // componant.zip
    var fade = '.fade',
        fadeFireItem = $(fade + '__fire-item');
    // option: -keep
    function fadeFire (){
        var _this = $(fade + '__fire-list.-keep').find(fadeFireItem);
        _this.removeClass('-passive').addClass('-active');
        setTimeout(function(){
            _this.removeClass('-active').addClass('-passive');
        }, 2800);
    }
    fadeFire();
    setInterval(function(){
        fadeFire();
    }, 5600);
});
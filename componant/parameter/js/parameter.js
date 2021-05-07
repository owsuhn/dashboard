$(document).ready(function(){
    // componant.zip
    var param = '.parameter',
        paramContent = $(param + '__content'),
        paramOriginalUrl = $(param + '__original-url'),
        paramRandomInput = $(param + '__random-input'),
        paramRandomButton = $(param + '__random-button'),
        paramRandomUrl = $(param + '__random-url'),
        paramLink = $(param + '__link');
    // each
    paramContent + $('.-url').each(function(){
        var _this = $(this),
            _thisOriginUrl = _this.find(paramOriginalUrl),
            _thisRandomButton = _this.find(paramRandomButton),
            _thisRandomUrl = _this.find(paramRandomUrl),
            _thisLink = _this.find(paramLink);
        // set original url
        $([
            _thisOriginUrl,
            _thisRandomUrl.find('span').eq(0),
            _this.find($(param + '__link.-original'))
        ]).each(function(){
            $(this).text(document.URL);
            _this.find($(param + '__link.-original')).attr('href', document.URL.substring(document.URL.lastIndexOf('.html'), 0) + '__access.html')
        });
        // event: click
        _thisRandomButton.click(function(){
            var _this = $(this),
                _thisRandomInput = _this.siblings().find(paramRandomInput),
                _thisRandomCode = Math.random().toString(36).substr(2, 8),
                _thisRandomParam = '?param=' + _thisRandomCode;
            // create random code
            _thisRandomInput.val(_thisRandomCode);
            // create url + random parameter
            _thisRandomUrl.find('span').eq(1).text(_thisRandomParam).addClass('-active');
            _thisLink + $('.-random').text(document.URL + _thisRandomParam).attr('href', document.URL.substring(document.URL.lastIndexOf('.html'), 0) + '__access.html' + _thisRandomParam).addClass('-active');
        });
    });
    // each
    paramContent + $('.-access').each(function(){
        var getQueryString = function(){
            // ? 문자열이 존재할 경우 => 파라미터가 있을 경우
            if (location.href.indexOf('?') != -1 ) {
                var _parameter = new Object(), // 나중에 사용할 오브젝트 변수 미리 생성
                    _parametersArray = location.href.split("?")[1].split("&"); // 각 파라미터를 명과 값으로 갈라 배열에 저장
                for (var i = 0; i < _parametersArray.length; i++) { // 파라미터의 갯수만큼
                    var _parameterItem = _parametersArray[i].split("="); // 명과 값의 구분점을 기준으로
                    _parameter[_parameterItem[0]] = _parameterItem[1]; // {명: "값"} 형태로 각각 저장
                }
                return _parameter; // 해당 함수에 파라미터 값({명: "값" 형태})을 리턴
            } else {
                return;
            };
        };
        // 파라미터가 있을 경우 리턴된 값을 대상으로
        var _getQueryString = getQueryString();
        // 존재하면
        if (_getQueryString != undefined) {
            setTimeout(function() {
                $('html, body').animate({
                    scrollTop: $('.parameter__content.-random').offset().top
                }, 800);
            }, 400);
            // 존재하고 그 명(.param)의 값이 'qwerty'일 경우
            // if (_getQueryString.param === 'qwerty') {}
        } else {
            setTimeout(function() {
                $('html, body').animate({
                    scrollTop: $('.parameter__content.-original').offset().top
                }, 800);
            }, 400);
        };
    });
});
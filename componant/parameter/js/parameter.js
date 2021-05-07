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
        // document.URL => https://owsuhn.github.io/dashboard/
        // 'https://owsuhn.github.io/dashboard/' + _thisRandomParam
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
            _this.find($(param + '__link.-original')).attr('href', document.URL)
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
            _thisLink + $('.-random').text(document.URL + _thisRandomParam).attr('href', document.URL + 'componant/parameter/parameter__access.html' + _thisRandomParam).addClass('-active');        
        });
    });
    // each
    paramContent + $('.-access').each(function(){
        var getQueryString = function(){
            if (location.href.indexOf('?') != -1 ) {
                var _parameter = new Object(),
                    _parametersArray = location.href.split("?")[1].split("&");
                for (var i = 0; i < _parametersArray.length; i++) {
                    var _parameterItem = _parametersArray[i].split("=");
                    _parameter[_parameterItem[0]] = _parameterItem[1];
                }
                return _parameter;
            } else {
                return;
            };
        };
        var _getQueryString = getQueryString();
        if (_getQueryString != undefined) {
            setTimeout(function() {
                $('html, body').animate({
                    scrollTop: $('.parameter__content.-random').offset().top
                }, 800);
            }, 400);
        } else {
            setTimeout(function() {
                $('html, body').animate({
                    scrollTop: $('.parameter__content.-original').offset().top
                }, 800);
            }, 400);
        };
    });

    

    
    


    


});
// // 함수화: 현재 페이지의 파라미터 값을 체크, 세트로 각각 배열에 저장 후 리턴
// var getQueryString = function(){
//     var _parameter = new Object(), // 나중에 사용할 오브젝트 함수 => 파라미터 세트{명: '값'} 저장 예정
//         _parametersArray = location.href.split("?")[1].split("&"); // 현재 페이지의 파라미터 범위 배열에 저장

//     // 현재 페이지의 파라미터 갯수만큼
//     for (var i = 0; i < _parametersArray.length; i++) {
//         // 각각 명과 값으로 갈라
//         var _parameterItem = _parametersArray[i].split("=");
//         // 미리 선언해 뒀던 오브젝트 변수에 담음
//         _parameter[_parameterItem[0]] = _parameterItem[1];
//     }

//     // 포 문의 결과 값을 리턴 => 추후 해당 함수를 호출하여 사용할 수 있도록
//     return _parameter;
// };

// // 변수에 함수를 저장
// var _getQueryString = getQueryString();

// // 해당 함수의 값이 있을 때 => 현재 페이지가 파라미터를 가짐 => 특정 파라미터 붙은 좌표로 진입 시
// if (_getQueryString != undefined) {
//     // 그 파라미터의 명이 값을 충족할 떄
//     if (_getQueryString.name === 'value') {
//         // .4초 후에
//         setTimeout(function() {
//             // 해당 문서(화면)를 .8초 동안 이동할건데
//             $('html, body').animate({
//                 // 스크롤을 .el 탑으로
//                 scrollTop: $('.goodsNewIn.type2').offset().top
//             }, 800);
//         }, 400);
//     }
// }
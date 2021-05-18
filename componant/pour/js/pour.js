$(document).ready(function(){
    // componant.zip
    var pour = '.pour',
        pourContent = $(pour + '__content'),
        pourParagraph = $(pour + '__paragraph'),
        pourTextarea = $(pour + '__textarea'),
        pourInput = $(pour + '__input'),
        pourButton = $(pour + '__button'),
        pourDesc = $(pour + '__desc'),
        pourDrawer = $(pour + '__drawer'),
        pourDrawerButton = $(pour + '__drawer-button');
    // each
    pourContent + $('.-paragraph').each(function(){
        var _this = $(this),
            _thisParagraph = _this.find(pourParagraph).not($(pour + '__paragraph[aria-disabled="true"]')),
            _thisParagraphOriginal = _thisParagraph.text(),
            _thatParagraph = _this.find($(pour + '__paragraph[aria-disabled="true"]')),
            _thisInput = _this.find(pourInput),
            _thisButton = _this.find(pourButton),
            _thisDesc = _this.find(pourDesc);
        // create method: check bytes
        function checkBytes (x) {
            for (
                b = i = 0;
                c = x.charCodeAt(i++);
                b += c >> 11 ? 3 : c >> 7 ? 2 : 1
            );

            return b;
        }
        // input => validation check
        _thisInput.on('keyup', function(){
            $(this).val($(this).val().replace(/\D/g, ''));
        });
        // button => click
        _thisButton.click(function(){
            var _this = $(this),
                _thisInputValue = $(this).siblings(pour + '__input');
            // case: input apply
            if (_this.hasClass('-apply')) {
                // 입력된 값이 없(또는 공백)을 경우
                if (_thisInputValue.val() === undefined || _thisInputValue.val() === '' || _thisInputValue.val().match(/\s/g)) { // .val().replace(/\D/g, '') === ''
                    alert('대상 문자열을 잘라낼, 기준 바이트 값을 입력해주세요.');
                    _thisInputValue.val('');
                } else {
                    // 입력된 값은 있으나 정수 형태가 아닐 경우
                    if (isNaN(Number(_thisInputValue.val()))) {
                        alert('정수 형태의 올바른 바이트 값을 입력해주세요.');
                        _thisInputValue.val('');
                    } else {
                        // 입력된 정수 형태의 바이트 값이 기준 문자열의 바이트 값보다 클 경우
                        if (_thisInputValue.val() < 1 || _thisInputValue.val() > checkBytes(_thisParagraph.text())) {
                            alert('대상 문자열을 잘라낼, 기준 바이트 값은\n최소 1보다 작을 수 없고,\n최대 대상 문자열의 총 바이트 값보다 클 수 없습니다.');
                            _thisInputValue.val('');
                        } else {
                            // splite and pour
                            _thisParagraph.text(_thisParagraphOriginal.substring(0, _thisInputValue.val()));
                            _thatParagraph.text(_thisParagraphOriginal.substring(_thisInputValue.val())).removeAttr('aria-disabled');
                            // print description
                            _thisDesc.addClass('-active').eq(0).find('span').text(checkBytes(_thisParagraphOriginal));
                            _thisDesc.addClass('-active').eq(1).find('span').eq(0).text(_thisInputValue.val());
                            _thisDesc.addClass('-active').eq(1).find('span').eq(1).text(checkBytes(_thatParagraph.text()));
                        };
                    };
                };
            // case: auto half
            } else if (_this.hasClass('-half')) {
                // splite and pour
                _thisParagraph.text(_thisParagraphOriginal.substring(0, 
                    Math.floor(checkBytes(_thisParagraphOriginal) / 2)
                ));
                _thatParagraph.text(_thisParagraphOriginal.substring(
                    Math.floor(checkBytes(_thisParagraphOriginal) / 2)
                )).removeAttr('aria-disabled');

                console.log(
                    Math.floor(checkBytes(_thisParagraphOriginal) / 2)
                );
                // print description
                _thisDesc.addClass('-active').eq(0).find('span').text(
                    checkBytes(_thisParagraphOriginal)
                );
                _thisDesc.addClass('-active').eq(1).find('span').eq(0).text(
                    Math.floor(checkBytes(_thisParagraphOriginal) / 2)
                );
                _thisDesc.addClass('-active').eq(1).find('span').eq(1).text(
                    checkBytes(_thisParagraphOriginal) - Math.floor(checkBytes(_thisParagraphOriginal) / 2)
                );
            // case: reset
            } else if (_this.hasClass('-reset')) {
                _thisParagraph.text(_thisParagraphOriginal);
                _thatParagraph.text('no content').attr('aria-disabled', 'true');
                _thisInputValue.val('');
                _thisDesc.removeClass('-active');
            } else {
                return;
            };
        });
    });
    // each
    pourContent + $('.-textarea').each(function(){
        var _this = $(this),
            _thisTextarea = _this.find(pourTextarea),
            _thisParagraph = _this.find(pourParagraph),
            _thisInput = _this.find(pourInput),
            _thisButton = _this.find(pourButton),
            _thisDesc = _this.find(pourDesc);
        // create method: check bytes
        function checkBytes (x) {
            for (
                b = i = 0;
                c = x.charCodeAt(i++);
                b += c >> 11 ? 3 : c >> 7 ? 2 : 1
            );

            return b;
        }







        // input => validation check
        _thisInput.on('keyup', function(){
            $(this).val($(this).val().replace(/\D/g, ''));
        });
        

            


        
        
        // button => click
        _thisButton.click(function(){
            var _this = $(this),
                _thisTextareaOriginal = _thisTextarea.val(),
                _thisInputValue = $(this).siblings(pour + '__input');
            // case: input apply
            if (_this.hasClass('-apply')) {
                // 입력된 값이 없(또는 공백)을 경우
                if (
                    _thisTextarea.val() === undefined || _thisTextarea.val() === '' || _thisTextarea.val().match(/\s/g) ||
                    _thisInputValue.val() === undefined || _thisInputValue.val() === '' || _thisInputValue.val().match(/\s/g)
                ) {
                    alert('대상 문자열과 그것을 잘라낼, 기준이 될 바이트 값,\n2가지를 모두 올바르게 입력해주세요.');
                    _thisInputValue.val('');
                } else {
                    // 입력된 값은 있으나 정수 형태가 아닐 경우
                    if (isNaN(Number(_thisInputValue.val()))) {
                        alert('정수 형태의 올바른 바이트 값을 입력해주세요.');
                        _thisInputValue.val('');
                    } else {
                        // 입력된 정수 형태의 바이트 값이 기준 문자열의 바이트 값보다 클 경우
                        if (_thisInputValue.val() < 1 || _thisInputValue.val() > checkBytes(_thisParagraph.text())) {
                            alert('대상 문자열을 잘라낼, 기준 바이트 값은\n최소 1보다 작을 수 없고,\n최대 대상 문자열의 총 바이트 값보다 클 수 없습니다.');
                            _thisInputValue.val('');
                        } else {
                            // splite and pour
                            _thisTextarea.val(
                                _thisTextareaOriginal.substring(0, _thisInputValue.val())
                            );
                            _thisParagraph.text(
                                _thisTextareaOriginal.substring(_thisInputValue.val())
                            ).removeAttr('aria-disabled');
                            // print description
                            _thisDesc.addClass('-active').eq(0).find('span').text(checkBytes(_thisTextareaOriginal));
                            _thisDesc.addClass('-active').eq(1).find('span').eq(0).text(_thisInputValue.val());
                            _thisDesc.addClass('-active').eq(1).find('span').eq(1).text(checkBytes(_thisParagraph.text()));
                        };
                    };
                };
            // case: auto half
            } else if (_this.hasClass('-half')) {
                if (_thisTextarea.val() === undefined || _thisTextarea.val() === '' || _thisTextarea.val().match(/\s/g)) {
                    alert('대상 문자열을 입력해주세요.');
                } else {
                    _thisTextarea.val(
                        _thisTextareaOriginal.substring(0, Math.floor(_thisTextareaOriginal.length / 2))
                        // 영문의 경우 1문자열 당 1바이트이지만, 한글의 경우 1문자열 당 3바이트(utf-8)
                        // 따라서 length로 문자열을 계산하고 출력, 아래 디스크립션은 바이트로 계산하여 출력
                    );
                    _thisParagraph.text(
                        _thisTextareaOriginal.substring(Math.floor(_thisTextareaOriginal.length / 2))
                    ).removeAttr('aria-disabled');
                };
            // case: reset
            } else if (_this.hasClass('-reset')) {
                _thisTextarea.val('');
                _thisParagraph.text('no content').attr('aria-disabled', 'true');
                _thisInputValue.val('');
                // _thisDesc.removeClass('-active');
            } else {
                return;
            };
        });


        




    });
    // drawer
    pourDrawerButton.click(function(){
        var _this = $(this),
            _thisDrawer = _this.closest(pourDrawer);
        _thisDrawer.toggleClass('-active');
        _thisDrawer.hasClass('-active') ? $('body').css('overflow', 'hidden') : $('body').removeAttr('style');
    });
});
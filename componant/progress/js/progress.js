$(document).ready(function(){
    // componant.zip
    var progress = '.progress',
        progressContent = $(progress + '__content'),
        progressBar = $(progress + '__bar'),
        progressRange = $(progress + '__range'),
        progressFlag = $(progress + '__flag'),
        progressFormInput = $(progress + '__form-input'),
        progressFieldButton = $(progress + '__field-button'),
        progressRing = $(progress + '__ring'),
        progressRingCenter = $(progress + '__ring-center'),
        progressRound = $(progress + '__round'),
        progressRoundCenter = $(progress + '__round-center');
    // option: .-bar => each
    progressContent + $('.-bar').each(function(){
        var _this = $(this),
            _thisBar = _this.find(progressBar),
            _thisRange = _this.find(progressRange),
            _thisFlag = _this.find(progressFlag),
            _thisFormInput = _this.find(progressFormInput),
            _thisFieldButton = _this.find(progressFieldButton);
        // range
        _thisRange.find('span').eq(0).text(_thisBar.attr('min')).css('margin-left', -(_thisRange.find('span').eq(0).width() / 2 + 1) + 'px');
        _thisRange.find('span').eq(1).text(_thisBar.attr('max')
        ).css({
            'left': _thisBar.width() + 'px',
            'margin-left': -(_thisRange.find('span').eq(1).width() / 2 - 1) + 'px'
            // 계산 식 마지막 +-n => border 1px(앞자리 음수 고려하여 반대 부호 사용) => 이상/하 동일
        });
        // create method: flag event
        function flagFlies (x){
            var _thisBarValue = x;
            _thisBar.attr('value', 0).animate({
                value: _thisBarValue,
            }, {
                duration: 1000,
                step: function(value){
                    _thisFlag.text(
                        Math.round(value) + ', ' + Math.round((value - _thisBar.attr('min')) / (_thisBar.attr('max') - _thisBar.attr('min')) * 100) + '%'
                        // (입력된 값 - 최소 값) / (최대 값 - 최소 값) * 100
                    ).css({
                        'left': (value - _thisBar.attr('min')) / (_thisBar.attr('max') - _thisBar.attr('min')) * 100 / 2 + '%',
                        'margin-left': -(_thisFlag.width() / 2) + 'px'
                        // 'left': 계산 식 마지막 / 2 => progress width: 50%; => 이하 동일
                    });
                }
            });
        };
        // call method
        if (_this.hasClass('-event')) {
            flagFlies(_thisBar.val());
        } else {
            _thisFlag.text(
                _thisBar.val() + ', ' + Math.round((_thisBar.val() - _thisBar.attr('min')) / (_thisBar.attr('max') - _thisBar.attr('min')) * 100) + '%'
            ).css({
                'left': (_thisBar.val() - _thisBar.attr('min')) / (_thisBar.attr('max') - _thisBar.attr('min')) * 100 / 2 + '%',
                'margin-left': -(_thisFlag.width() / 2) + 'px'
            });
        };
        // option: .-input => key-up
        _thisFormInput.keyup(function(){
            _thisFormInput.not($(this)).val('').removeClass('-active');
            $(this).val($(this).val().replace(/\D/g, '')).addClass('-active');
            // .replace() => (/)부터 (/)까지 => 전체(g) 탐색 => 제거(\) 무엇을? => 문자(D) => ('')로 변경
            // .replace()의 경우 제거와 변경이 공존하는 것이 기본 문법임. 제거만을 원한다면 변경 문자열을 공백('')으로 둘 것.
        });
        // option: .-input => click
        _thisFieldButton.click(function(){
            var _thisFormInputActive = _this.find($(progress + '__form-input.-active'));
            if (_thisFormInputActive.val() === undefined || _thisFormInputActive.val() === '' || _thisFormInputActive.val().match(/\s/g)) { // .val().replace(/\D/g, '') === ''
                alert('진척률을 입력해주세요.');
                _thisFormInput.val('');
            } else {
                if (isNaN(Number(_thisFormInputActive.val()))) {
                    alert('정수 형태의 올바른 진척률을 입력해주세요.');
                    _thisFormInput.val('');
                } else {
                    // enter value
                    if (_thisFormInputActive.hasClass('-value')) {
                        if (Number(_thisFormInputActive.val()) > Number(_thisBar.attr('max'))) {
                            alert('0부터 최대 값 사이의 올바른 진척률을 입력해주세요.');
                            _thisFormInput.val('');
                        } else {
                            // call method
                            if (_this.hasClass('-event')) {
                                flagFlies($(this).siblings().find(_thisFormInput).val());
                            } else {
                                _thisFlag.text(
                                    _thisBar.val() + ', ' + Math.round((_thisBar.val() - _thisBar.attr('min')) / (_thisBar.attr('max') - _thisBar.attr('min')) * 100) + '%'
                                ).css({
                                    'left': (_thisBar.val() - _thisBar.attr('min')) / (_thisBar.attr('max') - _thisBar.attr('min')) * 100 / 2 + '%',
                                    'margin-left': -(_thisFlag.width() / 2) + 'px'
                                });
                            };
                        };
                    // enter percentage
                    } else {
                        if (Number(_thisFormInputActive.val()) > 100) {
                            alert('백분률 형태의 올바른 진척률을 입력해주세요.');
                            _thisFormInput.val('');
                        } else {
                            // call method
                            if (_this.hasClass('-event')) {
                                flagFlies(Math.round(_thisBar.attr('max') / (100 / _thisFormInputActive.val())));
                                // 최대 값 / (100 / 입력된 값)
                            } else {
                                _thisFlag.text(
                                    _thisBar.val() + ', ' + Math.round((_thisBar.val() - _thisBar.attr('min')) / (_thisBar.attr('max') - _thisBar.attr('min')) * 100) + '%'
                                ).css({
                                    'left': (_thisBar.val() - _thisBar.attr('min')) / (_thisBar.attr('max') - _thisBar.attr('min')) * 100 / 2 + '%',
                                    'margin-left': -(_thisFlag.width() / 2) + 'px'
                                });
                            };
                        };
                    };
                };
            };
        });
    });
    // option: .-ring => each
    progressContent + $('.-ring').each(function(){
        var _this = $(this),
            _thisRing = _this.find(progressRing),
            _thisRingCenter = _this.find(progressRingCenter),
            _thisFormInput = _this.find(progressFormInput),
            _thisFieldButton = _this.find(progressFieldButton);
        // create methid
        function ringFills (x) {
            var _thisRingData = x;
            if (_this.hasClass('-event')) {
                _thisRing.attr('value', 0).animate({
                    value: _thisRingData,
                }, {
                    duration: 1000,
                    step: function(value){
                        var _thisRingValue = Math.round(value);
                        // print
                        _thisRingCenter.text(_thisRingValue);
                        // fill
                        if (_thisRingValue < 50) {
                            var _thisRingFill = 90 + (_thisRingValue * 3.6) + 'deg'; // 90 + (입력된 값 * (360 / 100)) + '단위'
                            _thisRing.css(
                                'background-image', 'linear-gradient(90deg, #222429 50%, transparent 50%, transparent),' +
                                                    'linear-gradient(' + _thisRingFill + ', #fff 50%, #222429 50%, #222429)'
                            );
                        } else {
                            var _thisRingFill = -90 + (3.6 * (_thisRingValue - 50)) + 'deg'; // -90 + (360 / 100 * (입려된 값 - 50)) + '단위'
                            _thisRing.css(
                                'background-image', 'linear-gradient(' + _thisRingFill + ', #fff 50%, transparent 50%, transparent),' +
                                                    'linear-gradient(270deg, #fff 50%, #222429 50%, #222429)'
                            );
                        };
                    },
                });
            } else {
                // print
                _thisRingCenter.text(_thisRingData);
                // fill
                if (_thisRingData < 50) {
                    var _thisRingFill = 90 + (_thisRingData * 3.6) + 'deg'; // 90 + (입력된 값 * (360 / 100)) + '단위'
                    _thisRing.css(
                        'background-image', 'linear-gradient(90deg, #222429 50%, transparent 50%, transparent),' +
                                            'linear-gradient(' + _thisRingFill + ', #fff 50%, #222429 50%, #222429)'
                    );
                } else {
                    var _thisRingFill = -90 + (3.6 * (_thisRingData - 50)) + 'deg'; // -90 + (360 / 100 * (입려된 값 - 50)) + '단위'
                    _thisRing.css(
                        'background-image', 'linear-gradient(' + _thisRingFill + ', #fff 50%, transparent 50%, transparent),' +
                                            'linear-gradient(270deg, #fff 50%, #222429 50%, #222429)'
                    );
                };
            };
        };
        // call method
        ringFills(_thisRing.attr('data-percentage'));
        // option: .-input => key-up
        _thisFormInput.keyup(function(){
            $(this).val($(this).val().replace(/\D/g, ''));
        });
        // option: .-input => click
        _thisFieldButton.click(function(){
            if (_thisFormInput.val() === undefined || _thisFormInput.val() === '' || _thisFormInput.val().match(/\s/g)) { // .val().replace(/\D/g, '') === ''
                alert('진척률을 입력해주세요.');
                _thisFormInput.val('');
            } else {
                if (isNaN(Number(_thisFormInput.val()))) {
                    alert('정수 형태의 올바른 진척률을 입력해주세요.');
                    _thisFormInput.val('');
                } else {
                    if (Number(_thisFormInput.val()) > 100) {
                        alert('백분률 형태의 올바른 진척률을 입력해주세요.');
                        _thisFormInput.val('');
                    } else {
                        // call method
                        ringFills(_thisFormInput.val());
                    };
                };
            };
        });
    });
    // option: .-round => each
    progressContent + $('.-round').each(function(){
        var _this = $(this),
            _thisRound = _this.find(progressRound),
            _thisRoundCenter = _this.find(progressRoundCenter),
            _thisFormInput = _this.find(progressFormInput),
            _thisFieldButton = _this.find(progressFieldButton);
        // create methid
        function roundFills (x) {
            var _thisRoundData = x;
            if (_this.hasClass('-event')) {
                _thisRound.attr('value', 0).animate({
                    value: _thisRoundData,
                }, {
                    duration: 1000,
                    step: function(value){
                        var _thisRoundValue = Math.round(value);
                        // print
                        _thisRoundCenter.text(_thisRoundValue);
                        // fill
                        if (_thisRoundValue < 50) {
                            var _thisRoundFill = 90 + (_thisRoundValue * 3.6) + 'deg'; // 90 + (입력된 값 * (360 / 100)) + '단위'
                            _thisRound.css(
                                'background-image', 'linear-gradient(90deg, #222429 50%, transparent 50%, transparent),' +
                                                    'linear-gradient(' + _thisRoundFill + ', #666 50%, #222429 50%, #222429)'
                            );
                        } else {
                            var _thisRoundFill = -90 + (3.6 * (_thisRoundValue - 50)) + 'deg'; // -90 + (360 / 100 * (입려된 값 - 50)) + '단위'
                            _thisRound.css(
                                'background-image', 'linear-gradient(' + _thisRoundFill + ', #666 50%, transparent 50%, transparent),' +
                                                    'linear-gradient(270deg, #666 50%, #222429 50%, #222429)'
                            );
                        };
                    },
                });
            } else {
                // print
                _thisRoundCenter.text(_thisRoundData);
                // fill
                if (_thisRoundData < 50) {
                    var _thisRoundFill = 90 + (_thisRoundData * 3.6) + 'deg'; // 90 + (입력된 값 * (360 / 100)) + '단위'
                    _thisRound.css(
                        'background-image', 'linear-gradient(90deg, #222429 50%, transparent 50%, transparent),' +
                                            'linear-gradient(' + _thisRoundFill + ', #666 50%, #222429 50%, #222429)'
                    );
                } else {
                    var _thisRoundFill = -90 + (3.6 * (_thisRoundData - 50)) + 'deg'; // -90 + (360 / 100 * (입려된 값 - 50)) + '단위'
                    _thisRound.css(
                        'background-image', 'linear-gradient(' + _thisRoundFill + ', #666 50%, transparent 50%, transparent),' +
                                            'linear-gradient(270deg, #666 50%, #222429 50%, #222429)'
                    );
                };
            };
        };
        // call method
        roundFills(_thisRound.attr('data-percentage'));
        // option: .-input => key-up
        _thisFormInput.keyup(function(){
            $(this).val($(this).val().replace(/\D/g, ''));
        });
        // option: .-input => click
        _thisFieldButton.click(function(){
            if (_thisFormInput.val() === undefined || _thisFormInput.val() === '' || _thisFormInput.val().match(/\s/g)) { // .val().replace(/\D/g, '') === ''
                alert('진척률을 입력해주세요.');
                _thisFormInput.val('');
            } else {
                if (isNaN(Number(_thisFormInput.val()))) {
                    alert('정수 형태의 올바른 진척률을 입력해주세요.');
                    _thisFormInput.val('');
                } else {
                    if (Number(_thisFormInput.val()) > 100) {
                        alert('백분률 형태의 올바른 진척률을 입력해주세요.');
                        _thisFormInput.val('');
                    } else {
                        // call method
                        roundFills(_thisFormInput.val());
                    };
                };
            };
        });
    });
});
$(document).ready(function(){
    // check media query
    var mediaQueryCheck = (function(){
        var mediaQuery = window.matchMedia('(min-width: 1060px)');
        if (mediaQuery.matches === false) $('.dashboard__dialog').addClass('-active');
        else $('.dashboard__dialog').removeClass('-active');
    });
    mediaQueryCheck();
    $(window).resize(function(){ mediaQueryCheck(); });
    // componant.zip
    var db = '.dashboard',
        dbAligner = $(db + '__aligner'),
        dbCurrentComponant = $(db + '__current-componant'),
        dbToggleButton = $(db + '__toggle-button'),
        dbNav = $(db + '__navigation'),
        dbNavItem = $(db + '__nav-item'),
        dbListTitle = $(db + '__list-title'),
        dbNavButton = $(db + '__nav-button'),
        dbNavControls = $(db + '__nav-controls'),
        dbNavControl = $(db + '__nav-control'),
        dbComponantName = $(db + '__componant-name'),
        dbComponantSubject = $(db + '__componant-subject'),
        dbComponantUpdate = $(db + '__componant-update'),
        dbNote = $(db + '__note'),
        dbNoteCommand = $(db + '__note-command'),
        dbNoteAlert = $(db + '__note-alert'),
        dbNoteButton = $(db + '__note-button'),
        dbSection = $(db + '__section');
    // click event: toggle button
    dbToggleButton.click(function(){
        var _this = $(this),
            _thisGroup = _this.closest($('[data-toggle="group"]')),
            _thisGroupHeight = _this.siblings().eq(1).outerHeight(true);
        _this.toggleClass('-active');
        if (_this.hasClass('-active'))  _thisGroup.animate({'height': '1.6rem'}, 400);
        else _thisGroup.animate({'height': $(this).height() + _thisGroupHeight}, 400);
    });
    // click event: navigation button
    dbNavButton.click(function(){
        var _this = $(this),
            _thisSubject = _this.closest(dbNavItem).find(dbListTitle).text(),
            _thisUpdate = _this.attr('data-update');
        _this.addClass('-active').closest(dbNav).find(dbNavButton).not(_this).removeClass('-active');
        $([dbCurrentComponant, dbComponantName]).each(function(){
            $(this).text(_this.text());
        });
        dbComponantSubject.text(_thisSubject);
        dbComponantUpdate.text(_thisUpdate);
        // spray componant
        $('.dashboard__iframe').hide();
        dbSection.append('<iframe src="componant/'+ _this.text().replace(/ /gi, "-") +'/' + _this.text().replace(/ /gi, "-") + '.html" class="dashboard__iframe"></iframe>');
    });
    // create method: navigation reduce
    var navReduce = (function(){
        dbAligner + $('.-aside').each(function(){
            $(this).find(dbNavControls).siblings('*').not(dbNavControls).hide();
            $(this).animate({
                'width': '9rem',
                'padding': '0'
            }, 400);
        });
    });
    // create method: navigation extend
    var navExtend = (function(){
        dbAligner + $('.-aside').animate({
            'width': '38.4rem',
            'padding': '7.2rem 2rem 3.2rem 2rem'
        }, 400);
        setTimeout(function(){
            dbAligner + $('.-aside').find(dbNavControls).siblings('*').not(dbNavControls).show();
        }, 400);
    });
    // click event: navigation controls
    dbNavControl.click(function(){
        var _this = $(this);
        if (_this.hasClass('-remove')) dbAligner + $('.-aside').hide();
        else if (_this.hasClass('-reduce')) navReduce();
        else if (_this.hasClass('-extend')) navExtend();
        else return;
    });
    // note copy and cut
    dbNoteCommand.click(function(){
        var _this = $(this),
            _value = _this.siblings('textarea').select();
        if (_this.hasClass('-copy')) {
            if (!_value.val()) {
                alert('복사할 노트가 없습니다.');
            } else {
                document.execCommand('copy');
                dbNoteAlert.text('copied!').animate({
                    'opacity': '1'
                }, 400, function(){
                    setTimeout(function(){
                        dbNoteAlert.animate({
                            'opacity': '0'
                        }, 400);
                    }, 800);
                });
            };
        } else {
            if (!_value.val()) {
                alert('잘라낼 노트가 없습니다.');
            } else {
                document.execCommand('cut');
                $('.dashboard__note-alert').text('cuted!').animate({
                    'opacity': '1'
                }, 400, function(){
                    setTimeout(function(){
                        $('.dashboard__note-alert').animate({
                            'opacity': '0'
                        }, 400);
                    }, 800);
                });
            };
        };
    });
    // note toggle button
    dbNoteButton.click(function(){
        var _this = $(this),
            _thisNote = _this.closest(dbNote);
        _thisNote.toggleClass('-active');
        if (_thisNote.hasClass('-active')) {
            _this.attr('aria-label', '노트 토글 펼침');
            _thisNote.attr('aria-expanded', 'true');
        } else {
            _this.attr('aria-label', '노트 토글 닫힘');
            _thisNote.attr('aria-expanded', 'false');
        };
    });
});
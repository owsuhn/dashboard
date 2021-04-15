$(document).ready(function(){
    // componant.zip
    var swc = '.switch', // "switch" is not allowed var name
        swcButton = $(swc + '__button');
    swcButton.click(function(){
        $(this).attr('aria-pressed', $(this).attr('aria-pressed') === 'false' ? 'true' : 'false');
    });
});
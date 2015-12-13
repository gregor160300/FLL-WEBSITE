$(document).ready(function () {
    var deviceHeight = window.innerHeight;
    var deviceWidth = window.innerWidth;
    var contentHeight = $('.page-content').height();
    console.log(contentHeight + ' , ' + deviceHeight);
    if (contentHeight > deviceHeight) {
        $('.mdl-layout__content').append(
                '<footer class="mdl-mini-footer">' +
                '<div class="mdl-mini-footer__left-section">'
                + '<div class="mdl-logo">EV3EDU</div>'
                + '<ul class="mdl-mini-footer__link-list">'
                + '<li><a href="contact.php">Contact</a></li>'
                + '<li><a href="licentie.html">Licentie</a></li>'
                + '</ul>'
                + '</div>'
                + '</footer>'
                );
    } else {
        $('body').append(
                '<footer style="position: absolute; bottom: 0; width: ' + deviceWidth + 'px" class="mdl-mini-footer">' +
                '<div class="mdl-mini-footer__left-section">'
                + '<div class="mdl-logo">EV3EDU</div>'
                + '<ul class="mdl-mini-footer__link-list">'
                + '<li><a href="contact.php">Contact</a></li>'
                + '<li><a href="licentie.html">Licentie</a></li>'
                + '</ul>'
                + '</div>'
                + '</footer>'
                );
    }
});






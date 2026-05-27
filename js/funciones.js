$(function() {

    // MENU MOVIL
    $('.btn-menu').click(function() {
        $('.menu-movil').addClass('abierto');
    });

    $('.btn-cerrar, .overlay').click(function() {
        $('.menu-movil').removeClass('abierto');
    });

    // SLIDER
    $(".rslides").responsiveSlides({
        nav: true
    });

    // FLECHAS SLIDER
    $('.arrow-left').click(function() {
        $('.rslides_nav.prev').click();
    });

    $('.arrow-right').click(function() {
        $('.rslides_nav.next').click();
    });

});
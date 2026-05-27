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
        nav: true,
    });

    // FLECHAS SLIDER
    $('.arrow-left').click(function() {
        $('.rslides_nav.prev').click();
    });

    $('.arrow-right').click(function() {
        $('.rslides_nav.next').click();
    });

    });

    // BOLITAS SLIDER
    $('.bolita1').click(function() {
    $('.rslides_tabs li').eq(0).find('a').click();
    });

    $('.bolita2').click(function() {
    $('.rslides_tabs li').eq(1).find('a').click();
    });

    $('.bolita3').click(function() {
    $('.rslides_tabs li').eq(2).find('a').click();
    });

    // MODAL VIDEO
    $('.abrir-video').click(function(e){
    e.preventDefault();
    $('.modal-video').fadeIn();
    });

    $('.cerrar-video').click(function(){
    $('.modal-video').fadeOut();

    // Innvestigado: dfarle el link de nuevo del iframe y le da refresh y pues ya se apaga.
        $('.contenido-video iframe').attr('src', 'https://www.youtube.com/embed/BEwzyezot3s');
    });
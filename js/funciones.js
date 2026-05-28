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

    // ABRIR MODAL 
    $(".btn-service").click(function(e){
        e.preventDefault();
        $("#modal").addClass("mostrar");
    });

    // CERRAR MODAL
    $("#cerrar_modal").click(function(){
        $("#modal").removeClass("mostrar");
    });

    
    // ACORDEÓN EN BOTÓN LEER MÁS
    $(".btn-leer-mas").click(function(e){
        e.preventDefault();
        var t = $(this);
        var tp = t.next();
        tp.slideToggle();
    });

}); 


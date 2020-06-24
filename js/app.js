// FUNÇÃO DE COLOCAR E REMOVER BACKGROUND DO NAVBAR QUANDO TEM SCROLL
//$(function () {
//    $(window).scroll(function () {
//        if ($(this).scrollTop() > $('.navbar').outerHeight() - 30) {
//            $('.navbar').addClass('bg-dark');
//        } else {
//            $('.navbar').removeClass('bg-dark');
//        }
//    });
//});
$(function () {
    $('.navbar-toggle').click(function () {
        if ($(this).scrollTop() > $('.navbar').outerHeight() - 30) {
            $('.navbar').addClass('bg-dark');
        } else {
            $('.navbar').removeClass('bg-dark');
        }
    });
});


// FUNÇÃO DE FILTRAR QUAL DIV MOSTRAR DE ACORDO COM O MENU
$('.cortes input').on("click", function () {
    var id = $(this).attr("id").replace("bt_", "");
    $('#galeria .item-c').hide();
    $('#galeria .cortes-item-' + id + '').show();
});
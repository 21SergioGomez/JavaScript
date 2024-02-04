$(document).ready(function () {
    //Puglin SELECTABLE
    $('#producto').hide();
    botonClicado = false;
    console.log(botonClicado);
    $('#selectable').selectable({
        selected: function (event, ui) {
            let categoria = $(ui.selected).data('categoria');
            if (categoria === "producto") {
                $('#producto').fadeOut();
                $('.producto').fadeIn();
            } else {
                $('.producto').fadeOut();
                $('.producto[data-categoria="' + categoria + '"]').fadeIn();
                $('#producto').fadeIn();
            }
        }
    });
});

//Puglin DIALOG
$(function () {
    $(".dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "blind",
            duration: 1000
        },
        width: 600,
        modal: true,
    });
    $('.producto').on('click', function () {
        let index = $('.producto').index(this);
        $(".dialog").eq(index).dialog("open");
    });
});

//Effect add class
$(function () {
    let state = true;
    $(".boton_dialogo").on("click", function () {
        if (state) {
            $(".producto_comp").animate({
                opacity: 1,
                color: "green",
            }, 1000, function () {
                $(this).css('visibility', 'visible');
            });
        } else {
            $(".producto_comp").animate({
                opacity: 0,
                color: "black",
            }, 1000, function () {
                $(this).css('visibility', 'hidden');
            });
        }
        state = !state;
    });
});

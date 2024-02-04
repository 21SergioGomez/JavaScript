$(document).ready(function () {

    //Puglin SELECTABLE
    $('#producto').hide();
    botonClicado = false;
    console.log(botonClicado);
    // Inicializar la función selectable en la lista de categorías
    $('#selectable').selectable({
        // Al seleccionar un elemento de la lista
        selected: function (event, ui) {
            // Obtener la categoría seleccionada
            var categoria = $(ui.selected).data('categoria');

            // Si la categoría seleccionada es "producto"
            if (categoria === "producto") {
                // Ocultar el botón "Todos"
                $('#producto').fadeOut();
                // Mostrar todos los elementos de producto
                $('.producto').fadeIn();
            } else {
                // Ocultar todos los elementos de producto
                $('.producto').fadeOut();
                // Mostrar solo los elementos de la categoría seleccionada
                $('.producto[data-categoria="' + categoria + '"]').fadeIn();
                // Mostrar el botón "Todos" si estaba oculto
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

    // Manejar clics en las imágenes para abrir el diálogo
    $('.producto').on('click', function () {
        // Obtener el índice del producto clicado
        var index = $('.producto').index(this);
        // Abrir el diálogo correspondiente
        $(".dialog").eq(index).dialog("open");
    });
});

//Effect add class

$(function () {
    var state = true;
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

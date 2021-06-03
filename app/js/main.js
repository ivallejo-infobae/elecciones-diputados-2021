"use strict";

var botonesPartidos = $(".botones-partidos");
var asientos = $(".asientos");
botonesPartidos.on('click', '.boton-partido', function () {
  var t = $(this);
  var data = t.attr('data');

  if (data == "".concat(data)) {
    asientos.find('img').each(function () {
      var dataImg = $(this).attr('data');

      if ($(this).is(':visible')) {
        $(this).fadeOut().removeClass('open');
      } // if($(this).hasClass('open')) {
      //   $(this).fadeOut().removeClass('open');
      // }


      if (dataImg == "".concat(data)) {
        $(this).fadeIn().addClass('open');
      }
    });
  }
});
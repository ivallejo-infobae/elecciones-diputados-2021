

let botonesPartidos = $(".botones-partidos");

let asientos = $(".asientos");

botonesPartidos.on('click', '.boton-partido', function(){
  let t = $(this);
  let data = t.attr('data');
  if(data == `${data}`) {
    asientos.find('img').each(function(){
      let dataImg = $(this).attr('data');
      if($(this).is(':visible')){
        $(this).fadeOut().removeClass('open');
      }
      // if($(this).hasClass('open')) {
      //   $(this).fadeOut().removeClass('open');
      // }
      if(dataImg == `${data}`) {
        $(this).fadeIn().addClass('open')
      }
    })
  }
})
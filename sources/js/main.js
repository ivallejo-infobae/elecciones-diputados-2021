

let botonesPartidos = $(".botones-partidos");

let asientos = $(".asientos");

let btnAll = $(".button-all");

botonesPartidos.on('click', '.boton-partido', function(){
  let t = $(this);
  let data = t.attr('data');
  if(data == `${data}`) {
    asientos.find('img').each(function(){
      
      let dataImg = $(this).attr('data');
      if(dataImg != `${data}`){
        $(this).fadeOut().removeClass('on');
      }
      if(dataImg == `${data}`) {
        $(this).fadeIn().addClass('on')
      }
    })
  }
})

btnAll.on('click', function(){
  asientos.find('img').each(function(){
    if(!$(this).is(':visible')){
      $(this).fadeIn().removeClass('on');
    }
  })
})
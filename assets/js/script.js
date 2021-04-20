$(function(){
  // REFERENCES
  // // creo una referenza al f_awsome da cliccare per scorrere in avanti
  var next = $(".carousel_right");
  // console.log(next);

  // // creo una referenza al f_awsome da cliccare per scorrere indietro
  var back = $(".carousel_left")
  // console.log(back);

  // EVENTS
  next.click(nextImage);
  back.click(backImage);

  // FUNCTIONS

  // funzione per scorre in avanti le foto
  function nextImage(){
    // creo una referenza all'immagine attiva
    var activeImg = $(".carousel_center img.active");
    console.log(activeImg);
    
    // rimuovo la classe active (che ha display inline-block) a activeImg
    activeImg.removeClass("active");

    // aggiungo la classe active (che ha display inline-block) all'immagine successiva
    activeImg.next().addClass("active");
    
    // se l'elemento ha classe last attivo l'elemento con classe first (la prima foto)
    if(activeImg.hasClass("last")){
      // aggiungo active a first
      $(".carousel_center img.first").addClass("active");
    }
  }

  // funzione per scorre indietro le foto
  function backImage(){
    // creo una referenza all'immagine attiva
    var activeImg = $(".carousel_center img.active");
    console.log(activeImg);
    
    // rimuovo la classe active (che ha display inline-block) a activeImg
    activeImg.removeClass("active");

    // aggiungo la classe active (che ha display inline-block) all'immagine precedente
    activeImg.prev().addClass("active");
    
    // se l'elemento ha classe first attivo l'elemento con classe last (la prima foto)
    if(activeImg.hasClass("first")){
      // aggiungo active a first
      $(".carousel_center img.last").addClass("active");
    }
  }

})


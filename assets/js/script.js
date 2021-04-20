$(function(){
  // REFERENCES
  // // creo una referenza al f_awsome da cliccare per scorrere in avanti
  var next = $(".carousel_right");
  // console.log(next);

  // // creo una referenza al f_awsome da cliccare per scorrere indietro
  var back = $(".carousel_left")
  // console.log(back);

  // creo una referenza all'immagine attiva
  var activeImg = $(".carousel_center img.active");
  console.log(activeImg);

  // EVENTS
  next.click(nextImage);
  back.click(backImage);

  // FUNCTIONS
  function nextImage(){
    
    // rimuovo la classe active (che ha display inline-block) a activeImg
    activeImg.removeClass("active");

    // aggiungo la classe active (che ha display inline-block) all'immagine successiva
    activeImg.next().addClass("active");
    

  }

  function backImage(){
    console.log("back");
  }

})


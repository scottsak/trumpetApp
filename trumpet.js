

for(var i = 0; i<document.querySelectorAll(".notes").length;i++){

    document.querySelectorAll(".notes")[i].addEventListener("click", buttonPressed);

  }

  document.addEventListener("keydown", keyPressed);

  function keyPressed(event){
    console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);
  }

  function buttonPressed(){
    var chord = this.id;
    makeSound(chord);
    buttonAnimation(chord);
  }


  function makeSound(key){
    // stop();
    switch (key) {
      case "1":
        var cLow = new Audio("sounds/cLow.m4a");
        cLow.play();
        break;
      case "2":
        var dLow = new Audio("sounds/dLow.m4a");
        dLow.play();
        break;
      case "3":
        var eLow = new Audio("sounds/eLow.m4a");
        eLow.play();
        break;
      case "4":
        var fLow = new Audio("sounds/fLow.m4a");
        fLow.play();
        break;
      case "5":
        var gLow = new Audio("sounds/gLow.m4a");
        gLow.play();
        break;
      case "6":
        var aHigh = new Audio("sounds/aHigh.m4a");
        aHigh.play();
        break;
      case "7":
        var bHigh= new Audio("sounds/bHigh.m4a");
        bHigh.play();
        break;
      case "8":
        var cHigh = new Audio("sounds/cHigh.m4a");
        cHigh.play();
        break;
      case "9":
        var dHigh = new Audio("sounds/dHigh.m4a");
        dHigh.play();
        break;
      case "0":
        var eHigh = new Audio("sounds/eHigh.m4a");
        eHigh.play();
        break;
      default:
        break;
      }
  }

  function stop(){
  console.log("worked");
  cLow.pause();
  dLow.pause();
  cLow.currentTime()=0;
  dLow.currentTime()=0;
}

  function buttonAnimation(eventkey){
    var activeButton = document.querySelector("." + eventkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);
  }

for(var i = 0; i<document.querySelectorAll(".notes").length;i++){

    document.querySelectorAll(".notes")[i].addEventListener("click", buttonPressed);
  
  }
  
  document.addEventListener("keydown", keyPressed);
  
  function keyPressed(event){
    makeSound(event.key);
    buttonAnimation(event.key);
  }
  
  function buttonPressed(){
    var chord = this.innerHTML;
    console.log(chord);
    makeSound(chord);
    buttonAnimation(chord);
  }
  
  
  function makeSound(key){
    switch (key) {
      case "1":
        var cLow = new Audio("sounds/cLow.mp3");
        cLow.play();
        break;
      case "2":
        var dLow = new Audio("sounds/dLow.mp3");
        dLow.play();
        break;
      case "3":
        var fLow = new Audio("sounds/fLow.mp3");
        fLow.play();
        break;
      case "4":
        var gLow = new Audio("sounds/gLow.mp3");
        gLow.play();
        break;
      case "5":
        var gLow = new Audio("sounds/gLow.mp3");
        gLow.play();
        break;
      case "6":
        var aHigh = new Audio("sounds/aHigh.mp3");
        aHigh.play();
        break;
      case "7":
        var bHigh= new Audio("sounds/bHigh.mp3");
        bHigh.play();
        break;
      case "8":
        var cHigh = new Audio("sounds/cHigh.mp3");
        cHigh.play();
        break;
      case "9":
        var dHigh = new Audio("sounds/dHigh.mp3");
        dHigh.play();
        break;
      case "0":
        var eHigh = new Audio("sounds/eHigh.mp3");
        eHigh.play();
        break;
      default:
        break;
      }
  }
  
  function buttonAnimation(eventkey){
    var activeButton = document.querySelector("." + eventkey);
    activeButton.classList.add("pressed");
  
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);
  }
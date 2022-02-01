

for(var i = 0; i<document.querySelectorAll(".notes").length;i++){

    document.querySelectorAll(".notes")[i].addEventListener("click", buttonPressed);

  }

  document.addEventListener("keydown", keyPressed);

  function keyPressed(event){
    console.log("keyPress")
    console.log(event.key);
    let chord = wordToInt(event.key);
    makeSound(event.key);
    buttonAnimation(chord);
  }

  function buttonPressed(){
    console.log("btnPress")
    let word = this.id;
    console.log(word);
    let chord = wordToInt(word);
    console.log(chord)
    makeSound(chord);
    buttonAnimation(word);
  }


  function makeSound(key){
    switch (key) {
      case "1":
        audio = new Audio("sounds/cLow.m4a");
        lastPlayed= audio;
        // cLow.play();
        break;
      case "2":
        audio = new Audio("sounds/dLow.m4a");
        lastPlayed= audio;
        // dLow.play();
        break;
      case "3":
        audio = new Audio("sounds/eLow.m4a");
        lastPlayed= audio;
        // eLow.play();
        break;
      case "4":
        audio = new Audio("sounds/fLow.m4a");
        lastPlayed= audio;
        // fLow.play();
        break;
      case "5":
        audio = new Audio("sounds/gLow.m4a");
        lastPlayed= audio;
        // gLow.play();
        break;
      case "6":
        audio = new Audio("sounds/aHigh.m4a");
        lastPlayed= audio;
        // aHigh.play();
        break;
      case "7":
        audio = new Audio("sounds/bHigh.m4a");
        lastPlayed= audio;
        // bHigh.play();
        break;
      case "8":
        audio = new Audio("sounds/cHigh.m4a");
        lastPlayed= audio;
        // cHigh.play();
        break;
      case "9":
        audio = new Audio("sounds/dHigh.m4a");
        lastPlayed= audio;
        // dHigh.play();
        break;
      case "0":
        audio = new Audio("sounds/eHigh.m4a");
        lastPlayed= audio;
        // eHigh.play();
        break;
      default:
        break;
      }
      audio.currentTime = 0;
      audio.play();
  }

  function stop(audio){
    console.log("worked");
    audio.pause();
    audio.currentTime = 0;
}

  function buttonAnimation(eventkey){
    var activeButton = document.querySelector("#" + eventkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);
  }

  function wordToInt(word){
    if(word === "one"){
      return "1";
    }
    else if(word === "two"){
      return "2";
    }
    else if(word === "three"){
      return "3";
    }
    else if(word === "four"){
      return "4";
    }
    else if(word === "five"){
      return "5";
    }
    else if(word === "six"){
      return "6";
    }
    else if(word === "seven"){
      return "7";
    }
    else if(word === "eight"){
      return "8";
    }
    else if(word === "nine"){
      return "9";
    }
    else if(word === "zero"){
      return "0";
    }
    else if(word === "1"){
      return "one";
    }
    else if(word === "2"){
      return "two";
    }
    else if(word === "3"){
      return "three";
    }
    else if(word === "4"){
      return "four";
    }
    else if(word === "5"){
      return "five";
    }
    else if(word === "6"){
      return "six";
    }
    else if(word === "7"){
      return "seven";
    }
    else if(word === "8"){
      return "eight";
    }
    else if(word === "9"){
      return "nine";
    }
    else if(word === "0"){
      return "zero";
    }
    else{
      return null;
    }
  }

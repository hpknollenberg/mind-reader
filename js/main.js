function getSlideOnRefresh() {
  let localSlide = localStorage.getItem("localSlide");
  switch (localSlide) {
    case "2":
      document.getElementById("first-slide").className = "carousel-item"; //the active slide is changed
      document.getElementById("second-slide").className = "carousel-item active";
      localStorage.setItem("localSlide", 2);
      break;
    case "3":
      document.getElementById("first-slide").className = "carousel-item";
      document.getElementById("third-slide").className = "carousel-item active";
      localStorage.setItem("localSlide", 3);
      break;
    case "4":
      document.getElementById("first-slide").className = "carousel-item";
      document.getElementById("fourth-slide").className = "carousel-item active";
      localStorage.setItem("localSlide", 4);
      break;
    case "5":
      document.getElementById("first-slide").className = "carousel-item";
      document.getElementById("fifth-slide").className = "carousel-item active";
      localStorage.setItem("localSlide", 5);
      break;
    case "6":
      document.getElementById("first-slide").className = "carousel-item";
      document.getElementById("sixth-slide").className = "carousel-item active";
      localStorage.setItem("localSlide", 6);
      break;
  }
}

getSlideOnRefresh();//Calls function in case page was refreshed

let slide = 1;

document.getElementById("go").addEventListener("click", () => { slide = 2; localStorage.setItem("localSlide", slide);}); //when moving from slide to slide, the slide number is stored locally
document.getElementById("next-two").addEventListener("click", () => { slide = 3; localStorage.setItem("localSlide", slide);});
document.getElementById("next-three").addEventListener("click", () => { slide = 4; localStorage.setItem("localSlide", slide);});
document.getElementById("next-four").addEventListener("click", () => { slide = 5; localStorage.setItem("localSlide", slide);});
document.getElementById("reveal").addEventListener("click", () => { slide = 6; localStorage.setItem("localSlide", slide);});


let homeClass = document.getElementsByClassName("home");

for (let i = 0; i < homeClass.length; i++) {
  homeClass[i].addEventListener("click", () => {slide = 1; localStorage.setItem("localSlide", slide);});
}









const arraySymbol = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"]

function getRandomInteger(min, max) { //Generates a random number
  return Math.floor(Math.random() * (max - min) + min);
}

function generateSymbols() { //Generates an array of symbols, factors of 9 are always the same symbol, everything else is random
  let displayedSymbols = []; //Empties symbols list
  document.getElementById("symbols-inventory").innerHTML = ""; //Empties displayed symbols list
  const nineSymbol = arraySymbol[getRandomInteger(0, 9)]; //assigns the symbol for factor of 9
  for (let i = 1; i <= 99; i++) { //assigns a symbol to everything else
    if (i % 9 == 0) {
      displayedSymbols.push(`${i} : ${nineSymbol}`);
    } else {
      let randomSymbol = arraySymbol[getRandomInteger(0, 9)];
      displayedSymbols.push(`${i} : ${randomSymbol}`);
    }
    const symbolsList = document.createElement("li"); //Creates list of symbols, adds one each time around the loop
    const symbolsListItem = document.createTextNode(displayedSymbols[i - 1])
    symbolsList.appendChild(symbolsListItem);
    document.getElementById("symbols-inventory").appendChild(symbolsList);
  }
  document.getElementById("nine-symbol-title").innerHTML = nineSymbol;
  document.getElementById("nine-symbol").innerHTML = nineSymbol; //Displays the corresponding symbol
}

if (localStorage.getItem("localSlide") != 6) {
  generateSymbols();
} else {
  document.getElementById("go").addEventListener("click", generateSymbols); //Creates a new list of symbols if mindreader restarted
}
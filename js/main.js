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
      let retrievedSymbolList = JSON.parse(localStorage.getItem("symbol-list")); //Retrieves array of current symbols from local storage
      console.log(retrievedSymbolList);
      for (let i = 0; i <= 99; i++) {
        const symbolsList2 = document.createElement("li"); //Creates list of symbols, adds one each time around the loop
        const symbolsListItem2 = document.createTextNode(retrievedSymbolList[i]);
        symbolsList2.appendChild(symbolsListItem2);
        document.getElementById("symbols-inventory").appendChild(symbolsList2);
      }
      localStorage.setItem("localSlide", 5);
      document.getElementById("nine-symbol-title").innerHTML = localStorage.getItem("localNineSymbol");
      document.getElementById("nine-symbol").innerHTML = localStorage.getItem("localNineSymbol");
      break;
    case "6":
      document.getElementById("first-slide").className = "carousel-item";
      document.getElementById("sixth-slide").className = "carousel-item active";
      document.getElementById("nine-symbol-title").innerHTML = localStorage.getItem("localNineSymbol");
      document.getElementById("nine-symbol").innerHTML = localStorage.getItem("localNineSymbol");
      localStorage.setItem("localSlide", 6);
      break;
  }
}

getSlideOnRefresh();//Calls function in case page was refreshed

let slide = 1;

document.getElementById("go").addEventListener("click", () => { slide = 2; localStorage.setItem("localSlide", slide);}); //when moving from slide to slide, the slide number is stored locally
document.getElementById("next-two").addEventListener("click", () => { slide = 3; localStorage.setItem("localSlide", slide);});
document.getElementById("next-three").addEventListener("click", () => { slide = 4; localStorage.setItem("localSlide", slide,);});
document.getElementById("next-four").addEventListener("click", () => { slide = 5; localStorage.setItem("localSlide", slide); generateSymbols();}); //button generates symbols
document.getElementById("reveal").addEventListener("click", () => { slide = 6; localStorage.setItem("localSlide", slide);});


let homeClass = document.getElementsByClassName("home");

for (let i = 0; i < homeClass.length; i++) {
  homeClass[i].addEventListener("click", () => {slide = 1; localStorage.setItem("localSlide", slide);});
}









const arraySymbol = ["👍", "🎶", "😍", "🤡", "🐵", "👁️", "🍕", "🚑", "🎃", "💂"]

function getRandomInteger(min, max) { //Generates a random number
  return Math.floor(Math.random() * (max - min) + min);
}

function generateSymbols() { //Generates an array of symbols, factors of 9 are always the same symbol, everything else is random
  let displayedSymbols = []; //Empties symbols list
  document.getElementById("symbols-inventory").innerHTML = ""; //Empties displayed symbols list
  const nineSymbol = arraySymbol[getRandomInteger(0, 10)]; //assigns the symbol for factor of 9
  localStorage.setItem("localNineSymbol", nineSymbol)
  for (let i = 0; i <= 99; i++) { //assigns a symbol to everything else
    if (i % 9 == 0) {
      displayedSymbols.push(`${i} : ${nineSymbol}`);
    } else {
      let randomSymbol = arraySymbol[getRandomInteger(0, 10)];
      displayedSymbols.push(`${i} : ${randomSymbol}`);
    }
    const symbolsList = document.createElement("li"); //Creates list of symbols, adds one each time around the loop
    const symbolsListItem = document.createTextNode(displayedSymbols[i])
    symbolsList.appendChild(symbolsListItem);
    document.getElementById("symbols-inventory").appendChild(symbolsList);
  }
  localStorage.setItem("symbol-list", JSON.stringify(displayedSymbols)); //Sends current array of symbols to local storage
  document.getElementById("nine-symbol-title").innerHTML = nineSymbol;
  document.getElementById("nine-symbol").innerHTML = nineSymbol; //Displays the corresponding symbol
}


  
document.getElementById("go").addEventListener("click", generateSymbols); //Creates a new list of symbols if mindreader restarted

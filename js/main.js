// main.js
const arraySymbol = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"]
let displayedSymbols = [];

function getRandomInteger(min, max) { //Generates a random number
  return Math.floor(Math.random() * (max - min) + min);
}

function generateSymbols() { //Generates an array of symbols, factors of 9 are always the same symbol, everything else is random
  const nineSymbol = arraySymbol[getRandomInteger(0, 9)];
  for (let i = 1; i <= 99; i++) {
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
  document.getElementById("nine-symbol").innerHTML = nineSymbol; //Displays the corresponding symbol
}

generateSymbols();

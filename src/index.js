import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const cardsContainer = document.querySelector("#created-cards-container");
const mainContainer = document.querySelector("#main-cards-container");
const amountInput = document.querySelector("#card-amount")
const createButton = document.querySelector("#create-button")
const bubbleSortButton = document.querySelector("#bubble-sort-button")
const selectionSortButton = document.querySelector("#selection-sort-button")

const getRandomCard = (() => {
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["♦", "♥", "♣", "♠"];

  const getRandom = (array) => {
    const rand = Math.floor(Math.random() * array.length);
    const randomCard = array[rand];
    return { randomCard, rand };
  };

  const getCard = () => {
    const x = getRandom(cards);
    const xCard = x.randomCard;
    const xIdx = x.rand;
    const y = getRandom(suits).randomCard;
    const newCard = {
      id: xCard,
      suit: y,
      value: xIdx,
    };
    return newCard;
  };
  return { getCard };
})();

const createCardArray = (amount) => {
  let cardArray = [];
  for (let i = 0; i < amount; i++) {
    const element = getRandomCard.getCard();
    cardArray.push(element);
  }
  return cardArray;
};

const display = (() => {
  const render = (array, container) => {
        container.innerHTML = array.map((each, i) => {
            return `
                <div class="poker">
                    <div id="icon1-container">
                        <p id="icon1-paragraph">${each.suit}</p>
                    </div>
                    <div id="number-container">
                        <p id="number-paragraph">${each.id}</p>
                    </div>
                    <div id="icon2-container">
                        <p id="icon2-paragraph">${each.suit}</p>
                    </div>
                </div>`;
        }).join('')
  };
  const renderIndividual = (array, container) => {
    const containerDiv = document.createElement("div")
    containerDiv.className = "row d-flex justify-content-center my-3 mx-0"
    array.forEach((each) => {
      const div = document.createElement("div")
      div.innerHTML = `
        <div class="poker">
            <div id="icon1-container">
                <p id="icon1-paragraph">${each.suit}</p>
            </div>
            <div id="number-container">
                <p id="number-paragraph">${each.id}</p>
            </div>
            <div id="icon2-container">
                <p id="icon2-paragraph">${each.suit}</p>
            </div>
        </div>`;
      containerDiv.appendChild(div)
    })
    container.appendChild(containerDiv)    
  }
  return { render, renderIndividual };
})();

const bubbleSort = (array) => {
 
  for (let wall = array.length -1; wall > 0; wall--) { // Wall starts at the end and closes in with every loop
    for (let i = 0; i < wall; i++) { // This loop starts at the beginning and ends at the wall
      if (array[i].value > array[i+1].value) {   // Compare adjacent elements
        let aux = array[i];           // Swap
        array[i] = array[i+1];
        array[i+1] = aux;
      }
    }
    display.renderIndividual(array, mainContainer)
  }
  return array
}

const selectionSort = (array) => {
  for (let wall = 0; wall < array.length; wall++) { // Wall starts at the beginning and moves forward
    for (let i = wall+1; i < array.length; i++) {
      if (array[wall].value > array[i].value) {  // If something is bigger than wall, =>
        let aux = array[wall];    // Swap
        array[wall] = array[i];
        array[i] = aux
      }      
    }
    display.renderIndividual(array, mainContainer)
  }
  return array
}

let newArr = [];

let sortedArray = [];

createButton.addEventListener('click', () => {
  newArr = createCardArray(amountInput.value);
  display.render(newArr, cardsContainer)
})

bubbleSortButton.addEventListener('click', () => {
  sortedArray = bubbleSort(newArr)
})

selectionSortButton.addEventListener('click', () => {
  sortedArray = selectionSort(newArr)
})
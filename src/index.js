import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const cardsContainer = document.querySelector("#cards-container");
const amountInput = document.querySelector("#card-amount")
const createButton = document.querySelector("#create-button")
const bubbleSortButton = document.querySelector("#bubble-sort-button")

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

  return { render };
})();

createButton.addEventListener('click', () => {
    const newArr = createCardArray(amountInput.value);
    display.render(newArr, cardsContainer)
})

const bubbleSort = (array) => {

}
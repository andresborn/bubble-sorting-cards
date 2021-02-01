import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

const cardsContainer = document.querySelector("#cards-container")

const getRandomCard  = (() => {
    const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    const suits = ["♦", "♥", "♣", "♠"]

    const getRandom = (array) => {
        const rand = Math.floor((Math.random() * array.length))
        const randomCard = array[rand]
        return {randomCard , rand}
    }

    const getCard = () => {
        const x = getRandom(cards)
        const xCard = x.randomCard
        const xIdx = x.rand
        const y = getRandom(suits).randomCard
        const newCard = {
            id: xCard + y,
            value : xIdx
        }
        return newCard
    }
    return { getCard }
})();

console.log(getRandomCard.getCard())

const createCardArray = (amount) => {
    let cardArray = []
    for (let i = 0; i < amount; i++) {
        const element = getRandomCard.getCard();
        cardArray.push(element)
    }
    return cardArray
}

const newArr = createCardArray(10)
console.log(newArr)


const render = (array) => {

}
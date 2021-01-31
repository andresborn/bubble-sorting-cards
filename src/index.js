import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

const cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const suits = ["♦", "♥", "♣", "♠"]

const cardsContainer = document.querySelector("#cards-container")

const getRandom = (array) => {
    const rand = Math.floor((Math.random() * array.length))
    return array[rand]
}

const getRandomCard  = (cards, suits) => {
    cardsContainer.appendChild
}


let displayedCards = []

const render = (array) => {

}
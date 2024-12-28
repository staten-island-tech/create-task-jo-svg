import {cards} from './cards';

function callFunctions(){
    document.querySelector(".container").innerHTML = '';
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    //math.floor rounds the number which removes the decimal 
    //math.random generates a random floating-point number between 0 (inclusive) and 1 (exclusive)
    //Math.random() * (max - min + 1) results in a floating-point number between 0 (inclusive) and (max - min + 1) (exclusive)
}
const playerCards = [];
const dealer = [];
//Jacks, Queens, Kings and 10s count as 10
function createCard(containerClass){
    const container = document.querySelector(`.${containerClass}`);
    container.insertAdjacentHTML("beforeend",`
        

        `);
}
function addCard(){
    const hitBtn = document.querySelector(".HIT");
    hitBtn.addEventListener('click', ()=>{
        console.log("New Card Is Added");
        let newCard = getRandomNumber(1,10);
        if (newCard){
            console.log(newCard);
        }
    })
}
 
addCard();
//need a funciton to create the cards
//need a fucntion for storage
//need a function for all the cards 

import {cards} from './cards';

function callFunctions(){
    document.querySelector(".playerCards").innerHTML = '';
    
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
function createCard(containerClass, num){
    const container = document.querySelector(`.${containerClass}`);
    container.insertAdjacentHTML("beforeend",`
        <div class="card bg-slate-200 w-48 h-64 justify-center text-center mx-3">
          <h1 class="text-8xl">${num}</h1>
        </div>
        `);
}

function addCard(){
    const hitBtn = document.querySelector(".HIT");
    hitBtn.addEventListener('click', ()=>{
        console.log("New Card Is Added");
        let newCardnum = getRandomNumber(1,10);
        if (newCardnum){
            createCard('playerCards', newCardnum);
        }
    })
}
 
addCard();
//need a funciton to create the cards
//need a fucntion for storage
//need a function for all the cards 

import {cards} from './cards';

function callFunctions(){
    document.querySelector(".playerCards").innerHTML = '';
    addPlayerCards(playerCards);
    console.log(playerCards);
    addDealerCards(dealer);
    console.log(dealer);
    update();
    
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
        <div class="card bg-slate-200 w-48 h-64 justify-center text-center">
          <h1 class="text-8xl">${num}</h1>
        </div>
        `);
}
function addCard(personsCards){
    let newCardnum = getRandomNumber(1,10);
    let cardValue = newCardnum;
    if (newCardnum >= 10) {
        cardValue = 10;
    }
    createCard('playerCards', cardValue);
    personsCards.push(cardValue);
    update();
}

function addPlayerCards(personsCards){
    const hitBtn = document.querySelector(".HIT");
    hitBtn.addEventListener('click', ()=>{
        console.log("New Card Is Added");
        addCard(personsCards);
    })
}
function addDealerCards(personsCards){
    addCard(personsCards);
    
}

function update(){
    let playervalue = 0; 
    let dealervalue = 0;
    for (let i=0; i < playerCards.length; i++){
        playervalue += playerCards[i];
    }
    for (let i=0; i < dealer.length; i++){
        dealervalue += dealer[i];
    }
    console.log(playervalue);
    if (playervalue > 21){
        console.log("you lose!");
        document.querySelector(".HIT").disabled = true;
    }
    
    /* if (dealervalue > 21 || playervalue > dealervalue){
        console.log("you win!");
        document.querySelector(".HIT").disabled = true;
    } */
}
callFunctions();

//need a funciton to create the cards
//need a fucntion for storage
//need a function for all the cards 

let playervalue = 0;
let dealervalue = 0;
let turn = 'player';
let gameOver = false;
const playerCards = [];
const dealer = [];
function callFunctions(){
    document.querySelector(".playerCards").innerHTML = '';
    startGame();
    addPlayerCards(playerCards);
    
    console.log(playervalue);
    console.log(dealervalue);
    const stand = document.querySelector('.STAY');
    stand.addEventListener('click', () => {
        document.querySelector(".HIT").disabled = true;
        dealerTurn();
        checkWinner();
    });
    /* while (gameOver = false){
        if (dealervalue > 21){
            checkWinner();
        }
    } */
    
}
function dealerTurn() {
    while (dealervalue < 17 && !gameOver && turn == 'dealer') {
        addCard(dealer, "dealerCards");
        turn = 'player'
    }
    update();
}


function checkWinner() {
    if (playervalue > 21) {
        console.log("You lose! Player over 21.");
        gameOver = true;
    } else if (dealervalue > 21) {
        console.log("You win! Dealer over 21.");
        gameOver = true;
    } else if (playervalue > dealervalue) {
        console.log("You win!");
        gameOver = true;
    } else if (playervalue < dealervalue) {
        console.log("You lose! Dealer wins.");
        gameOver = true;
    } else {
        console.log("It's a tie!");
        gameOver = true;
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    //math.floor rounds the number which removes the decimal 
    //math.random generates a random floating-point number between 0 (inclusive) and 1 (exclusive)
    //Math.random() * (max - min + 1) results in a floating-point number between 0 (inclusive) and (max - min + 1) (exclusive)
}

function startGame(){
    addCard(playerCards, "playerCards");
    addCard(playerCards, "playerCards");
    addCard(dealer, "dealerCards");
    addCard(dealer, "dealerCards");

}
function createCard(containerClass, num){
    const container = document.querySelector(`.${containerClass}`);
    container.insertAdjacentHTML("beforeend",`
        <div class="card bg-slate-200 w-48 h-64 justify-center text-center">
          <h1 class="text-8xl">${num}</h1>
        </div>
        `);
}
function addCard(personsCards, container){
    let newCardnum = getRandomNumber(1,10);
    let cardValue = newCardnum;
    if (newCardnum >= 10) {
        cardValue = 10;
    }
    createCard(container, cardValue);
    personsCards.push(cardValue);
    update();
}

function addPlayerCards(personsCards) {
    const hitBtn = document.querySelector(".HIT");
    hitBtn.addEventListener('click', () => {
        if (turn === 'player' && !gameOver) { 
            addCard(personsCards, "playerCards");
            update();
            turn = 'dealer';
            dealerTurn();
        }

    });
}

function addDealerCards(personsCards){
    
}
function checkValue(){
    playervalue = 0; 
    dealervalue = 0;
    for (let i=0; i < playerCards.length; i++){
        playervalue += playerCards[i];
    }
    for (let i=0; i < dealer.length; i++){
        dealervalue += dealer[i];
    }
}
function update(){
    checkValue();
    const score = document.querySelector(`.score`);
    score.innerHTML = `SCORE: ${playervalue}`;
    
    if (playervalue > 21) {
        console.log("Player busts, you lose!");
        gameOver = true;
    }

    if (gameOver) {
        document.querySelector(".HIT").disabled = true; 
    }
}

callFunctions();


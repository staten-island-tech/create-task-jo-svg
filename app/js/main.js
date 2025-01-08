let playervalue = 0;
let dealervalue = 0;
let turn = 'player';
let gameOver = false;
const playerCards = [];
const dealer = [];
const dealerDelay = 1000;
function callFunctions(){
    document.querySelector(".playerCards").innerHTML = '';
    startGame();
    addPlayerCards(playerCards);
    const stand = document.querySelector('.STAY');
    stand.addEventListener('click', () => {
        document.querySelector(".HIT").disabled = true;
        turn = 'dealer';
        console.log(turn)
        dealerTurn();   
    
    });
}
function dealerTurn() {
    if (dealervalue < 17 && !gameOver && turn == 'dealer') {
        setTimeout(() => {
            addCard(dealer, "dealerCards"); 
            if (dealervalue < 17) {
                dealerTurn(); 
            } else {
                checkWinner(); 
            }
            
        }, 10); 
    }
    if (dealervalue > 21) {
        checkWinner();
        gameOver = true;
        document.querySelector(".STAY").disabled = true;
        return;
    }
    else if (dealervalue >= 17 && document.querySelector(".HIT").disabled === true){
        checkWinner();
    }
    else{
        turn = 'player';
    }
    update();
}
function checkWinner() {
    if (playervalue > 21) {
        document.querySelector('.winner').insertAdjacentHTML('beforeend', `
            <h1 class="text-8xl">You lose! Player over 21.</h1> `);
        gameOver = true;
        document.querySelector(".STAY").disabled = true;

    } else if (dealervalue > 21) {
        document.querySelector('.winner').insertAdjacentHTML('beforeend', `
            <h1 class="text-8xl">You win! Dealer over 21.</h1> `);
        gameOver = true;
        document.querySelector(".STAY").disabled = true;
    } else if (playervalue > dealervalue) {
        document.querySelector('.winner').insertAdjacentHTML('beforeend', `
            <h1 class="text-8xl">You win!</h1> `);
        gameOver = true;
        document.querySelector(".STAY").disabled = true;
    } else if (playervalue < dealervalue) {
        document.querySelector('.winner').insertAdjacentHTML('beforeend', `
            <h1 class="text-8xl">You lose! Dealer wins.</h1> `);
        gameOver = true;
        document.querySelector(".STAY").disabled = true;
    } else {
        document.querySelector('.winner').insertAdjacentHTML('beforeend', `
            <h1 class="text-8xl">It's a tie!</h1> `);
        gameOver = true;
        document.querySelector(".STAY").disabled = true;
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
        if (playervalue > 21) {
            document.querySelector('.winner').insertAdjacentHTML('beforeend', `
                <h1 class="text-8xl">Over 21, you lose!</h1> `);
            gameOver = true;
            return;
        }
    });
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
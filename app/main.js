
function callFunctions(){

}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    //math.floor rounds the number which removes the decimal 
    //math.random generates a random floating-point number between 0 (inclusive) and 1 (exclusive)
    //Math.random() * (max - min + 1) results in a floating-point number between 0 (inclusive) and (max - min + 1) (exclusive)
    //it calculates the 
}
const typesOfCards = [
    
];
const playerCards = [];
const dealer = [];
//Jacks, Queens, Kings and 10s count as 10
function createCard(displayedCards){
    document.querySelector(".container").innerHTML = '';
    const container = document.querySelector(".container");

}
function addCard(){
    const hitBtn = document.querySelector(".HIT");
    hitBtn.addEventListener('click', ()=>{
        console.log("New Card Is Added");
        console.log(getRandomNumber(1,100))
    })
}
addCard();
//need a funciton to create the cards
//need a fucntion for storage
//need a function for all the cards 

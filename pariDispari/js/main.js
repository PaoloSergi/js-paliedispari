// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let userBet = prompt("Pari o dispari?");
let userNumber = parseInt(prompt("Scegli un numero da uno a 5"));
let cpuNumber = generateRandomNum(1, 5);

let result = isSumPair(userNumber, cpuNumber);

if (userBet === "pari" && result === true || userBet === "dispari" && result === false){
    console.log(`${userNumber} e ${cpuNumber} = ${userNumber + cpuNumber}, hai vinto!`);
} else {
    console.log(`${userNumber} e ${cpuNumber} = ${userNumber + cpuNumber}, hai perso!`);
}



function generateRandomNum(rangeMin, rangeMax){
    let num = Math.floor(Math.random() * (rangeMax - rangeMin + 1) + rangeMin);
    return num;
}

function isSumPair(num1, num2){
    let sum = num1 + num2;
    if (sum % 2 === 0){
        return true;
    } return false;
}
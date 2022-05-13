// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let wordTocheck = prompt("Inserisci una parola");

console.log(palindromeCheck(wordTocheck));




function palindromeCheck(word) {
    let flag = 0;

    for (let i=0; i<(word.length)/2;i++){
        if (word.charAt(i)!=word.charAt((word.length -1) - i)){
            flag += 1;
        }
    }
    if (flag===0){
        return `La parola ${word} è palindroma`;
    } return `La parola ${word} non è palindroma`;
}
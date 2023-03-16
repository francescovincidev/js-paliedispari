// Facciamo inserire la scelta tra pari e dispari all'utente, assciurandoci che non sbagli, altrimenti il programma non va avanti
let userOddOrEven = prompt("pari o dispari").toLowerCase();

while (userOddOrEven !== "pari" && userOddOrEven !== "dispari") {

    userOddOrEven = prompt("scrivi pari o dispari").toLowerCase();

}

// Facciamo inserire la scelta tra i numeri all'utente, assciurandoci che non sbagli, altrimenti il programma non va avanti
let userNum = parseInt(prompt("Inserisci un numero da 1 a 6"));

while (isNaN(userNum) || userNum < 1 || userNum > 6) {

    userNum = parseInt(prompt("Inserisci un valore numerico da 1 a 6"));

}

// generiamo il numero del computer
let computerNum = Math.floor(Math.random() * 6) + 1;

// sommiamo i due numeri
let sum = userNum + computerNum;

// applichiamo la funzione creata in fondo
winner = isOddOrEven(sum);

// controlliamo chi ha vinto
if(winner === userOddOrEven){
    console.log("HAI VINTO");
} else{
    console.log("hai perso");
}



// funzione che controlla pari o dispari
function isOddOrEven(num) {
    let result;
    if (num % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }

    return result;

}
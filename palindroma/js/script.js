// CHIEDIAMO LA PAROLA ALL'UTENTE
const userWord = prompt("Inserisci una parola");

// creiamo la funzione
function isPalindrome(word) {
    let result;

    // SE la parola è palindroma stampa è palindroma
    if(word === word.split('').reverse().join('')){
        result = `${word} è palindroma`;
    } else{

        // SE non è palindroma stampa non è palindroma
        result = `${word} non è palindroma`;
    }

    return result;

}

// Usiamo la funzione con la parola dell'utente
const output = isPalindrome(userWord);

// stampiamo su html e console
document.querySelector("h2").innerHTML = output;

console.log(output);
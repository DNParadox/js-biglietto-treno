// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



// Qual è la tua età?
const userAge = parseInt( prompt('Quanti anni hai?'));
console.log(userAge);


// Quanti KM devi percorrere?
const userKM = parseInt( prompt ('Quanti km devi percorrere?'));
console.log(userKM);

// Definiamo prezzo km *
const priceKM = 0.21 * userKM;
console.log(priceKM)

// Definiamo una scontistica usando due variabili

// Prezzo intero viene dato da priceKM quindi...

if (userAge < 18) {
    priceKM * 0,2 = discount
    console.log
}

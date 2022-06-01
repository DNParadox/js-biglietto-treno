// Qual è la tua età?
const userAge = parseInt( prompt('Quanti anni hai?'));

// Quanti KM devi percorrere?
const userKM = parseInt( prompt ('Quanti km devi percorrere?'));

// Definiamo il prezzo del biglietto
const priceKM = 0.21 * userKM;

let total = priceKM;

// Definiamo una scontistica usando due variabili
if (userAge < 18) {
    let discount = priceKM * 0.2; 
    total = priceKM - discount;
    
} else if (userAge > 65) {
    let discount = priceKM * 0.4; 
    total = priceKM - discount;
}


// Una volta dato il risultato con IF determinare il prezzo con due decimali alla fine
document.getElementById('result').innerHTML = 'Questo è il prezzo da pagare ' + total.toFixed(2) + '\u20AC'



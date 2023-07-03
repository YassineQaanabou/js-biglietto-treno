let name = prompt("inserisci il tuo nome");
let km = parseInt(prompt("inserisci i km che vuoi percorrere"));
let age = prompt("inserisci la tua età");

let price = km * 0.21;

if ( age  <=18) {
    let finalPrice = price - (price*0.20);
    console.log(finalPrice);
} else if ( age >=65) {
    let finalPrice = price - (price*0.40);
    console.log(finalPrice);
} else {
    let finalPrice = price;
    console.log(finalPrice);
}




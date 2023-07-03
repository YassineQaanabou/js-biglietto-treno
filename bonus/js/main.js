function submitForm(event) {
    event.preventDefault();

    console.log("Il FORM FUNZIONA!");

let km = parseInt(document.getElementById("inputKm"));
let age = document.getElementById("selectAge").Value;
let ticketPrice = km *0.21


if ( age = "Underage") {
    let ticketPrice = ticketPrice*0.80;
} else if ( age = "Over65") {
    let ticketPrice = ticketPrice*0.60;
} else {
    let ticketPrice = ticketPrice
}
document.getElementById("prezzo").innerHTML = "il prezzo del biglietto è" + ticketPrice;

console.log(ticketPrice);

};
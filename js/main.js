function submitForm(event) {
    event.preventDefault();

    console.log("Il FORM FUNZIONA!");

let name = document.getElementById("inputName").Value;
let km = parseInt (document.getElementById("inputKm").Value);
let age = document.getElementById("selectAge").Value;

let price = km * 0.21;

if ( age = "Underage") {
    let finalPrice = price - (price*0.20);
} else if ( age = "Over65") {
    let finalPrice = price - (price*0.40);
} else {
    let finalPrice = price
}

document.getElementById("finalprice").innerHTML = finalPrice;

console.log(finalPrice);

};

let num_km = prompt('Quanti chilometri desideri percorrere?')
console.log(num_km)
let age = prompt('Quanti anni hai?')
console.log(age)

let km_price = num_km * 0.21;

let perc_discount = 0;
if (age < 18) {
    perc_discount = 20;
}
else if (age >= 65) {
    perc_discount = 40;
}

if (perc_discount != 0) {
    let discount = km_price * perc_discount / 100;
    km_price -= discount;
}
console.log(km_price)   
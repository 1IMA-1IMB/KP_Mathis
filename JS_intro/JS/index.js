
//Her er en kode som viser fornavn
let firstName = 'Mathis';
console.log(firstName);

//Her er en kode som viser etternavn
let lastName = 'Dale';
console.log(lastName);

//Her en kode som viser alder
let age = '16';
console.log(age);

//b) I javascript finnes det en kommando som lager en variabel og den heter var

var erEnElev = true;
console.log(erEnElev);

if( !erEnElev ) {
     console.log( "Du er ikke en elev!" );
     } else {
     console.log( "Du er en elev!" );
     }
//d) Det som skjer når jeg skriver inn denne koden er at den skriver ut "Du er ikke en elev" eller "Du er en elev" hvis den får funksjonen erEnElev

let number_1 = 2

console.log(number_1 + number_1);
//2a) I denne koden plusser den sammen number_1 med number_1. Nummer_1 er det samme som 2.

let number_2 = 11

console.log(Math.floor(Math.random() * 12));

let number_3 = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 * 11
 
function gangingMed11(){
     console.log(1 * number_2)
     console.log(2 * number_2)
     console.log(3 * number_2)
     console.log(4 * number_2)
     console.log(5* number_2)
     console.log(6 * number_2)
     console.log(7 * number_2)
     console.log(8 * number_2)
     console.log(9 * number_2)
     console.log(10 * number_2)
     console.log(11 * number_2)
}

gangingMed11();

let times_1 = 545
let times_2 = 12

function gangingKanVereGoy(times_1, times_2){

     if (times_2 === undefined){
          times_2 = 12;
     }
     return times_1 * times_2
}

console.log(gangingKanVereGoy)
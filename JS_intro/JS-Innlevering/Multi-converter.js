//funksjonen som definerer
function convertUnits() {
    let liters = parseFloat(document.getElementById("litersInput").value);

    let gallons = convertLitersToGallons(liters);
    document.getElementById("gallonsOutput").innerText = `Gallons: ${gallons.toFixed(2)}`;

    let ounces = convertLitersToOunces(liters);
    document.getElementById("ouncesOutput").innerText = `Ounces: ${ounces.toFixed(2)}`;

    let cups = convertLitersToCups(liters);
    document.getElementById("cupsOutput").innerText = `Cups: ${cups.toFixed(2)}`;

    let spiseskjeer = convertLitersToSpiseskjeer(liters);
    document.getElementById("spiseskjeerOutput").innerText = `Spiseskjeer: ${spiseskjeer.toFixed(2)}`;
    
}


//funksjonen som kobler til let til funksjoner
function convertToLiters() {
    let units = parseFloat(document.getElementById("unitsInput").value);
    let unitType = document.getElementById("unitType").value;

    let liters = 0;

    switch (unitType) {
        case 'gallons':
            liters = convertGallonsToLiters(units);
            break;
        case 'ounces':
            liters = convertOuncesToLiters(units);
            break;
        case 'cups':
            liters = convertCupsToLiters(units);
            break;
        case 'spiseskjeer':
            liters = convertSpiseskjeerToLiters(units);
            break;
        default:
            break;
    }

    document.getElementById("litersOutput").innerText = `Liters: ${liters.toFixed(2)}`;

    let inputString = units.toString();
    if (isPalindrome(inputString)) {
       alert("OH MY GOD. i can not belive my eyes a palindrome!!!")
    }
}

function isPalindrome(str) {

    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return cleanStr === cleanStr.split('').reverse().join('');
}

//Gallons
function convertGallonsToLiters(gallons) {
    let gallonToLiter = 3.78541;
    return gallons * gallonToLiter;
}

//Ounces
function convertOuncesToLiters(ounces) {
    let ounceToLiter = 0.0295735;
    return ounces * ounceToLiter;
}

//Cups
function convertCupsToLiters(cups) {
    let cupToLiter = 0.236588;
    return cups * cupToLiter;
}

//Spiseskjeer
function convertSpiseskjeerToLiters(spiseskjeer) {
    let spiseskjeToLiter = 0.015;
    return spiseskjeer * spiseskjeToLiter;
}

function convertLitersToGallons(liters) {
    let gallon = 3.78541;
    return liters / gallon;
}

function convertLitersToOunces(liters) {
    let ounce = 33.814023;
    return liters * ounce;
}

function convertLitersToCups(liters) {
    let cup = 4.226753;
    return liters * cup;
}

function convertLitersToSpiseskjeer(liters) {
    let spiseskje = 66.6;
    return liters * spiseskje;
}

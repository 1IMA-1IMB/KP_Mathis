let sauer = 100; // Du kan endre dette tallet etter ønske

function tellNoenSauer(antall) {
    sauer -= antall;
    console.log("Du har " + sauer + " sauer igjen å telle før du sovner.");
}

tellNoenSauer(5);

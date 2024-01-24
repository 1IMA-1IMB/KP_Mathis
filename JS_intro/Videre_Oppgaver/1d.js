let sauer = 100;

function tellNoenSauer(antall) {
    sauer -= antall;
    
    if (sauer > 0) {
        console.log("Du har " + sauer + " sauer igjen å telle før du sovner.");
    } else {
        console.log("zzz zzz zzz");
    }
}

tellNoenSauer(50);
tellNoenSauer(60);

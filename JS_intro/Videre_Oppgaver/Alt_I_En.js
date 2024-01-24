let totaltKlippedeSauer = 0;
let sauer = 100;

function tellEnSau() {
    sauer--;
    console.log("Du har " + sauer + " sauer igjen å telle før du sovner.");
}

function tellNoenSauer(antall) {
    sauer -= antall;
    
    if (sauer > 0) {
        console.log("Du har " + sauer + " sauer igjen å telle før du sovner.");
    } else {
        console.log("zzz zzz zzz");
    }
}

function mistetTellingen() {
    sauer = 100;
    console.log("Tellingen er tilbake til 100 sauer.");
}

function klippSauer(antallSauer) {
    totaltKlippedeSauer += antallSauer;

    if (totaltKlippedeSauer >= 100) {
        console.log("zzz zzz zzz");
        return;
    }

    if (antallSauer > 0) {
        console.log("Du fikk nok ull til et par sokker!");
    }
    if (antallSauer > 10) {
        console.log("Du fikk nok ull til en stor genser!");
    }
    if (antallSauer > 30) {
        console.log("Du fikk nok ull til kjeledress og sengetøy!");
    }
    if (antallSauer > 50) {
        console.log("Du fikk nok ull til å lage en saue-klone!");
    }
    if (antallSauer > 80) {
        console.log("Du fikk nok ull til et ull-hoppeslott!");
    }
}

// Eksempler på bruk:
tellEnSau();
tellNoenSauer(5);
mistetTellingen();
klippSauer(20);
klippSauer(90);
klippSauer(10);

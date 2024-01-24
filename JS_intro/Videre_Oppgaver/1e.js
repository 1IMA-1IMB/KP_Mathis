function klippSauer(antallSauer) {
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

klippSauer(15);
klippSauer(40);
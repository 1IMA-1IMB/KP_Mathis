let totaltKlippedeSauer = 0;
let sauer = 1000;

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
    sauer = 1000;
    console.log("Tellingen er tilbake til 100 sauer.");
}

function klippSauer(antallSauer) {
    totaltKlippedeSauer += antallSauer;

    if (totaltKlippedeSauer >= 1000) {
        console.log("zzz zzz zzz");
        return;
    }

    if (antallSauer > 0) {
        console.log("D̴̻͕̜̱͊̅ṷ̷̡̧͇̞͍͈͉̖̈́̃̏̐̏͗̀̔̉̋ ̵̱͍̫̞̞̳̳͚͂͌̿̏́̽͝f̸̜͚̐̊̔̆̀̚i̵̯̎̇̆̊̌̈́̅̓͝k̸̢͖̫̟̜̞̜͎͈̗̒͒̎̔̾̕͠k̴̻̫̤̣͈̓̓̓̑̀ͅ ̶̺̺̥͖̟̲̘̦̑͛ͅn̴̬̈́͆̓̍͝o̵̱̼̬͍͕̗͉̒͆̇́̂͌̎͐̀k̸̫̼̞̞̥͐͘ ̸̟͕͇͖̪̟͉͋̇̿͑͊͋͝ͅừ̸̹̝͈͙̱̮̬͓́l̵̨̰̤̙̔́́͒͝ĺ̶̡̛̮̭̞̠̼̈́̎̂̔͘͝͠ͅ ̸̜̲͚͙͖͍̲̿͐̉́̿ͅṱ̵̛͍̜̳͉̓̇̏̓̃̈́̃̌͐ͅį̷̧͚̣̬̦͍̎̍̓̑̒͋l̸͍͎̓̚̕ ̷͎̜̞̟̒̍e̴̩̼͖̯͔̞͎̹̥͌́̿͝t̸̠͍̗͋ ̴͕͓̫̜̌p̸̨̝̱̘͛̐̿͒̋̐͐̋̚ǎ̸͔̮̳͓̐̂̇́͗̍̋̋͜͠ͅṛ̸͖͊̓̀̓̾̇̌ ̵͚̬͎͖͎̦̞͙͕̻̎s̷͓̙̘͚̃̌̆̓̎̐͝ŏ̸̡̡̩̲͍̯̪͉͔k̷̡̧̻̯͇͎̉̀̏̏͌̓̽͂̔̽k̴̨̘̪͍͍̮͍̹̝͊̌̀̃͝ͅę̶̢̼̲̻̥̥͔̄̀̀̒́̆͝ͅŗ̵̢̧̜̖̪̞̖̗̣̊̓̽͋!̷̡̨̨̧͖̘̙͈̝̦͗͌͝");
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
        console.log("D̸̜̽̋̂͗͊̉u̷̗̖͌̅͊́̾͘̚͝ ̶̛̼̄͛̀̎̉̓͝f̶̭̬́̃̓̄́͘ì̴̢̛̯͚͂́̃̄̎ķ̶̣̎̽͜ķ̶͕͈̰͓̳̦͉̈́̓̏͛̾ ̶̬͔̞̂n̵͔̥̰̆̆̀̂͜ó̵̡̨̭̲̫̫k̷̦̦͙̈́̈̋̅̃̈́͛̕ ̵̠͚͖͚̼͇̻̹̾ù̸͓͍̰̪́͆̓̌̈͑l̶̢̝͚̘̙̣͕̙̈́̉̌͊̐̅̕͠l̸̦̰̫̱̬̈́̂ ̶̥̺̣̥̝͑͐͋̽̕̕͠ṭ̸̥͔̗͔̩̯̀͝͝ḭ̸͓̟̮̙̙͖̀̿͗̋̎͝l̷̫̠̊́̕ ̶̨͐͋͗̇̓̾ĕ̵͉̠̱̱̺̫̬̖̿͐̈́̽ţ̶̡̮̩̺͓́̂͌̈́̎̉͠͠ͅ ̶͓̣̬̫̟͎̣͘u̸͍̬͇̍̓͜l̷͍̺̾͂̌̾̏̏̕l̸̻͙̑̄-̸̧͕̗͈͖͂͒̅͒h̴̨̫̙̪̪͈̫̃̌̈̌́ơ̶̡̧͈̰̙̖̖̈́̈̎̀̋̎̋ṗ̵̢̧̘̱̦͎̈̊̋̂p̵̤̟͛̋͑̋̈́̄e̴̩̜̣͈̐̏ș̸̢̦̜̼͖̤̹̀̈́̈́l̸͚͍͔͉̞͈͓̮͌̽͑͠o̷͖̙͂̔̏̀̅̿͜͝ť̵̢̜̜̮̬̭͍̱͒͋̋͋ț̶̟̠̦͛͋!̶̛̤̬̓̈́̚");
    }
}

// Eksempler på bruk:
tellEnSau();
tellNoenSauer(590);
mistetTellingen();
klippSauer(20);
klippSauer(90);
klippSauer(10);

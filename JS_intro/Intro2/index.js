console.log("5");

let tall_1 = 8
let tall_2 = 7

console.log(tall_1 + tall_2)

function minFunksjon(){
    
    console.log("Dette er min funskjon");
    console.log("Hva som helst");

}

function gange_sammen_to_tall(navn_1, navn_2){

    console.log(navn_1*navn_2);

}

gange_sammen_to_tall(tall_1, tall_2);

let utsagn = false;

let tall_3 = 7;

let tall_4 = 4;

function if_setninger(){

    if( tall_3 < tall_4){
        
        console.log("Første if-en er sann!")

        
    }else if(tall_4 < tall_3){

        console.log("Else if-en stemte!")

    }else{

        console.log("Else if-en funket")

    }

}

if_setninger();
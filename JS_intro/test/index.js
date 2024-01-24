
let variabel = 11

function minFunksjon(tall){

    let nyttTall = tall * 2;

    if(nyttTall <= 20){

        console.log ("Tallet er ikke større enn 20")
        return nyttTall;
    }else{

        console.error("Tallet er over 20.Store tall er skumle. Error")
        return;
    }

    console.log("Jo");
}

console.log(minFunksjon(10))
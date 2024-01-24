let Celsius = true
function konverter_temperatur(temp){

    let konvertert;

    if(Celsius){

        konvertert = ((konvertert * 1.8) + 32);
        document.getElementById("output").innerHTML = konvertert;
    }else{

        konvertert = ((temp - 32) / 1.8)
        document.getElementById("output").innerHTML = konvertert;
    }
}

function bytte_enhet(){

    Celsius = !Celsius;

    let input_type = document.getElementById("input_type")
    let output_type = document.getElementById("output_type")
}

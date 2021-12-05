function calcularKilometros() {

    // tomamos el número ingresado por el usuario
    var millas = document.getElementById("millas").value;

    // guardamos una variable con el factor de conversión
    const factor = 1.60934;

    // calculamos las millas
    var kilometros = millas * factor;

    document.getElementById("Resultado1").innerHTML = millas + " Millas equivalen a <strong>" + kilometros + "</strong> kilometros.";

}

function calcularCentimetros() {

    // tomamos el número ingresado por el usuario
    var pulgadas = document.getElementById("pulgadas").value;

    // guardamos una variable con el factor de conversión
    const factor = 2.54;

    // calculamos las millas
    var centimetros = pulgadas * factor;

    document.getElementById("Resultado2").innerHTML = pulgadas + " Pulgadas equivalen a <strong>" + centimetros + "</strong> centimetros.";

}
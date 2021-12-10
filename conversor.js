function calcularKilometros() {

    // tomamos el número ingresado por el usuario
    var millas = document.getElementById("millas").value;

    // guardamos una variable con el factor de conversión
    const factor = 1.60934;

    // calculamos
    var kilometros = millas * factor;

    document.getElementById("Resultado1").innerHTML = millas + " Millas equivalen a <strong>" + kilometros + "</strong> kilometros.";

}

function calcularCentimetros() {

    // tomamos el número ingresado por el usuario
    var pulgadas = document.getElementById("pulgadas").value;

    // guardamos una variable con el factor de conversión
    const factor = 2.54;

    // calculamos
    var centimetros = pulgadas * factor;

    document.getElementById("Resultado2").innerHTML = pulgadas + " Pulgadas equivalen a <strong>" + centimetros + "</strong> centimetros.";

}

function calcularKilos() {

    // tomamos el número ingresado por el usuario
    var libras = document.getElementById("libras").value;

    // guardamos una variable con el factor de conversión
    const factor = 0.453592;

    // calculamos
    var kilogramos = libras * factor;

    document.getElementById("Resultado3").innerHTML = libras + " Libras equivalen a <strong>" + kilogramos + "</strong> Kilos.";

}

function calcularPies() {

    // tomamos el número ingresado por el usuario
    var pies = document.getElementById("pies").value;

    // guardamos una variable con el factor de conversión
    const factor = 30.48;

    // calculamos 
    var centimetros = pies * factor;

    document.getElementById("Resultado4").innerHTML = pies + " Pies equivalen a <strong>" + centimetros + "</strong> centimetros.";

}

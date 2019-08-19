'use strict'

/*la funcion anonima permite hacer un llamado a una funcion que 
aun no sabemos como se va  a llamar en el futuro . 
*/
function sumame(numero1,numero2, sumaYmuestra, sumaPorDos){
    var sumar= numero1+numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    
    return sumar;
}
//una funcion de flecha se puede quitar el function y solo colocar =>
sumame(5,7,dato  => {
    console.log("la suma es ",dato);
},
function(dato){
    console.log("la suma por dos es ;", (dato*2));
});

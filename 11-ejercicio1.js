'use strict'

//programa que pida 2 numeros y nos diga cual es mayor , el menor y si son iguales 

var numero1 = parseInt(prompt(" numero 1 ", 0));
var numero2 = parseInt(prompt(" numero 2 ", 0));

if (numero1 == numero2){
        alert("los dos numeros son iguales ");
}else if(numero1 > numero2){
        alert(" numero 1 es mayor");
}
else if (numero2 > numero1) {
        alert(" numero 2 es mayor");
}else{
        alert("ingrese numero correcto")
}




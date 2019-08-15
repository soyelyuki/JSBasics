'use strict'

//programa que pida 2 numeros y nos diga cual es mayor , el menor y si son iguales 
// plus si los numeros no son un numero o son menores 
//o iguales a cero que nos vuelva a pedir el numero
var numero1 = parseInt(prompt(" numero 1 ", 0));
var numero2 = parseInt(prompt(" numero 2 ", 0));

//isNaN entrega un dato booleano en caso de que la variable sea o no sea un numero
while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
        numero1 = parseInt(prompt(" numero 1 ", 0));
        numero2 = parseInt(prompt(" numero 2 ", 0));
}


if (numero1 == numero2){
        alert("los dos numeros son iguales " );
}else if(numero1 > numero2){
        alert(" numero 1 es mayor  "  +  numero1);
}
else if (numero2 > numero1) {
        alert(" numero 2 es mayor  "  +  numero2);
}else{
        alert("ingrese numero correcto")
}




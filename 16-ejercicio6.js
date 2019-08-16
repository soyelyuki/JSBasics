'use strict'

/*
ver si un numero es par o impar 
*/

var numero =(parseInt(prompt("ingrese N ", 1)));
while( numero <= 0 || isNaN(numero)){
      numero = parseInt(prompt(" ingrese N", 1));
}

if(numero%2 == 0){
    console.log("este numero es par ");
}else{
    console.log("este numero es impar ");
}


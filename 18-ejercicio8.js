'use strict'

//pida numero 
//si metemos uno mal que lo vuelva a pedir
// EN el cuerpo ,alerta y consola  

var numero1 =(parseInt(prompt("ingrese N ", 1)));
var c = (prompt("ingrese operacion"));
var numero2 =(parseInt(prompt("ingrese N2 ", 1)));
while( numero1 <= 0 || isNaN(numero1)|| numero2 <= 0 || isNaN(numero2)){
      numero1 = parseInt(prompt(" ingrese N", 1));
      numero2 = parseInt(prompt(" ingrese N2", 1));
}

if(c == "+"){
console.log( "la suma de " +numero1+" y " +numero2+ " es  "+(numero1+numero2) );
alert(" el resultado es " +(numero1+numero2));
document.write("<h1> el resultado es <h1>"+(numero1+numero2));
}else if(c == "*"){
console.log( "la multiplicacion de " +numero1+" y " +numero2+ " es  "+(numero1*numero2) );
alert(" el resultado es " +(numero1*numero2));
document.write("<h1> el resultado es <h1>"+(numero1*numero2));
}else if(c == "-"){
console.log( "la suma de " +numero1+" y " +numero2+ " es  "+(numero1-numero2) );
alert(" el resultado es " +(numero1-numero2));
document.write("<h1> el resultado es <h1>"+(numero1-numero2));
}else if(c == "/"){
console.log( "la suma de " +numero1+" y " +numero2+ " es  "+(numero1/numero2) );
alert(" el resultado es " +(numero1/numero2));
document.write("<h1> el resultado es <h1>"+(numero1/numero2));
}

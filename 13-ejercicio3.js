'use strict'

var numero1 = (parseInt(prompt( "ingrese el primer numero  ", 0 )));
var numero2 = (parseInt(prompt( "ingrese numero 2  ", 0 )));



document.write("<h1>de "+ numero1+ " a "+numero2+ " estan estan estos numeros  ");
for(var i = numero1; i <= numero2; i++){
    document.write(i+"<br/>");
}
    
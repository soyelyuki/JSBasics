'use strict'

//tabla de multiplicar de un numero 

var N = parseInt(prompt("ingrese numero ",1 )) ;

for(var i =1; i <= 10; i++){
    document.write(i+" x "+N+" = "+(i*N)+ "<br/>");
}
// todas las tablas de multiplicar
for(var c =1; c <= 15; c++){
    document.write("<h1>Tabla del " +c+"</h1>");
    for(var i =1; i <= 10; i++){
    document.write(i+" x "+N+" = "+(i*N)+ "<br/>");
}
}
'use strict'

// arrays , arreglos , matrices 

var  nombre=  "Victor";
var Nombres = ["victor ","juan ","manolo ","jose ",52,true];

var lenguajes = new Array("php","java","python","javascript","go","c++");


document.write("<h1> lenguajes de programacion del 2018</h1><br/>");
document.write("lenguajes")

lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+(indice+1)+ "  - " +elemento+"</li>");
});

document.write("</ul>");
/*
for (var i = 0; i < lenguajes.length;i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}



var elemento = parseInt(prompt("que elemento del array quieres ",0));
if(elemento >= Nombres.length){
    alert(" inreoduce el numero correcto menor que "+Nombres.length);
}else{
    alert("el nombre es "+ (Nombres[elemento]));
}

//alert(Nombres[elemento]);
*/
'use strict'
/*
1.-pida 6 numeros por pantalla  y los meta en un array 
2.-mostrar el array entero ( todos sus elementos ) en el cuerpo de la pagina 
3.-ordenarlo y mostrarlo 
4.-mostrar cuantos elementos tiene ele array 
5.-busqueda de un valor introducido por el usuario que nos diga 
*/
//pedir 6 numeros 
//var numeros = new Array(6);



document.write("<h1> los numeros son <h1>");
var numeros = [];
for(var i =0; i <= 5; i++){
    //numeros[i] = parseInt(prompt("introduce un numero"))
    numeros.push(parseInt(prompt("introduce un numero")))
    document.write("<li>"+numeros[i]+"</li>")
}
// mostrar el array por la consola y en la pagina
console.log(numeros);

// Ordenarlo y mostrarlo : 
var ordenado = numeros.sort(function(a, b){return a - b});
document.write("<h1>lista de numeros ordenados alfabeticamente");
for(let valor3 in ordenado){
    document.write("<li>"+ordenado[parseInt(valor3)]+"</li>")
};

//invertis numeros 
var ordenado = numeros.reverse(function(a, b){return a - b});
document.write("<h1>lista de numeros ordenados alfabeticamente");
for(let Valor in ordenado){
    document.write("<li>"+ordenado[parseInt(Valor)]+"</li>")
};

//cuantos elementos tiene un array  : 
document.write("<h1> el array tiene "+numeros.length +"  elementos </h1>");

//buscador :: no probado 
/*
var busqueda = parseInt(prompt("Cual valor desea buscar?", 0));
 
var posicion = numeros.findIndex( numero => numero == busqueda);
 
if(posicion && posicion != -1){
    document.write("<h1>Array encontrado</h1>")
    document.write("<p>Este numero si se encuentra dentro de los valores del array</p>");
    document.write("<p>Su posicion es: "+posicion);
}else{
    document.write("<h1>Array no encontrado</h1>")
    document.write("<p>Este numero no se encuentra en los valores del array</p>");
}
*/

'use strict'

//transformacion de textos

var  numero = 444;
var texto1 = "bienvenido al curso de javascript";
var texto2 = "es un muy buen curso "; 


var busqueda =  texto1.lastIndexOf("curso");
console.log(busqueda);
/*
indexof permite encontrar donde esta la palabra 
 lastindexof nos indica donde esta el ultimo uso de esa palabra 
.search , lo mismo que index of 
match entrega mas informacion 
startswith("bi") da un booleano de busqueda de texto al inicio.
include("") busca un case sensitive si es true o false (si esta o no la palabra)
----------------
replace(x,y) reemplaza el texto x por y 
slice(14) separar el texto a partir de cierto numerod e character
split() mete todo el string dentro de un array . util para buscadores.
trim() corta los espacios por delante y detras   .

*/

//Reemplazar texto por otro 


/*
var dato = numero.toString(); //  convierte int a string 
    dato = texto1.toLowerCase(); // convierte a minusculas y toUpperCase a mayusculas


console.log(dato); 

// calcular loingitud 

var nombre = "jtoro juan"; 
    
//console.log(nombre.length);


// como concatenar texto 

var texto_total = texto1.concat(" "+texto2);
console.log(texto_total);
*/


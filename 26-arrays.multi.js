'use strict'

var categorias =['accion','terror','comedia'];
var peliculas =['la verdad duele','la vida es bella','el gran torino'];

var cine = [categorias,peliculas];
// el primer numero seleccion el array y el segundo la posicion . 
//console.log(cine[0][1]);

//añade elementos al array 
var elemento = " ";


do{
    elemento = prompt("introduce una palabra");
    peliculas.push(elemento);

}while(elemento != "acabar");


console.log(peliculas);
/*
para buscar elementos en la raid   :  si imprimo la variable me da  la posicion

var indice = peliculas.index.of('grantorino');
if (indice> -1){
    peliculas.splice(indice, 1); cuantos indice quiero eliminar
}
console.log(peliculas);
------------------
para convertir una raid a texto  
var peliculas_string = peliculas.join();
------------------
var cadena =" text1, text2, texto3";
var cadena_array= cadena.split(", "); separados por una coma y un espacio 

sort y reverse permiten ordenar el array 
*/

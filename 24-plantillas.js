'use strict'

//plantillas de texto 

var nombre = prompt("mete tu nombre");
var apellidos = prompt("mete apellidos");

//var texto =" mi nombre es ; " +nombre+ "<br/> mis apellidos son : "+apellidos;

//Comillas invertidas 
var texto = `   
    <h1>hola que tal </h1>
    <h3> Mi nombre es : ${nombre}</h3>
    <h3> Mis apellidos son : ${apellidos}</h3>
`;
document.write(texto);


'use strict'

//pruebas let y var
// var deja una variable global 
var numero = 40 
console.log(numero); // 


if(true){
    var numero = 50;
    console.log(numero); // 

}

console.log(numero); // 

//prueba con let  (solamente actua en el valor  local )
var texto =" curso js victor";
console.log(texto);   

if(true){
let texto =" curso laravel 5 "
console.log(texto);
}

console.log(texto);
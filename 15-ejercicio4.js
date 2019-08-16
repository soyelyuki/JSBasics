'use strict'

/*muestre todos los numeros divisores de un numero introducido
*/

var numero1 = (parseInt(prompt("ingrese numero", 1)));

for(var i = 1; numero1 >= i; i++ ){
   if( numero1%i == 0){
    console.log("divisible por "  + i);
   }
}

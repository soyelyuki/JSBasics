'use strict'

/*mostrar todos los numeros  que hay
entre dos numeros introducir todos los numeros pares entre dos numeros */

var numero1 = (parseInt(prompt("introduce el numero 1 "))); 
var numero2 = (parseInt(prompt("introduce el numero 2 ")));

while(numero1 < numero2){
    numero1++;
// % es el sobrante de la division , 
    if(numero1%2 != 0 )
        console.log("el "+ numero1 +" es Impar ")
}
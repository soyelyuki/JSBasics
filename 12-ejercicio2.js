'use strict'

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt ('ingresa numeros hasta que sea un negativo'))

    if(isNaN(numero)){  // aqui comnprueba que lo ingresado no es un string
        numero = 0;
    }else if (numero >=0){
        suma = suma + numero;
           // suma += numero , es lo mismo que arriba 
        contador++;
    }

    console.log (suma);
    console.log (contador);
}while(numero >=0)

alert(" la suma de todos los numeros es   "  + suma);
alert(" la media de todos los numeros es  "  + (suma/contador));
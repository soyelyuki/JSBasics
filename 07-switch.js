'use strict'

var edad = 25;
var imprime =" ";

switch(edad){
    case 18:
        imprime =" acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime =" adulto"
    break;
    case 40:
        imprime =" crisis de los 40 ";
    break;
    case 70:
        imprime =" anciano";
    break;
    default: 
           imprime =" tu edad es caca";
    break;
    }


    console.log(imprime);
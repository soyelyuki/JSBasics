'use strict'


function calculadora(numero1,numero2,mostrar = false){


  if(mostrar == false){  
    console.log("suma: "+ (numero1+numero2));
    console.log("la resta: "+(numero1-numero2));
    console.log("la division  "+(numero1/numero2));
    console.log("la multilicacion "+(numero1*numero2));
   
}else{
    document.write("suma: "+ (numero1+numero2)+"<br/>");
    document.write("la resta: "+(numero1-numero2)+"<br/>");
    document.write("la division  "+(numero1/numero2)+"<br/>");
    document.write("la multilicacion "+(numero1*numero2)+"<br/>");
    document.write("*******************************"+"<br/>");
}
}

//console.log(calculadora(),calculadora(),calculadora());
calculadora(10,5);
calculadora(2,5,true);
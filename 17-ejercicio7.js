'use strict'

//tabla de multiplicar de un numero 

var N = parseInt(prompt("ingrese numero ",1 )) ;


for(var i =1; i <= 100; i++){
    document.write(i+" x "+N+" = "+(i*N)+ "<br/>");
}

/*
for( var i = 1; i <= N; i++ ){
    if (N % i == 0 ){
    console.log(" pertenece a la tabla" + i);
    }else{
    console.log(" intentalo");

}
}
*/
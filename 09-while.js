'use strict'

// bucle while 


var year = 2018;

while(year <= 2100){
      //ejecuta esto
      console.log("estamos en el año: " +year);

      if( year == 2000){      // quiebre
          break; 
      }

      year--;

}


//DO while 
var  years = 30;
do{
    alert("solo cuando sea diferente a 20");
    years--;
}while (years > 25);
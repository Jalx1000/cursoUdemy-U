"use strict";
//try catch van de la mano try es para poner donde esta el error para q luego catch siga con el procedimiento del codigo, finally es opcional y tambien se ejecutara sin que de error try o si es q da error try, finally se seguira ejecutando

try {
  let x = 10;
  // miFuncion();
  throw "Mi error"; //throw es para dar nuestra propia alerta de error
} catch (error) {
  console.log(error);
} finally {
  console.log("Termina la revision de errores");
}
console.log("Continuamos");


let resultado = 5; //cambiar a un string cualquiera devolvera 'No es un numero'
try {
//   x = 3;
  if (isNaN(resultado)) throw "No es un numero";
  else if (resultado == "") throw "Es cadena vacia";
  else if(resultado>=0) throw 'Es valor positivo'
  else if(resultado<0) throw 'Es valor negativo'
}
 catch (error) {
  console.log(error);
  //console.log(error.name);//nombre del error
  //console.log(error.message);//mensaje del error
}
finally{
	console.log('Termina revision de errores')
}


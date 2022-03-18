"use strict"
//use strict es para dar modo estricto a js,tal que obliga a declarar de q tipo sea una varibale
//se lo inicia al inicio del programa o al inicio de una funcion

let x=10;
console.log(x);

//pruebaDeError Muestra q no esta definido por que no se le declaro el tipo de varibale (let,var o const)
pruebaDeError = 2;


miFuncion();

function miFuncion(){
	"use strict"
	let y=15;
	console.log(y);
}
function miFuncion1(){
	console.log('funcion 1');
}

function miFuncion2(){
	console.log('funcion 2');
}

miFuncion1();
miFuncion2();

//Funcion de tipo callback

function imprimir(mensaje){
	console.log(mensaje);
}

function suma(a,b,imprimir){
	res=a+b;
	imprimir(`Resultado: ${res}`)
}

suma(5,8,imprimir);
//

// LLAMADS ASINCRONAS CON USO setTimeout

function miFuncionCallBack(){
	console.log('saludo asincrono despues de 3 segundos');
}

setTimeout(miFuncionCallBack,1000);//los 1000 esta en milisegundo y da a entender en cuanto tiempo se llegaria a ejecutar la funcion

setTimeout(function(){console.log('saludo asicrono 2')},2000);

setTimeout(()=>console.log('saludo asincrono 3'),3000);


//setInterval

let reloj=()=>{
	let fecha=new Date();
	console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

setInterval(reloj,1000);

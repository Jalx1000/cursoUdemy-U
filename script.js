let a=52;
let valMin=0,valMax=10;

if(a>=valMin && a<=valMax){
	console.log("Dentro del rango")
}else{
	console.log("fuera del rango")
}


let vaciones=false,descanso=false;
if(vaciones || descanso){
	console.log('EL padre tiene vacaciones')
}else{
	console.log('EL padre esta ocupado')
}


let resultado = (3>2) ? "verdadero" : "falso";  //OPERADOR TEMARIO ES IGUAL A = (CONDICION) ? "CONDICON VERDADERO" : "CONDICION FALSA" ////NO ES NECESARIO PONER PARENTESIS EN LA CONDICION
console.log(resultado);

resultado= (a%2 == 0) ? "es par" : "es impar"; 
console.log(resultado);

let numero="8";
let edad=Number(numero);
resultado2= isNaN(edad)?"No es un numero": edad>=18 ? "Puede votar":"Muy joven para votar";
console.log(resultado2)
// console.log(typeof(edad));


let mes =2
let estacion;

if(mes==1 || mes==2 || mes==12){
	estacion="invierno";
}else if(mes==3 || mes==4 || mes==5){
	estacion="primavera";
}else if(mes==6 || mes==7 || mes==8){
	estacion="verano";
}else if(mes==9 || mes==10 || mes==11){
	estacion="otoño"
}else{
	estacion="valor incorrecto";
}
console.log(estacion);


let hora=2;

if(hora>=6 && hora<=11){
	console.log("Buenos dias")
}else if(hora>=12 && hora<=18){
	console.log('Buenas Tardes');
}else if(hora>=19 && hora<=24){
	console.log('Buenas noches');
}else if(hora>=0 && hora<6){
	console.log('Buenas durmiendo')
}else{
	console.log("numero incorrecto")
}
console.log(`\n`);

// CICLOS
 let contador= 0;

while (contador < 3){
	contador++;
	console.log(contador);
}
console.log(`\n`);
 contador=-1
do{
	console.log(contador);
	contador++;
}while(contador<3);
console.log(`\n`);

for(let i=0;i<3;i++){
	console.log(i)
}
console.log(`\n`);

for(i=0;i<=10;i++){
	if(i%2==0){
		console.log(i)
		break;
	}
}
console.log(`\n`);

for(i=0;i<=10;i++){
	if(i%2!=0){
		continue;
	}	
	console.log(i)
}

inicio:
for(i=0;i<=10;i++){
	if(i%2!=0){
		continue/*break*/ inicio;
	}	
	console.log(i)
}


const autos=['bmw','mercedez','volvo'];

for(i=0;i<autos.length;i++){
	autos.forEach
	console.log(autos[i])
}

function suma(a,b){
	return console.log('suma: '+(a+b));
}

suma(5,3)

let resultadoSuma= function(a,b){return a+b};
// console.log(resultadoSuma(1,3))

// function Sel Invocking

(function(a,b){
	console.log('Ejecutando la funcion: '+ (a+b)) 
})(3,2);

let sumarFunctionTipoExpresion = function (a,b){
 	return a+b
};
sumarFunctionTipoExpresion(42,3);

const sumarFunctionTipoFlecha = (a,b) => a+b;
sumarFunctionTipoFlecha(2,3);


//SUMAR TODOS LOS ARGUMENTOS

let resultadoDeArgumentos = sumarTodo(1,3,5,7,8,9);
console.log(resultadoDeArgumentos)

function sumarTodo(){
	let suma=0;
	for(i=0;i<arguments.length;i++){
		suma+=arguments[i];
	}
	return suma
}

//

//Paso por valor

let x=10;

function cambiarValor(valor1){
	valor1=25;
}

//cambio por valor
cambiarValor(x)//10
console.log(x);
// console.log(valor1);

//

//PASO POR REFERENCIA
const persona = {
	nombre: 'juan',
	apellido: 'perez'
}

function cambiarValorObejeto(p1){
	p1.nombre='carlos';
	p1.apellido='lara';
}
//Paso por referencia
cambiarValorObejeto(persona);
console.log(persona);
//

//PARA CONTRUCTORES ES RECOMENDABLE Q COMIENCEN CON MAYUSCULA
//Funcion de contructor de tipo persona
function Persona(nombre,apellido,email){
	this.nombre = nombre;
	this.apellido=apellido;
	this.email=email;
	this.nombreCompleto=function(){
		return this.nombre+' '+this.apellido;
	}
}
Persona.prototype.tel='767676';//PROTYPE LE DA LA PROPIEDAD CREADA A TODOS LOS OBJETOS 

const padre = new Persona('javier','Agustin','ja@mail.com')
padre.tel='454545';
console.log(padre.tel);
console.log(padre);

const madre = new Persona('Mayen','Peñafiel','ma@mail.com')
console.log(madre.nombreCompleto());
console.log(madre.tel);


padre.nombre='pepe';
console.log(padre);

/*DISTIANTAS FORMAS DE CREAR OBJETOS

let miObjeto=new Object();
let miObjeto2={};

let miCadena=new String('cadena');
let miCadena2='cadena';

let miNumero=new Number(2);
let miNumero2=2;

let miBoolean=new Boolean(false);
let miBoolean2=false;

let miArreglo=new Array();
let miArreglo2=[];

let miFuncion=new Function();
let miFuncion2= function(){};

	// los primeros son formas mas formales y los segundos son los mas ideales
*/


//Uso de call

const persona1 ={
	nombre:'juan',
	apellido:'Perez',
	nombreCompleto:function(titulo,tel){
		return titulo +': '+this.nombre+' '+this.apellido +', '+ tel;
	}
}

const persona2 = {
	nombre:'carlos',
	apellido:'lara',
}

console.log(persona1.nombreCompleto());
console.log(persona1.nombreCompleto.call(persona2));
console.log(persona1.nombreCompleto.call(persona2,'ing','767676'));
//Uso de apply la diferencia es q con apply se manda en forma de arreglo mientras q call se manda el valor de cada uno
let arreglo=['ing','767676']
console.log(persona1.nombreCompleto.apply(persona2,arreglo));


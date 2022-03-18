const persona={
	nombre:'Juan',
	apellido:'Perez',
	nombreCompleto:function(){return this.nombre+' '+ this.apellido},
}

console.log(persona)
console.log(persona.apellido)
console.log(persona.nombreCompleto());


//OTRA MANERA DE CREAR UN OBJETO
const persona2 = new Object();
persona2.nombre='Carlos';
persona2.direccion='saturno';
persona2.tel=7667623;
//


//DIFERENTES FORMAS DE ACCERDER A PROPIEDADES DE OBJETOS
console.log(persona.apellido);
console.log(persona['apellido']);

/*for (nombrePropiedad in persona){
	console.log(nombrePropiedad);
	console.log(persona[nombrePropiedad]);
}*/

//


//AGREGAR O ELIMINAR PROPS DE UN OBJETO
persona.tel=153515;
console.log(persona);
delete persona.tel;
console.log(persona);
//

//FORMAS DE IMPRIMIR UN OBJETO
	// concatenando
		console.log(persona.nombre+' '+persona.apellido);
	//for in
		for (personaFor in persona){
			console.log(persona[personaFor]);
		}
	// usando Object.values esto transforma el objeto a un array
		let personaArray = Object.values(persona);
		console.log(personaArray);
	// JSON.stringify transforma un objeto en cadena
		let personaString= JSON.stringify(persona);
		console.log(personaString);
//
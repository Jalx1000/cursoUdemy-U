const persona={
	nombre:'Juan',
	apellido:'Perez',
	edad:'28',
	idioma:'es',
	get lang(){
		return this.idioma.toUpperCase();
	},
	set lang(lang){
		this.idioma=lang.toUpperCase();
	},
	get nombreCompleto(){
		return this.nombre+' '+ this.apellido
	}
}
// console.log(pesona.nombreCompleto()) CON GET NO ES NECESARIO USAR EL PARENTESIS EN `nombreCompleto()`
//EL GET ES PARA OBTENER ALGO DEL OBJETO Y EL SET ES PARA DARLE ALGO AL OBJETO 


console.log(persona.nombreCompleto);

console.log(persona.lang);

persona.lang='english';
console.log(persona.lang);
console.log(persona.idioma);

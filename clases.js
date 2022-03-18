//NO es posible crear objetos antes de declarar
//NO aplica el concepto de Hoisting
//const persona2=new Persona('Karla','Juarez');

class Persona{

	static contadorObjetosPersona=0; //atributo de nuestra clase no confundir con atributos de la clase
	// email='Valor default email'; //atributo de nuestros objetos
	static  get MAX_OBJ(){
		return 5;// esto funciona como una constante porque solo se lee el valor pero no tiene el set q se modifica
	}
	constructor(nombre,apellido){
		this._nombre = nombre;
		this._apellido = apellido;
		if(Persona.contadorObjetosPersona < Persona.MAX_OBJ){
			this.idPersona = ++Persona.contadorObjetosPersona;
		}else{
			console.log('Se han superado el maximo de objetos permitidos')
		}
		// console.log('Se incrementa el valor en: '+Persona.contadorObjetosPersona)
	}

	get nombre(){
		return this._nombre;
	}

	set nombre(nombre){
		this._nombre=nombre;
	}

	get apellido(){
		return this._apellido;
	}

	set apellido(apellido){
		this._apellido=apellido;
	}

	nombreCompleto(){
		return this._nombre+ ' ' + this._apellido
	}
	//Sobreescribiendo el metodo de la calse oadre(Object)
	toString(){
	//Se aplica polimorfismo (miltiple formas en tiempo de ejecucion)
	//el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
		return this.idPersona+' '+this.nombreCompleto();
	}
	
	static saludar(){
		return console.log('saludando desde el metodo static')
	}x

	static saludar2(persona){
		console.log(persona.nombre);
	}
}

class Empleado extends Persona{
	
	constructor(nombre,apellido,departamento){
		super(nombre,apellido,departamento);
		this._departamento=departamento;
	}

	get departamento(){
		return this._departamento;
	}

	set departamento(departamento){
		this._departamento=departamento;
	}

	//SOBREESCRITURA
	nombreCompleto(){
		return super.nombreCompleto()+', '+this._departamento;
	}
}

const persona1=new Persona('Juan','Perez');
console.log(persona1);
console.log(persona1.nombre);//get nombre
console.log(persona1.nombreCompleto());//get nombre



persona1.nombre='carlos gonzales';//set nombre()
console.log(persona1.nombre);//get nombre

const empleado1=new Empleado('NAT','VACA','Sistemas');
console.log(empleado1.departamento);

console.log(empleado1.nombreCompleto());

console.log(empleado1.toString())
console.log('\n ')

// persona1.saludar(); no es posible llamar un metodo static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);
Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);



// console.log(persona1.email) //atributo no static
// console.log(empleado1.email)

console.log(persona1.toString());
console.log(empleado1.toString());

const persona2=new Persona('Karla','Meneses');
console.log(persona2.toString());
console.log(Persona.contadorObjetosPersona);

console.log(Persona.MAX_OBJ);

const persona3=new Persona('Karla','Meneses');
const Empleado3=new Persona('Karla','Meneses');
const Empleado4=new Persona('Karla','Meneses');
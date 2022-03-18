class Persona {
  static contadorPersonas = 0;

  constructor(nombre, apellido, edad) {
    this._idPersona = ++Persona.contadorPersonas;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }

  get idPersona(){
    return this._idPersona;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

  get edad() {
    return this._edad;
  }

  set edad(edad) {
    this.edad = edad;
  }
  toString(){
	return `${this._idPersona} ${this._nombre} ${this._apellido} ${this.edad}`; 
	}
}


class Empleado extends Persona {
  static contadorEmpleado = 0;
  constructor(nombre,apellido,edad,sueldo) {
	 super(nombre,apellido,edad);
    this._idEmpleado = ++Empleado.contadorEmpleado;
    this._sueldo = sueldo;
  }
  get idEmpleado() {
    return this._idEmpleado;
  }

  get sueldo() {
    return this._sueldo;
  }

  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }

  toString() {
    return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
  }
}

class Cliente extends Persona {
  static contadorClientes = 0;
  constructor(nombre,apellido,edad,fechaRegistro) {
	  super(nombre,apellido,edad);
    this._cliente = ++Cliente.contadorClientes;
    this._fechaRegistro = fechaRegistro;
  }

  get cliente() {
    return this._cliente;
  }

  get fechaRegistro() {
    return this._fechaRegistro;
  }

  set fechaRegistro(fechaRegistro) {
    return (this._fechaRegistro = fechaRegistro);
  }

  toString() {
    return `${super.toString()} ${this._cliente}, ${this._fechaRegistro}`;
  }
}

//Prueba clase persona
let persona1 = new Persona("Juan", "Perez",28);
let persona2 = new Persona("mar", "pedo",28);
console.log(persona1.toString());
console.log(persona2.toString());

const empleado1= new Empleado('sor','Raimunda',54,688);
const empleado2= new Empleado('Laura','Raimunda',12,300);
console.log(empleado1.toString())
console.log(empleado2.toString())

const cliente1=new Cliente('jal','ale',20,new Date())
const cliente2=new Cliente('maye','pena',40,new Date())
console.log(cliente1.toString())
console.log(cliente2.toString())
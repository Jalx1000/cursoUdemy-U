//Buena Practica: es poner this._nombre y agregar los metodos get y set para tener completa la clase
class Empleado{
	constructor(nombre,sueldo){
		this.nombre=nombre;
		this.sueldo=sueldo;
	}
	//obtenerDetalles se va a sobreescribir en la clase hija Gerente
	obtenerDetalles(){
		return `Empleado: ${this.nombre}, sueldo: ${this.sueldo}`
	}
}

class Gerente extends Empleado{
	constructor(nombre,sueldo,departamento){
		super(nombre,sueldo);
		this.departamento=departamento;
	}

	//obtenerDetalles se sobreescribio en la clase hija Gerente
	obtenerDetalles(){
		return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`
	}
}


//Polimorfismo
//tipo.obtenerDetalles() funcione por q esta declarado en la clase Padre e Hija, el tipo hace referencia a las clases Empleado y Gerente
function determinarTipo(tipo){
	console.log(tipo.obtenerDetalles());

	//Para instanceof usarlo para determinar que tipo de clase es es mejor iniciar desde la clase de mnor rango hasta el de mayor rango 

	if(tipo instanceof Gerente){
		console.log('Es un objeto de tipo Gerente');
		console.log(tipo.departamento);
	}
	else if(tipo instanceof Empleado){
		console.log('Es un objeto de tipo Empleado')
		console.log(tipo.departamento);
		//no funciona por departamento no es declarado en la clase Empleado
	}
	else if(tipo instanceof Object){
		console.log('Es un tipo Object')
	}
}




let empleado1=new Empleado ('cristiano',3200);
console.log(empleado1.obtenerDetalles());

let gerente1 =new Gerente('Carlos',5000,'Sistemas')
console.log(gerente1.obtenerDetalles())

// se peude ver en la salida de obtenerDetalles() son diferentes entre la clase Padre como la clase Hija

// pero si se desea llamar a obtenerDetalles() de la clase Hija pero queremos usar el obtenerDetalles() de la clase Padre se usa la palabra super

determinarTipo(empleado1);
determinarTipo(gerente1);



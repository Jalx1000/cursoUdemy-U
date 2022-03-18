class DispositivoEntrada{
	constructor(tipoEntrada,marca){
		this._tipoEntrada = tipoEntrada;
		this._marca = marca;
	}

	get tipoEntrada(){
		return this._tipoEntrada;
	}

	set tipoEntrada(tipoEntrada){
		this._tipoEntrada=tipoEntrada;
	}

	get marca(){
		return this._marca;
	}

	set marca(marca){
		this._marca=marca;
	}
	// toString(){
	// 	return `${this._tipoEntrada} ${this._marca}`
	// }
}



class Raton extends DispositivoEntrada{
	static contadorRatones=0;
	constructor(tipoEntrada,marca){
		super(tipoEntrada,marca);
		this._idRaton=++Raton.contadorRatones;
	}

	get idRaton(){
		return this._idRaton;
	}

	toString(){
		return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this.tipoEntrada}, marca: ${this._marca}]` 
	}
}

class Teclado extends DispositivoEntrada{
	static contadorTeclados=0;
		constructor(tipoEntrada,marca){
			super(tipoEntrada,marca)
			this._idTeclado=++Teclado.contadorTeclados;
		}

		get idTeclado(){
			return this._idTeclado;
		}

		toString(){
			return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this.tipoEntrada}, marca: ${this._marca}]`
		}
}


//

class Monitor{
	static  contadorMonitores=0;
	constructor(marca,tamaño){
		this._idMonitor=++Monitor.contadorMonitores;
		this._marca=marca;
		this._tamaño=tamaño;
	}

	get idMonitor(){
		return this._idMonitor;
	}

	get marca(){
		return this._marca;
	}

	set marca(marca){
		this._marca=marca;
	}

	get tamaño(){
		return this._tamaño;
	}

	set tamaño(tamaño){
		this._tamaño=tamaño;
	}

	toString(){
		return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca
		}, tamaño: ${this._tamaño}]`
	}

}

class Computadora{
	static contadorComputadoras=0;

	constructor(nombre,monitor,raton,teclado){
			this._idComputadoras=++Computadora.contadorComputadoras;
			this._nombre=nombre;
			this._monitor=monitor;
			this._raton=raton;
			this._teclado=teclado;
		}

	toString(){
		return `Computadora ${this._idComputadoras}: ${this._nombre}\n ${this._monitor} \n ${this._raton} \n ${this._teclado}`
	}	
}

class Orden{
	static contadorOrdenes=0;
		constructor(){
			this._idOrden=++Orden.contadorOrdenes;
			this._computadoras=[];
		} 

		get idOrden(){
			return this._idOrden;
		}

		/*Aqui se relaciona la clase de orden con la clase computadora*/
		agregarComputadoras(computadora){
			this._computadoras.push(computadora);
		}

		mostrarOrden(){
			let computadorasOrden='';
			for(let computadora of this._computadoras){
				computadorasOrden+=`\n${computadora}`
			}
			console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
		}
}


let entrada1 = new DispositivoEntrada('Tipo-C','Thunderbolt')
console.log(entrada1.toString());//Funciona

let raton1=new Raton('Cable','Genius');
let raton2=new Raton('Bluetooth','Razer');
console.log(raton1.toString())
console.log(raton2.toString())

let teclado1=new Teclado('USB','Toshiba');
let teclado2=new Teclado('USB','TKL');
console.log(teclado1.toString());
console.log(teclado2.toString());

let monitor1=new Monitor('Sure','Full HD');
let monitor2=new Monitor('LG','4K');
console.log(monitor1.toString());
console.log(monitor2.toString());

let computadora1=new Computadora('HP',monitor1,raton1,teclado1);
console.log(computadora1.toString())
//console.log(`${computadora1}`);//Lo mismo que console.log(computadora1.toString()); porque se llama automaticamente al toString 

let computadora2=new Computadora('Armada',monitor2,raton2,teclado2);
console.log(`${computadora2}`);


let orden1=new Orden();
orden1.agregarComputadoras(computadora1);
orden1.agregarComputadoras(computadora2);
orden1.agregarComputadoras(computadora2);
orden1.mostrarOrden()

let orden2=new Orden();
orden2.agregarComputadoras(computadora2);
orden2.agregarComputadoras(computadora1);
orden2.mostrarOrden();
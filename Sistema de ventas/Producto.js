class Producto{
	static contadorProductos=0;
	constructor(nombre,precio){
		this._idProducto=++Producto.contadorProductos;
		this._nombre=nombre;
		this._precio=precio;
	}

	get idProducto(){
		return this._idProducto;
	}

	get nombre(){
		return this._nombre;
	}
	set nombre(nombre){
		this._nombre=nombre;
	}

	get precio(){
		return this._precio;
	}

	set precio(precio){
		this._precio=precio;
	}

	toString(){
		return `idProducto: ${this._idProducto} \nnombre: ${this._nombre}\nprecio: ${this._precio}bs`
	}
}


class Orden{
	static contadorOrdenes=0;
	static get MAX_PRODUCTOS(){
		return 5
	}

	constructor(){
		this._idOrden=++Orden.contadorOrdenes;
		this._productos=[];
		// this.contadorProductosAgregados=0;
	}

	get idOrden(){
		return this._idOrden;
	}

	agregarProductos(producto){
		if( this._productos.length < Orden.MAX_PRODUCTOS){
			this._productos.push(producto);
			// otra dorma de agregar productos this._productos[this.contadorProductosAgregados]=producto;
		}else{
			console.log('No se puede agregar mas productos')
		}
	}

	calcularTotal(){
		let totalVenta=0;
		for(let producto of this._productos){
			totalVenta += producto._precio;
		}

		return totalVenta;
	}

	mostrarOrden(){
		let productoOrden='';
		for(let producto of this._productos){
			productoOrden+='\n{'+producto.toString()+'}';
		}
		console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}bs Productos: ${productoOrden}`)
	}
}

// console.log(producto1.toString());
const producto1= new Producto('Coca-Cola',15)
const producto2= new Producto('Pizza',25)

let orden1= new Orden()
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);

orden1.mostrarOrden();
console.log('\n')
let orden2=new Orden()
const producto3=new Producto('papa',5);
orden2.agregarProductos(producto3);
orden2.agregarProductos(producto2);
orden2.mostrarOrden();
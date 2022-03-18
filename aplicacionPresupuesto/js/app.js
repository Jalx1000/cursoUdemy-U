const ingresos=[
	new Ingreso('Salario',2100.00),
	new Ingreso('Venta Coche',1500.00)
];

const egresos=[
	new Egreso('Renta',900),
	new Egreso('Ropa',100),
];

let cargarApp=()=>{
	cargarCabecero();
}
let totalIngresos=()=>{
	let totalIngreso=0;
	for(let ingreso of ingresos){
		totalIngreso+=ingreso.valor;
	}
	return totalIngreso;
}

let totalEgresos=()=>{
	let totalEgreso=0;
	for(let egreso of egresos){
		totalEgreso+=egreso.valor;
	}
	return totalEgreso;
}


cargarCabecero=()=>{
	let presupuesto = totalIngresos()-totalEgresos();
	let porcentajeEgreso = totalEgresos()/totalIngresos();
	document.getElementById('presupuesto').innerHTML=formatoMoneda(presupuesto);
	document.getElementById('porcentaje').innerHTML=formatoPorcentaje(porcentajeEgreso);
	document.getElementById('ingresos').innerHTML=formatoMoneda(totalIngresos());
	document.getElementById('egresos').innerHTML=formatoMoneda(totalEgresos());
}

const formatoMoneda=(valor)=>{
	return valor.toLocaleString('es-ES',{style:'currency', currency:'BOB', minimumFractionDigits:2})
}

const formatoPorcentaje=(valor)=>{
	return valor.toLocaleString('es-ES',{style:'percent', minimumFractionDigits:0})
}
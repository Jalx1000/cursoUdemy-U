// cambiarH1=(propH1)=>{propH1.innerHTML = 'Titulo Cambiado';}

document.getElementById('tituloH2').onclick=cambiarTituloH2;
//tituloH2 llama a la funcion callback por eso cambia el contenido del h2
function cambiarTituloH2(){
	document.getElementById('tituloH2').innerHTML='Titulo h2 cambiado'
}

function mostrar(){
	alert('cargado')
	let texto='';
	if(navigator.cookieEnabled){
		texto='Cookies habilitada';
	}else{
		texto='Cookies no habilitada';
	}

	document.getElementById('mostrar').innerHTML=texto;
}

function convertir(nombreInput){
	nombreInput.value = nombreInput.value.toUpperCase();
}

function rojo(parrafoRojo){
	parrafoRojo.style.color='red';
}

function yellow(parrafoAmarillo){
	parrafoAmarillo.style.color='yellow';
}

function verde(pVerde){
	console.log('si se ejecuta yellow')
	pVerde.style.color='green';
}

function cambiarBackground(elementoInput){
	elementoInput.style.background='lightblue';
}

function regresar(elementoInput){
	elementoInput.style.background='white'
}

//addEventlistener

document.getElementById('nombre').addEventListener('focus',(evento)=>{evento.target.style.background='lightblue'});//Con funcion flecha
document.getElementById('nombre').addEventListener('blur',regresarFondo);

document.getElementById('apellido').addEventListener('focus',cambiarFondo);
document.getElementById('apellido').addEventListener('blur',regresarFondo/*Esta es una funcion callback*/);

function cambiarFondo(evento){
	let componente=evento.target;
	componente.style.background='lightblue';
}

function regresarFondo(evento){
	let componente=evento.target;
	componente.style.background='white';
}

//DE FORMULARIO APLICA A SUS HIJOS
const forma=document.getElementById('forma');

forma.addEventListener('focus',(evento)=>{
	evento.target.style.background='lightgreen'
},true)
forma.addEventListener('blur',(evento)=>{
	evento.target.style.background=''
},true)
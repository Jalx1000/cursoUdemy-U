let cabecero = document.getElementById("cabecero");
console.log(`Valor cabecero: ${cabecero.innerHTML}`);
cabecero.innerHTML = "Cambiando cabecero";

// let parrafo=document.getElementById('parrafo');
// console.log(`Valor parrafo: ${parrafo.innerHTML}`);
// parrafo.innerHTML='hola parrafo'

let parrafos = document.getElementsByTagName("p");
//TagName devuelve un arreglo
console.log(`No. parrafos: ${parrafos.length}`);
for (i = 0; i < parrafos.length; i++) {
  console.log(`${i} - ${parrafos[i].innerHTML}`);
}
console.log("otra forma de hacer un for\n\n");

for (let parrafoDeParrafos of parrafos) {
  console.log(`Parrafos: ${parrafoDeParrafos.innerHTML}`);
}

let azul = document.getElementsByClassName("azul");
console.log(`Azules: ${azul.length}`);

let parrafo_azul = document.querySelectorAll("p.azul");
console.log(`Azules de parrafos: ${parrafo_azul.length}`);

function mostrarValores() {
  let formularioMostrar = document.forms["formulario"];
  let texto = "";
	let nombre=formularioMostrar['nombre'];
	let apellido=formularioMostrar['apellido'];
	texto= `${nombre.value}<br/>${apellido.value}`
	
//   for (let elemento of formularioMostrar) {
//     texto += elemento.value + "<br/>";
//   }
  //   console.log(texto)
  document.getElementById('valores').innerHTML=texto;
}



//document.write()

document.write('saludos desde write');
function mostrar(){
	document.write('saludos desde funcion write<br/>');
	document.write('Hay q tener cuidado por q al usar document.write se sobrescribe todo');
}

function mostrarTitulo(){
	document.getElementById('titulo').innerHTML='nuevo titulo cambiado'
	// document.write(cambio)
}
//con funcion flecha
cambiarImagen=()=> document.getElementById('imagen').src='http://globalmentoring.com.mx/imagenes/html5.png';

cambiarStyloJs=()=>document.getElementById('imagenCss').style.background='white'
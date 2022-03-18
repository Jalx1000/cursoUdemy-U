// let miPromesa = new Promise((resolver, rechazar) => {
//   let expresion = false;
//   if (expresion) {
//     resolver("Resolvio Correcto");
//   } else {
//     rechazar("Se produjo un error");
//   }
// });

// miPromesa.then(valor=>console.log(valor),error=>console.log(error));

// miPromesa
// .then(valor=>console.log(valor))
// .catch(error=>console.log(error));

let promesa = new Promise(
  (resolver /*Aqui se puede tener igual rechazar pero no es obligatorio*/) => {
    // console.log('inicio Promesa');
    setTimeout(() => resolver("Saludos desde promesa y timeout"), 2000);
    // console.log('Fin Promesa');
  }
);
// promesa.then((valorPromesa) => {console.log(valorPromesa);});

//async indica que una funcion regresa una promesa
async function miFuncionConPromesa() {
  return "Saludos desde promesa y async";
}

// miFuncionConPromesa().then(valor=>console.log(valor));

//async con await //await solo se puede usar dentro de una funcion declarada con async
//async nos indica que debe procesar una promesa

async function miFuncionConPromesaYAwait() {
  let miPromesa = new Promise((resolver) => {
    resolver("Promesa con await");
  });

  console.log(await miPromesa);
}
// miFuncionConPromesaYAwait();


//promesas,await,async y setTimeout
async function miFuncionPromesaAwaitTimeout(){
	let miPromesa=new Promise(resolver=>{
		console.log('inicio funcion');
		setTimeout(()=>resolver('promesa con wait y timeout'),2000);
	});

	console.log(await miPromesa);
	console.log('Fin funcion');
}
//await espera por una promesa y 'Fin funcion' se ejecuta despues de que await sea aplicada
miFuncionPromesaAwaitTimeout();
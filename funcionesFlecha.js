let miFunction = function () {
  return console.log(
    "saludos desde mi funcion creadad a partir de una varible"
  );
};
console.log(miFunction());

function saludos() {
  console.log("saludos desde mi funcion");
}
saludos();

const miFuncionFlecha = () => {
  console.log("saludos desde mi funcion flecha");
};
miFuncionFlecha();

//con funciones flecha no se aplica el concepto de hoisting osea llamar la funcion antes de ser creada

const miFuncionFlecha2 = () =>
  console.log("saludos desde miFuncionFlecha2 de una linea");
miFuncionFlecha2();

const saludar = () => {
  return "Saludos desde otra funcion flecha";
};
console.log(saludar());

const saludarAbreviado = () => "Saludos desde funcion flecha abreviado";
console.log(saludarAbreviado());

const regresaObjeto = () => ({ nombre: "juan", apellido: "lara" });
console.log(regresaObjeto());

// const funcionConParametros=(mensaje)=>{console.log(mensaje)}; //Si tiene un solo parametro se peude omitir los parentesis
const funcionConParametros = (mensaje) => {
  console.log(mensaje);
};
funcionConParametros("saludos desde funcion parametro");


// const funcionConVariosParametros=(ope1,ope2)=>ope1+ope2;//flecha de una linea
const funcionConVariosParametros=(ope1,ope2)=>{
	let resultado = ope1+ope2;
	return `Resultado: ${resultado}`;
}
console.log(funcionConVariosParametros(5,3))
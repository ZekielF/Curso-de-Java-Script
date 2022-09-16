//TYPEOF
/*es para identificar los tipos de datos js*/

let miNumero = 24;
typeof(miNumero); // 'number'

let miString = "Hola soy Zekiel";
typeof(miString); // 'string'

let miBoleano = false 
typeof(miBoleano); // 'boolean'

let miUndefined;
typeof(miUndefined); // 'undefined'

//--------------------------------------------

//PROMPT
/*el navegador pregunta ala persona y almacena los datos en la variable

var nombre = prompt("ingrese su nombre");
var edad = prompt("ingrese su edad");
var telefono = prompt("ingrese su telefono");

var mensajeFinal = "Nombre: " + nombre + ", Edad: " + edad + " y Telefono: " + telefono

alert(mensajeFinal);*/

//--------------------------------------------

//OPERACIONES ARITMÉTICA
/*suma, resta, multiplicacion, division, resto, decimales y potencia*/

var numero = 100;
numero = (numero + 10 - 5) * 2;
console.log(numero); // resultado 210

/*Division: peso [KG] / estatura [m2]
var estatura = prompt("ingrese su estatura");
var peso = prompt("ingrese su peso");
var Resultado = peso / estatura;
alert("su masa corporal es de: " + Resultado);
*/

//--------------------------------------------

//FLUJO CONDICIONAL
/*controla que cumpla con el requisito que se menciona en el ejemplo if cumple y else no cumple.
Logica boolean:

> Mayor 
< Menor 
>= Mayor o igual
<= Menor o igual
== Igual
!= Distinto 
&& y además
|| o sino 

example 1
el navegador pregunta al niño y el niño responde y si cumple su edad para tener cuenta bancaria.

var edad = prompt("ingrese su edad:");
if ( edad >= 18 ) {
  alert("Mayor de edad");
} else {
  alert("Menor de edad ");
}

example 2
el niño quiere ingresar, el navegador pregunta pero le aumentamos mas requisitos para que entre al juego.

var edad = prompt("ingrese su edad:");
var estatura = prompt("ingrese su estatura:");
if (edad >= 13 && estatura >= 1.30) {
  alert("Puede ingresar al juego");
} else {
  alert("No puede ingresar al juego");
}

example 3
el hijo del dueño quiere entrar al juego pero no cumple con los requisitos de edad y estatura pero igual le dejamos entrar con el siguiente code.

var edad = prompt("ingrese su edad:");
var estatura = prompt("ingrese su estatura");
var hijoDelDueño =prompt("¿eres hijo del dueño?");
if (edad >= 13 && estatura >= 1.30 || hijoDelDueño.toLowerCase() == "si") {
  alert("Puede ingresar al juego");
} else {
  alert("No puede ingresar al juego");
}

el toLowerCase() es por si el hijo del dueño escribe en mayúsculas o minúsculas.*/

//--------------------------------------------

//FUNCIONES
/*crea nuevas funciones como el console.log() o el alert(), simplificando mas facil las variables reutilizables, teniendo menos lineas de espacio.

example normal
var ancho = 10;
var alto = 15;
var resultado = ancho * alto;
console.log(resultado); // resultado 150

var ancho = 25;
var alto = 25;
var resultado = ancho * alto;
console.log(resultado); // resultado 625

example facil*/
function calcularSuperficie(ancho, alto) {
  var resultado = ancho * alto;
  console.log(resultado);
}
calcularSuperficie(10, 15); // resultado 150
calcularSuperficie(25, 25); // resltado 625

/*example dificil
eo navegador ayuda ala pesona a calcular la superficie de su terreno.

function calcularTerrenoT(ancho, alto) {
  var resultado = ancho * alto;
  return resultado;
}

function calcularTerreno() {
  var inputAncho = prompt("ingrese su ancho");
  var inputAlto = prompt("ingrese su alto");
  var superficieDelTerreno = calcularTerrenoT(inputAncho, inputAlto);
  alert("la superficie del terreno es: " + superficieDelTerreno);
} 
calcularTerreno(); 
*/

//--------------------------------------------

//CALCULADORA IMC 

// window.onload = iniciar; //cuando haya cargado todo el html llamar despues ala funcion iniciar

// function iniciar() {
  var btnCalcular = document.getElementById("btnCalcular"); // document.getElementById llama al boton calcular con su id y lo guarda en la variable
  btnCalcular.addEventListener("click", clickBtnCalcular);
// } 

function clickBtnCalcular() {
  var txtPeso = document.getElementById("txtPeso");
  var peso = txtPeso.value; // igual a promt guarda el dato en la variable sin preguntar

  var txtAltura = document.getElementById("txtAltura");
  var altura = txtAltura.value; // igual a promt guarda el dato en la variable sin preguntar

  var imc = peso / (altura * altura); // peso dividido altura al cuadrado
  
  alert("Su IMC es: " + Math.round(imc));
}
//--------------------------------------------

//CICLOS O BUCLES

/* Codigo que se repite constantemente hasta que cumpla una determinada funcion (empieza a contar desde el inicio hasta el final):

var contador = 0;
while(contador < 4) {
  alert("Valor: " + contador);
  contador++;
}

var contador = 0;
do {
  alert("Valor: " + contador);
  contador++;
} while(contador < 4);
*/

/*calcular sumatoria de numeros 1+2+3+4+5+6+7+8+9+10

var sumatoria = 0;
var contador = 0;

while(contador <= 10) {
  sumatoria+= contador;
  contador++;
  //alert(sumatoria); // suma con cada click que hacemos
}
alert(sumatoria); // suma directa a resultado 55

/* forma facil y simplificada

for( var i = 0; i < 10; i++) {
  alert(i);
}
*/

// ejercicio de examenes

/* identifica los numeros pares de 0 a 10 */
for( var x = 0; x <= 10; x++) {
  if(x % 2 == 0) {
    //alert("Es par: " + x);
  }
}

/* calcular la sumatoria de numeros pares entre 0 a 1000 con resultado directo */
var sumatoria = 0;
for( var i = 0; i < 1000; i++) {
  if(i % 2 == 0) {
    sumatoria+= i;
  }
}
//alert("La sumatoria de numeros pares entre 0 a 1000 con resultado directo es: " + sumatoria); // resultado 249500


//--------------------------------------------

// CALCULADORA HTML by deivchoi

const txtOp1 = document.getElementById("op1");
const txtOperacion = document.getElementById("operacion");
const txtOp2 = document.getElementById("op2");
const bCalcular = document.getElementById("bCalcular");
const pResultado = document.getElementById("resultadoCH");

bCalcular.addEventListener("click", calcularH)

function calcularH() {
  const operacion = txtOperacion.value
  const op1 = parseFloat(txtOp1.value)
  const op2 = parseFloat(txtOp2.value)
  
  if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)){
    let resultadoH;
    switch (operacion){
      case "+":
        resultadoH = op1 + op2;
        break;
        case "-":
          resultadoH = op1 - op2;
          break;
          case "*":
            resultadoH = op1*op2;
            break;
            case "/":
              resultadoH = op1 / op2;
              break;
            }
            pResultado.style = "color:blue"
            pResultado.innerText = "= " + resultadoH
          } else{
            pResultado.style = "color:red"
            pResultado.innerText = "Calculo Imposible"
          }
        }
        
//--------------------------------------------
        
//MATRICES Y ARREGLOS
        
/* cuando hablamos de matrices nos referimos a poder guardar datos en una variable, ejemplos telefonos, nombre, numeros, etc. */
//Ejercicio de tarea
        
var tareas = [];
        
        
var btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", clickBtnAgregar);
        
function clickBtnAgregar(){
  var txtTarea = document.getElementById("txtTarea");
  var tarea = txtTarea.value
  tareas.push(tarea);
  mostrarTareas();
}
        
function mostrarTareas(){
  var listado = document.getElementById("listado")
  var html = "";
  for (var tarea of tareas) {
    html += tarea + "</br>";
  }
  listado.innerHTML = html;
}

//--------------------------------------------

//OBJETOS

/* guarda datos como ejemplo gmail, telefono, dirrecion en una sola variable */

// var persona = {
//   "nombre": "Ezequiel", //no solamente puede ser string tambien bolean, number, array, etc
//   "apellido": "Flores",
//   "telefono": 1234567890,
//   "gmail": "eze123@gmail.com",
//   "direccion": "carlos gardel 123",
// }
// alert(persona.apellido); // muestra solo el apellido "Flores"

// persona.telefono = "No tiene"; //podemos crear o editar propiedades nuevas
// console.log(persona);

/* tambien podemos crear subobjetos */

var persona2 = {
  "nombre": "Fernando",
  "apellido": "Flores",
  "telefono": 1234567890,
  "gmail": "fer123@gmail.com",
  "direccion": "carlos gardel 124",
  "empleo": {
    "nombre": "Programador",
    "localidad": "La Quiaca"
  }
}
console.log(persona2.empleo.nombre); // muestra el subobjeto "programador"

/* ejercicio de objetos con html */

var personas = [];

var btnAgregar2 = document.getElementById("btnAgregar2");
btnAgregar2.addEventListener("click", clickBtnAgregar2);

function clickBtnAgregar2(){
  var nombre = document.getElementById("txtNombre").value;
  var apellido = document.getElementById("txtApellido").value;
  var telefono = document.getElementById("txtTelefono").value;
  var gmail = document.getElementById("txtGmail").value;

  var persona = {
    "nombre": nombre,
    "apellido": apellido,
    "telefono": telefono,
    "gmail": gmail,
  }
  personas.push(persona);

  mostrarPersonas();
}
function mostrarPersonas(){
  var listado2 = document.getElementById("listado2");
  var html2 = "";
  for (persona of personas) {
    html2 = persona.nombre + " " + persona.apellido + " " + persona.telefono + " " + persona.gmail + "</br>";
  }
  listado2.innerHTML = html2;
}

//--------------------------------------------

// LOCALSTORAGE

/* guarda los datos sin que se borre al hacer un refresh la pagina */

var btnAgregar3 = document.getElementById("btnAgregar3");
btnAgregar3.addEventListener("click", clickBtnAgregar3);

var btnBorrar = document.getElementById("btnBorrar");
btnBorrar.addEventListener("click", clickBtnBorrar);

mostrarNotas(); // importante poner en el inicio la funcion final

function clickBtnBorrar(){
  localStorage.clear(); //borramos todos los datos guardados

  mostrarNotas(); // para borrar al instante sin refrescar
}

function clickBtnAgregar3(){
  var txtNota = document.getElementById("txtNota");

  localStorage.nota = txtNota.value; // si refrescamos la pagina nos guardara los datos sin necesidad de borrar

  mostrarNotas();
}

function mostrarNotas(){
  var pNotas = document.getElementById("pNotas");
  
  pNotas.innerHTML = localStorage.nota;
}

//DOM (Document Objet Model)


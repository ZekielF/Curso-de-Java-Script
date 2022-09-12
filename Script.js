// alert("Hola")
// Vista solo en la consola del navegador
var miYoutube = "ZekielF";
console.log(miYoutube);

miVariable = 24;
console.log(miVariable);

var Nombre = "Fernando";
console.log(Nombre);
// Tambien se puede usar el let y const




// OPERADOR DE ASIGNACÍON
var a;
var b = 2;
console.log(a); // No tiene un valor asignado asi que tira error por defecto (undefined)

a = 10;
console.log(a);
// = O de asignacion en java script




// ASIGNAR EL VALOR DE UNA VARIABLE A OTRA VARIABLE
var a = 5;
var b = a;
console.log(a);
console.log(b);

var a = 10;
var b;
b = a;
console.log(a);
console.log(b);




// INICIALIZAR VARIABLES
var x = 9; // Inicializar
var miIdioma = "Español" // camelCase separa las palabras con mayuscula asi como se hacia en html usando el _




// VARIABLES NO INICIALIZADAS
var q; //No inicializada sin valor
var b;
console.log(q); //Error undefined
q = 56;
console.log(q); // ya inicializada con su respectivo valor




// SUMA
var suma = 10 + 15;
console.log(suma);




// RESTA
var resta = 35 - 11; // resultado positivo
console.log(resta);
resta = 11 - 35; // resultado negativo
console.log(resta); 
resta = 11 - 11; // resultado cero
console.log(resta);




// MULTIPLICACION
var producto = 2 * 2;
console.log(producto);
producto = 4 * 0;
console.log(producto);
producto = -5 * -5;
console.log(producto);




// DIVISION
var cociente = 10 / 2;
console.log(cociente);
cociente = 17 / 31; // resultado decimal
console.log(cociente);
cociente = 3 / 0; // Infinity
console.log(cociente);




// NUMEROS DECIMALES
var miNumeroDecimal = 23.4;
var peso = 78.34;




// RESTO DE DIVISION
var resto = 15 % 5; // resultado 3 y resto 0
console.log(resto);
resto = 5 % 1; // resultado 5 y resto 0
console.log(resto);
resto = 5 % 2; // resultado 2 y resto 1
console.log(resto);
resto = 5 % 3; // resultado 1 y resto 2
console.log(resto);




// INCREMENTAR EL VALOR DE UNA VARIABLE
var librosComprados = 105;
console.log(librosComprados);
// Opcion 1
librosComprados = librosComprados + 1;
console.log(librosComprados);
// Opcion 2
librosComprados++;
console.log(librosComprados);




// REDUCIR EL VALOR DE UNA VARIABLE
var librosComprados = 105;
console.log(librosComprados);
// Opcion 1
librosComprados = librosComprados - 1;
console.log(librosComprados);
// Opcion 2
librosComprados--;
console.log(librosComprados);




// ASIGNACION DE SUMA Y RESTA
var a = 23;
// a = a + 5; // resultado 28 primera forma
a += 5; // resultado 28 segunda forma
console.log(a);

var totalVentas = 300;
console.log(totalVentas);
totalVentas += 180;
console.log(totalVentas);

var totalDeuda = 360;
console.log(totalDeuda);
totalDeuda -= 10;
console.log(totalDeuda);




// ASIGNACION DE LA MULTIPLICACION Y DIVISION
var rn11pro = 235; // precio en dolares
rn11pro *= 270; // precio en dolar blue y resultado precio en pesos
console.log(rn11pro);

var rn11 = 900; // Tengo 900usd para comprar los rn11 
rn11 /= 180; // precio en dolares y resultado 5 xiaomis rn11
console.log(rn11);




// VARIABLES CON CADENAS DE CARACTERES
var nombre = "Nathan"
var apellido = "Drake"




// ESCAPAR COMILLAS EN CADENAS DE CARACTERES
var miCadena = "soy una cadena de caracteres \"con comillas\""; 
console.log(miCadena);




// CADENA DE CARACTERES CON COMILLAS SIMPLES
var miMeta;
miMeta = 'Aprender a programar con "freeCodeCamp"'; // tambien se puede invertir de comillas doble a comilla simples
console.log(miMeta);




// SECUENCIAS DE ESCAPE
/* 
Codigos | Resultados
-----------------------
\'      Comilla Simple   (echo en el ejemplo de arriba)
\"      Comilla dobre    (echo en el ejemplo de arriba)
\\      Barra Invertida  (echo en el ejemplo de abajo)
\n      Linea Nueva      (echo en el ejemplo de abajo)
\r      Retorno de Carro
\t      Tabulacion
\b      Retroceso
\f      Salto de Pagina
------------------------
*/
console.log("Estoy Aprendiendo \\ Java Script");
console.log("Estoy Aprendiendo: \nJava Script");




// CONCATENAR CADENAS DE CARACTERES
var nombreCompleto = "Ezequiel " + "Flores";
console.log(nombreCompleto);




// CONSTRUIR CADENAS CON VARIABLES
var verbo = "programar";
var mensaje = "Estoy Aprendiendo a " + verbo + " con freeCodeCamp";
console.log(mensaje);




// AGREGAR VARIABLES A CADENAS DE CARACTERES
var mensajeCompleto = "Estoy Aprendiendo a programar ";
var parteFinal = "con Dorian";
console.log(mensajeCompleto);

mensajeCompleto += parteFinal;
console.log(mensajeCompleto);




// LONGITUD DE UNA CADENA DE CARACTERES
var miCaracter = "JavaScript"
console.log(miCaracter.length);




// NOTACION DE CORCHETES: primer caracter
var lenguajeDeProgramacion = "JavaScript"
/* 
Cadena:    J a v a S c r i p t
Indices:   0 1 2 3 4 5 6 7 8 9
*/
console.log(lenguajeDeProgramacion[0]);




// INMUTABILIDAD DE CADENAS DE CARACTERES
var miCadena = "jola, mundo";
console.log(miCadena);
miCadena = "hola, mundo";
console.log(miCadena);





// NOTACION DE CORCHETES: enesimo caracter
var miCadena = "JavaScript";
/* 
Cadena:    J a v a S c r i p t
Indices:   0 1 2 3 4 5 6 7 8 9
*/
console.log(miCadena[0]); // J
console.log(miCadena[1]); // a
console.log(miCadena[2]); // v
console.log(miCadena[3]); // a
console.log(miCadena[4]); // S
console.log(miCadena[5]); // c
console.log(miCadena[6]); // r
console.log(miCadena[7]); // i
console.log(miCadena[8]); // p
console.log(miCadena[9]); // t




// NOTACION DE CORCHETES: ultimo caracter
var miCadena;
/*
El ultimo indice siempre es longitud - 1 por que comenzamos a contar desde 0.
miCadena.length para "JavaScript" es 10.
el ultimo indice es 9.
*/
miCadena = "Python";
console.log(miCadena[miCadena.length - 1]);




// NOTACION DE CORCHETES: derecha a izquierda
var miCadena;
/*
el penultimo indice es longitud - 2 por que comenzamos a contar desde 0.
miCadena.length es 10, el penultimo indice es 8.
*/
miCadena = "Fernando";
console.log(miCadena[miCadena.length - 2]);




// PALABRAS EN BLANCO

/*concatena las cadenas para crear una cadena que muestre un mensaje, puedes cambiar los valores de las variables.*/

// por ejemplo: el perro negro corrio rapidamente ala tienda.
var miSustantivo = "perro";
var miAdjetivo = "negro";
var miVerbo = "corrio";
var miAdverbio = "rapidamente";

var palabrasEnBlanco = "el" + " " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + miAdverbio + " " + "a la tienda."
console.log(palabrasEnBlanco);

// por ejemplo: la bicicleta pequeña volo ala tienda lentamente
var miSustantivo = "bicicleta";
var miAdjetivo = "pequeña";
var miVerbo = "volo";
var miAdverbio = "lentamente";

var palabrasEnBlanco = "la" + " " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + "a la tienda" + miAdverbio + ".";
console.log(palabrasEnBlanco);




// ARREGLOS (ARRAYS)
var miArreglo = ["john", 24];
console.log(miArreglo);

var estudiantes = ["Nora", "Gino", "Emily"];
console.log(estudiantes);

var notas = [25, 88, 76];
console.log(notas);




// ARREGLOS ANIDADOS
var listaDeEstudiantes = [["Nora", 97], ["Gino", 78]];
console.log(listaDeEstudiantes);

var listaDePrecios = [["Xiaomi", 200, "XRN11"], ["Samsung", 230, "SM780G"]];
console.log(listaDePrecios);

var datos = [[3.2, 4.5, 6.1], [2.2, 1.6, 7.9]];
console.log(datos);




// ACCEDER A LOS ELEMENTOS DE UN ARREGLO
var miArreglo = [10, 20, 30];

/*
Arreglo: [10, 20, 30]
Indices:   0   1   2
*/
console.log(miArreglo[0]); // 10
console.log(miArreglo[1]); // 20
console.log(miArreglo[2]); // 30

var suma = miArreglo[0] + miArreglo[1] + miArreglo[2];
console.log(suma); // 60




// MODIFICAR ELEMENTOS DE UN ARREGLO 
var miArreglos = [10, 20, 30];
miArreglos[1] = 40;
console.log(miArreglos);
miArreglos[2] = "Hola";
console.log(miArreglos);
miArreglos[0] = [1, 2, 3];
console.log(miArreglos);




// ACCEDER A ARREGLOS MULTIDIMENSIONALES
var misArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
/*
Arreglo:            [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
indices:                 0          1          2
indices internos:     0  1  2    0  1  2    0  1  2
*/
console.log(misArreglo[2][1]); // 8




// -------------------------------------------------------------------------------------------------------------------------------------------
// .PUSH()
var estaciones = ["Invierno", "Otoño", "Primavera"];
estaciones.push("Verano"); // agrega el elemnto verano al ultimo
console.log(estaciones);




// .POP()
var estaciones;
var estacion;

var estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];
// estaciones.pop();  elimina el ultimo elemento Verano
// console.log(estaciones); 

estacion = estaciones.pop(); // muestra lo que eliminamos anteriormente a Verano
console.log(estacion);




// .SHIFT()
var estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];
estaciones.shift(); //elimina el primer elemento Invierno
console.log(estaciones); 




// .UNSHIFT()
var estaciones = ["Otoño", "Primavera", "Verano"];
estaciones.unshift("Invierno"); // agrega al principio del arreglo
console.log(estaciones);
// ----------------------------------------------------------------------------------------------------------------------------------------------------




// LISTA DE COMPRAS 
var miListaDeCompras = [["cereal", 3], ["leche", 2], ["galletas", 4], ["refresco", 7], ["pollo", 7]];

//cereal
console.log("voy a comprar " + miListaDeCompras[0][1] + " unidades de " + miListaDeCompras[0][0] + ".");
//leche
console.log("voy a comprar " + miListaDeCompras[1][1] + " unidades de " + miListaDeCompras[1][0] + ".");
//galletas
console.log("voy a comprar " + miListaDeCompras[2][1] + " unidades de " + miListaDeCompras[2][0] + ".");
//refresco
console.log("voy a comprar " + miListaDeCompras[3][1] + " unidades de " + miListaDeCompras[3][0] + ".");
//pollo
console.log("voy a comprar " + miListaDeCompras[4][1] + " unidades de " + miListaDeCompras[4][0] + ".");




// FUNCIONES
function mostrarMensaje() {
    console.log("Hola soy la funcion");
}
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();




// ARGUMENTOS
function sumar(a, b) {
    var suma = a + b;
    console.log("el resultado de " + a + " + " + b + " es: " + suma);
}
sumar(5, 3);
sumar(4, 6);
sumar(2, 2);
sumar(5, 9);

var x = 10;
var y = 14;

sumar(x, y);

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
    console.log(cadena1 + " " + cadena2 + " " + cadena3);
}
concatenarTresCadenas("Estoy", "aprendiendo", "a programar");




// VARIABLES--------------------------------------------------------------------------------------------------------------------------------------------
// AMBITO GLOBAL 
var miVariableGlobal = 5;
console.log(miVariableGlobal);

function miFuncion() {
    console.log(miVariableGlobal);
}

miFuncion();
console.log(miVariableGlobal);




// AMBITO LOCAL 
function miFuncion() {
    var miVariableLocal = 4;
    console.log(miVariableLocal);
}
miFuncion();

// console.log(miVariableLocal); la variable local solo puede estar adentro de la funcion y no afuera ya que tira error




// AMBITO GLOBAL VS AMBITO LOCAL
var miNombre = "nora";

function mostrarMiNombre() {
    var miNombre = "gino";
    console.log(miNombre);
}

mostrarMiNombre(); // el ambito local tiene mas prioridad que el global asi como el important de css

console.log(miNombre);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------




// RETORNAR UN VALOR 
function sumar(a, b) {
    return a + b;
}
console.log(sumar(5, 4));




// UNDEFINED
function sumar(a, b) {
    console.log(a + b);
}
console.log(sumar(5, 3));




// ASIGNAR UN VALOR RETORNADO
function sumar(a, b) {
    return a + b;
}
var resultado = sumar(10, 15); // resultado = 25
console.log(resultado);

function crearCadenaConMeta(lenguajeDeProgramacion) {
    return "mi meta es aprender " + lenguajeDeProgramacion;
}
var miMeta = crearCadenaConMeta("JavaScript");

// miMeta = "mi meta es aprender JavaScript";

console.log(miMeta);




// PERMANECE EN FILA 






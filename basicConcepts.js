40

"Pablo Beltrán"

true
false

null
undefined

// array
[1,2,3]
// object
{nombre:"Diego"}

//variables

var name = "Carlos";
var array=[1,2,3];

//declare 
var age; 

//asign 
age =8;

//better in a line 
var age2 = 10;
var person ={
    name:"Pablo",
    age:28
}

//functions
//there are declarives and expressive 
//declaratives
function myFunction (){
    return 3; 
}
//expressive 
var miFunction = function(a,b){
    return a + b;
}

miFunction();

//array

var fruits =["mango","pear","apple"];

//array method to add elements to the end

var masFrutas = fruits.push("grapes");

//array method to delete the last element 

var delete1 = fruits.pop("grapes");


//array method to add elements to the beginning

var nuevaLongitud = fruits.unshift("grapes");

//array method to delete the first element 

var borrarFrutas = fruits.shift("grapes");

//to know the position

var position =fruits.indexOf("pear");

//objects

var myCar = {
marca: "Chevrolet",
modelo: "Sail",
annio: 2020,

getDetail: function(){
    console.log(`Car ${this.modelo} ${this.annio}`);
}
};


myCar.getDetail();


//constructor 

function myCar (marca, modelo, annio){
    this.marca=marca;
    this.modelo=modelo;
    this.annio=annio;
}
// inicialize the object or create 
var newCar = new myCar ("Mazda","3",2022);

//challenge
function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }

  //method filter and map in arrays

  var articulos = [
	{ nombre: '📱', precio: 1000 },
	{ nombre: '💻', precio: 1500 },
	{ nombre: '🖥', precio: 2000 },
	{ nombre: '⌨️', precio: 100 },
	{ nombre: '🖱', precio: 70 },
	{ nombre: '🚗', precio: 30000 },
];

// Método Filter
var articulosFiltrados = articulos.filter(function(articulo) {
	return articulo.precio <= 500;
});

// Método Map
var nombreArticulos = articulos.map(function(articulo) {
	return articulo.nombre;
});

articulosFiltrados;
// (2) [{…}, {…}]
//   0: {nombre: "⌨️", precio: 100}
//   1: {nombre: "🖱", precio: 70}

nombreArticulos; // (5) ["📱", "💻", "🖥", "⌨️", "🚗"]

//method find,each,some

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

//filter Genera un nuevo array
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500; //articulos con precio menor a 500 pesos
});

//map Ayuda a mapear ciertos elementos de los articulos, es necesario generar nuevo array
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

//find Ayuda a encontrar algo dentro del array articulos
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

//forEach No es necesario generar nuevo array, se utiliza para realizar un recorrido de un array principal
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//some Se genera nuevo array, regresa un condición en Boolean
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
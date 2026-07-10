// --------------------------------------------
// Ejercicio 5: Registro interactivo de vehículos


// Antes de todo instalo el npm install prompt-sync, escribiendolo directamente en la terminal.
// 
// Ahora activo el prompt-sync para pedir datos por teclado.
const prompt = require("prompt-sync")();

// Ahora la función constructora Vehiculo, me sirve como molde para crear vehículos 
// con la información ingresada por el usuario.
function Vehiculo(placa, marca, modelo, color, kilometraje, estado) {

  this.placa = placa;
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
  this.kilometraje = kilometraje;
  this.estado = estado;


  // Ahora el método para mostrar la información general del vehículo.
  this.mostrarInformacion = function () {

    console.log("----- INFORMACIÓN DEL VEHÍCULO -----");

    console.log("Placa: " + this.placa);

    console.log("Marca: " + this.marca);

    console.log("Modelo: " + this.modelo);

    console.log("Color: " + this.color);

    console.log("Kilometraje: " + this.kilometraje + " km");

    console.log("Estado: " + this.estado);


  };


  // Ahora el método que modifica una propiedad del objeto.
  this.actualizarKilometraje = function (nuevoKilometraje) {

    this.kilometraje = nuevoKilometraje;

    console.log("Kilometraje actualizado correctamente.");


  };


  // Ahora el método que cambia el estado del vehículo.
  this.cambiarEstado = function (nuevoEstado) {

    this.estado = nuevoEstado;

    console.log("Estado del vehículo actualizado correctamente.");


  };



}


// Ahora le solicito los datos al usuario con:
let placa = prompt("Ingrese la placa del vehículo: ");

let marca = prompt("Ingrese la marca del vehículo: ");

let modelo = prompt("Ingrese el modelo del vehículo: ");

let color = prompt("Ingrese el color del vehículo: ");

let kilometraje = Number(prompt("Ingrese el kilometraje del vehículo: "));

let estado = prompt("Ingrese el estado del vehículo, nuevo o usado: ");

// Entonces procedo a crear el objeto usando new.
let vehiculo1 = new Vehiculo(placa, marca, modelo, color, kilometraje, estado);

// Ahora muestro la información inicial del vehículo.
vehiculo1.mostrarInformacion();

// Procedo a ejecuto el método que modificara propiedades.
// Imprime:
console.log("----- ACTUALIZACIÓN DEL VEHÍCULO -----");

let nuevoKilometraje = Number(prompt("Ingrese el nuevo kilometraje: "));
vehiculo1.actualizarKilometraje(nuevoKilometraje);

let nuevoEstado = prompt("Ingrese el nuevo estado del vehículo: ");
vehiculo1.cambiarEstado(nuevoEstado);

// Y a lo ultimo muestro la información final con:
vehiculo1.mostrarInformacion();


// Punto de reflexion:
// Permitir que la información sea ingresada por el usuario hace que el programa sea más flexible 
// e interactivo, porque no depende de datos escritos directamente en el código, pues esto facilita 
// registrar diferentes vehículos sin modificar el archivo cada vez y ayuda a simular mejor 
// un sistema real donde el usuario es quien captura la información y el programa la organiza 
// en objetos.

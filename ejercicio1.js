// --------------------------------------------
// Taller: Programación Orientada a Objetos en JavaScript
// Ejercicio 1: Modelando inventario de una tienda tecnológica

// Contexto:
// Una tienda de tecnología necesita digitalizar el stock de sus computadores y para evitar 
// repetir la estructura de cada computador, se crea una función constructora que funciona como molde.

// Esta función constructora recibe los datos de un computador
// y crea un objeto con sus propiedades principales.

function Compuntador (marca, procesador, ramGB, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ramGB = ramGB;
    this.precio = precio;

}

// Ahora uso new para crear objetos únicos a partir del mismo molde.

const compuntador1 = new Compuntador ("Acer", "Intel Core i5", 8, 4200000);
const compuntador2 = new Compuntador ("Lenovo", "Intel Core i3", 4, 3500000);
const compuntador3 = new Compuntador ("Asus", "AMD Ryzen 5", 16, 5500000);

// Ahora imprimo en consola cada computador creado.

console.log("Compuntador 1: ");
console.log(compuntador1);

console.log("Compuntador 2: ");
console.log(compuntador2);

console.log("Compuntador 3: ");
console.log(compuntador3);

// Punto de Reflexion:
// Al parecer la ventaja técnica de crear una función constructora
// es que puedo usar un solo molde para crear varios objetos con la misma estructura.
// Así evito repetir código y mantengo el inventario más organizado.
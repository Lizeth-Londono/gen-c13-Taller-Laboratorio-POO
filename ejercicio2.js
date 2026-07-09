// ----------------------------------------------
// Ejercicio 2: Encapsulamiento de comportamiento
// Sistema de veterinaria

// Contexto:
// Un centro clínico veterinario necesita registrar mascotas y cada mascota debe poder describir sus 
// datos clínicos básicos durante una consulta.

// Esta función constructora funciona como un molde para crear mascotas.

function Mascota(nombre, especie, edad, peso, dueno){
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;
    this.dueno = dueno;

      // Este método pertenece a cada mascota y ahora usando this 
      // para acceder a las propiedades del objeto actual.

      this.presentarse = function() {
        return (
            "La Mascota se llama: " + this.nombre +
            ", y su especie es: " + this.especie +
            ", tiene " + this.edad + " Años" +
            ", pesa " + this.peso + " Kg" +
            "y su dueñ@ es: " + this.dueno + "."
        
        );
        

      }



}

// Ahora creo tres mascotas diferentes usando new.
// Y cada una nace a partir del mismo molde, pero con datos propios.

const mascota1 = new Mascota("Tyrone", "perro", 10, 33, "Lizeth");
const mascota2 = new Mascota("Dante", "gato", 5, 28, "Hellen");
const mascota3 = new Mascota("Rocky", "pajaro", 8, 1, "Sirney");

// Ejecuto el método presentarse() en cada mascota.

console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());

//Punto de Reflexion:
// Un método interno puede acceder de manera precisa a las propiedades de su propio objeto 
// usando this. 
// Por ejemplo, mascota1.presentarse() usa los datos de mascota1,
// mientras que mascota2.presentarse() usa los datos de mascota2.
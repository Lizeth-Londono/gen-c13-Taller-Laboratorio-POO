// ---------------------------------------------
// Ejercicio 3: Lógica de negocio automática
// Plataforma de cursos

const { TwitterAuthProvider } = require("firebase/auth/web-extension");

// Contexto:
// Una plataforma educativa necesita procesar las notas de sus estudiantes y determinar 
// automáticamente si aprobaron o reprobaron.

// Esta función constructora representa a un estudiante que recibe los datos 
// principales del estudiante como parámetros.

function Estudiante(nombre, curso, nota) {
    this.nombre = nombre;
    this.curso = curso;
    this.nota = nota;

    // Propiedad calculada:
    // Si la nota es mayor o igual a 3.0, el estudiante aprueba.
    // Si la nota es menor a 3.0, el estudiante reprueba.
    this.aprobado = nota >= 3.0;

    // Método interno del objeto usando las propiedades del mismo estudiante mediante this.
    this.mostrarResultado = function() {

        if (this.aprobado === true) {

            console.log(
                "El Estudiante " + this.nombre +
                " Aprobo el curso de " + this.curso +
                " con una nota de " + this.nota 

            );


        }

        else {

            console.log(

                "El Estudiante " + this.nombre +
                " Reprobo el curso de " + this.curso +
                " con una nota de " + this.nota

            );


        }


    };



}

// Ahora creo cuatro estudiantes con notas diferentes usando new.
const estudiante1 = new Estudiante("Lizeth", "JavaScript", 4.5);
const estudiante2 = new Estudiante("Juan Pablo", "Backend", 2.8);
const estudiante3 = new Estudiante("Ana", "HTML y CSS", 3.0);
const estudiante4 = new Estudiante("Jessica", "React", 1.9);


// Ahora ejecuto el método mostrarResultado para cada estudiante.
console.log("----- RESULTADOS ACADÉMICOS -----");

estudiante1.mostrarResultado();
estudiante2.mostrarResultado();
estudiante3.mostrarResultado();
estudiante4.mostrarResultado();

// Punto de reflexion:
// La ventaja de que el objeto conozca su propio estado lógico es que cada estudiante puede 
// saber por sí mismo si aprobó o no, sin tener que repetir la condición en otra parte del programa.
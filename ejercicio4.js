// ---------------------------------------------------------
// Ejercicio 4: Control de estado modificado - Biblioteca

// Esta función constructora representa un libro dentro de una biblioteca y cada libro tiene 
// información básica y un estado interno llamado prestado.

function Libro(titulo, autor, genero, ano){

    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.ano = ano;

    // Entonces el libro inicia como no prestado.
    this.prestado = false;

    // Entonces ahora este método permite prestar el libro.
    this.prestar = function(){

        if (this.prestado === false) {

            this.prestado = true;

            console.log ("El libro " + this.titulo + " fue prestado correctamente.");

        }
        else{
            console.log ("El libro " + this.titulo + " ya fue prestado");

        }


    };
    // Este método permite devolver el libro.
    this.devolver = function() {

        if (this.prestado === true) {

            this.prestado = false;
            console.log("El libro " + this.titulo + " fue devuelto correctamente");

        }
        else{
            console.log("El libro " + this.titulo + " no esta prestado");

        }


    };

    

}

// Ahora creo un libro para probar los métodos.
const libro1 = new Libro(
  "Una Vida con Propósito",
  "Rick Warren",
  "Religión",
  2002
);


// Ahora imprime un estado inicial de los libros
console.log("----- ESTADO INICIAL DEL LIBRO -----");
console.log(libro1);


// Se prueba el prestar el libro.
console.log("----- PRIMER PRÉSTAMO -----");
libro1.prestar();


// Se intenta prestarlo otra vez para validar el control de estado.
console.log("----- SEGUNDO PRÉSTAMO -----");
libro1.prestar();


// Se devuelve el libro.
console.log("----- DEVOLUCIÓN DEL LIBRO -----");
libro1.devolver();


// Se intenta devolverlo otra vez para validar la inconsistencia.
console.log("----- SEGUNDA DEVOLUCIÓN -----");
libro1.devolver();

// Por ultimo se imprime un estado final de los libros
console.log("----- ESTADO FINAL DEL LIBRO -----");
console.log(libro1);


//Punto de Reflexion:
//Si un libro ya está prestado y no se valida su estado, el sistema podría prestarlo otra vez 
//por error. Por eso la propiedad `prestado` ayuda a controlar si el libro está disponible o no.

//Entonces los métodos prestar() y devolver() revisan ese estado antes de hacer cambios, 
//evitando inconsistencias en el sistema de la biblioteca.
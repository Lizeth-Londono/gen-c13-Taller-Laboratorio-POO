// --------------------------------------------
// Taller: Programación Orientada a Objetos en JavaScript

## Ejercicio 1: Modelando inventario de una tienda tecnológica

En este ejercicio trabajé un caso de una tienda de tecnología que necesita digitalizar el stock de sus computadores y el objetivo era representar varios computadores sin tener que escribir un objeto literal completo para cada uno. Para resolverlo, usé una función constructora llamada Computador.

Una función constructora funciona como un molde, osea este molde define qué propiedades van a tener los objetos que se creen a partir de él.

En este caso cada computador tiene las siguientes propiedades:

marca
procesador
ramGB
precio

Dentro de la función constructora usé la palabra this para asignar los valores recibidos por parámetro al nuevo objeto que se está creando.

Luego usé el operador new para instanciar tres objetos diferentes:

computador1
computador2
computador3

Cada uno de estos objetos fue creado con la misma estructura, pero con datos diferentes y esto permite tener computadores únicos sin repetir todo el código manualmente, entonces al imprimír en consola cada computador creado se verifico que los objetos se generaron correctamente.

La ventaja técnica de usar una función constructora en lugar de escribir cada objeto literal por separado es que se evita repetir código, se mantiene una estructura ordenada y se facilita la creación de nuevos computadores en el inventario.


## Ejercicio 2: Encapsulamiento de comportamiento - Sistema de veterinaria

En este ejercicio trabajé un caso de un centro clínico veterinario que necesita registrar mascotas y permitir que cada una pueda describir sus datos básicos durante una consulta, pues el objetivo era representar varias mascotas sin tener que escribir un objeto literal completo para cada una y además agregarles un comportamiento propio y para resolverlo usé una función constructora llamada Mascota.

Una función constructora funciona como un molde, osea este molde define qué propiedades van a tener los objetos que se creen a partir de él.

En este caso cada mascota tiene las siguientes propiedades:

nombre  
especie  
edad  
peso  
dueno  

Dentro de la función constructora usé la palabra this para asignar los valores recibidos por parámetro al nuevo objeto que se está creando, Además dentro de la función constructora agregué un método llamado presentarse.

Un método es una función que pertenece a un objeto y en este caso el método presentarse permite que cada mascota devuelva una descripción con sus datos básicos y luego usé el operador new para instanciar una mascota:

mascota1

Este objeto fue creado con la estructura definida en la función constructora Mascota, pero con sus propios datos y asi se puede ejecutar el método presentarse para comprobar que la mascota podía mostrar su información correctamente en consola.

La ventaja técnica de usar un método interno dentro de la función constructora es que cada objeto puede acceder a sus propias propiedades usando this y esto permite que cada mascota tenga sus datos y también un comportamiento propio, sin tener que crear una función externa diferente para cada una.

En este ejercicio aprendí que un objeto no solo puede guardar información, sino también ejecutar acciones relacionadas con esa información y entendí que this permite que el método acceda de forma precisa a las propiedades del objeto que lo está usando.



## Ejercicio 3: Lógica de negocio automática en una plataforma de cursos

En este ejercicio trabajé un caso de una plataforma educativa que necesita procesar las notas de los estudiantes y determinar automáticamente si cada estudiante aprobó o reprobó.

Entonces el objetivo era que cada estudiante tuviera sus propios datos y que el mismo objeto pudiera conocer su estado académico según la nota obtenida y para resolverlo, usé una función constructora llamada Estudiante.

Una función constructora funciona como un molde que permite crear varios objetos con la misma estructura, pero con datos diferentes, entonces en este caso cada estudiante tiene las siguientes propiedades:

nombre  
curso  
nota  
aprobado  

La propiedad aprobado es una propiedad calculada, porque no se escribe manualmente como true o false, sino que el programa la calcula automáticamente a partir de la nota del estudiante.

La condición usada fue:

this.aprobado = nota >= 3.0;

Esto significa que si la nota del estudiante es mayor o igual a 3.0, la propiedad aprobado queda en true. Si la nota es menor a 3.0, la propiedad aprobado queda en false, entonces dentro de la función constructora también agregué un método llamado mostrarResultado.

Este método usa this para acceder a las propiedades del mismo objeto como el nombre, el curso, la nota y si el estudiante aprobó o no.

Luego creé cuatro estudiantes diferentes usando el operador new:

estudiante1  
estudiante2  
estudiante3  
estudiante4  

Cada estudiante fue creado con un nombre, un curso y una nota diferente. Después ejecuté el método mostrarResultado() para cada uno, con el fin de mostrar en consola si aprobó o reprobó.

En este ejercicio aprendí que un objeto no solo puede guardar datos, sino también tener lógica interna mediante métodos y propiedades calculadas y la ventaja de que el objeto conozca su propio estado lógico es que cada estudiante puede determinar si aprobó o reprobó sin tener que repetir la misma condición en varias partes del programa.

Esto mejora la organización del código, evita repetir lógica y permite que cada objeto sea más autónomo.


## Ejercicio 4: Control de estado modificado - Biblioteca

En este ejercicio trabajé un caso de una biblioteca que necesita controlar correctamente la disponibilidad de sus libros dentro del catálogo y el objetivo era crear un objeto que pudiera cambiar su estado interno dependiendo de si el libro estaba prestado o disponible y para resolverlo, usé una función constructora llamada Libro.

Esta función constructora representa el molde para crear libros con una misma estructura, entonces en este caso cada libro tiene las siguientes propiedades:

titulo  
autor  
genero  
ano  
prestado  

La propiedad prestado funciona como un estado interno del objeto y al inicio está en false, porque el libro todavía no ha sido prestado, entonces dentro de la función constructora también agregué dos métodos:

prestar()  
devolver()  

El método prestar() revisa si el libro no está prestado y si prestado es false, cambia el estado a true y muestra un mensaje indicando que el libro fue prestado correctamente. Pero si el libro ya está prestado, muestra una alerta indicando que no se puede prestar nuevamente.

El método devolver() hace el proceso contrario, el primero revisa si el libro está prestado y si esta prestado es true, cambia el estado a false y muestra un mensaje indicando que el libro fue devuelto correctamente, pero si el libro no estaba prestado, muestra un mensaje indicando que no se puede devolver porque no existe un préstamo activo.

Después probé los dos métodos sobre el mismo libro para verificar los cambios de estado:

Primero el libro inició con prestado en false.  
Luego se prestó y su estado cambió a true.  
Después intenté prestarlo otra vez y el programa mostró una alerta.  
Luego se devolvió correctamente y el estado volvió a false.  
Finalmente intenté devolverlo otra vez y el programa avisó que el libro no estaba prestado.

También observé que al imprimir el objeto completo en consola aparecen los métodos como:

[Function (anonymous)]

Esto no es un error, pues JavaScript muestra eso porque prestar y devolver son funciones guardadas dentro del objeto y como no tienen un nombre propio, aparecen como funciones anónimas.

En este ejercicio aprendí que un objeto no solo puede guardar información, sino también comportamientos que modifican su propio estado interno usando this.


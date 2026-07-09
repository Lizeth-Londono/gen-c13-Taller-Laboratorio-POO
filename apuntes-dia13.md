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
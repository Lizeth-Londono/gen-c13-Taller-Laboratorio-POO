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


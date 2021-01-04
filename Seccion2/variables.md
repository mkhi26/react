# Variables en Javascript:

**¿Qué es una variable?**

            Una variable es un espacio en memoria donde se almacenan datos.
Reglas para el nombramiento de variables en Javascript:
====
- Los nombres de las variables han de construirse con caracteres alfanuméricos (números y letras), el carácter subrayado o guión bajo (_) y el carácter dólar $

- no pueden comenzar por un carácter numérico

- No podemos utilizar caracteres raros como el signo +, un espacio o un signo -.

- También hay que evitar utilizar nombres reservados como variables

Declaración de variables en Javascript
====

    Declarar variables consiste en definir, y de paso informar al sistema, que vas a utilizar una variable. Es una costumbre habitual en los lenguajes de programación el especificar explícitamente las variables que se van a usar en los programas. En muchos lenguajes de programación hay unas reglas extrictas a la hora de declarar las variables, pero lo cierto es que Javascript es bastante permisivo.

Declaración de variables con var
----

Javascript cuenta con la palabra "var" que utilizaremos cuando queramos declarar una o varias variables. Como es lógico, se utiliza esa palabra para definir la variable antes de utilizarla.

**Nota:**

    Aunque Javascript no nos obligue a declarar explícitamente las variables, es aconsejable declararlas antes de utilizarlas y veremos en adelante que se trata también de una buena costumbre. Además, en sucesivos artículos veremos que en algunos casos especiales, no producirá exactamente los mismos resultados un script en el que hemos declarado una variable y otro en el que no lo hayamos hecho, ya que la declaración o no afecta al ámbito de las variables.

Ejemplo:

    var operando1 
    var operando2
También se puede asignar un valor a la variable cuando se está declarando

    var operando1 = 23 
    var operando2 = 33

También se permite declarar varias variables en la misma línea, siempre que se separen por comas.

    var operando1,operando2

Declaración de variables Javascript con let y const
----
Declaración let:

    Esta nueva manera de declarar las variables afecta a su ámbito, ya que son locales al bloque donde se están declarando.

Declaración const:

    En realidad "const" no declara una variable sino una constante, que no puede variar su valor a lo largo de la ejecución de un programa.


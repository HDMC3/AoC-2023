# --- Día 9: Mantenimiento de Mirage ---

Atraviesas la tormenta de arena con el camello y te detienes donde los mapas del
fantasma te indican. Posteriormente, la tormenta de arena amaina y, de alguna
manera, ¡te encuentras en un **oasis**!

El camello va a por agua y tú estiras el cuello. Al mirar hacia arriba,
descubres lo que debe de ser otra gigantesca isla flotante, ¡esta vez de metal!
De ahí deben de venir **las piezas para arreglar las máquinas de arena**.

Aquí hay incluso un ala delta parcialmente enterrada en la arena; cuando salga
el sol y caliente la arena, tal vez puedas utilizar el ala delta y el aire
caliente para llegar hasta la isla de metal.

Mientras esperas a que salga el sol, admiras el oasis que se esconde aquí, en
medio de la Isla Desierta. Debe de tener un ecosistema delicado; podrías hacer
algunas lecturas ecológicas mientras esperas. Tal vez puedas informar a alguien
de cualquier inestabilidad ambiental que encuentres para que el oasis pueda
estar cerca para el próximo viajero agotado por la tormenta de arena.

Sacas tu práctico Sensor de Inestabilidad de Oasis y Arena y analizas tu
entorno. El OASIS produce un informe de muchos valores y de cómo están cambiando
con el tiempo (la entrada de tu puzzle). Cada línea del informe contiene la
historia de un único valor. Por ejemplo:

```
0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45
```

Para proteger mejor el oasis, su informe medioambiental debe incluir una
**predicción del siguiente valor** en cada historia. Para ello, empiece por
crear una nueva secuencia a partir de la **diferencia en cada paso** de su
historial. Si esa secuencia **no** es todo ceros, repita este proceso,
utilizando la secuencia que acaba de generar como secuencia de entrada. Una vez
que todos los valores de su última secuencia sean ceros, podrá extrapolar cuál
debería ser el siguiente valor de la historia original.

En el conjunto de datos anterior, el primer historial es `0 3 6 9 12 15`. Como
los valores aumentan en `3` en cada paso, la primera secuencia de diferencias
que genere será `3 3 3 3 3`. Observe que esta secuencia tiene un valor menos que
la secuencia de entrada porque en cada paso considera dos números de la entrada.
Como estos valores no son **todos cero**, repite el proceso: los valores
difieren en `0` en cada paso, por lo que la siguiente secuencia es `0 0 0 0`.
Esto significa que tienes suficiente información para extrapolar la historia.
Visualmente, estas secuencias se pueden organizar así:

```
0   3   6   9  12  15
  3   3   3   3   3
    0   0   0   0
```

Para extrapolar, empiece añadiendo un nuevo cero al final de su lista de ceros;
como los ceros representan diferencias entre los dos valores que hay sobre
ellos, esto también significa que ahora hay un marcador de posición en cada
secuencia superior:

```
0   3   6   9  12  15   B
  3   3   3   3   3   A
    0   0   0   0   0
```

A continuación, puede empezar a rellenar los marcadores de posición de abajo
arriba. `A` tiene que ser el resultado de incrementar `3` (el valor a su
izquierda) por `0` (el valor debajo de él); esto significa que `A` debe ser
**`3`**:

```
0   3   6   9  12  15   B
  3   3   3   3   3   3
    0   0   0   0   0
```

Por último, puede rellenar `B`, que debe ser el resultado de aumentar `15` (el
valor situado a su izquierda) por `3` (el valor situado debajo), es decir,
**`18`**:

```
0   3   6   9  12  15  18
  3   3   3   3   3   3
    0   0   0   0   0
```

Por lo tanto, el siguiente valor de la primera historia es **`18`**.

Encontrar diferencias todo cero para la segunda historia requiere una secuencia
adicional:

```
1   3   6  10  15  21
  2   3   4   5   6
    1   1   1   1
      0   0   0
```

A continuación, siguiendo el mismo proceso que antes, calcula el siguiente valor
de cada secuencia de abajo arriba:

```
1   3   6  10  15  21  28
  2   3   4   5   6   7
    1   1   1   1   1
      0   0   0   0
```

Por lo tanto, el siguiente valor de la segunda historia es **`28`**.

La tercera historia requiere aún más secuencias, pero su siguiente valor se
puede encontrar de la misma manera:

```
10  13  16  21  30  45  68
   3   3   5   9  15  23
     0   2   4   6   8
       2   2   2   2
         0   0   0
```

Por lo tanto, el siguiente valor de la tercera historia es **`68`**.

Si encuentras el siguiente valor para cada historia en este ejemplo y los sumas,
obtienes **`114`**.

Analiza tu informe OASIS y extrapola el siguiente valor para cada historial.
**¿Cuál es la suma de estos valores extrapolados?**

## --- Segunda parte ---

Por supuesto, sería bueno tener **aún más historia** incluida en su informe.
Seguro que también se puede **extrapolar hacia atrás**, ¿no?

Para cada historial, repita el proceso de búsqueda de diferencias hasta que la
secuencia de diferencias sea totalmente cero. Entonces, en lugar de añadir un
cero al final y rellenar los siguientes valores de cada secuencia anterior,
debería añadir un cero al **principio** de su secuencia de ceros, y después
rellenar los nuevos **primeros** valores de cada secuencia anterior.

En concreto, este es el aspecto del tercer ejemplo de historia cuando se
extrapola hacia atrás en el tiempo:

```
5  10  13  16  21  30  45
  5   3   3   5   9  15
   -2   0   2   4   6
      2   2   2   2
        0   0   0
```

La suma de los nuevos valores de la izquierda de cada secuencia, de abajo a
arriba, acaba revelando el nuevo valor histórico situado más a la izquierda:
`5`.

Haciendo esto para el resto de los datos del ejemplo anterior se obtienen
valores anteriores de **`-3`** para la primera historia y **`0`** para la
segunda historia. Sumando los tres nuevos valores se obtiene **`2`**.

Analice de nuevo su informe OASIS, esta vez extrapolando el valor **anterior**
para cada historia. **¿Cuál es la suma de estos valores extrapolados?**

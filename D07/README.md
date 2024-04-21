# --- Día 7: Cartas de camellos ---

Tu viaje con todos los gastos pagados resulta ser un viaje de ida de cinco
minutos en una aeronave. (¡Al menos es una aeronave **chula**!) Te deja al borde
de un vasto desierto y desciende de vuelta a Island Island.

"¿Has traído las piezas?"

Te das la vuelta y ves a un elfo completamente cubierto de ropa blanca, con
gafas protectoras y montado en un gran camello.

"¿Has traído las piezas?", vuelve a preguntar, esta vez más alto. No estás
seguro de qué piezas busca; estás aquí para averiguar por qué se detuvo la
arena.

"¡Las piezas! Para la arena, ¡sí! Ven conmigo, te las enseñaré". Te hace señas
para que subas al camello.

Después de cabalgar un poco por las arenas de la Isla Desierta, puedes ver lo
que parecen rocas muy grandes que cubren la mitad del horizonte. El elfo te
explica que las rocas se encuentran a lo largo de la parte de la Isla Desierta
que está justo encima de la Isla Insular, lo que dificulta incluso llegar hasta
allí. Normalmente, utilizan grandes máquinas para mover las rocas y filtrar la
arena, pero las máquinas se han estropeado porque Isla Desierta ha dejado de
recibir recientemente las piezas que necesitan para arreglar las máquinas.

Ya has asumido que será tu trabajo averiguar por qué se pararon las piezas
cuando ella te pregunta si puedes ayudar. Aceptas automáticamente.

Como el viaje durará varios días, se ofrece a enseñarte el juego de las **cartas
camello**. Es parecido al póquer, pero está diseñado para que sea más fácil
jugarlo montado en un camello.

En Camel Cards, recibes una lista de **manos** y tu objetivo es ordenarlas en
función de la **fuerza** de cada una. Una mano consiste en **cinco cartas**
etiquetadas como `A`, `K`, `Q`, `J`, `T`, `9`, `8`, `7`, `6`, `5`, `4`, `3` o
`2`. La fuerza relativa de cada carta sigue este orden, donde `A` es la más alta
y `2` la más baja.

Cada mano es exactamente de un **tipo**. De la más fuerte a la más débil, lo
son:

- **Cinco iguales**, donde las cinco cartas tienen la misma etiqueta: `AAAAA`

- **Cuatro iguales**, donde cuatro cartas tienen la misma etiqueta y una carta
  tiene una etiqueta diferente: `AA8AA`

- **Full**, cuando tres cartas tienen la misma etiqueta y las dos restantes
  comparten una etiqueta diferente: `23332`

- **Tres iguales**, cuando tres cartas tienen la misma etiqueta y las dos
  restantes son diferentes de cualquier otra carta de la mano: `TTT98`

- **Dos pares**, cuando dos cartas comparten una etiqueta, otras dos cartas
  comparten una segunda etiqueta y la carta restante tiene una tercera etiqueta:
  `23432`

- **Un par**, donde dos cartas comparten una etiqueta, y las otras tres cartas
  tienen una etiqueta diferente del par y entre sí: `A23A4`

- **Carta alta**, en la que todas las etiquetas de las cartas son distintas:
  `23456`

Las manos se ordenan principalmente en función del tipo; por ejemplo, cualquier
**full** es más fuerte que cualquier **trío**.

Si dos manos tienen el mismo tipo, se aplica una segunda regla de ordenación.
Empiece comparando la **primera carta de cada mano**. Si estas cartas son
diferentes, la mano con la primera carta más fuerte se considera más fuerte. Sin
embargo, si la primera carta de cada mano tiene la **misma etiqueta**, pase a
considerar la **segunda carta de cada mano**. Si son diferentes, gana la mano
con la segunda carta más alta; de lo contrario, continúe con la tercera carta de
cada mano, luego la cuarta y luego la quinta.

Así, `33332` y `2AAAA` son ambas manos de **cuatro cartas iguales**, pero
`33332` es más fuerte porque su primera carta es más fuerte. Del mismo modo,
`77888` y `77788` son **full**, pero `77888` es más fuerte porque su tercera
carta es más fuerte (y ambas manos tienen la misma primera y segunda carta).

Para jugar a Camel Cards, se le da una lista de manos y su correspondiente
**puja** (su entrada de rompecabezas). Por ejemplo:

```
32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483
```

Este ejemplo muestra cinco manos; cada mano va seguida de su **puja**. Cada mano
gana una cantidad igual a su puja multiplicada por su **rango**, donde la mano
más débil obtiene el rango 1, la segunda mano más débil obtiene el rango 2, y
así sucesivamente hasta la mano más fuerte. Como hay cinco manos en este
ejemplo, la mano más fuerte tendrá el rango 5 y su puja se multiplicará por 5.

Por lo tanto, el primer paso es poner las manos en orden de fuerza:

- `32T3K` es la **única pareja** y las otras manos son todas de un tipo más
  fuerte, por lo que obtiene el rango **1**.

- `KK677` y `KTJJT` son **dos pares**. Sus primeras cartas tienen ambas la misma
  etiqueta, pero la segunda carta de `KK677` es más fuerte (`K` contra `T`), por
  lo que `KTJJT` obtiene el rango **`2`** y `KK677` el rango **`3`**.

- `T55J5` y `QQQJA` son ambos **tríos**. `QQQJA` tiene una primera carta más
  fuerte, por lo que obtiene el rango **`5`** y `T55J5` el rango **`4`**.

Ahora, puede determinar las ganancias totales de este conjunto de manos sumando
el resultado de multiplicar la puja de cada mano por su rango (`765` * `1` +
`220` * `2` + `28` * `3` + `684` * `4` + `483` * `5`). Así que las **ganancias
totales** en este ejemplo son **`6440`**.

Averigüe el valor de cada mano de su grupo. **¿Cuáles son las ganancias
totales?**

## --- Segunda parte ---

Para hacer las cosas un poco más interesantes, el Duende introduce una regla
adicional. Ahora, las cartas `J` son comodines - comodines que pueden actuar
como cualquier carta que haría la mano del tipo más fuerte posible.

Para equilibrar esto, **las cartas `J` son ahora las cartas individuales más
débiles**, más débiles incluso que la `2`. Las otras cartas permanecen en el
mismo orden: `A`, `K`, `Q`, `T`, `9`, `8`, `7`, `6`, `5`, `4`, `3`, `2`, `J`.

Las cartas `J` pueden fingir ser cualquier carta a efectos de determinar el tipo
de mano; por ejemplo, `QJJQ2` se considera ahora **cuatro iguales**. Sin
embargo, a efectos de desempatar entre dos manos del mismo tipo, la `J` siempre
se trata como `J`, no como la carta que está fingiendo ser: `JKKK2` es más débil
que `QQQQ2` porque `J` es más débil que `Q`.

Ahora bien, el ejemplo anterior es muy diferente:

```
32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483
```

- `32T3K` sigue siendo de **única pareja**; no contiene ningún comodín, por lo
  que su fuerza no aumenta.

- `KK677` es ahora la única **doble pareja**, lo que la convierte en la segunda
  mano más débil.

- `T55J5`, `KTJJT` y `QQQJA` son ahora **cuatro iguales**. `T55J5` obtiene el
  rango 3, `QQQJA` el 4 y `KTJJT` el 5.

Con la nueva regla del comodín, las ganancias totales en este ejemplo son
`5905`.

Utilizando la nueva regla del comodín, encuentre el rango de cada mano de su
grupo. **¿Cuáles son las nuevas ganancias totales?**

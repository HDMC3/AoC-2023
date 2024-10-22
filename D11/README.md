# --- Día 11: Expansión cósmica ---

Continúa siguiendo las señales hacia "Hot Springs" y finalmente te encuentras
con un observatorio. El elfo que hay dentro resulta ser un investigador que
estudia la expansión cósmica utilizando el telescopio gigante que hay aquí.

No sabe nada de las piezas de la máquina que faltan; sólo está de visita para
este proyecto de investigación. Sin embargo, confirma que las termas son la
siguiente zona más cercana en la que es probable que haya gente; incluso te
llevará directamente allí cuando termine con el análisis de la observación de
hoy.

¿Quizá puedas ayudarle con el análisis para acelerar las cosas?

El investigador ha recogido un montón de datos y los ha compilado en una única
**imagen** gigante (la entrada de tu puzzle). La imagen incluye **espacio
vacío** (`.`) y **galaxias** (`#`). Por ejemplo:

```
...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....
```

El investigador intenta averiguar la suma de las longitudes del **camino más
corto entre cada par de galaxias**. Sin embargo, hay una trampa: el universo se
expandió en el tiempo que tardó la luz de esas galaxias en llegar al
observatorio.

Debido a efectos gravitatorios, **sólo una parte del espacio se expande**. De
hecho, el resultado es que **cualquier fila o columna que no contenga galaxias**
debería ser el doble de grande.

En el ejemplo anterior, tres columnas y dos filas no contienen galaxias:

```
   v  v  v
 ...#......
 .......#..
 #.........
>..........<
 ......#...
 .#........
 .........#
>..........<
 .......#..
 #...#.....
   ^  ^  ^
```

Estas filas y columnas tienen que ser **el doble de grandes**; por tanto, el
resultado de la expansión cósmica tiene este aspecto:

```
....#........
.........#...
#............
.............
.............
........#....
.#...........
............#
.............
.............
.........#...
#....#.......
```

Equipado con este universo expandido, se puede encontrar el camino más corto
entre cada par de galaxias. Puede ayudar a asignar a cada galaxia un número
único:

```
....1........
.........2...
3............
.............
.............
........4....
.5...........
............6
.............
.............
.........7...
8....9.......
```

En estas 9 galaxias hay **36 pares**. Sólo cuenta cada par una vez; el orden
dentro del par no importa. Para cada par, encontrar cualquier camino más corto
entre las dos galaxias utilizando sólo los pasos que se mueven hacia arriba,
abajo, izquierda o derecha exactamente una `.` o `#` a la vez. (Se permite que
el camino más corto entre dos galaxias pase por otra galaxia).

Por ejemplo, he aquí uno de los caminos más cortos entre las galaxias `5` y `9`:

```
....1........
.........2...
3............
.............
.............
........4....
.5...........
.##.........6
..##.........
...##........
....##...7...
8....9.......
```

Este camino tiene longitud **`9`** porque se necesitan un mínimo de **nueve
pasos** para llegar de la galaxia `5` a la galaxia `9` (las ocho localizaciones
marcadas con `#` más el paso a la propia galaxia `9`). Aquí tienes otros
ejemplos de caminos más cortos:

- Entre galaxia `1` y galaxia `7`: 15
- Entre galaxia `3` y galaxia `6`: 17
- Entre galaxia `8` y galaxia `9`: 5

En este ejemplo, después de expandir el universo, la suma del camino más corto
entre los 36 pares de galaxias es **`374`**.

Expande el universo y calcula la longitud del camino más corto entre cada par de
galaxias. **¿Cuál es la suma de estas longitudes?**

## --- Segunda parte ---

Las galaxias son mucho más **antiguas** (y, por tanto, están mucho **más
separadas**) de lo que el investigador estimó inicialmente.

Ahora, en lugar de la expansión que hiciste antes, haz cada fila o columna vacía
**un millón de veces** más grande. Es decir, cada fila vacía debe sustituirse
por `1000000` filas vacías, y cada columna vacía debe sustituirse por `1000000`
columnas vacías.

(En el ejemplo anterior, si cada fila o columna vacía fuera sólo `10` veces
mayor, la suma de los caminos más cortos entre cada par de galaxias sería
**`1030`**. Si cada fila o columna vacía fuera sólo `100` veces mayor, la suma
de los caminos más cortos entre cada par de galaxias sería de **`8410`**. Sin
embargo, tu universo tendrá que expandirse mucho más allá de estos valores.)

Partiendo de la misma imagen inicial, expande el universo según estas nuevas
reglas y, a continuación, halla la longitud del camino más corto entre cada par
de galaxias. **¿Cuál es la suma de estas longitudes?**

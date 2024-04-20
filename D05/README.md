# --- Día 5: Si le das a una semilla un fertilizante ---

> https://adventofcode.com/2023/day/5

Coges el barco y encuentras al jardinero justo donde te dijeron que estaría:
gestionando un gigantesco "jardín" que a ti te parece más bien una granja.

"¿Una fuente de agua? Island Island **es** la fuente de agua". Señalas que Isla
Nieve no recibe agua.

"¡Oh, tuvimos que parar el agua porque nos **quedamos sin arena** con la que
filtrarla! No se puede hacer nieve con agua sucia. No te preocupes, seguro que
pronto conseguiremos más arena; sólo cortamos el agua unos días... semanas... oh
no". Su rostro se hunde en una expresión de horrorizada comprensión.

"¡He estado tan ocupado asegurándome de que todo el mundo aquí tiene comida que
olvidé por completo comprobar por qué dejamos de recibir más arena! Pronto
saldrá un ferry en esa dirección, es mucho más rápido que tu barco. ¿Podrías ir
a comprobarlo?"

Apenas tienes tiempo de acceder a esta petición cuando te plantea otra.
"Mientras esperas al ferry, quizá puedas ayudarnos con nuestro **problema de
producción de alimentos**. Acaba de llegar el último almanaque isleño y nos
cuesta encontrarle sentido".

El almanaque (tu puzzle de entrada) enumera todas las semillas que hay que
plantar. También enumera qué tipo de tierra utilizar con cada tipo de semilla,
qué tipo de abono utilizar con cada tipo de tierra, qué tipo de agua utilizar
con cada tipo de abono, etc. Cada tipo de semilla, tierra, abono, etc., se
identifica con un número, pero los números se reutilizan en cada categoría, es
decir, la tierra `123` y el abono `123` no están necesariamente relacionados
entre sí.

Por ejemplo:

```
seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4
```

El almanaque comienza enumerando las semillas que hay que plantar: las semillas
`79`, `14`, `55` y `13`.

El resto del almanaque contiene una lista de **mapas** que describen cómo
convertir números de una **categoría de origen** en números de una **categoría
de destino**. Es decir, la sección que comienza con `seed-to-soil map:` describe
cómo convertir un **número de semilla** (la fuente) en un **número de suelo**
(el destino). Esto permite al jardinero y a su equipo saber qué suelo utilizar
con qué semillas, qué agua utilizar con qué abono, etc.

En lugar de enumerar uno a uno cada número de origen y su correspondiente número
de destino, los mapas describen **rangos** enteros de números que pueden
convertirse. Cada línea de un mapa contiene tres números: el **inicio del rango
de destino**, el **inicio del rango de origen** y la **longitud del rango**.

Consideremos de nuevo el ejemplo `seed-to-soil map`:

```
50 98 2
52 50 48
```

La primera línea tiene un **inicio de rango de destino** de `50`, un **inicio de
rango de origen** de `98` y una **longitud de rango** de `2`. Esta línea
significa que el rango de origen empieza en `98` y contiene dos valores: `98` y
`99`. El rango de destino tiene la misma longitud, pero empieza en `50`, por lo
que sus dos valores son `50` y `51`. Con esta información, usted sabe que la
semilla número `98` corresponde al suelo número `50` y que la semilla número
`99` corresponde al suelo número `51`.

La segunda línea significa que el rango de origen empieza en `50` y contiene
`48` valores: `50`, `51`, ..., `96`, `97`. Esto corresponde a un rango de
destino que empieza en `52` y también contiene `48` valores: `52`, `53`, ...,
`98`, `99`. Así, el número de semilla `53` corresponde al número de suelo `55`.

Los números de origen que **no estén mapeados** corresponden al **mismo** número
de destino. Así, el número de semilla `10` corresponde al número de suelo `10`.

Así, la lista completa de números de semillas y sus correspondientes números de
suelo tiene este aspecto:

```
seed  soil
0     0
1     1
...   ...
48    48
49    49
50    52
51    53
...   ...
96    98
97    99
98    50
99    51
```

Con este mapa, puede consultar el número de suelo necesario para cada número de
semilla inicial:

- La semilla número `79` corresponde al suelo número `81`.
- La semilla número `14` corresponde al suelo número `14`.
- La semilla número `55` corresponde a la tierra número `57`.
- La semilla número `13` corresponde al suelo número `13`.

El jardinero y su equipo quieren empezar cuanto antes, así que les gustaría
saber cuál es la ubicación más cercana que necesita una semilla. Utilizando
estos mapas, encuentra **el número de ubicación más bajo que corresponda a
cualquiera de las semillas iniciales**. Para ello, tendrá que convertir cada
número de semilla a través de otras categorías hasta que pueda encontrar su
**número de ubicación** correspondiente. En este ejemplo, los tipos
correspondientes son:

- Semilla `79`, tierra `81`, fertilizante `81`, agua `81`, luz `74`, temperatura
  `78`, humedad `78`, **ubicación `82`**.
- Semilla `14`, tierra `14`, abono `53`, agua `49`, luz `42`, temperatura `42`,
  humedad `43`, **ubicación `43`**.
- Semilla `55`, tierra `57`, abono `57`, agua `53`, luz `46`, temperatura `82`,
  humedad `82`, **ubicación `86`**.
- Semilla `13`, tierra `13`, abono `52`, agua `41`, luz `34`, temperatura `34`,
  humedad `35`, **ubicación `35`**.

Así, el número de ubicación más bajo en este ejemplo es **`35`**.

**Cuál es el número de posición más bajo que corresponde a cualquiera de los
números iniciales?**

## --- Segunda parte ---

Todo el mundo morirá de hambre si sólo plantas un número tan pequeño de
semillas. Releyendo el almanaque, parece que la línea `seeds:` describe en
realidad **rangos de números de semillas**.

Los valores de la línea `seeds:` inicial vienen en pares. Dentro de cada par, el
primer valor es el **inicio** del intervalo y el segundo valor es la
**longitud** del intervalo. Así, en la primera línea del ejemplo anterior:

`seeds: 79 14 55 13`

Esta línea describe dos rangos de números de semillas que se plantarán en el
huerto. El primer rango comienza con el número de semilla `79` y contiene `14`
valores: `79`, `80`, ..., `91`, `92`. El segundo rango comienza con el número de
semilla `55` y contiene `13` valores: `55`, `56`, ..., `66`, `67`.

Ahora, en lugar de considerar cuatro números semilla, hay que considerar un
total de **`27`** números semilla.

En el ejemplo anterior, el número de localización más bajo puede obtenerse a
partir del número de semilla `82`, que corresponde a suelo `84`, fertilizante
`84`, agua `84`, luz `77`, temperatura `45`, humedad `46` y **localización
`46`**. Por lo tanto, el número de localización más bajo es **`46`**.

Considere todos los números de semillas iniciales que figuran en los intervalos
de la primera línea del almanaque. **¿Cuál es el número de localización más bajo
que corresponde a cualquiera de los números iniciales de semillas?**

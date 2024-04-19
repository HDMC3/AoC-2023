# --- Día 2: El enigma del cubo ---

> https://adventofcode.com/2023/day/2

Eres lanzado a lo alto de la atmósfera. El vértice de tu trayectoria apenas
alcanza la superficie de una gran isla que flota en el cielo. Aterrizas
suavemente en un mullido montón de hojas. Hace bastante frío, pero no ves mucha
nieve. Un elfo corre a saludarte.

El elfo te explica que has llegado a la **Isla de las Nieves** y se disculpa por
la falta de nieve. Estará encantado de explicarte la situación, pero hay que
caminar un poco, así que tienes algo de tiempo. No reciben muchas visitas aquí
arriba; ¿te gustaría jugar a algo mientras tanto?

Mientras caminas, el Duende te muestra una pequeña bolsa y unos cubos de color
rojo, verde o azul. Cada turno del juego, él esconderá un número secreto de
cubos de cada color en la bolsa, y tu objetivo es averiguar información sobre el
número de cubos.

Para obtener la información, una vez que la bolsa esté llena de cubos, el Duende
meterá la mano en la bolsa, cogerá un puñado de cubos al azar, te los enseñará y
los volverá a meter en la bolsa. Hará esto varias veces por partida.

Juegas varias partidas y registras la información de cada partida (la entrada de
tu puzzle). Cada juego se enumera con su número de identificación (como el `11`
en `Game 11: ...`) seguido de una lista separada por punto y coma de
subconjuntos de cubos que se revelaron de la bolsa (como
`3 red, 5 green, 4 blue`).

Por ejemplo, el historial de unos cuantos partidos podría tener este aspecto:

```
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
```

En el juego 1, se sacan tres grupos de cubos de la bolsa (y se vuelven a
guardar). El primer grupo consta de 3 cubos azules y 4 rojos; el segundo grupo
consta de 1 cubo rojo, 2 verdes y 6 azules; el tercer grupo consta sólo de 2
verdes.

Al Duende le gustaría saber primero qué juegos habrían sido posibles si la bolsa
contuviera **sólo 12 cubos rojos, 13 cubos verdes y 14 cubos azules**.

En el ejemplo anterior, los juegos 1, 2 y 5 habrían sido **posibles** si la
bolsa se hubiera cargado con esa configuración. Sin embargo, el juego 3 habría
sido **imposible** porque en un momento dado el Duende te mostró 20 cubos rojos
a la vez; del mismo modo, el juego 4 también habría sido **imposible** porque el
Duende te mostró 15 cubos azules a la vez. Si sumas las ID de los juegos que
habrían sido posibles, obtienes **`8`**.

Determina qué juegos habrían sido posibles si la bolsa se hubiera cargado sólo
con 12 cubos rojos, 13 cubos verdes y 14 cubos azules. **¿Cuál es la suma de los
ID de esos juegos?**

## --- Segunda parte ---

El elfo dice que han dejado de producir nieve porque no les llega agua. No está
seguro de por qué ha dejado de llegar agua, pero puede enseñarte cómo llegar a
la fuente para que lo compruebes por ti mismo. Está un poco más adelante.

Mientras seguís caminando, el Duende plantea una segunda pregunta: en cada
partida que habéis jugado, ¿cuál es el **menor número de cubos de cada color**
que podría haber en la bolsa para que la partida fuera posible?

Considera de nuevo los juegos de ejemplo de antes:

```
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
```

- En la partida 1, el juego podría haberse jugado con tan sólo 4 cubos rojos, 2
  verdes y 6 azules. Si algún color tuviera un cubo menos, el juego habría sido
  imposible.
- La partida 2 podría haberse jugado con un mínimo de 1 cubo rojo, 3 verdes y 4
  azules.
- El juego 3 debía haberse jugado con al menos 20 cubos rojos, 13 verdes y 6
  azules.
- La partida 4 requería al menos 14 cubos rojos, 3 verdes y 15 azules.
- El juego 5 necesitaba no menos de 6 cubos rojos, 3 verdes y 2 azules en la
  bolsa.

La **potencia** de un conjunto de cubos es igual a los números de cubos rojos,
verdes y azules multiplicados entre sí. La potencia del conjunto mínimo de cubos
en la partida 1 es `48`. En las partidas 2-5 fue `12`, `1560`, `630` y `36`,
respectivamente. Sumando estas cinco potencias se obtiene la suma **`2286`**.

Para cada juego, encuentra el conjunto mínimo de cubos que debe haber estado
presente. **¿Cuál es la suma de la potencia de estos conjuntos?**

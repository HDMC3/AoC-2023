# --- Día 10: Laberinto de tuberías ---

Utilizas el ala delta para surcar el aire caliente desde Desert Island hasta la
isla metálica flotante. Esta isla es sorprendentemente fría y no hay térmicas
por las que planear, así que dejas atrás el ala delta.

Deambulas un rato por los alrededores, pero no encuentras personas ni animales.
Sin embargo, de vez en cuando encuentras señales con la etiqueta "Aguas
termales" que apuntan en una dirección aparentemente coherente; tal vez puedas
encontrar a alguien en las aguas termales y preguntarle dónde se fabrican las
piezas de las máquinas del desierto.

El paisaje aquí es extraño; incluso las flores y los árboles son de metal.
Cuando te detienes a admirar unas hierbas metálicas, notas que algo metálico se
escabulle en tu visión periférica y salta a una gran tubería. No se parecía a
ningún animal que hayas visto; si quieres verlo mejor, tendrás que adelantarte.

Al escanear la zona, descubres que todo el campo en el que te encuentras está
densamente poblado de tuberías; al principio fue difícil distinguirlas porque
son del mismo color plateado metálico que el "suelo". Haces un rápido croquis de
todas las tuberías de la superficie que puedes ver (tu entrada de rompecabezas).

Las tuberías están dispuestas en una cuadrícula bidimensional de baldosas:

- `|` es una **tubería vertical** que conecta el norte y el sur.
- `-` es un **tubo horizontal** que conecta el este y el oeste.
- `L` es una **codo de 90 grados** que conecta el norte y el este.
- `J` es una **codo de 90 grados** que conecta el norte y el oeste.
- `7` es una **codo de 90 grados** que conecta el sur y el oeste.
- `F` es un **codo de 90 grados** que conecta el sur con el este.
- `.` es **tierra**; no hay tuberías en esta baldosa.
- `S` es la **posición inicial** del animal; hay una tubería en esta baldosa,
  pero tu dibujo no muestra qué forma tiene la tubería.

Basándote en la acústica del correteo del animal, estás seguro de que la tubería
que lo contiene es **un gran bucle continuo**.

Por ejemplo, aquí hay un bucle cuadrado de tubería:

```
.....
.F-7.
.|.|.
.L-J.
.....
```

Si el animal hubiera entrado en este bucle por la esquina noroeste, el boceto
tendría este aspecto:

```
.....
.S-7.
.|.|.
.L-J.
.....
```

En el diagrama anterior, la baldosa `S` sigue siendo una curva `F` de 90 grados:
se nota por cómo se conectan a ella los tubos adyacentes.

Por desgracia, también hay muchas tuberías que **no están conectadas al bucle**.
Este esquema muestra el mismo bucle que el anterior:

```
-L|F7
7S-7|
L|7||
-L-J|
L|-JF
```

En el diagrama anterior, aún puedes averiguar qué tuberías forman el bucle
principal: son las que están conectadas a `S`, las tuberías a las que conectan
esas tuberías, las tuberías a las que conectan **esas** tuberías, etcétera. Cada
tubería del bucle principal se conecta a sus dos vecinas (incluida `S`, que
tendrá exactamente dos tuberías conectadas a ella, y que se supone que se
conecta de nuevo a esas dos tuberías).

A continuación se muestra un boceto que contiene un bucle principal ligeramente
más complejo:

```
..F7.
.FJ|.
SJ.L7
|F--J
LJ...
```

Aquí está el mismo ejemplo de croquis con los azulejos de tubería extra, las
tuberias que no son del bucle principal también se muestran:

```
7-F7-
.FJ|7
SJLL7
|F--J
LJ.LJ
```

Si quieres **salir por delante del animal**, debes encontrar la baldosa del
bucle que esté **más lejos** de la posición inicial. Como el animal está en la
tubería, no tiene sentido medir esto por distancia directa. En su lugar, tienes
que encontrar la baldosa que te llevaría el mayor número de pasos **a lo largo
del bucle** para llegar desde el punto de partida - independientemente de la
dirección que el animal tomó alrededor del bucle.

En el primer ejemplo con el bucle cuadrado:

```
.....
.S-7.
.|.|.
.L-J.
.....
```

Puedes contar la distancia a la que se encuentra cada baldosa del bucle desde el
punto inicial de la siguiente manera:

```
.....
.012.
.1.3.
.234.
.....
```

En este ejemplo, el punto más alejado de la salida está a **`4`** pasos.

Aquí está de nuevo el bucle más complejo:

```
..F7.
.FJ|.
SJ.L7
|F--J
LJ...
```

Aquí están las distancias para cada baldosa en ese bucle:

```
..45.
.236.
01.78
14567
23...
```

Encuentra el bucle gigante único que comienza en `S`. **¿Cuántos pasos a lo
largo del bucle se necesitan para llegar desde la posición inicial hasta el
punto más alejado de la posición inicial?**

## --- Segunda parte ---

Rápidamente llegas al punto más alejado del bucle, pero el animal nunca emerge.
Tal vez su nido se **encuentre en la zona delimitada por el bucle**.

Para determinar si merece la pena tomarse el tiempo de buscar un nido así, hay
que calcular cuántas fichas contiene el bucle. Por ejemplo:

```
...........
.S-------7.
.|F-----7|.
.||.....||.
.||.....||.
.|L-7.F-J|.
.|..|.|..|.
.L--J.L--J.
...........
```

El bucle anterior encierra sólo **cuatro fichas**: los dos pares de `.` del
suroeste y sureste (marcados con `I` abajo). Las baldosas `.` del medio
(marcadas con `O` abajo) **no** están en el bucle. Aquí está el mismo bucle de
nuevo con esas regiones marcadas:

```
...........
.S-------7.
.|F-----7|.
.||OOOOO||.
.||OOOOO||.
.|L-7OF-J|.
.|II|O|II|.
.L--JOL--J.
.....O.....
```

De hecho, ni siquiera es necesario que haya un camino completo de baldosas hacia
el exterior para que las baldosas cuenten como fuera del bucle: ¡también está
permitido apretujarse entre tuberías! Aquí, `I` sigue dentro del bucle y `O`
sigue fuera del bucle:

```
..........
.S------7.
.|F----7|.
.||OOOO||.
.||OOOO||.
.|L-7F-J|.
.|II||II|.
.L--JL--J.
..........
```

En los dos ejemplos anteriores, el bucle encierra **`4`** fichas.

He aquí un ejemplo más amplio:

```
.F----7F7F7F7F-7....
.|F--7||||||||FJ....
.||.FJ||||||||L7....
FJL7L7LJLJ||LJ.L-7..
L--J.L7...LJS7F-7L7.
....F-J..F7FJ|L7L7L7
....L7.F7||L7|.L7L7|
.....|FJLJ|FJ|F7|.LJ
....FJL-7.||.||||...
....L---J.LJ.LJLJ...
```

El esquema anterior tiene muchos trozos de tierra aleatorios, algunos de los
cuales están en el bucle (`I`) y otros fuera de él (`O`):

```
OF----7F7F7F7F-7OOOO
O|F--7||||||||FJOOOO
O||OFJ||||||||L7OOOO
FJL7L7LJLJ||LJIL-7OO
L--JOL7IIILJS7F-7L7O
OOOOF-JIIF7FJ|L7L7L7
OOOOL7IF7||L7|IL7L7|
OOOOO|FJLJ|FJ|F7|OLJ
OOOOFJL-7O||O||||OOO
OOOOL---JOLJOLJLJOOO
```

En este ejemplo más grande, el bucle encierra **`8`** baldosas.

Cualquier baldosa que no forme parte del bucle principal puede considerarse
incluida en el bucle. Aquí hay otro ejemplo con muchos trozos de tubería por ahí
que no están conectados al bucle principal en absoluto:

```
FF7FSF7F7F7F7F7F---7
L|LJ||||||||||||F--J
FL-7LJLJ||||||LJL-77
F--JF--7||LJLJ7F7FJ-
L---JF-JLJ.||-FJLJJ7
|F|F-JF---7F7-L7L|7|
|FFJF7L7F-JF7|JL---7
7-L-JL7||F7|L7F-7F7|
L.L7LFJ|||||FJL7||LJ
L7JLJL-JLJLJL--JLJ.L
```

Aquí sólo están las baldosas **encerradas por el bucle** marcado con `I`:

```
FF7FSF7F7F7F7F7F---7
L|LJ||||||||||||F--J
FL-7LJLJ||||||LJL-77
F--JF--7||LJLJIF7FJ-
L---JF-JLJIIIIFJLJJ7
|F|F-JF---7IIIL7L|7|
|FFJF7L7F-JF7IIL---7
7-L-JL7||F7|L7F-7F7|
L.L7LFJ|||||FJL7||LJ
L7JLJL-JLJLJL--JLJ.L
```

En este último ejemplo, el bucle encierra **`10`** baldosas.

Averigua si tienes tiempo para buscar el nido calculando el área dentro del
bucle. **¿Cuántas baldosas encierra el bucle?**

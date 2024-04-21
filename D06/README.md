# --- Dia 6: Esperalo ---

> https://adventofcode.com/2023/day/6

El transbordador te lleva rápidamente al otro lado de Island Island. Tras
preguntar por los alrededores, descubres que, en efecto, normalmente hay un gran
montón de arena en algún lugar cercano, pero no ves nada aparte de mucha agua y
la pequeña isla donde ha atracado el transbordador.

Mientras intentas averiguar qué hacer a continuación, te fijas en un cartel que
hay en una pared cercana al muelle del ferry. "¡Carreras de barcos! ¡Abierto al
público! El gran premio es un viaje con todos los gastos pagados a **Desert
Island**". De ahí debe de venir la arena. Lo mejor de todo es que las regatas
empiezan dentro de unos minutos.

Consigues inscribirte como participante en las regatas justo a tiempo. El
organizador te explica que en realidad no se trata de una carrera tradicional,
sino que dispones de un tiempo determinado durante el cual tu barca tiene que
llegar lo más lejos posible, y ganas si tu barca es la que llega más lejos.

Al inscribirte, recibes una hoja de papel (la entrada del rompecabezas) en la
que figura el **tiempo permitido** para cada carrera y también la mejor
**distancia** jamás registrada en esa carrera. Para ganar el gran premio, tienes
que asegurarte de que en **cada carrera llegas más lejos** que el plusmarquista
actual.

El organizador te lleva a la zona donde se celebran las regatas. Los barcos son
mucho más pequeños de lo que esperabas: en realidad son **barcos de juguete**,
cada uno con un gran botón en la parte superior. Si mantienes pulsado el botón,
**el barco se carga**, y si lo sueltas, **se mueve**. Los barcos se mueven más
rápido si se mantiene pulsado el botón durante más tiempo, pero el tiempo que se
pasa manteniendo pulsado el botón cuenta para el tiempo total de la carrera.
Sólo se puede mantener pulsado el botón al principio de la carrera, y los barcos
no se mueven hasta que se suelta el botón.

Por ejemplo:

```
Time:      7  15   30
Distance:  9  40  200
```

Este documento describe tres carreras:

- La primera carrera dura 7 milisegundos. La distancia récord en esta carrera es
  de 9 milímetros.

- La segunda carrera dura 15 milisegundos. La distancia récord en esta carrera
  es de 40 milímetros.

- La tercera carrera dura 30 milisegundos. La distancia récord en esta carrera
  es de 200 milímetros.

Tu barco de juguete tiene una velocidad inicial de **cero milímetros por
milisegundo**. Por cada milisegundo entero que pases al principio de la carrera
manteniendo pulsado el botón, la velocidad del barco aumenta **un milímetro por
milisegundo**.

Así que, como la primera carrera dura 7 milisegundos, sólo tienes unas pocas
opciones:

- No mantengas pulsado el botón en absoluto (es decir, mantenlo pulsado durante
  **0 milisegundos**) al comienzo de la carrera. El barco no se moverá; habrá
  recorrido **0 milímetros** al final de la carrera.

- Mantenga pulsado el botón durante **1 milisegundo** al inicio de la carrera. A
  continuación, el barco se desplazará a una velocidad de 1 milímetro por
  milisegundo durante 6 milisegundos, alcanzando una distancia total recorrida
  de **6 milímetros**.

- Mantenga pulsado el botón durante **2 milisegundos**, dando al barco una
  velocidad de 2 milímetros por milisegundo. Dispondrá entonces de 5
  milisegundos para desplazarse, alcanzando una distancia total recorrida de
  **10 milímetros**.

- Mantenga pulsado el botón durante **3 milisegundos**. Después de los 4
  milisegundos restantes, el barco habrá recorrido **12 milímetros**.

- Mantenga pulsado el botón durante **4 milisegundos**. Después de los 3
  milisegundos restantes, el barco habrá recorrido **12 milímetros**.

- Mantenga pulsado el botón durante **5 milisegundos**, haciendo que el barco
  recorra un total de **10 milímetros**.

- Mantenga pulsado el botón durante **6 milisegundos**, haciendo que el barco
  recorra un total de **6 milímetros**.

- Mantenga pulsado el botón durante **7 milisegundos**. Esa es toda la duración
  de la carrera. Nunca sueltes el botón. El barco no puede moverse hasta que
  sueltes el botón. Por favor, asegúrese de soltar el botón para que el barco
  pueda moverse. **0 milímetros**.

Dado que el récord actual para esta carrera es de `9` milímetros, en realidad
hay **`4`** formas diferentes de ganar: puedes mantener pulsado el botón durante
`2`, `3`, `4` o `5` milisegundos al comienzo de la carrera.

En la segunda carrera, podrías mantener pulsado el botón durante un mínimo de
`4` milisegundos y un máximo de `11` milisegundos y batir el récord, un total de
**`8`** formas diferentes de ganar.

En la tercera carrera, puedes mantener pulsado el botón durante un mínimo de
`11` milisegundos y un máximo de `19` milisegundos y seguir batiendo el récord,
un total de **`9`** formas de ganar.

Para ver cuánto margen de error tienes, determina el **número de formas en que
puedes batir el récord** en cada carrera; en este ejemplo, si multiplicas estos
valores, obtienes **`288`** (`4` * `8` * `9`).

Determina el número de maneras en que podrías batir el récord en cada carrera.
**¿Qué obtienes si multiplicas estos números?**

## --- Segunda parte ---

Cuando la carrera está a punto de empezar, te das cuenta de que el trozo de
papel con los tiempos de las carreras y las distancias de los récords que te
dieron antes en realidad sólo tiene muy mal interletraje. En realidad **sólo hay
una carrera**: ignora los espacios entre los números de cada línea.

Entonces, el ejemplo de antes:

```
Time:      7  15   30
Distance:  9  40  200
```

Ahora en cambio significa esto:

```
Time:      71530
Distance:  940200
```

Ahora, tienes que averiguar cuántas maneras hay de ganar esta única carrera. En
este ejemplo, la carrera dura **`71530` milisegundos** y la distancia récord que
tienes que batir es de **`940200` milímetros**. Podrías mantener pulsado el
botón entre `14` y `71516` milisegundos y batir el récord, ¡un total de
**`71503`** maneras!

**¿De cuántas maneras puedes batir el récord en esta carrera mucho más larga?**

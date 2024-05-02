# --- Día 8: Páramo embrujado ---

Sigues cabalgando en camello por la Isla Desierta cuando ves que se acerca
rápidamente una tormenta de arena. Cuando te giras para avisar a la elfa,
¡desaparece ante tus ojos! Para ser justos, hacía unos minutos que había
terminado de advertirte sobre los **fantasmas**.

Una de las bolsas del camello está etiquetada como "mapas" y, efectivamente,
está llena de documentos (tu entrada de rompecabezas) sobre cómo navegar por el
desierto. Al menos, estás bastante seguro de que eso es lo que son; uno de los
documentos contiene una lista de instrucciones izquierda/derecha, y el resto de
los documentos parecen describir algún tipo de **red** de nodos etiquetados.

Parece como si tuvieras que usar las instrucciones **izquierda/derecha** para
**navegar por la red**. Tal vez si haces que el camello siga las mismas
instrucciones, ¡podrás escapar del páramo encantado!

Después de examinar los mapas un rato, hay dos nodos que llaman la atención:
`AAA` y `ZZZ`. Te parece que `AAA` es donde estás ahora, y tienes que seguir las
instrucciones izquierda/derecha hasta llegar a `ZZZ`.

Este formato define individualmente cada `nodo` de la red. Por ejemplo:

```
RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)
```

Empezando por `AAA`, tienes que **buscar el siguiente elemento** basándote en la
siguiente instrucción izquierda/derecha de tu entrada. En este ejemplo, comience
con `AAA` y vaya a la **derecha** (`R`) eligiendo el elemento derecho de `AAA`,
**`CCC`**. Luego, `L` significa elegir el elemento **izquierdo** de `CCC`,
**`ZZZ`**. Siguiendo las instrucciones izquierda/derecha, se llega a `ZZZ` en
**`2`** pasos.

Por supuesto, puede que no encuentres `ZZZ` enseguida. Si te quedas sin
instrucciones izquierda/derecha, repite toda la secuencia de instrucciones según
sea necesario: `RL` significa en realidad `RLRLRLRLRLRLRLRL...` y así
sucesivamente. Por ejemplo, aquí tienes una situación que requiere **`6`** pasos
para llegar a `ZZZ`:

```
LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)
```

Empezando en `AAA`, sigue las instrucciones izquierda/derecha. **¿Cuántos pasos
son necesarios para llegar a `ZZZ`?**

## --- Segunda parte ---

La tormenta de arena se cierne sobre vosotros y no estáis cerca de escapar del
páramo. Hiciste que el camello siguiera las instrucciones, pero apenas has
abandonado tu posición inicial. ¡Vais a necesitar **muchos más pasos** para
escapar!

¿Y si el mapa no es para personas? ¿Y si el mapa es para **fantasmas**? ¿Están
los fantasmas sujetos a las leyes del espacio-tiempo? Sólo hay una forma de
averiguarlo.

Tras examinar los mapas un poco más, te llama la atención un dato curioso: ¡el
número de nodos cuyos nombres terminan en A es igual al número de los que
terminan en `Z`! Si fueras un fantasma, probablemente **empezarías en todos los
nodos que acaban en A** y seguirías todos los caminos al mismo tiempo hasta que
todos acabaran simultáneamente en nodos que acaban en `Z`.

Por ejemplo:

```
LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)
```

Aquí hay dos nodos iniciales, `11A` y `22A` (porque ambos terminan en A).
Mientras sigues cada instrucción izquierda/derecha, usa esa instrucción para
alejarte **simultáneamente** de los dos nodos en los que te encuentras. Repite
este proceso hasta que **todos** los nodos en los que estás actualmente terminen
con `Z`. (Si sólo algunos de los nodos en los que estás terminan con `Z`, actúan
como cualquier otro nodo y continúas normalmente). En este ejemplo, procedería
de la siguiente manera:

- Paso 0: Estás en `11A` y `22A`.

- Paso 1: Eliges todos los caminos de la **izquierda**, que te llevan a `11B` y
  `22B`.

- Paso 2: Eliges todos los caminos de la **derecha**, que te llevan a **`11Z`**
  y `22C`.

- Paso 3: Eliges todos los caminos de la **izquierda**, que te llevan a `11B` y
  **`22Z`**.

- Paso 4: Eliges todos los caminos de la **derecha**, que te llevan a **`11Z`**
  y `22B`.

- Paso 5: Eliges todos los caminos de la **izquierda**, que te llevan a `11B` y
  `22C`.

- Paso 6: Eliges todos los caminos de la **derecha**, lo que te lleva a
  **`11Z`** y **`22Z`**.

Por lo tanto, en este ejemplo, usted termina enteramente en los nodos que
terminan en `Z` después de **`6`** pasos.

Simultáneamente empieza en cada nodo que termina en `A`. **¿Cuántos pasos
tardarás en estar sólo en nodos que terminan en `Z`?**

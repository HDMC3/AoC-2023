# --- Día 4: Rasca y Gana ---

> https://adventofcode.com/2023/day/4

La góndola te lleva hacia arriba. Extrañamente, sin embargo, el suelo no parece
acompañarte; no estás subiendo una montaña. A medida que el círculo de la Isla
de las Nieves se aleja de ti, una nueva masa de tierra aparece de repente sobre
ti. La góndola te transporta a la superficie de la nueva isla y entra dando
tumbos en la estación.

Al salir de la góndola, lo primero que se nota es que el aire aquí es mucho
**más cálido** que en la Isla de las Nieves. También es bastante **húmedo**. ¿Es
aquí donde está la fuente de agua?

Lo siguiente que observas es un elfo sentado en el suelo al otro lado de la
estación en lo que parece ser un montón de cartas cuadradas de colores.

"¡Oh! ¡Hola!" El elfo corre hacia ti entusiasmado. "¿En qué puedo servirle?" Le
preguntas por las fuentes de agua.

"No estoy seguro; sólo manejo la telecabina. Aunque eso suena a algo que
tendríamos, después de todo, ¡esto es **Island Island**! Seguro que el
**jardinero** lo sabe. Pero está en otra isla, la pequeña rodeada de agua, no la
flotante. Tenemos que pensar en un sistema de nombres mejor. Te diré algo: si
puedes ayudarme con algo rápido, te **prestaré mi barco** y podrás ir a visitar
al jardinero. Me regalaron todos estos rasca y gana, pero no sé qué he ganado".

El elfo te conduce hasta el montón de tarjetas de colores. Allí descubres
docenas de tarjetas rasca y gana, todas ellas con su cubierta opaca ya rascada.
Al coger una, parece que cada tarjeta tiene dos listas de números separadas por
una barra vertical (`|`): una lista de **números ganadores** y luego una lista
de **números que tienes**. Organizas la información en una tabla (la entrada de
tu puzzle).

Por lo que el Duende ha podido averiguar, tienes que averiguar cuáles de los
**números que tienes** aparecen en la lista de **números ganadores**. La primera
coincidencia hace que la tarjeta valga **un punto** y cada coincidencia después
de la primera **duplica** el valor en puntos de esa tarjeta.

Por ejemplo:

```
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
```

En el ejemplo anterior, el cartón 1 tiene cinco números ganadores (`41`, `48`,
`83`, `86` y `17`) y ocho números que usted tiene (`83`, `86`, `6`, `31`, `17`,
`9`, `48` y `53`). De los números que usted tiene, ¡cuatro de ellos (`48`, `83`,
`17` y `86`) son números ganadores! Eso significa que la tarjeta 1 vale **`8`**
puntos (1 por el primer acierto, luego se duplica tres veces por cada uno de los
tres aciertos después del primero).

- La tarjeta 2 tiene dos números ganadores (`32` y `61`), por lo que vale
  **`2`** puntos.
- La tarjeta 3 tiene dos números ganadores (`1` y `21`), por lo que vale **`2`**
  puntos.
- La tarjeta 4 tiene un número ganador (`84`), por lo que vale **`1`** punto.
- La tarjeta 5 no tiene ningún número ganador, por lo que no vale ningún punto.
- La tarjeta 6 no tiene números ganadores, por lo que no vale puntos.

Así, en este ejemplo, el montón de tarjetas de rascar del Duende vale **`13`**
puntos.

Toma asiento en el gran montón de tarjetas de colores. **¿Cuántos puntos valen
en total?**

## --- Segunda parte ---

Justo cuando estáis a punto de informar de vuestros descubrimientos al Elfo, uno
de vosotros se da cuenta de que las reglas han estado impresas en el reverso de
cada carta todo este tiempo.

No existen los "puntos". En su lugar, las tarjetas rasca y gana sólo te hacen
**ganar más tarjetas rasca y gana** iguales al número de números ganadores que
tengas.

Específicamente, ganas **copias** de las tarjetas rasca y gana por debajo de la
tarjeta ganadora igual al número de aciertos. Así, si la tarjeta 10 tuviera 5
números acertados, ganaría una copia de cada una de las tarjetas 11, 12, 13, 14
y 15.

Las copias de las tarjetas rasca y gana se puntúan como las tarjetas rasca y
gana normales y tienen el **mismo número de tarjeta** que la tarjeta que
copiaron. Así, si gana una copia de la tarjeta 10 y ésta tiene 5 números
iguales, entonces ganaría una copia de las mismas tarjetas que ganó la tarjeta
10 original: tarjetas 11, 12, 13, 14 y 15. Este proceso se repite hasta que
ninguna de las copias le haga ganar más cartas. (Las cartas nunca le harán
copiar una carta más allá del final de la mesa).

Esta vez, el ejemplo anterior va de otra manera:

```
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
```

- La carta 1 tiene cuatro números iguales, por lo que gana una copia de cada una
  de las cuatro cartas siguientes: cartas 2, 3, 4 y 5.
- Su carta original 2 tiene dos números iguales, por lo que gana una copia de
  cada una de las cartas 3 y 4.
- Su copia de la carta 2 también gana una copia de cada una de las cartas 3 y 4.
- Sus cuatro copias de la carta 3 (una original y tres copias) tienen dos
  números iguales, por lo que gana **cuatro** copias de cada una de las cartas 4
  y 5.
- Sus ocho instancias de la carta 4 (un original y siete copias) tienen un
  número coincidente, por lo que gana **ocho** copias de la carta 5.
- Sus catorce instancias de la carta 5 (un original y trece copias) no tienen
  números iguales y no gana más cartas.
- Su único ejemplar de la carta 6 (un original) no tiene números iguales y no
  gana más cartas.

Una vez que todos los originales y copias han sido procesados, terminas con
**`1`** instancia de la tarjeta 1, **`2`** instancias de la tarjeta 2, **`4`**
instancias de la tarjeta 3, **`8`** instancias de la tarjeta 4, **`14`**
instancias de la tarjeta 5, y **`1`** instancia de la tarjeta 6. En total, este
ejemplo de pila de tarjetas rasca y gana hace que al final tenga ¡**`30`**
tarjetas rasca y gana!

Procese todas las tarjetas rasca y gana originales y copiadas hasta que no gane
más tarjetas rasca y gana. Incluyendo el conjunto original de tarjetas rasca y
gana, **¿cuántas tarjetas rasca y gana tiene en total?**

# --- Día 3: Ratios de engranaje ---

> https://adventofcode.com/2023/day/3

El elfo y tú llegáis finalmente a una estación de telecabina; dice que la
telecabina os llevará hasta la **fuente de agua**, pero hasta aquí puede
llevaros. Entra.

No tardáis mucho en encontrar las góndolas, pero parece haber un problema: no se
mueven.

"¡Aaah!"

Te das la vuelta para ver a un elfo un poco grasiento con una llave inglesa y
cara de sorpresa. "¡Lo siento, no esperaba a nadie! El ascensor de la góndola no
funciona ahora mismo; aún tardaré un rato en poder arreglarlo". Te ofreces a
ayudar.

El ingeniero explica que parece que falta una pieza en el motor, pero nadie sabe
cuál. Si se **suman todos los números de pieza** del esquema del motor, será
fácil averiguar cuál falta.

El esquema del motor (la entrada de tu puzzle) consiste en una representación
visual del motor. Hay un montón de números y símbolos que no entiendes muy bien,
pero aparentemente **cualquier número adyacente a un símbolo**, incluso en
diagonal, es un "número de pieza" y debe incluirse en tu suma. (Los puntos (`.`)
no cuentan como símbolo).

```
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
```

En este esquema, dos números **no son** números de pieza porque no son
adyacentes a un símbolo: `114` (arriba a la derecha) y `58` (centro a la
derecha). Todos los demás números son adyacentes a un símbolo y, por tanto, son
números de pieza; su suma es `4361`.

Por supuesto, el esquema real del motor es mucho más grande. **¿Cuál es la suma
de todos los números de pieza del esquema del motor?**

## --- Segunda parte ---

El ingeniero encuentra la pieza que falta y la instala en el motor. A medida que
el motor cobra vida, saltas a la góndola más cercana, listo por fin para
ascender a la fuente de agua.

Sin embargo, no parece que vayas muy rápido. ¿Será que algo va mal?
Afortunadamente, la góndola tiene un teléfono con la etiqueta "ayuda", así que
lo coges y el ingeniero responde.

Antes de que puedas explicarle la situación, te sugiere que mires por la
ventana. Allí está el maquinista, con el teléfono en una mano y saludando con la
otra. Vais tan despacio que ni siquiera habéis salido de la estación. Sales de
la góndola.

La pieza que faltaba no era el único problema: uno de los engranajes del motor
está mal. Un **engranaje** es cualquier símbolo `*` adyacente a **exactamente
dos números de pieza**. Su **relación de transmisión** es el resultado de
multiplicar esos dos números.

Esta vez, tienes que encontrar la relación de transmisión de cada engranaje y
sumarlos todos para que el ingeniero pueda averiguar qué engranaje necesita ser
sustituido.

Consideremos de nuevo el mismo esquema del motor:

```
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
```

En este esquema, hay **dos** engranajes. El primero está en la parte superior
izquierda; tiene los números de pieza `467` y `35`, por lo que su relación de
transmisión es `16345`. El segundo engranaje está en la parte inferior derecha;
su relación de transmisión es `451490`. (El `*` adyacente a `617` **no** es un
engranaje porque sólo es adyacente a un número de pieza). Sumando todas las
relaciones de transmisión se obtiene **`467835`**.

**¿Cuál es la suma de todas las relaciones de transmisión en el esquema de tu
motor?**

# --- Dia 1: Trebuchet?! ---

> https://adventofcode.com/2023/day/1

Algo va mal en la producción mundial de nieve, y te han seleccionado para echar
un vistazo. Los elfos te han dado un mapa en el que han marcado con estrellas
los cincuenta lugares con más problemas.

Llevas haciendo esto el tiempo suficiente para saber que, para restablecer las
operaciones de nieve, tienes que comprobar las **cincuenta estrellas** antes del
25 de diciembre.

Consigue estrellas resolviendo rompecabezas. Habrá dos puzles disponibles cada
día del calendario de Adviento; el segundo puzle se desbloquea cuando completas
el primero. Cada puzle otorga **una estrella**. Mucha suerte.

Intentas preguntar por qué no pueden usar una máquina meteorológica ("no es lo
bastante potente") y adónde te envían ("al cielo") y por qué tu mapa está casi
siempre en blanco ("haces muchas preguntas") y espera, ¿acabas de decir el
cielo? ("claro, ¿de dónde crees que viene la nieve?") cuando te das cuenta de
que los elfos ya te están metiendo en un trebuchet ("no te muevas, tenemos que
atarte").

Cuando están haciendo los últimos ajustes, descubren que su documento de
calibración (la entrada de tu puzzle) ha sido **modificado** por una elfa muy
joven que, al parecer, sólo estaba emocionada por mostrar sus habilidades
artísticas. En consecuencia, los elfos tienen problemas para leer los valores
del documento.

El documento de calibración recién mejorado consta de líneas de texto; cada
línea contenía originalmente un **valor de calibración** específico que los
elfos necesitan recuperar ahora. En cada línea, el valor de calibración puede
encontrarse combinando el **primer dígito** y el **último** (en ese orden) para
formar un único **número de dos dígitos**.

Por ejemplo:

```
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
```

En este ejemplo, los valores de calibración de estas cuatro líneas son `12`,
`38`, `15` y `77`. Sumándolos, se obtiene 142. Si los sumamos, obtenemos
**`142`**.

Considere todo su documento de calibración. **¿Cuál es la suma de todos los
valores de calibrado?**

## --- Segunda parte ---

Tu cálculo no es del todo correcto. Parece que algunos de los dígitos se
**escriben con letras**: `one`, `two`, `three`, `four`, `five`, `six`, `seven`,
`eight` y `nine` **también** cuentan como "dígitos" válidos.

Equipado con esta nueva información, ahora tienes que encontrar el verdadero
primer y último dígito de cada línea. Por ejemplo:

```
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
```

En este ejemplo, los valores de calibración son `29`, `83`, `13`, `24`, `42`,
`14` y `76`. La suma de estos valores da como resultado 281. Al sumarlos, se
obtiene **`281`**.

**¿Cuál es la suma de todos los valores de calibración?**

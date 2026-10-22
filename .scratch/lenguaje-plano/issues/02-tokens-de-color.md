# Tokens de color: azul de la ley, rojo de la Fundación, violeta de ambos

Status: resolved
Type: task

Lee `.scratch/lenguaje-plano/spec.md` antes de empezar.

```
Trabaja en D:\WELS\mecenazgo-del-deporte (Next.js 15, Chakra 3.37).

Job: que la aplicación tenga tres colores de procedencia, para que el usuario vea de un
vistazo si una frase viene de la ley (azul), del material de deportejoven.es (rojo) o de
los dos (violeta). Hoy el tema solo tiene `brand` (azul) y `accent` (dorado) y no hay
forma de distinguir de dónde sale el contenido.

Where: components/ui/theme.ts. Nada más.

What:
1. Registra dos escalas de color nuevas en `tokens.colors`, con la misma forma que
   `brand` y `accent` (50 a 950):

   `fdj`, el rojo de la Fundación Deporte Joven. Su color de marca es `#DB291E`
   (sale de `a { color:#DB291E }` en el custom.css de su tema WordPress). Escala:
   50 `#fdf0ef`, 100 `#fbdcd9`, 200 `#f7b9b4`, 300 `#f28e87`, 400 `#ec625a`,
   500 `#db291e`, 600 `#c12219`, 700 `#a01c14`, 800 `#7f1711`, 900 `#66130e`.

   `mixto`, el violeta de la mezcla. Escala:
   50 `#f5f1fa`, 100 `#ebe1f4`, 200 `#d7c3ea`, 300 `#b99ad9`, 400 `#9a6cc7`,
   500 `#7f49b3`, 600 `#6d3b8e`, 700 `#5b2f76`, 800 `#4a265f`, 900 `#3d204f`.

2. Registra también la escala `ley`, que es el azul de la ley. No inventes un azul
   nuevo: aliasa el de marca, valor a valor, para que cambiar el azul de marca repinte los
   dos a la vez:

   ley: {
     50: { value: '{colors.brand.50}' },
     100: { value: '{colors.brand.100}' },
     ... (hasta 950)
   }

   Comprueba que Chakra resuelve esas referencias: si `{colors.brand.50}` no funciona
   dentro de una escala, pon los literales y avisa en el commit.

3. Añade los tokens semánticos de las tres paletas, con la misma forma que tienen
   `brand` y `accent` (solid, contrast, fg, muted, subtle, emphasized, focusRing):
   `ley`, `fdj` y `mixto`. Para `ley`, `solid` apunta a `{colors.ley.600}` y `fg` a
   `{colors.ley.700}`.

4. Mide el contraste de los tres `fg` sobre fondo blanco y anota el ratio medido en un
   comentario junto a la paleta. CODING_STANDARDS.md exige contraste medido, no
   estimado. Si alguno queda por debajo de 4.5:1, oscurece ese tono y vuelve a medir.
   Referencia: `#a01c14` da 7.9:1 y `#5b2f76` da 10:1 o más; el azul de marca ya
   cumple.

Boundary:
- No cambies los valores de `brand` ni de `accent`: las cifras destacadas del simulador
  usan `accent` y no deben moverse.
- No añadas ni cambies ninguna otra escala, ni los radios, ni las fuentes.
- No toques ningún componente todavía: este ticket es solo el sistema de color. El
  consumo llega en el ticket 03 y el 07.
- No escribas cifras de la ley en ningún sitio: este fichero no lleva ninguna y no debe
  empezar a llevarlas.

Match:
- Todo el color sale de components/ui/theme.ts: no pongas colores literales en
  componentes (regla del README).
- Comentarios en español, explicando el porqué (por ejemplo, de dónde sale `#DB291E`).
- Los tokens semánticos se nombran igual que los de marca: `fg`, `muted`, `subtle`,
  `emphasized`, `solid`, `contrast`, `focusRing`.

Checks antes de dar el ticket por hecho:
npm run check
```

Notas de entrega:

- Un ticket, un commit. Rama `feature/lenguaje-plano-02-tokens`.
- Este ticket es independiente del 01: se puede hacer en paralelo.
- Después de aplicar el color, la página sigue igual de aburrida: lo que da sentido a
  estos tres colores es el ticket 07, que los pinta. Si el 07 se retrasa, no pasa nada;
  los tokens no se ven hasta que alguien los usa.
- Contraste medido con una herramienta real (por ejemplo el comprobador de WebAIM o
  un cálculo sobre los canales sRGB), no a ojo.

## Comments

Hecho: escalas `ley` (alias de `brand`), `fdj` (rojo #DB291E) y `mixto` (violeta), con sus tokens semánticos y el contraste medido anotado.

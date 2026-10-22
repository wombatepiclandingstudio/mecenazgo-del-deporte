# Modal de la ley: extracto literal en cursiva, enlace a la norma y confianza

Status: resolved
Type: task

Lee `.scratch/lenguaje-plano/spec.md` antes de empezar.

```
Trabaja en D:\WELS\mecenazgo-del-deporte (Next.js 15, Chakra 3.37).

Job: que cualquier dato legal de la aplicación se pueda abrir para ver de dónde sale. Al
pulsar el enlace, se abre un modal con la cita literal de la norma en cursiva, el enlace
para leer la norma entera en el BOE y la confianza de la reescritura. En móvil, el modal
ocupa toda la pantalla.

Where: un componente nuevo, components/mecenazgo/EnlaceLey.tsx. Y, si hace falta, un
componente hermano para la línea de fuente, components/mecenazgo/LineaFuente.tsx. No
touches PanelLey.tsx todavía: el consumo llega en el ticket 07.

What:

1. Antes de escribir nada, comprueba la API real de Chakra 3.37 que tienes instalada:
   los nombres de las partes de `Dialog` (`Dialog.Root`, `Dialog.Backdrop`,
   `Dialog.Positioner`, `Dialog.Content`, `Dialog.Header`, `Dialog.Title`,
   `Dialog.Body`, `Dialog.CloseTrigger`), los valores que admite `size` y si existe
   `useBreakpointValue` en la exportación de `@chakra-ui/react`. CODING_STANDARDS.md lo
   dice: API antes que suposición. Mira el código de `node_modules/@chakra-ui/react`
   si dudas.

2. `EnlaceLey` recibe:

   interface Props {
     /** Etiqueta del botón, p. ej. "Ver el art. 16". */
     children: React.ReactNode;
     /** Identificador de la fuente, para buscar la URL en FUENTES. */
     fuente: string;
     /** Etiqueta del artículo, p. ej. "Art. 16". */
     art?: string;
     /** Ancla dentro de la página de la norma, p. ej. "#a16". */
     ancla?: string;
     /** Texto llano: qué significa, en palabras corrientes. */
     plano?: string;
     /** Cita literal de la norma. Se muestra en cursiva. */
     extracto?: string;
     /** De dónde sale: "ley", "fdj" o "mixto". */
     origen: Origen;
     /** Confianza de la reescritura. */
     confianza?: Confianza;
   }

   Importa `Origen` y `Confianza` de "@/lib/legal". Importa `FUENTES` de ahí también.

3. El botón:
   - `<Button variant="outline" size="sm">` con el color de la paleta que toque:
     `colorPalette="ley"`, `colorPalette="fdj"` o `colorPalette="mixto"`.
   - Abre el modal. El botón es un `<button>` de verdad, no un `<div>` con onClick.

4. El modal:
   - Título: el título de la norma que sale de `FUENTES[fuente].titulo`, con la etiqueta
     del artículo (`art`) al lado, si la hay.
   - Cuerpo, en este orden:
     a) el texto llano (`plano`), si existe, en el color de texto normal;
     b) el extracto literal, en cursiva (`fontStyle="italic"`), dentro de una caja con
        borde izquierdo de 3 px del color de la paleta y fondo `muted` de esa paleta.
        Cita literal: no la reescribas ni la completes;
     c) una etiqueta de procedencia: "Lo dice la ley" / "Lo dice deportejoven.es" /
        "Lo dicen los dos", con el color de la paleta;
     d) si hay `confianza`, una etiqueta con el nivel ("confianza alta", "media", "baja");
     e) un enlace externo "Ver en el BOE" (o "Ver el documento") que apunte a
        `FUENTES[fuente].url` más `ancla` si la hay. `target="_blank"`, `rel="noreferrer"`,
        y el texto del enlace debe decir que se abre en otra pestaña.
   - En móvil, a pantalla completa. En escritorio, un modal centrado que no ocupe toda la
     altura. El tamaño del modal se resuelve con el breakpoint de Chakra, no con `@media`
     escrito a mano.
   - Se cierra con Escape, con el botón de cerrar y con el fondo.
   - El enlace externo y el botón de cerrar tienen nombre accesible. El modal tiene
     `aria-labelledby` al título (Chakra lo resuelve con `Dialog.Title`; comprueba que
     queda bien y ponlo si no).

5. `LineaFuente` (si lo creas) sustituye al `FuenteLine` que hoy vive dentro de
   PanelLey.tsx. Pinta, en una línea: "Fuente: <nombre de la norma, enlace externo> ·
   verificado el dd/mm/aaaa" y, a la derecha, la etiqueta de confianza. Usa los mismos
   tokens semánticos que el resto de la aplicación (`fg.muted`, `brand.fg`) y el color de
   paleta según el origen. No lo borres de PanelLey.tsx todavía: en este ticket solo
   creates el componente; el cambio de PanelLey es del ticket 07.

Boundary:
- No uses `iframe`: el BOE manda `X-Frame-Options: SAMEORIGIN` y `frame-ancestors 'self'`,
  así que no se puede incrustar. El modal enseña el extracto que vive en el repo.
- No escribas cifras de la ley en el componente (lib/cifras.test.ts lo vigila): ni
  porcentajes, ni topes, ni importes. Si un texto necesita una cifra, esa cifra tiene
  que venir en la entrada de lib/legal.ts.
- No escribas el texto legal ni el texto llano dentro del componente: el componente
  recibe lo que viene de lib/legal.ts.
- No cambies el tema ni los tokens (ticket 02).
- No toques PanelLey.tsx, PanelProgramas.tsx ni app/ley/page.tsx.
- No añadas dependencias.

Match:
- Chakra v3 con el sistema de tokens del repo: nada de colores literales, ni de
  `sx` hacks.
- Accesibilidad: el modal es de Chakra, que ya gestiona el foco; no lo reimplementes.
  Etiquetas con texto, no solo color.
- Comentarios en español que explican el porqué.
- Contraste medido de los tres colores sobre el fondo del modal.

Checks antes de dar el ticket por hecho:
npm run check
```

Notas de entrega:

- Un ticket, un commit. Rama `feature/lenguaje-plano-03-modal`.
- Depende del 01 (los tipos `Origen` y `Confianza`); si el 01 aún no está, espera o
  define los tipos en el propio componente y muévelos después.
- Al terminar, mira la pantalla en un viewport de 375 px de ancho: el modal tiene que
  llenar la pantalla y el enlace externo tiene que seguir siendo pulsable con el pulgar.
- Si al abrir el modal el texto se sale o el fondo deja de ser legible, ajusta el
  `size`, no los paddings.

## Comments

Hecho: `components/mecenazgo/EnlaceLey.tsx`, modal a pantalla completa en móvil con el extracto en cursiva, la procedencia, la confianza y el enlace a la norma. Sin iframes: el BOE manda X-Frame-Options.

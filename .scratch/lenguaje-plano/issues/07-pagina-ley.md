# La ruta /ley: texto llano, modal de la ley, leyenda de colores y fuentes separadas

Status: resolved
Type: task

Lee `.scratch/lenguaje-plano/spec.md` antes de empezar.

```
Trabaja en D:\WELS\mecenazgo-del-deporte (Next.js 15, Chakra 3.37).

Job: que la página de la ley (/ley) se pueda leer sin saber derecho y que se vea de
dónde sale cada cosa. Hoy el texto es técnico, no hay ninguna señal de procedencia y las
fuentes del BOE y de la Fundación están en una lista mezclada. El usuario tiene que
poder leer una regla en palabras claras, abrirla y ver la cita literal y la norma donde
puede comprobarla.

Where: components/mecenazgo/PanelLey.tsx, components/mecenazgo/PanelProgramas.tsx y
app/ley/page.tsx. Usa los componentes del ticket 03 (EnlaceLey y LineaFuente). Si el
ticket 03 no está, créalos aquí con la misma API, y avisa en el commit para que el 03 se
adapte en vez de duplicar.

What:

1. Sustituye el uso de `d.texto` por `d.plano` en todas las entradas que ya tengan el
   campo, y cae a `d.texto` cuando no exista. Nunca muestres el texto llano y el legal
   uno detrás de otro: el legal va en el modal.

2. Cada bloque que cita una norma muestra, junto al texto:
   - un botón "Ver la ley" (el componente EnlaceLey), con el color de la paleta que
     toque: azul para la ley, rojo para la Fundación, violeta para lo que viene de los
     dos;
   - el texto llano debajo del título, en el color de texto normal;
   - la línea de fuente (FuenteLine, del ticket 03), con el nombre de la norma enlazado
     fuera y la etiqueta de confianza.

3. Añade la leyenda al principio de la página, antes de "De donde sale este texto":
   un bloque pequeño con las tres etiquetas y su color:
   - azul: "Lo que dice la ley (BOE)";
   - rojo: "Lo que dice deportejoven.es";
   - violeta: "Lo que dicen los dos".
   Añade también una etiqueta que explique el color de la fuente junto a cada botón, si
   el texto llano no lo dice solo. La leyenda no puede ser la única forma de distinguir:
   cada botón lleva texto.

4. Rehaz la tarjeta "De donde sale este texto":
   - dos listas, con títulos: "Leyes y normas" y "Documentos de la Fundación";
   - cada ley enlaza a su página del BOE (con el ancla si la hay);
   - cada documento de la Fundación enlaza a su documento concreto, no a la página de
     entrada;
   - la fecha de verificación sigue visible.
   Los datos salen de FUENTES (lib/legal.ts), no escritos a mano en el componente.

5. Los títulos y los textos que están escritos dentro de los componentes (encabezados,
   descripciones de tarjeta, frases de intro) también van en palabras claras. Por
   ejemplo:
   - "Quien puede recibir una aportacion con incentivo" → "Quién puede recibir tu
     aportación con ventaja fiscal";
   - "Mapa de los articulos" → "Qué dice cada artículo";
   - "La certificacion" → "El papel que te da la entidad";
   - "Base de la deduccion" → "Sobre qué cantidad se calcula la deducción";
   - "Errores en el material de la Fundacion" → "Errores en el material de la Fundación";
   - "Lo que la ley dice del deporte" → "Lo que la ley dice del deporte" (este ya vale).
   No reescribas el texto de los datos: eso vive en lib/legal.ts (tickets 05 y 06).

6. Los bloques de la Fundación (PanelProgramas) llevan el color rojo en sus etiquetas y
   sus botones: "Errores en el material de la Fundación", el calendario, las notas y las
   preguntas. El bloque de actividades prioritarias es azul: la lista viene de la DA 57.ª
   de la Ley 31/2022.

Boundary:
- No cambies ninguna cifra, ninguna fecha ni ningún dato de lib/legal.ts.
- No escribas cifras de la ley en los componentes: lib/cifras.test.ts lo vigila y las
  cifras vienen del dominio.
- No cambies el texto de los PDF (informe de cálculo y certificado): son documentos
  aparte.
- No toques las otras dos rutas (/ y /simulador): el simulador es el ticket 09.
- No añadas dependencias ni librerías de UI.
- No subas la clave de localStorage: esta ruta no guarda estado.

Match:
- Chakra v3 con los tokens del repo: colorPalette="ley" | "fdj" | "mixto". Nada de
  colores literales.
- Accesibilidad: cada elemento que se distingue por color lleva además texto. Las
  tablas conservan su `caption` y sus encabezados de fila y columna.
- Contraste medido de los tres colores sobre el fondo de la página.
- Comentarios en español.

Checks antes de dar el ticket por hecho:
npm run check
```

Notas de entrega:

- Un ticket, un commit. Rama `feature/lenguaje-plano-07-pagina-ley`.
- Mira la página en 375 px de ancho: el modal tiene que llenar la pantalla y la leyenda
  tiene que seguir siendo legible.
- Si algo del texto de la interfaz no se puede reescribir sin inventar, se deja como
  está y se anota en el ticket.
- El ticket 08 (casa: glosario, estándares, ADR, README) es el siguiente paso natural y no
  depende de este.

## Comments

Hecho: la ruta /ley muestra el texto llano, abre el modal con la cita literal, tiene leyenda de colores y separa leyes y documentos de la Fundación en la tarjeta de fuentes.

# Reescritura en lenguaje claro: los bloques de la Fundación y los programas

Status: resolved
Type: task

Lee `.scratch/lenguaje-plano/spec.md` antes de empezar, en particular las "Reglas de
redacción" y la tabla "Enlaces de deportejoven.es que se usan".

```
Trabaja en D:\WELS\mecenazgo-del-deporte (Next.js 15, Vitest).

Job: que el material de la Fundación se lea como lo que es: las reglas de un programa de
mecenazgo deportivo, escritas por la Fundación, y no como artículos de una ley. Hoy el
usuario no distingue qué viene del BOE y qué viene de deportejoven.es, y las reglas del
programa están redactadas como si fueran normativa.

Where: lib/legal.ts. Solo los bloques de la Fundación y de los programas. No toques
components/ ni app/ en este ticket: el consumo es del ticket 07.

What:

1. Añade a cada entrada de estos bloques los campos nuevos del modelo de datos (ticket 01):
   `plano` (texto llano), `confianza` ("alta", "media" o "baja") y, cuando el texto
   dependa de más de un documento, `fuentes` con el identificador que falte.

   Bloques a reescribir:
   - PROGRAMAS_2026 (4 entradas): el campo `elevacion` es texto de normativa; escribe en
     `plano` qué significa para el aportante ("Tu aportación se puede descontar un 45 % de
     la cuota, cinco puntos más que en una donación normal").
   - CALENDARIO_2026 (9 entradas): `plano` explica qué tiene que hacer el usuario y
     cuándo ("Si quieres que tu dinero llegue al proyecto este año, el formulario tiene
     que estar firmado antes del 11 de diciembre").
   - REQUISITOS_SOLICITUD (18 entradas): `plano` explica el requisito en palabras
     corrientes ("No puedes estar sancionado en firme por dopaje").
   - LINEAS_2026 (4 entradas): `plano` explica la línea de una frase ("Proyectos de
     entidades que compiten en ligas que no son profesionales").
   - DEFECTOS_FDJ (12 entradas): el campo `publicado` es lo que dice el documento;
     `plano` lo explica ("En su ejemplo, las cifras salen en blanco: el ejemplo no se
     puede usar").
   - PREGUNTAS_FDJ (6 entradas): `plano` dice qué se pregunta y por qué importa.
   - NOTAS_PROGRAMAS (5 entradas): `plano` explica la nota sin jerga.
   - ESCALA_CANON_AEIP (6 entradas): `plano` explica el tramo ("Hasta 1.000 €: la
     Fundación no se lleva nada").
   - AVISO_PRESUPUESTO y ACTIVIDADES_INTRO: `plano` explica qué significa para el
     aportante.

2. El `extracto` de estas entradas es la cita literal del documento de la Fundación (el
   PDF de las Bases, el FAQ, el díptico), con su redacción original. Donde el documento
   tenga el texto en una tabla o en una infografía, cita la frase que lo sostiene y di en
   el modal de qué parte del documento sale.

3. La `confianza`:
   - "alta" cuando el texto llano solo explica el documento;
   - "media" cuando el documento es ambiguo y el texto llano elige una lectura;
   - "baja" en las entradas que tocan una cuestión abierta: el canon de los programas AEIP
     (marginal o plano), el mínimo de 150 €, quién firma el certificado de listado de
     carrera dual y la vigencia del tope de 50.000 €.

4. Ojo con dos puntos que el material de la Fundación no dice y que no puedes inventar:
   - el canon de los programas AEIP: el texto llano no puede afirmar si se aplica por
     tramos o al total. Se dice lo que dice el documento y se marca "baja";
   - el tope de 50.000 €: solo alcanza a «España Compite», no a los programas AEIP.

5. Revisa si algún `plano` repite una cifra que ya está en el texto legal: eso está bien
   (la cifra viene de lib/legal.ts), pero no añadas ninguna cifra nueva. Si el documento
   de la Fundación trae una cifra que el repositorio no tiene (por ejemplo un importe o
   un plazo), NO la escribas en el `plano`: anótala en el ticket como candidata a
   `FIGURAS`, con su fuente, y sigue.

Boundary:
- No cambies ninguna cifra, ninguna fecha ni ningún `verificadoEn` de las entradas.
- No añadas entradas nuevas ni cambies `fuente` de ninguna, salvo para añadir la segunda
  fuente en `fuentes` cuando el texto depende de dos documentos.
- No escribas el texto llano en los componentes: todo va en lib/legal.ts.
- No toques los bloques de la ley (DEPORTE_LEY, ARTICULOS, BASE_DEDUCCION,
  CERTIFICACION_DATOS, MODALIDADES, ACTIVIDADES_PRIORITARIAS): ese es el ticket 05.
- No toques lib/programas.ts ni lib/mecenazgo.ts: aquí solo se redacta.

Match:
- El tono de los textos llanos: frases cortas, tuteo al usuario, sin jerga de la
  Fundación ("canon de gestión" se explica la primera vez; después, "lo que se queda la
  Fundación").
- Comentarios en español.
- Los identificadores sin acentos; los textos con acentos.

Checks antes de dar el ticket por hecho:
npm run check
```

Notas de entrega:

- Un ticket, un commit. Rama `feature/lenguaje-plano-06-fundacion`.
- Los documentos de la Fundación están en la spec, con su URL. Si necesitas el literal,
  descárgalo del PDF o de la página: no lo escribas de memoria.
- El ticket 07 (interfaz) no espera a este: se puede escribir con los nombres de campo ya
  decididos.
- Si al reescribir aparece una cifra o una fecha que el repositorio no tiene, el hueco se
  anota en un archivo nuevo bajo `.scratch/lenguaje-plano/issues/` con su fuente. No se
  cuela en el texto llano.

## Comments

Hecho. Los extractos de la Fundación son citas literales de los documentos de deportejoven.es, con su identificador de fuente (F24 a F37).

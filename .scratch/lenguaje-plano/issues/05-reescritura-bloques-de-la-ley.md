# Reescritura en lenguaje claro: los bloques de la ley

Status: resolved
Type: task

Lee `.scratch/lenguaje-plano/spec.md` antes de empezar, en particular las "Reglas de
redacción" y la tabla "Normas que aplican".

```
Trabaja en D:\WELS\mecenazgo-del-deporte (Next.js 15, Vitest).

Job: que quien use la aplicación entienda las reglas de la ley sin saber derecho. Hoy el
texto de la ruta /ley está escrito con el vocabulario del código: "entidad acreedora",
"mecenazgo prioritario", "partida deducible", "base liquidable". Cada entrada de la ley
tiene que poder explicarse en palabras corrientes y llevar delante la cita literal de la
norma, para que el usuario pueda contrastarla.

Where: lib/legal.ts. Solo los bloques que la ruta /ley muestra. No toques components/ ni
app/ en este ticket: el consumo es del ticket 07.

What:

1. Añade a cada entrada de estos bloques los campos nuevos del modelo de datos (ticket 01):
   `plano` (texto llano), `extracto` (cita literal), `confianza` ("alta", "media" o
   "baja"), `ancla` (ancla del BOE, del registro del ticket 04) y, cuando el texto
   dependa de dos normas, `fuentes` con la segunda.

   Bloques a reescribir:
   - DEPORTE_LEY (5 entradas)
   - ARTICULOS (13 entradas)
   - NAVARRA_ARTICULOS (6 entradas)
   - BASE_DEDUCCION (6 entradas)
   - CERTIFICACION_DATOS (6 entradas)
   - MODALIDADES (3 entradas)
   - NOTAS (2 entradas)
   - NOTAS_PRIORITARIAS (3 entradas)
   - ACTIVIDADES_PRIORITARIAS (20 entradas)
   - ESCALA_IS, ESCALA_IRPF, ESCALA_NAVARRA, PRIORITARIAS, NAVARRA_REGLAS,
     NAVARRA_DESTINOS, NAVARRA_TOPE, IRPF_CUBO, LIMITE_SIMBOLICO, CONDICIONES,
     NAVARRA_PRIORITARIAS, PRIORITARIAS_TITULO, ACTIVIDADES_INTRO, REQUISITOS:
     estos no se reescriben ahora, pero sí admiten `plano` en los títulos y detalles que
     la interfaz enseña. Si un título es técnico ("Donativo reiterado"), su `plano` es la
     versión corriente ("Donar tres años seguidos a la misma entidad").

2. El texto llano (`plano`) de cada entrada reescribe el significado, no reordena la
   entrada. Ejemplos del tono que se busca:
   - ARTICULOS, "Art. 16": "Qué entidades pueden recibir tu aportación con ventaja fiscal".
   - BASE_DEDUCCION, "Usufructo sobre inmuebles": "Sobre qué cantidad se calcula la
     deducción cuando regalas el derecho a usar un piso o un local".
   - CERTIFICACION_DATOS, letra b): "Que la entidad esté en la lista del artículo 16".
   - DEPORTE_LEY, "DA 12.ª.1": "Los ingresos de los espectáculos deportivos no cuentan
     para el 40 %".
   El término legal va entre paréntesis con su artículo la primera vez: "la entidad que
   puede recibir tu aportación (entidad acreedora, art. 16)".

3. El `extracto` es la cita literal del texto consolidado del BOE. Se copia tal cual, sin
   reescribir y sin puntos suspensivos añadidos. Si la entrada resume varios apartados,
   extrae el apartado que sostiene la idea y di en el modal a qué apartado pertenece.
   Cuando la fuente sea la AEAT (F11, F12, F13) o el DFL navarro, el extracto sale de ese
   documento, no de una traducción.

4. La `confianza`:
   - "alta" cuando el texto llano solo explica el extracto;
   - "media" cuando agrupa o resume varios apartados, o cuando ordena por pasos lo que la
     norma enumera en otro orden;
   - "baja" cuando el texto llano añade un ejemplo que no está en la norma, o cuando
     toca una cuestión que el repositorio tiene abierta (por ejemplo, el canon de los
     programas AEIP, o la aplicación del límite de 50.000 €).

5. Los `ancla` vienen del registro ANCLAS del ticket 04. Si un artículo no tiene ancla
   comprobada, el campo se deja vacío y el enlace va a la norma entera.

6. Deja el texto legal que ya hay intacto. `plano` es un campo nuevo, no una sustitución.

Boundary:
- No cambies ninguna cifra, ningún porcentaje, ningún importe, ninguna fecha y ningún
  `verificadoEn`. Si al reescribir te aparece una cifra que no está en la entrada, es que
  has escrito mal: quítala y usa palabras.
- No cambies `fuente` de ninguna entrada ni añadas entradas nuevas.
- No escribas el texto llano en los componentes: todo va en lib/legal.ts, porque
  lib/cifras.test.ts no permite cifras de la ley fuera de ahí.
- No toques lib/mecenazgo.ts, lib/programas.ts, ni los bloques de la Fundación
  (PROGRAMAS_2026, CALENDARIO_2026, DEFECTOS_FDJ, PREGUNTAS_FDJ, NOTAS_PROGRAMAS,
  REQUISITOS_SOLICITUD, LINEAS_2026, ESCALA_CANON_AEIP): ese es el ticket 06.
- No inventes extractos. Si no puedes copiar el literal del texto consolidado, deja el
  campo vacío y anótalo en el ticket.

Match:
- Comentarios en español, sin tuteo en el código: el texto llano sí tutea al usuario.
- Las claves y los identificadores van sin acentos; los textos con acentos.
- El estilo de los textos: frases cortas, sin subordinación, sin muletillas.

Checks antes de dar el ticket por hecho:
npm run check
```

Notas de entrega:

- Un ticket, un commit por bloque si el diff se hace grande: `ley-1` (DEPORTE_LEY,
  ARTICULOS, NAVARRA_ARTICULOS), `ley-2` (BASE_DEDUCCION, CERTIFICACION_DATOS,
  MODALIDADES, NOTAS, NOTAS_PRIORITARIAS), `ley-3` (ACTIVIDADES_PRIORITARIAS y los
  títulos de las escalas). Rama `feature/lenguaje-plano-05-ley`.
- Los extractos literales se copian del texto consolidado del BOE, no de memoria. Si
  necesitas la red, descarga la norma y copia el párrafo.
- Si un bloque ya está en palabras claras y no mejora sin inventar, déjalo: la reescritura
  no es obligatoriedad, es legibilidad.
- El ticket 07 (la interfaz) necesita estos campos: no esperes a que esté mergeado
  para escribirlo.

## Comments

Hecho. Comprobado con un script que compara cada cita literal contra el HTML consolidado del BOE: 109 citas comprobadas, 0 discrepancias.

# Registro de fuentes: las leyes que aplican y los documentos de la Fundación, uno a uno

Status: resolved
Type: task

Lee `.scratch/lenguaje-plano/spec.md` antes de empezar.

```
Trabaja en D:\WELS\mecenazgo-del-deporte (Next.js 15, Vitest).

Job: que se pueda saber, entrada por entrada, qué norma respalda cada afirmación y qué
documento exacto de deportejoven.es se ha usado. Hoy el catálogo no lo permite: F24, F25
y F26 apuntan las tres a la misma página de entrada, y «Fiscalidad APM 2025», que el
repositorio cita en el título de F26, no tiene enlace propio. El usuario que quiera
comprobar una cifra no encuentra el documento.

Where: docs/fuentes.md, lib/legal.ts (el bloque FUENTES) y docs/verificacion-legal.md.
scripts/check-fuentes.mjs solo se toca si hace falta, y en ese caso con un motivo escrito
en el commit.

What:

1. Reordena docs/fuentes.md en tres tablas, con el mismo formato de columnas que usa
   ahora (Id | Qué respalda | Título | URL):
   - "Leyes y normas aplicables": las doce normas de la tabla "Normas que aplican" de la
     spec. Cada fila con su identificador BOE en el título, para que se vea a qué
     documento apunta el enlace.
   - "Documentos de la Fundación": los once documentos de deportejoven.es de la tabla
     "Enlaces de deportejoven.es que se usan" de la spec, con su URL real.
   - "Secundarias y de contexto": lo que ya hay, sin cambios.
   No borres ninguna fuente existente: las secundarias siguen valiendo y las entradas de
   lib/legal.ts que las citan tienen que seguir Finding su sitio.

2. Ajusta lib/legal.ts, bloque FUENTES, para que cada identificador apunte al documento
   que dice respaldar:
   - F24 → Bases 2026 «España Compite»:
     https://deportejoven.es/wp-content/uploads/2026/02/Bases-2026-Espa%C3%B1a-Compite.pdf
   - F25 → Guía de consultas (FAQ):
     https://deportejoven.es/programas-de-mecenazgo-deportivo-guia-de-consultas/
   - F26 → Díptico AEIP, información económica y fiscalidad:
     https://deportejoven.es/wp-content/uploads/2024/05/diptico_AEIP_21x21.pdf
   - F22 y F23 (los real decreto-ley de acontecimientos de excepcional interés público)
     no cambian: son del BOE, no de la Fundación.
   - Añade los identificadores nuevos que falten, a partir de F30, para los documentos de
     la Fundación que hoy no tienen entrada: formulario del solicitante 2026, formulario
     del donante 2026, Fiscalidad APM 2025, tríptico de ADB 2030 II, manual de identidad
     de Universo Mujer IV, Anexo 2 de Universo Mujer IV, Anexo 2 de ADB 2030 II y página
     del programa «España Compite». Las URL están en la spec.
   Actualiza el título de F26 para que describa el díptico y no una fiscalidad que
   estaba en otro documento.

3. Crea en lib/legal.ts el registro de anclas del BOE, que hoy no existe:

   export const ANCLAS: Record<string, string> = { ... }

   La clave es el identificador de la fuente y el artículo, con el formato "F1#16" para
   el artículo 16 de la Ley 49/2002, y el valor es el ancla ("#a16"). Es un registro
   aparte de las entradas, porque el mismo artículo se cita desde sitios distintos.

   Anclas comprobadas en el BOE (las tienes en la spec): la Ley 49/2002 usa `#a16`,
   `#a27` para artículos y `#daprimera`, `#dadecimosegunda`, `#dadecimoseptima` para
   disposiciones adicionales. El DFL 2/2023 usa `#a3-2` (título-número) y `#da-2`.

   Antes de dar por buena cada ancla, compruébala: descarga la página de la norma y
   verifica que ese `id` existe en el HTML. Si no lo puedes comprobar, deja la entrada
   fuera del registro: el enlace a la norma sin ancla siempre funciona.

4. Revisa docs/verificacion-legal.md y actualiza las citas que apuntan a la URL
   antigua de F24, F25 o F26 (la página de entrada), para que apunten al documento
   concreto. No cambies el texto de los contrastes ni las fechas: solo la referencia.

5. Comprueba que todo sigue en pie:
   - `npm run check:fuentes` sale con 0 rotos y sin avisos nuevos.
   - `npm test` pasa: el test de lib/legal.test.ts comprueba que las fuentes citadas
     existen en docs/fuentes.md y que la ficha de FUENTES coincide con el catálogo.

Boundary:
- No cambies el texto legal de ninguna entrada de lib/legal.ts ni su `verificadoEn`.
  Cambiar de URL no cambia la fecha de contraste.
- No añadas ni borres afirmaciones sobre lo que dice la ley: esto es trazabilidad, no
  contenido.
- No toques components/ ni app/: el consumo de las fuentes nuevas llega en el 07.
- No reescribas docs/verificacion-legal.md: solo cambia las URLs de las citas.
- No inventes anclas. Si el `id` no está en el HTML de la norma, no va en el registro.

Match:
- El formato de docs/fuentes.md se mantiene: tabla markdown con las mismas columnas.
- Los identificadores de fuente son estables: F1 a F29 no se renumeran. Los nuevos
  empiezan en F30.
- Comentarios en español explicando por qué un enlace va al documento concreto y no a la
  página de entrada.

Checks antes de dar el ticket por hecho:
npm run check
npm run check:fuentes
```

Notas de entrega:

- Un ticket, un commit. Rama `feature/lenguaje-plano-04-fuentes`.
- Si al cambiar la URL de F26 aparece un contraste en docs/verificacion-legal.md que ya
  no se sostiene con el díptico, no lo maquilles: anótalo como pregunta abierta en
  `.scratch/lenguaje-plano/issues/` y sigue.
- `npm run check:fuentes` va contra la red. Si un enlace da 403 o 429, el script lo
  avisa pero no falla: anótalo y no lo touches.
- Los tickets 05 y 06 (reescritura) necesitan el registro de anclas de este ticket:
  empiézalos cuando esté mergeado.

## Comments

Hecho: `docs/fuentes.md` en tres tablas, F24-F26 apuntan al documento concreto y F30-F37 nuevos. `ANCLAS` con las anclas comprobadas del BOE. Corregida la atribución de la lista de entidades: el art. 16 tiene las letras a) a e) y el resto llega por las DA 5.ª a 10.ª, 18.ª y 19.ª.

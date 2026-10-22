# Casa: glosario, estándares, ADR y README

Status: resolved
Type: task

Lee `.scratch/lenguaje-plano/spec.md` antes de empezar.

```
Trabaja en D:\WELS\mecenazgo-del-deporte.

Job: que las reglas del repo digan lo mismo que dice la aplicación. Hoy GLOSSARY.md y
CODING_STANDARDS.md exigen lo contrario de lo que se ha decidido: obligan a que la
interfaz use las palabras de la ley ("entidad acreedora", "donante", "aportación"). Con
este trabajo, la interfaz usa palabras corrientes y el término legal va entre paréntesis
la primera vez. Si no se actualizan, el próximo que llegue los seguirá escribiendo con las
reglas viejas.

Where: GLOSSARY.md, CODING_STANDARDS.md, README.md, docs/adr/ y, si hace falta,
docs/verificacion-legal.md.

What:

1. Escribe el ADR nuevo en docs/adr/0002-lenguaje-plano-y-procedencia.md, con el mismo
   formato que 0001-nada-sale-del-dispositivo.md. Decide y deja escrito:
   - la interfaz usa palabras corrientes, con el término legal entre paréntesis y su
     artículo la primera vez;
   - el término legal nunca desaparece: vive en el extracto literal (cursiva) y en el
     modal;
   - el texto llano vive en lib/legal.ts, junto al texto legal, no en los componentes;
   - el color marca procedencia (azul: ley, rojo #DB291E: Fundación, violeta: los dos) y
     nunca es el único canal: la cursiva y la etiqueta acompañan siempre;
   - el enlace va a la norma; el artículo es un ancla dentro de la página del BOE;
   - el BOE no se puede incrustar (X-Frame-Options: SAMEORIGIN), así que el modal enseña
     el extracto que vive en el repo y enlaza fuera;
   - la confianza de la reescritura se declara y se ve.
   En "Estado", pon "Aceptado".

2. GLOSSARY.md: cada término de dominio sigue siendo el nombre canónico (eso no cambia),
   pero añade a cada entrada la palabra que se usa en la interfaz. Formato:

   **Entidad acreedora**:
   Entidad sin fines lucrativos que puede recibir aportaciones deducibles (art. 16).
   _En la interfaz_: entidad que puede recibir tu aportación.
   _Avoid_: entidad receptora, entidad beneficiaria, club.

   Repite el patrón en todos los términos que la interfaz toca: entidad acreedora,
   donante, donativo, aportación, certificación, deducción, partida deducible, cuota
   íntegra, cuota líquida, base de deducción, tipo de deducción, actividad prioritaria,
   mecenazgo repetido, límite simbólico, canon de gestión, vía publicitaria, tope anual,
   programa, línea de carrera dual, régimen foral, régimen común, actividad prioritaria.
   _En la interfaz_ es una frase corta, no un sinónimo.

3. CODING_STANDARDS.md, sección "Texto legal": sustituye la regla que obliga a usar las
   palabras de la ley por la regla nueva:
   - la interfaz usa palabras corrientes; el término legal va entre paréntesis con su
     artículo la primera vez;
   - el texto llano y el texto legal conviven en lib/legal.ts, con `plano`, `extracto`,
     `origen` y `confianza`;
   - el color de la paleta marca de dónde sale el contenido, y siempre acompaña a una
     etiqueta;
   - toda cifra de la ley sigue saliendo de lib/legal.ts o de FIGURAS.
   Añade a la sección "Interfaz" la regla del modal: el enlace a la norma es un modal, a
   pantalla completa en móvil, con el extracto literal en cursiva y el enlace fuera; no
   hay iframes.

4. README.md: actualiza la descripción de la ruta /ley para decir que el texto va en
   lenguaje claro con el término legal entre paréntesis, que cada dato enlaza a la norma
   y que el color indica si la frase viene de la ley o de la Fundación. Actualiza el
   apartado "Estructura" si han aparecido ficheros nuevos. No toques el resto.

5. docs/verificacion-legal.md: añade una entrada al principio con la fecha de hoy
   (2026-10-21) que deje constancia de que se ha pasado todo el contenido a lenguaje
   claro, de que la reescritura no cambia ninguna cifra y de que los extractos literales
   se han copiado del texto consolidado. Sigue el formato que usa el fichero.

Boundary:
- No cambies el contenido de lib/legal.ts, de los componentes ni del cálculo en este
  ticket: solo la documentación de la casa.
- No reescribas el glosario entero: solo añade la línea "_En la interfaz_" y corrige lo
  que contradiga la regla nueva.
- No borres entradas del glosario: el vocabulario canónico sigue igual.
- Si el README y el código no coinciden en algún dato, manda el código: corrige el
  README.

Checks antes de dar el ticket por hecho:
npm run check
```

Notas de entrega:

- Un ticket, un commit. Rama `feature/lenguaje-plano-08-casa`.
- Este es el ticket que cierra la ronda 1. El 09 (simulador) es la ronda 2 y se puede
  encolar ya.
- Si al escribir el ADR te surge una duda que la spec no resuelve, no la resuelvas
  solo: anótala en el ADR como "Cuestiones abiertas" con la condición de revisión.

## Comments

Hecho: ADR 0002, glosario con la palabra que se usa en pantalla, `CODING_STANDARDS.md` con las reglas nuevas, README actualizado y entrada de verificación en `docs/verificacion-legal.md`.

# Modelo de datos: lenguaje plano, procedencia, confianza y ancla

Status: resolved
Type: task

Lee `.scratch/lenguaje-plano/spec.md` antes de empezar.

```
Trabaja en D:\WELS\mecenazgo-del-deporte (Next.js 15, Chakra 3.37, Vitest, TypeScript estricto).

Job: que cada bloque de texto legal pueda mostrarse en palabras corrientes y que se sepa,
sin mirar el código de la interfaz, de dónde sale ese texto y cuánta confianza hay en la
reescritura. Hoy las entradas de lib/legal.ts solo llevan `fuente` y `verificadoEn`, y eso
no basta para pintar de azul lo que dice la ley, de rojo lo que dice la Fundación y de
violeta lo que viene de los dos.

Where: lib/legal.ts y lib/legal.test.ts. Nada más.

What:
1. En lib/legal.ts, junto a la interfaz ConFuente que ya existe (línea ~107), añade los
   tipos y los campos:

   export type Origen = "ley" | "fdj" | "mixto";
   export type Confianza = "alta" | "media" | "baja";

   interface ConFuente {
     fuente: string;
     verificadoEn: string;
     /** Texto llano para la interfaz. */
     plano?: string;
     /** Cita literal de la norma. Se muestra en cursiva. */
     extracto?: string;
     /** De dónde sale el contenido: ley, Fundación o ambos. */
     origen?: Origen;
     /** Confianza en la reescritura. */
     confianza?: Confianza;
     /** Fuentes adicionales, cuando el texto depende de más de una. */
     fuentes?: string[];
     /** Ancla dentro de la página de la norma en el BOE, p. ej. "#a16". */
     ancla?: string;
   }

2. Añade el helper que deriva el origen, en el mismo fichero y exportado:

   /** Una fuente es de la Fundación si su URL en FUENTES es de deportejoven.es. */
   export const origenDe = (ids: string[]): Origen => { ... }

   Devuelve "mixto" si hay fuentes de los dos sitios, "fdj" si todas son de la Fundación,
   "ley" si todas son normas. No escribas una lista de identificadores: decide por la URL,
   para que una fuente nueva no necesite tocarse.

3. Añade otro helper que resuelve el origen de una entrada, usando `fuentes` si viene y
   `fuente` si no:

   export const origen = (e: { fuente: string; fuentes?: string[] }): Origen => ...

4. En lib/legal.test.ts, dentro del describe existente ("contenido legal"), añade las
   guardas:
   - toda entrada que tenga `plano` tiene también `confianza` con valor "alta", "media" o
     "baja";
   - toda entrada que tenga `plano` o `extracto` tiene `origen` igual a lo que devuelve
     el helper `origen` sobre esa entrada;
   - si una entrada tiene `extracto`, no está vacío y no tiene menos de 20 caracteres;
   - si una entrada tiene `ancla`, empieza por "#";
   - toda entrada con `fuentes` cita fuentes que existen en FUENTES.
   Los mensajes de fallo llevan el nombre del array, como los que ya hay.

Boundary:
- No cambies ni una palabra del texto que hay ahora en lib/legal.ts. Solo añades campos,
  tipos y helpers.
- No toques components/, app/, lib/mecenazgo.ts, lib/programas.ts ni el theme.
- No cambies `fuente` ni `verificadoEn` de ninguna entrada: `verificadoEn` lo rellena el
  helper legal() y sigue siendo VERIFICADO_EN.
- No subas la clave de localStorage (CLAVE_ALMACEN): esto no toca el estado guardado.
- No añadas cifras de la ley: lib/cifras.test.ts las vigila.

Match:
- El estilo del repo: TypeScript estricto, comentarios en español que explican el porqué y
  no el qué, helpers pequeños y exportados.
- Reutiliza el helper legal() que ya normaliza `fuente` y `verificadoEn`: no dupliques su
  lógica.
- El texto del repo va sin acentos en los identificadores (`origen`, `confianza`,
  `extracto`); los comentarios y los textos de cara al usuario sí los llevan.

Checks antes de dar el ticket por hecho:
npm run check
```

Notas de entrega:

- Un ticket, un commit. Rama propia: `feature/lenguaje-plano-01-modelo`.
- El prompt siguiente (02, tokens de color) no depende de este: se puede escribir mientras
  este corre.
- Si el guard de `lib/legal.test.ts` falla por entradas que ya existen sin `plano`, es
  normal: la guarda solo exige `plano` cuando la entrada lo tiene. No rellenes los huecos
  aquí, ese es el trabajo de los tickets 05 y 06.

## Comments

Hecho: `TextoClaro` en `lib/legal.ts` (plano, extracto, confianza, fuentes, ancla), helpers `origenDe()` y `origen()`, y guardas en `lib/legal.test.ts`. El origen se deriva de la URL de la fuente, no de una lista.

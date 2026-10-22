# Lenguaje plano: reescritura, procedencia y enlaces a la ley

Spec del trabajo que hace legible la aplicación sin perder la trazabilidad legal: cada
afirmación se explica en palabras corrientes, se sabe de dónde sale (la ley o la Fundación),
y se puede abrir la norma que la respalda.

## Por qué

La aplicación la usa gente que no es técnica ni fiscal: clubes, federaciones, empresas
pequeñas y personas que hacen mecenazgo. El texto actual usa el vocabulario del
código (`entidad acreedora`, `mecenazgo prioritario`, `partida deducible`) sin explicar
qué quiere decir. `GLOSSARY.md` incluso lo exige así. Eso es correcto para un asesor y
malo para quien llega de fuera.

El coste no es solo de lectura: el usuario que no entiende el término no puede preguntar
a su gestoría, y acaba creyendo que el resultado del simulador no aplica a su caso.

## Decisiones

### 1. Vocabulario: palabra fácil primero, término legal entre paréntesis

La primera vez que un término legal aparece en una pantalla, va con su artículo entre
paréntesis. Después, la palabra fácil sola.

- "Entidad que puede recibir tu aportación (entidad acreedora, art. 16)".
- "Lo que te devuelve Hacienda por donar (deducción fiscal)".
- "Actividad que la ley considera prioritaria (actividad prioritaria de mecenazgo, art. 22)".

El término legal no desaparece: vive en el extracto literal de la norma (en cursiva) y en
el modal. `GLOSSARY.md` sigue siendo la fuente del vocabulario, pero cada entrada lleva
ahora la palabra que se usa en la interfaz.

### 2. Tres colores de procedencia

| Color | Significado | Uso |
| ----- | ----------- | --- |
| Azul | Lo que dice la ley (BOE) | `colorPalette="ley"` |
| Rojo `#DB291E` | Lo que dice `deportejoven.es` | `colorPalette="fdj"` |
| Violeta | Viene de los dos | `colorPalette="mixto"` |

El rojo es el de la Fundación: `#DB291E` es su color de marca (`custom.css` de su tema
WordPress, `a { color:#DB291E }`). El azul es el de marca de la aplicación. El violeta es
la mezcla de los dos, en el camino corto del espectro (azul 218° → magenta 300° → rojo 2°),
no un promedio sRGB.

El color nunca va en el texto de la ley por sí solo: va en la etiqueta de procedencia, en
el borde del extracto y en la leyenda. El texto se distingue además por la cursiva (extracto
literal) y por la etiqueta (plano), para que el color no sea el único canal.

### 3. Modelo de datos

`lib/legal.ts` sigue siendo la fuente única (regla de `CODING_STANDARDS.md`). Cada entrada
gana campos opcionales:

```ts
export type Origen = "ley" | "fdj" | "mixto";
export type Confianza = "alta" | "media" | "baja";

export interface ConFuente {
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
```

El origen se **deriva**, no se escribe a mano: una fuente es de la Fundación si su URL de
`FUENTES` contiene `deportejoven.es`. Si el conjunto de fuentes tiene los dos sitios,
`mixto`. Así no hay una lista de identificadores que mantener al añadir una fuente.

`plano` vive en `lib/legal.ts` y no en los componentes: `lib/cifras.test.ts` prohíbe que
una cifra de la ley aparezca escrita a mano fuera de ese fichero, y el texto llano lleva
cifras.

### 4. Enlaces: siempre la norma, el artículo es un ancla

El BOE envía `X-Frame-Options: SAMEORIGIN` y `frame-ancestors 'self'`: **no se puede
incrustar**. El modal enseña el extracto literal que vive en el repo y enlaza fuera.

Cuando hay cita, el enlace apunta a la **norma** (`act.php?id=BOE-A-...`), nunca a un
documento suelto de un artículo. El artículo es un ancla dentro de esa misma página:

| Norma | Ancla de artículo | Ancla de disposición adicional |
| ----- | ----------------- | ---------------------------------- |
| Ley 49/2002 | `#a16`, `#a27` | `#daprimera`, `#dadecimosegunda`, `#dadecimoseptima` |
| DFL 2/2023 | `#a3-2` (título-número) | `#da-2` |
| Ley 31/2022 | `#a< número del artículo>` (a comprobar) | `#dadecimoseptima` |

Cada ancla se comprueba antes de usarse (el `id` existe en el HTML de la norma). Si no se
puede comprobar, el enlace va a la norma sin ancla.

### 5. Confianza de la reescritura

| Nivel | Cuándo |
| ----- | ------ |
| `alta` | El extracto es literal y el texto llano solo lo explica. Sin juicio añadido. |
| `media` | El texto llano agrupa, ordena o resume varios artículos. Las cifras son literales. |
| `baja` | El texto llano añade criterio, un ejemplo que no está en la norma, o toca una cuestión pendiente (por ejemplo, si el canon de los programas AEIP es marginal o plano). |

La confianza se ve: etiqueta junto a la línea de fuente.

### 6. Reglas de redacción

Cómo se reescribe. Valen para todos los bloques.

1. **Una idea por frase.** Frases cortas, voz activa, sin subordinación encadenada. Nada de
   "no será suficiente para", "en caso de que se carezca de".
2. **Palabra corriente, término legal entre paréntesis la primera vez.**
   "Entidad que puede recibir tu aportación (entidad acreedora)". "Donación sin nada a
   cambio (donativo)". Después, la palabra corriente sola.
3. **Tú, no "el usuario" ni "el aportante".** "Si donas 500 €, te des-" no "El aportante
   puede desahogarse".
4. **Ninguna cifra cambia.** El texto llano repite las cifras que ya están en el texto
   legal. Si al traducir aparece una cifra que no está en la entrada, no la escribas:
   el texto llano se queda con la cifra que ya está, o con palabras ("la mitad", "lo que
   exceda") cuando la cifra no cabe. Ninguna cifra de la ley se escribe a mano fuera de
   `lib/legal.ts` (lo vigila `lib/cifras.test.ts`).
5. **El extracto es literal.** Se copia del texto consolidado del BOE, sin reescribir, sin
   puntos suspensivos añadidos y sin quitar palabras. Si solo se puede extractar una
   parte, se extrae esa parte y se dice en el modal a qué artículo y apartado pertenece.
6. **Sin muletillas.** Nada de "en la actualidad", "hoy en día", "no obstante", "por lo tanto",
   "es decir", "en efecto".
7. **Sin inventar.** Si un dato no está en la norma o en el documento de la Fundación, no
   se escribe. Se anota en el ticket como hueco.
8. **Confianza honesta.** `media` cuando el texto llano agrupa o resume varios artículos;
   `baja` cuando añade un ejemplo, un criterio o toca una cuestión pendiente.

### 7. Alcance

**Ronda 1 (este trabajo):** la ruta `/ley`, que es `PanelLey` + `PanelProgramas` +
`app/ley/page.tsx`, y los bloques de `lib/legal.ts` que esa ruta muestra.

**Ronda 2:** las tres pestañas del simulador (`PanelAportante`, `PanelEntidad`,
`PanelCertificado`). Ticket 09, en cola.

**Los PDF no cambian de redactado.** El informe de cálculo y el certificado son documentos
de trabajo que prepara el usuario; su redacción legal se queda como está.

## Normas que aplican

Registro completo. Un identificador BOE que no está aquí es una norma citada dentro de otro
documento, no una regla de la aplicación.

| Norma | Id. BOE | Qué regula aquí | Fuente |
| ----- | ------- | --------------- | ------ |
| Ley 49/2002, de 23 de diciembre | `BOE-A-2002-25039` | Régimen de las entidades sin fines lucrativos e incentivos al mecenazgo (arts. 2, 3, 16 a 27, DA 12.ª) | F1, F2 |
| DFL 2/2023, de 24 de mayo | `BOE-A-2023-16401` | Régimen foral de Navarra y mecenazgo deportivo (arts. 15 a 23, 30, 31, 39 a 44) | F17 |
| Ley 31/2022, de 23 de diciembre (PGE 2023), DA 57.ª | `BOE-A-2022-22128` | Relación de actividades prioritarias de mecenazgo | F18 |
| Real Decreto-ley 3/2026, de 3 de febrero | `BOE-A-2026-2548` | Prórroga que mantiene vigente la DA 57.ª | F6 |
| Real Decreto-ley 8/2025, de 8 de julio | `BOE-A-2025-14083` | Acontecimientos de excepcional interés público de 2025 | F22 |
| Real Decreto-ley 12/2026, de 26 de mayo | `BOE-A-2026-11397` | Acontecimientos de excepcional interés público de 2026 | F23 |
| Ley 39/2022, de 30 de diciembre, del Deporte, DA 18.ª | `eli/es/l/2022/12/30/39/con` | Programa «RETO DE» (cerrado el 31/12/2025) | F27 |
| Ley 35/2006, de 28 de noviembre, del IRPF, art. 69.1 | `BOE-A-2006-20764` | Límite conjunto del 10 % de la base liquidable | F19 |
| Ley 28/1990, de 26 de diciembre, del Convenio Económico con Navarra, arts. 18 a 21 | `BOE-A-1990-31117` | Reparto entre territorio común y foral | F20 |
| Ley 34/1988, de 11 de noviembre, General de Publicidad | `BOE-A-1988-16636` | Patrocinio publicitario (no es mecenazgo) | F21 |
| Ley 7/2012, art. 7, y Ley 11/2021, art. 18 | `BOE-A-2012-13416`, `BOE-A-2021-11473` | Límite de pagos en efectivo | F28, F29 |
| Ley 27/2014, de 27 de noviembre, del Impuesto sobre Sociedades | `BOE-A-2014-12328` | Gastos no deducibles (citada, no aplicada) | F14 |

Normas **citadas dentro** de la lista de actividades prioritarias, que no son reglas de la
aplicación: Ley 23/1998, Ley 46/2003 y RD 433/2004, Ley 34/2011 y RD 188/2013, Ley 1/2015
y RD 640/2016, Ley Orgánica 6/2001. Viven en el texto de la DA 57.ª, no en el catálogo de
fuentes.

## Enlaces de `deportejoven.es` que se usan

Comprobados el 21/10/2026. Hoy `F24`, `F25` y `F26` apuntan las tres a la misma página de
entrada: por eso el material de la Fundación no está trazado documento a documento.

| Documento | Enlace |
| --------- | ------ |
| Guía de consultas (FAQ de los cuatro programas) | https://deportejoven.es/programas-de-mecenazgo-deportivo-guia-de-consultas/ |
| Bases 2026 «España Compite» | https://deportejoven.es/wp-content/uploads/2026/02/Bases-2026-Espa%C3%B1a-Compite.pdf |
| Formulario del solicitante, 2026 | https://deportejoven.es/wp-content/uploads/2026/02/Formulario-Solicitante-Espa%C3%B1a-Compite-2026-2.pdf |
| Formulario del donante, 2026 | https://deportejoven.es/wp-content/uploads/2026/03/Formulario-Donante-Espa%C3%B1a-Compite-2026.pdf |
| Fiscalidad APM 2025 | https://deportejoven.es/wp-content/uploads/2026/06/Fiscalidad-APM-2025.pdf |
| Díptico AEIP (información económica y fiscalidad) | https://deportejoven.es/wp-content/uploads/2024/05/diptico_AEIP_21x21.pdf |
| Tríptico de líneas de ADB 2030 II | https://deportejoven.es/wp-content/uploads/2026/06/ADB-2030-II-Tr%C3%ADptico.pdf |
| Manual de identidad corporativa de Universo Mujer IV | https://deportejoven.es/wp-content/uploads/2025/12/UNIVERSO-MUJER-IV-Manual-de-identidad-corporativa-1.pdf |
| Anexo 2, modelo de solicitud de Universo Mujer IV | https://deportejoven.es/wp-content/uploads/2025/12/Modelo-de-SOLICITUD-Programa-Universo-Mujer-IV-3-1.docx |
| Anexo 2, modelo de solicitud de ADB 2030 II | https://deportejoven.es/wp-content/uploads/2025/12/Modelo-de-SOLICITUD-Programa-ADB2030-II-2-1.docx |
| Página del programa «España Compite» (modelos y avisos) | https://deportejoven.es/linea-actuacion/espana-compite/ |
| Página de Deporte Inclusivo III (de ahí se descarga el Anexo 2) | https://deportejoven.es/linea-actuacion/deporte-inclusivo/ |

## Hallazgos de la revisión del 21/10/2026

1. `F24`, `F25` y `F26` apuntan a la misma página de entrada. Cada una debe apuntar al
   documento que dice respaldar.
2. «Fiscalidad APM 2025» (canon, plazos, remisión de certificaciones) es un PDF que el
   repositorio cita en el título de `F26` pero no tiene registrado con su enlace.
3. La FAQ dice que las ediciones de los programas AEIP abarcan del 1 de enero de 2025 al
   31 de diciembre de 2027. El repositorio habla de «material 2025» y de programas «de
   2026»: es compatible, pero la redacción debe decir "edición vigente" y no "edición 2026".
4. El BOE no se puede incrustar (`X-Frame-Options: SAMEORIGIN`). El modal enseña el
   extracto que vive en el repo y enlaza fuera.

## Estado (22/10/2026)

Hecho: tickets 01 a 09. La ronda 1 (ruta /ley) y la ronda 2 (simulador) estan implementadas.

Verificado: 109 citas literales comprobadas una a una contra el texto consolidado del BOE, 0 discrepancias. Anclas comprobadas contra el `id` real del HTML.

Hallazgo que cambió el modelo: la palabra «entidad acreedora» no aparece ni una vez en la Ley 49/2002 ni en el DFL 2/2023. La ley dice «entidad beneficiaria del mecenazgo».

## Fases

| Fase | Alcance | Tickets |
| ---- | ------- | ------- |
| P1 | Cimientos: modelo de datos, color, modal | 01, 02, 03 |
| P2 | Trazabilidad: registro de normas y de material de la Fundación | 04 |
| P3 | Contenido: reescritura en lenguaje claro | 05, 06 |
| P4 | Interfaz: la ruta `/ley` con procedencia, modal y leyenda | 07 |
| P5 | Casa: glosario, estándares, ADR, README | 08 |
| P6 | Ronda 2: las pestañas del simulador | 09 |

## Fuera de alcance

- El cálculo fiscal (`lib/mecenazgo.ts`) no se toca.
- El redactado de los PDF no cambia.
- `MANUAL-OPERATIVO.md` se sigue generando desde el texto legal (`texto`), no desde el
  texto llano: es un documento para asistentes de IA, no para el público.
- No se añaden reglas nuevas ni se reinterpretan normas: esto es redacción y trazabilidad.
- La reescritura no cambia ninguna cifra. Si al reescribir aparece una cifra que no está
  en `lib/legal.ts`, es un error del texto plano: no se escribe, se anota en el ticket.

## Comandos

```bash
npm run check          # lint, tipos y tests
npm run check:fuentes  # enlaces vivos de docs/fuentes.md
npm run manual         # regenera MANUAL-OPERATIVO.md desde lib/legal.ts
npm test
```

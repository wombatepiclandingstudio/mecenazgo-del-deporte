# Mecenazgo del deporte — Ley 49/2002

[![CI](https://github.com/wombatepiclandingstudio/mecenazgo-del-deporte/actions/workflows/ci.yml/badge.svg)](https://github.com/wombatepiclandingstudio/mecenazgo-del-deporte/actions/workflows/ci.yml)

Aplicación web con tres rutas:

- `/` **Portada**: dos puertas, según lo que quieras hacer. «Quiero aportar» y «Quiero recibir
  mecenazgo». Cada puerta lleva a su tarea dentro del simulador.
- `/ley` **La ley**: qué dice la Ley 49/2002 de una federación, un club o cualquier entidad deportiva.
  Entidades acreedoras, base de deducción, datos del certificado, y las reglas que mencionan
  expresamente al deporte (artículo 2 y disposición adicional decimosegunda). Incluye el régimen
  foral de Navarra y su mecenazgo deportivo, y la relación vigente de actividades prioritarias.
  Al final, los **programas de mecenazgo de la Fundación Deporte Joven de 2026**: comparativa,
  calendario, los errores verificados en su material publicado y las preguntas que quedan
  planteadas a la Fundación.
- `/simulador` **El simulador**: las tres herramientas encadenadas:

- **Entidad acreedora**: checklist de los requisitos de los artículos 2, 3 y 16, con medidor de
  cumplimiento, solicitud de ayuda por rol (entidad, deportista o promotor AEIP) con los
  requisitos de la convocatoria, y el generador del certificado que exige el artículo 24.3.
- **Donante**: simulador del efecto fiscal de la aportación en el IRPF y en el Impuesto sobre
  Sociedades, con los tipos, los topes sobre la base y el arrastre de diez años. Si la aportación
  va a un programa de la Fundación, se aplican su tope anual, su canon de gestión y su
  calendario, y se puede descargar el informe de cálculo en PDF.
- **Certificado**: genera el certificado en PDF (A4, texto seleccionable) listo para firmar.

Los datos que introduce el usuario se guardan **solo en su navegador** (`localStorage`). No hay
backend, ni base de datos, ni analítica: nada sale del dispositivo.

**Aviso**: la clave de almacenamiento ha subido a mecenazgo:datos:v3 al añadir los programas.
Lo que había guardado el navegador antes se descarta y hay que volver a introducirlo.

## Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:3000
```

Comprobaciones:

```bash
npm run check          # lint + tipos + tests, lo mismo que el hook de commit
npm run lint           # ESLint (formato plano, eslint-config-next)
npm run typecheck      # tsc --noEmit
npm test               # Vitest
npm run check:fuentes  # comprueba que los enlaces de docs/fuentes.md siguen vivos
npm run manual         # regenera MANUAL-OPERATIVO.md desde lib/legal.ts
npm run build
```

Cada commit pasa por el hook de Husky (`.husky/pre-commit`), que corre el linter sobre los
ficheros modificados, los tipos y los tests. GitHub Actions corre lo mismo en cada push y pull
request (`.github/workflows/ci.yml`).

## Despliegue

La aplicación es estática: no hay backend, ni variables de entorno, ni servicios externos. En
Vercel se detecta sola; en GitHub Pages y en cualquier hosting de estáticos se sube la carpeta
`out/`.

### Vercel

Desde la carpeta del proyecto:

```bash
npx vercel        # primer despliegue (pregunta por el login)
npx vercel --prod # despliegue de produccion
```

O por consola: importar el repositorio `github.com/wombatepiclandingstudio/mecenazgo-del-deporte`
en Vercel (**Add New → Project**) y asociarlo a la rama `main`.

### GitHub Pages

El workflow `.github/workflows/pages.yml` publica en cada `push` a `main`. Para que funcione, en
**Settings → Pages** hay que poner la fuente en **GitHub Actions**.

En local, el build estático se hace con:

```bash
npm run build:pages
```

Genera la carpeta `out/`, con la ruta base que necesita un sitio de proyecto (`/mecenazgo-del-deporte`).
Para un sitio de usuario, que vive en la raíz del dominio, la ruta base es vacía:

```bash
BASE_PATH= npm run build:pages
```

### Cualquier hosting de estáticos

`npm run build:pages` y subir el contenido de `out/`. Si el sitio vive bajo un subdirectorio,
indicarlo con `BASE_PATH`.

**El binario del PDF no se versiona**: `scripts/copiar-wasm.mjs` lo copia a `public/` en cada build
(`prebuild` y `predev` lo ejecutan solos). Sin él, el informe de cálculo no se genera.

## Repositorio

```
git remote -v
origin  https://github.com/wombatepiclandingstudio/mecenazgo-del-deporte.git

git push origin main
```

El repositorio es privado. Los `issues` son el sitio natural para las dudas sobre la ley: cada
informe de error que llega con su cita del BOE acaba convertido en una entrada de `lib/legal.ts`.

## Estructura

```
app/
  page.tsx             Portada: dos puertas (ruta /)
  ley/page.tsx         La ley (ruta /ley)
  simulador/page.tsx   El simulador (ruta /simulador)
  layout.tsx           Metadata, cabecera con la navegacion, salto al contenido y pie
  globals.css          Solo resets: el resto del estilo vive en Chakra
components/
  ui/theme.ts             Sistema de temas: escalas brand y accent + tokens semanticos
  ui/provider.tsx         ChakraProvider + ThemeProvider
  mecenazgo/
    Cabecera.tsx          Nombre del sitio y navegacion entre las tres rutas
    Simulador.tsx         Contenedor con pestañas y estado persistente
    PanelEntidad.tsx      Checklist y medidor
    PanelAportante.tsx    Simulador IS / IRPF
    PanelCertificado.tsx  Formulario del certificado y descarga del PDF
    PanelLey.tsx          Referencia de la ley, ordenada por el angulo deportivo
lib/
  mecenazgo.ts            Calculo fiscal, funcion pura y sin dependencias
  mecenazgo.test.ts       Tests del calculo fiscal
  programas.ts            Reglas de los programas de la Fundacion: canon, tope, publicidad, calendario
  programas.test.ts       Tests de esas reglas
  legal.ts                Contenido legal de la Ley 49/2002, con su fuente
  legal.test.ts           Tests de la disciplina de verificacion
  cifras.test.ts          Guard: ninguna cifra de la ley fuera de lib/legal.ts
  estado.ts               Estado de la aplicacion
  usePersistido.ts        Hook de persistencia en localStorage
  certificado.tsx         Documento PDF y descarga (react-pdf)
  pdf/                    Informe de calculo en PDF: worker de Takumi, tema y documento
components/pdf/           Codigo de pdfcn copiado del registry (no se revisa con las reglas del proyecto)
types/                    Tipos del tema de pdfcn
scripts/copiar-wasm.mjs  Copia el binario de Takumi a public/
MANUAL-OPERATIVO.md       Manual operativo para asistentes de IA, generado desde lib/legal.ts
.scratch/fdj-2026/       Spec y tickets del trabajo de los programas de 2026
docs/
  fuentes.md              Catalogo de fuentes primarias y secundarias
  verificacion-legal.md   Contraste de cada afirmacion con la fuente primaria
  actividades-prioritarias.md  Relacion vigente de actividades prioritarias
```

## Mantenimiento del texto legal

La ley no se queda quieta, y el texto de la aplicación tampoco puede quedarse quieto. Procedimiento
cada vez que cambie la norma o se detecte un error:

1. Contrastar la afirmación afectada contra la fuente primaria (BOE, Agencia Tributaria, normativa
   foral) y dejar constancia en `docs/verificacion-legal.md`, con la cita literal y la fecha.
2. Actualizar la entrada correspondiente en `lib/legal.ts`, con su `fuente` y su `verificadoEn`. El
   test de `lib/legal.test.ts` falla si a alguna entrada le falta la fuente o la fecha.
3. Revisar la lista de actividades prioritarias: la fija la ley de presupuestos de cada ejercicio y,
   mientras no se aprueben, se renueva con su prórroga (`docs/actividades-prioritarias.md`).
4. Actualizar `VERIFICADO_EN` en `lib/legal.ts` y el número de la interfaz.

Cuando el texto de la aplicación y la fuente primaria discrepen, **manda la fuente primaria**.

## Reestilizar la aplicación

Todo el color sale de `components/ui/theme.ts`. Las escalas `brand` (principal) y `accent` (cifras
destacadas) tienen tokens semánticos asociados, de modo que cambiar un solo valor repinta botones,
enlaces, estados y resultados a la vez.

## Nota sobre el alcance

La lógica implementa dos regímenes, y se elige en la pestaña **Quien aporta**:

**Estatal — Ley 49/2002, de 23 de diciembre de 2002, de régimen fiscal de las entidades sin fines
lucrativos y de los incentivos fiscales al mecenazgo.** Es el que se aplica por defecto en todo el
territorio salvo en la Comunidad Foral de Navarra.

**Foral de Navarra — Decreto Foral Legislativo 2/2023, de 24 de mayo.** No es una variante del
anterior, es otro modelo. Para las empresas no hay una deducción del 40-55% sobre la cuota: la
aportación es **partida deducible en la base imponible**, con el tope que resulte mayor entre el 30%
de la base y el 3 por mil del importe neto de la cifra de negocios. Sobre la cuota líquida, el
mecenazgo cultural deduce el 30% de los primeros 300 euros y el 20% del exceso; el mecenazgo social,
medioambiental y deportivo deduce un 20% del importe, en plano. Para personas físicas, el 80% de los
primeros 250 euros y el 40% del resto, y nada más: no hay ninguna deducción adicional sobre la cuota
líquida. Las entidades necesitan además el reconocimiento previo del régimen ante el departamento
competente.

Atención a un detalle que se suele dar por supuesto: **estar en Navarra no significa tributar por el
régimen foral**. El 75% es el criterio del artículo 18.2 del Convenio Económico y solo opera para los
sujetos pasivos que tributan conjuntamente a ambas Administraciones, es decir, los que operan en
ambos territorios y cuyo volumen total de operaciones del ejercicio anterior excede de
12.000.000 euros. Con ese umbral, quien tenga su domicilio fiscal en Navarra y haya realizado en
territorio común el 75% o más de sus operaciones totales del ejercicio anterior queda sujeto a la
normativa de territorio común, con la Ley 49/2002.

Desde 2023 el texto foral regula además el **mecenazgo deportivo** (artículos 39 a 42, con los
incentivos fiscales en el artículo 43 para el IRPF y el 44 para el Impuesto sobre Sociedades), con un
límite que conviene tener presente: nunca pueden declararse de interés social las actividades que
consisten en la participación en competiciones federadas.

Otras comunidades con normas propias de mecenazgo (La Rioja, entre otras) siguen fuera del alcance.

Las cifras son una estimación, no una liquidación: la cuota íntegra estimada se calcula como el tipo
impositivo por la base imponible, y la real es menor. En Navarra el efecto conjunto de las
deducciones sobre la cuota íntegra y la cuota líquida depende de la situación del contribuyente:
confirma con un asesor foral.

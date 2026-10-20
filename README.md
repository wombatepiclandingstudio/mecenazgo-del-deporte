# Mecenazgo del deporte — Ley 49/2002

Aplicación web con dos partes separadas en dos rutas:

- `/` **La ley**: qué dice la Ley 49/2002 de una federación, un club o cualquier entidad deportiva.
  Entidades acreedoras, base de deducción, datos del certificado, y las reglas que mencionan
  expresamente al deporte (artículo 2 y disposición adicional decimosegunda). Incluye el régimen
  foral de Navarra y su mecenazgo deportivo.
- `/simulador` **El simulador**: las tres herramientas encadenadas:

- **Entidad receptora**: checklist de los requisitos de los artículos 2, 3 y 16, con medidor de
  cumplimiento, y el generador del certificado que exige el artículo 17.
- **Quien aporta**: simulador del efecto fiscal de la aportación en el IRPF y en el Impuesto sobre
  Sociedades, con los tipos, los topes sobre la base y el arrastre de diez años.
- **Certificado**: genera el certificado en PDF (A4, texto seleccionable) listo para firmar.

Los datos que introduce el usuario se guardan **solo en su navegador** (`localStorage`). No hay
backend, ni base de datos, ni analítica: nada sale del dispositivo.

## Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:3000
```

Comprobaciones:

```bash
npm run typecheck
npm run build
```

## Despliegue en Vercel

Desde la carpeta del proyecto:

```bash
npx vercel        # primer despliegue (pregunta por el login)
npx vercel --prod # despliegue de produccion
```

O por consola: subir la carpeta a un repositorio de GitHub y en Vercel elegir **Add New → Project** e
importar el repositorio. No hay variables de entorno ni servicios externos que configurar: Next.js se
detecta solo.

## Estructura

```
app/
  page.tsx             Portada: la ley (ruta /)
  simulador/page.tsx   El simulador (ruta /simulador)
  layout.tsx           Metadata, cabecera con la navegacion y pie
  globals.css          Solo resets: el resto del estilo vive en Chakra
components/
  ui/theme.ts             Sistema de temas: escalas brand y accent + tokens semanticos
  ui/provider.tsx         ChakraProvider + ThemeProvider
  mecenazgo/
    Cabecera.tsx          Nombre del sitio y navegacion entre las dos rutas
    Simulador.tsx         Contenedor con pestañas y estado persistente
    PanelEntidad.tsx      Checklist y medidor
    PanelAportante.tsx    Simulador IS / IRPF
    PanelCertificado.tsx  Formulario del certificado y descarga del PDF
    PanelLey.tsx          Referencia de la ley, ordenada por el angulo deportivo
lib/
  mecenazgo.ts            Calculo fiscal, funcion pura y sin dependencias
  estado.ts               Forma del estado y contenido legal de la Ley 49/2002
  usePersistido.ts        Hook de persistencia en localStorage
  certificado.tsx         Documento PDF y descarga
```

## Reestilizar la aplicación

Todo el color sale de `components/ui/theme.ts`. Las escalas `brand` (principal) y `accent` (cifras
destacadas) tienen tokens semánticos asociados, de modo que cambiar un solo valor repinta botones,
enlaces, estados y resultados a la vez.

## Nota sobre el alcance

La lógica implementa dos regímenes, y se elige en la pestaña **Quien aporta**:

**Estatal — Ley 49/2002, de 27 de diciembre.** Es el que se aplica por defecto en todo el
territorio salvo en la Comunidad Foral de Navarra.

**Foral de Navarra — Decreto Foral Legislativo 2/2023, de 24 de mayo.** No es una variante del
anterior, es otro modelo. Para las empresas no hay una deducción del 40-55% sobre la cuota: la
aportación es **partida deducible en la base imponible**, con el tope que resulte mayor entre el 30%
de la base y el 3 por mil de la cifra de negocios, y además una deducción del 30% de la cuota
líquida sobre los primeros 300 euros y del 20% en el resto. Para personas físicas, el 80% de los
primeros 250 euros y el 40% del resto, más una deducción adicional del 30% / 20% sobre la cuota
líquida cuando el mecenazgo es cultural. Las entidades necesitan además el reconocimiento previo
del régimen ante el departamento competente.

Atención a un detalle que se suele dar por supuesto: **estar en Navarra no significa tributar por el
régimen foral**. Una empresa cuyo volumen de operaciones fuera de Navarra supere el 75% queda en el
régimen común y le aplica la Ley 49/2002.

Desde 2023 el texto foral regula además el **mecenazgo deportivo** (artículos 39 a 43), con un límite
que conviene tener presente: nunca pueden declararse de interés social las actividades que consisten
en la participación en competiciones federadas.

Otras comunidades con normas propias de mecenazgo (La Rioja, entre otras) siguen fuera del alcance.

Las cifras son una estimación. En Navarra el efecto conjunto de las deducciones sobre la cuota
íntegra y la cuota líquida depende de la situación del contribuyente: confirma con un asesor foral.

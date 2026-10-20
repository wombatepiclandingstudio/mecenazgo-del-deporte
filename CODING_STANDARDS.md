# Estándares de código

Criterios de revisión que ninguna comprobación automática puede imponer. Los mecánicos ya están
en `npm run check`: linter, tipos y tests. Aquí van los que dependen de criterio.

## Texto legal

- **Fuente única**: el texto de la ley vive solo en `lib/legal.ts`. Cada entrada lleva `fuente` y
  `verificadoEn`, y la fuente cita la norma primaria. Los componentes lo importan.
- **Primero la fuente, después el código**: cuando cambie la ley o aparezca un error, el orden es
  `docs/verificacion-legal.md` (contraste con la cita literal), `lib/legal.ts` (la entrada), los
  tests y por último la interfaz.
- **Toda cifra que la ley fija, con su articulo**: un porcentaje, un tope o un importe que aparece
  en pantalla tiene que salir de `lib/legal.ts` o de `FIGURAS`. `lib/cifras.test.ts` lo comprueba.
- **Las reglas de un programa, con su fuente**: el canon, los topes y los plazos de los programas
  de la Fundación no los fija una norma, los fija el documento del programa. Viven igualmente en
  `lib/legal.ts`, con la fuente que los respalda (F24 a F26), y `lib/programas.ts` solo los combina.
- **Una cifra del programa no se deduce de otra**: si el tope limita la base, el aviso tiene que
  decir que lo que excede no se traslada, porque es regla del programa y no límite de deducción.
- **Vocabulario**: la interfaz usa las palabras de la ley —entidad acreedora, donante, donativo,
  aportación, mecenazgo prioritario— y `GLOSSARY.md` manda sobre cualquier sinónimo.

## Interfaz

- **Condiciones resolubles**: una condición que produce un aviso bloqueante tiene su control a la
  vista. Si el aviso salta y el control está escondido, el usuario no puede salir del bloqueo.
- **Progressive disclosure**: lo que hace falta para la primera respuesta a la vista; lo que la afina,
  a un clic. Nunca al revés: la primera respuesta no puede depender de abrir nada.
- **Estado guardado**: al cambiar la forma del estado se sube `CLAVE_ALMACEN` y se avisa en el
  README. El navegador descarta lo guardado y hay que decirlo.

## Accesibilidad

- **Contraste medido**: el texto sobre un color de marca usa `accent.700` con `accent.contrast`
  (5.3:1). `accent.contrast` sobre `accent.solid` se queda en 2,45:1 y no vale.
- **Estructura**: las listas son listas (`ul`/`li`), las tablas llevan `caption` y encabezados de
  fila y columna, y la información que solo existe en píxeles tiene su equivalente en texto.
- **Decorativo, decorado**: lo que no aporta información lleva `aria-hidden="true"`.

## PDF

- **Documento de trabajo, no oficial**: el informe de cálculo y el certificado del art. 24.3 son
  documentos que prepara el usuario. No reproducen ningún formulario oficial de la Fundación: a
  esos se enlaza, para que el usuario use el impreso que ella publica.
- **Un solo stack**: el PDF nuevo se genera con Takumi en un worker (`lib/pdf/`). El certificado
  antiguo sigue con `react-pdf` hasta que se migre (ticket 11). No se mezclan: cada documento
  tiene su generador.

## Código de terceros

- **`components/pdf/`, `types/` y `lib/pdf-themes/` vienen del registry de pdfcn**: se versionan
  tal cual, no se editan a mano y no se revisan con las reglas del proyecto. Para actualizarlos se
  vuelve a copiar el registry y se commitea.

## Proceso

- **Checks antes del commit**: `npm run check` (lint, tipos, tests). El hook hace lo mismo: si un
  check falla, el commit no sale.
- **Enlaces**: `npm run check:fuentes` cuando toques `docs/fuentes.md`. Una fuente que cambia de
  identificador en el BOE se queda en 404 sin avisar.
- **API antes que suposición**: comprueba la firma en la versión instalada. `tsc` avisa de los
  componentes que no existen (`Table.RowHeader` no está en Chakra 3.37).

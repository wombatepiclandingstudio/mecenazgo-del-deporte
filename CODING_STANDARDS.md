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

## Proceso

- **Checks antes del commit**: `npm run check` (lint, tipos, tests). El hook hace lo mismo: si un
  check falla, el commit no sale.
- **Enlaces**: `npm run check:fuentes` cuando toques `docs/fuentes.md`. Una fuente que cambia de
  identificador en el BOE se queda en 404 sin avisar.
- **API antes que suposición**: comprueba la firma en la versión instalada. `tsc` avisa de los
  componentes que no existen (`Table.RowHeader` no está en Chakra 3.37).

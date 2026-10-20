# Codigo de pdfcn vendorizado sin reglas propias

Status: wontfix
Type: task

Los componentes de pdfcn se copiaron del registry a components/pdf/, con
lib/pdf-primitives.tsx, lib/pdf-themes/, 	ypes/ y lib/resolve-color.ts.

Se versionan tal cual, sin las reglas de lint del proyecto: asi se puede
comparar con el origen y actualizar sin mergear diferencias. Actualizar el
copiado con el script del ticket 08 y volver a commitear.

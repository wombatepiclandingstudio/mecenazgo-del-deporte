# Capa de dominio de los programas FDJ 2026

Status: ready-for-agent
Type: task

Nuevo `lib/programas.ts` (puro, sin React ni DOM) y ampliaciÃ³n de `lib/legal.ts`.

- `lib/legal.ts`: `FIGURAS` += canon plano, brackets AEIP, tope 50.000, mÃ­nimo 150,
  fracciÃ³n mÃ­nima 1.000, ventanas de justificaciÃ³n, custodia 2 aÃ±os, publicidad
  15 % / 90 % / 25 %; nuevos `PROGRAMAS_2026`, `CALENDARIO_2026`, `DEFECTOS_FDJ`,
  `PREGUNTAS_FDJ`, `AVISO_PRESUPUESTO`, todos con `fuente` y `verificadoEn`.
- `lib/programas.ts`: canon (plano y escala AEIP), tope anual, vÃ­a publicitaria,
  calendario, fracciones viables y avisos.
- `lib/mecenazgo.ts` no se toca: `calcular()` ya cubre IS/IRPF/Navarra.

Bloquea: 03, 04, 05, 06.

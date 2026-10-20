# Programas Fundación Deporte Joven 2026 sobre la arquitectura actual

Spec del trabajo que traslada el contenido de `fundacion-deporte-joven.txt`
(investigación verificada) y de `2026-10-20-espana-compite-toolkit.md` (plan de
implementación para **otra** app) a la arquitectura vigente del repo.

El toolkit no aporta arquitectura: aporta contenido. El repo es Next.js 15 con
App Router, Chakra v3, `lib/legal.ts` como fuente única del texto legal,
`lib/mecenazgo.ts` como cálculo puro y PDF en el navegador.

## Decisiones de arquitectura

1. Toda cifra fiscal vive solo en `lib/legal.ts` (`FIGURAS` y bloques nuevos).
2. Módulo puro nuevo `lib/programas.ts`; `lib/mecenazgo.ts` no se toca.
3. La interfaz amplía las tres pestañas del simulador; no hay rutas nuevas.
4. Un solo stack PDF: pdfcn/Takumi en Web Worker; el certificado migra y se
   borran `@react-pdf/renderer` y `pdf-lib`.
5. Al worker solo viaja JSON, nunca elementos React.

## Estado (2026-10-21)

Hecho: P0 (verificacion primaria, fuentes F22 a F29, `docs/verificacion-legal.md` 11),
P1 (`lib/programas.ts` y sus tests), P2 (selector de programa en el donante, solicitud por
rol en la entidad, referencia de programas en `/ley`), P3.0 a P3.2 y P3.5 a medias
(pdfcn vendorizado, worker de Takumi, informe de calculo en PDF con test de Node),
P4 (`MANUAL-OPERATIVO.md` generado) y P5 (GLOSSARY, README, CODING_STANDARDS).

Abierto: ticket 10 (documentos PDF adicionales), 11 (migrar el certificado a Takumi),
12 y 54 (prueba en navegador), 30 (canon AEIP marginal o plano, pendiente de la
Fundacion), 52 (cifras escritas a mano en `lib/mecenazgo.ts`).
## Fases

| Fase | Alcance | Tickets |
|---|---|---|
| P0 | Verificación primaria y fuentes nuevas F22..F31 | 01, 35, 36, 37 |
| P1 | Dominio: `lib/legal.ts` + `lib/programas.ts` | 02, 03 |
| P2 | Interfaz: aportante, entidad, ley, estado | 04, 05, 06, 07 |
| P3 | PDF: spike, worker, documentos, migración, verificación | 08, 09, 10, 11, 12, 46, 51 |
| P4 | Manual operativo generado | 13 |
| P5 | Casa: GLOSSARY, README, CODING_STANDARDS, CI | 14, 47, 48, 49 |

## Conflictos que bloquean la publicación de cifras

| Ticket | Cuestión |
|---|---|
| 30 | Canon AEIP marginal o plano sobre el total |
| 31 | Base admisible del 25 % en publicidad no esencial |
| 32 | Qué limita el tope de 50.000 € y qué pasa con el exceso |
| 33 | Mínimo de 150 €: regla de programa o de régimen |
| 34 | Quién firma el certificado de listado de carrera dual |
| 35 | Fecha del Real Decreto-ley 8/2025 |
| 36 | Qué norma mantiene viva la DA 57ª en 2026 |
| 37 | Reto De cerrado el 31/12/2025 |
| 38 | Respuestas de la Fundación a las preguntas abiertas |

## Fuera de alcance

Descartes y aplazamientos con su motivo y su condición de revisión están en
los tickets `20` a `51`. Nada se pierde: cadaticket lleva `Status:` y motivo.

## Comandos

```bash
npm run check          # lint, tipos y tests
npm run check:fuentes  # enlaces vivos de docs/fuentes.md
npm test
```

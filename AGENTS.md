# AGENTS.md

Instrucciones para agentes que trabajan en este repo.

## Agent skills

### Issue tracker

Los tickets viven como archivos markdown bajo `.scratch/<feature>/`. Ver `docs/agents/issue-tracker.md`.

### Triage labels

Roles canónicos por defecto: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. Ver `docs/agents/triage-labels.md`.

### Domain docs

Disposición de un solo contexto: `GLOSSARY.md` y `docs/adr/` en la raíz. Ver `docs/agents/domain.md`.

## Textos legales

`lib/legal.ts` es la única fuente del texto de la ley: cada entrada lleva su `fuente` (en
`docs/fuentes.md`) y la fecha del último contraste. `docs/verificacion-legal.md` registra el
contraste con el BOE y la Agencia Tributaria; `docs/actividades-prioritarias.md`, la relación
vigente de actividades prioritarias. `GLOSSARY.md` fija el vocabulario del dominio y `docs/adr/`
las decisiones. El procedimiento de actualización está en el README.

## Estándares

`CODING_STANDARDS.md` recoge los criterios de revisión que ninguna comprobación automática puede
imponer.

# Docs de dominio

Cómo deben las skills de ingeniería consumir la documentación de dominio de este repo al explorar el código.

## Antes de explorar, lee esto

- **`GLOSSARY.md`** en la raíz del repo, o
- **`GLOSSARY-MAP.md`** en la raíz del repo si existe: apunta a un `GLOSSARY.md` por contexto. Lee cada uno de los relevantes al tema.
- **`docs/adr/`**: lee los ADR que afecten al área en la que vas a trabajar. En repos multi-contexto, mira también `src/<contexto>/docs/adr/` para decisiones del contexto.

Si alguno de estos ficheros no existe, **sigue en silencio**. No señales su ausencia; no propongas crearlos de antemano. La skill `/domain-modeling` (a la que se llega por `/grill-with-docs` e `/improve-codebase-architecture`) los crea de forma perezosa, cuando los términos o las decisiones se resuelven de verdad.

## Estructura de ficheros

Repo de un solo contexto (el caso normal):

```
/
├── GLOSSARY.md
├── docs/adr/
│   ├── 0001-event-sourced-orders.md
│   └── 0002-postgres-for-write-model.md
└── src/
```

Repo multi-contexto (presencia de `GLOSSARY-MAP.md` en la raíz):

```
/
├── GLOSSARY-MAP.md
├── docs/adr/                          ← decisiones de todo el sistema
└── src/
    ├── ordering/
    │   ├── GLOSSARY.md
    │   └── docs/adr/                  ← decisiones del contexto
    └── billing/
        ├── GLOSSARY.md
        └── docs/adr/
```

## Usa el vocabulario del glosario

Cuando tu salida nombre un concepto de dominio (en el título de un issue, en una propuesta de refactor, en una hipótesis, en el nombre de un test), usa el término tal como está definido en `GLOSSARY.md`. No te desvíes hacia sinónimos que el glosario descarte explícitamente.

Si el concepto que necesitas aún no está en el glosario, eso es una señal: o estás inventando un lenguaje que el proyecto no usa (reconsidera) o hay un hueco real (anótalo para `/domain-modeling`).

## Señala los conflictos con los ADR

Si tu salida contradice un ADR existente, surfacéalo explícitamente en vez de sobrescribirlo en silencio:

> _Contradice ADR-0007 (pedidos basados en eventos), pero merece la pena reabrirlo porque…_

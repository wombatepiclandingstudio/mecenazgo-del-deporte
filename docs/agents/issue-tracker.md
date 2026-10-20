# Issue tracker: Markdown local

Los issues y las specs de este repo viven como archivos markdown en `.scratch/`.

## Convenciones

- Un feature por directorio: `.scratch/<feature-slug>/`
- La spec es `.scratch/<feature-slug>/spec.md`
- Los tickets de implementación son un archivo por ticket en `.scratch/<feature-slug>/issues/<NN>-<slug>.md`, numerados desde `01`, nunca un archivo único con todos los tickets
- El estado de triage se registra como una línea `Status:` cerca del principio de cada archivo de issue (ver `triage-labels.md` para las cadenas de rol)
- Los comentarios y el historial de conversación se añaden al final del archivo, bajo un encabezado `## Comments`

## Cuando una skill dice "publicar en el issue tracker"

Crear un archivo nuevo bajo `.scratch/<feature-slug>/` (creando el directorio si hace falta).

## Cuando una skill dice "leer el ticket relevante"

Leer el archivo en la ruta indicada. El usuario normalmente pasará la ruta o el número de issue.

## Operaciones de wayfinding

Las usa `/wayfinder`. El **mapa** es un archivo con un archivo hijo por ticket.

- **Mapa**: `.scratch/<effort>/map.md` (el cuerpo con Notes / Decisions-so-far / Fog).
- **Ticket hijo**: `.scratch/<effort>/issues/NN-<slug>.md`, numerados desde `01`, con la pregunta en el cuerpo. Una línea `Type:` registra el tipo de ticket (`research`/`prototype`/`grilling`/`task`); una línea `Status:` registra `claimed`/`resolved`.
- **Bloqueo**: una línea `Blocked by: NN, NN` cerca del principio. Un ticket queda desbloqueado cuando todos los archivos que lista están en `resolved`.
- **Frontera**: barrer `.scratch/<effort>/issues/` buscando archivos abiertos, desbloqueados y sin reclamar; gana el primero por número.
- **Reclamar**: poner `Status: claimed` y guardar antes de empezar a trabajar.
- **Resolver**: añadir la respuesta bajo un encabezado `## Answer`, poner `Status: resolved`, y después añadir un puntero de contexto (resumen + enlace) al apartado Decisions-so-far del `map.md`.

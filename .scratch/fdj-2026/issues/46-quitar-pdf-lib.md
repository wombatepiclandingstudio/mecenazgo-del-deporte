# Quitar pdf-lib declarada y sin usar

Status: wontfix
Type: task

`package.json` declara `pdf-lib` y ningÃºn fichero la importa. Depende del
ticket 11 para no romper nada; si el ticket 11 se aplaza, quitarla igualmente
porque la verificaciÃ³n la cubre `pdfjs-dist`.

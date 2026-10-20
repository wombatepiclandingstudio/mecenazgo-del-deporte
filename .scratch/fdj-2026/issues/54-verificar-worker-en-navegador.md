# Verificar el worker de PDF en un navegador

Status: ready-for-agent
Type: task

El PDF se genera en un worker (lib/pdf/render.worker.ts) con el binario de
Takumi que scripts/copiar-wasm.mjs deja en public/. El test de Node
comprueba que el documento se compone y sale un PDF valido, pero falta
comprobar en un navegador que el worker arranca, descarga el binario y la
descarga llega al disco.

Trabajo: prueba de extremo a extremo con Playwright (ticket 12) que pulse
«Informe de calculo (PDF)» y compruebe la descarga.

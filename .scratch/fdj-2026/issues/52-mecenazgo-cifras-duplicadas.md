# Cifras fiscales escritas a mano en lib/mecenazgo.ts

Status: needs-triage
Type: task

lib/mecenazgo.ts tiene desde antes de este trabajo cifras en los textos que
muestra en pantalla (25.000 euros, 250 euros, 3 por mil, 30%, 20%,
80%, 40%) en vez de tomarlas de FIGURAS. El guard de cifras no lo revisa
por eso.

Trabajo: mover esas cifras a FIGURAS y componer los textos con ellas, igual
que se ha hecho con lib/programas.ts. Luego incluir lib/mecenazgo.ts en el
guard de lib/cifras.test.ts.

Riesgo: toca el motor de calculo. Los tests de lib/mecenazgo.test.ts cubren
el comportamiento actual, asi que se puede hacer paso a paso.

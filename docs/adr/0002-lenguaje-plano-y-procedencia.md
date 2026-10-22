# Lenguaje plano y procedencia

## Contexto

La aplicación la usan clubes, federaciones, empresas pequeñas y personas que hacen mecenazgo, no
asesores fiscales. El texto que mostraba hasta ahora era el de la ley: «entidad acreedora» (que no es el
término de la Ley: el BOE dice «entidad beneficiaria del mecenazgo»), «mecenazgo
prioritario», «partida deducible». Es vocabulario correcto, pero sin explicar no se
entiende: quien no lo entiende tampoco puede preguntar a su gestoría, y acaba creyendo que el
resultado del simulador no aplica a su caso.

Al mismo tiempo, la aplicación afirma cosas sobre lo que dice una norma. Sin una señal visible de
de dónde sale cada afirmación, el público no puede distinguir lo que es derecho vigente de lo que
es una regla de un programa, ni comprobarlo por su cuenta.

## Decisión

1. **La interfaz usa palabras corrientes.** La primera vez que aparece, el término legal va entre
   paréntesis con su artículo: «entidad que puede recibir tu aportación (entidad beneficiaria
   del mecenazgo, art. 16)». Después, la palabra corriente sola. El término legal no desaparece: vive en la cita
   literal de la norma, en cursiva, y en el modal.
2. **El texto llano y el texto legal conviven en `lib/legal.ts`.** Cada entrada puede llevar `plano`
   (la idea en palabras corrientes), `extracto` (la cita literal), `confianza` y `ancla`. Nunca en
   los componentes: así el texto llano no puede separarse de su fuente y las cifras de la ley no se
   duplican fuera de ese fichero.
3. **El color marca la procedencia, y nunca es el único canal.** Azul: lo que dice la ley. Rojo
   `#DB291E`: lo que dice deportejoven.es. Violeta: lo que dicen los dos. El color va siempre en la
   etiqueta, en el borde del extracto y en la leyenda; la cursiva del extracto literal y la
   etiqueta de procedencia acompañan siempre al color. El origen se deriva con `origen()`, a partir
   de la URL de la fuente, y no se escribe a mano: una fuente nueva no tiene que declararse en
   ningún sitio.
4. **El enlace a la norma es un modal**, a pantalla completa en móvil, con el extracto literal y el
   enlace fuera. No hay iframes: el BOE manda `X-Frame-Options: SAMEORIGIN` y
   `frame-ancestors 'self'`, así que no se puede incrustar.
5. **El enlace apunta siempre a la norma; el artículo es un ancla dentro de ella.** El registro
   vive en `ANCLAS` y cada ancla se comprueba contra el HTML del BOE. Si no se puede comprobar, el
   enlace va a la norma sin ancla.
6. **Cada reescritura declara su confianza** (`alta`, `media` o `baja`), y la interfaz la muestra
   junto a la fuente.
7. **La cita literal se copia del texto consolidado y se verifica.** Si no se puede comprobar, el
   extracto se deja vacío antes que inventarlo.

## Consecuencias

Gana: el público entiende lo que lee sin intermediarios; cada afirmación se puede comprobar en la
norma en un clic; el color y la etiqueta dicen de dónde sale cada cosa; las cifras siguen saliendo
de un solo fichero, el que las contiene.

Cuesta: `lib/legal.ts` crece, porque cada entrada lleva su texto llano, su extracto y su ancla; hay
que re-verificar los extractos cada vez que cambia una norma; el término legal ya no se usa en la
interfaz salvo entre paréntesis, y el glosario del repo sigue siendo la fuente del vocabulario
canónico.

## Estado

Aceptado.

## Cuestiones abiertas

1. La redacción en lenguaje claro es una interpretación. Nadie la ha revisado con un asesor fiscal:
   hay que hacerlo antes de darla por buena.
2. El canon de los programas AEIP de la Fundación (si es marginal o plano) sigue sin confirmar. Se
   anota con confianza `baja` hasta que la Fundación lo diga.

# Ronda 2: las pestañas del simulador en lenguaje claro

Status: resolved
Type: task

Ronda 2. No empieces hasta que la ronda 1 (tickets 01 a 08) esté en `main` y la ruta /ley
esté hecha. Este ticket se escribe ahora para tenerlo en cola, no para ejecutarlo hoy.

Lee `.scratch/lenguaje-plano/spec.md` antes de empezar.

```
Trabaja en D:\WELS\mecenazgo-del-deporte (Next.js 15, Chakra 3.37).

Job: que las tres pestañas del simulador (/simulador) se lean en palabras corrientes y
que cualquier aviso que salti al usuario diga de dónde sale. Hoy son las pantallas que
más se usan: el donante ve un formulario con "base liquidable", "cuota íntegra",
"mecenazgo prioritario" y "tope" sin más explicación, y la entidad ve un checklist con
"explotaciones no exentas" y "órganos de representación, vigilancia y administración".

Where: components/mecenazgo/PanelAportante.tsx, components/mecenazgo/PanelEntidad.tsx,
components/mecenazgo/PanelCertificado.tsx y components/mecenazgo/Simulador.tsx. Y
lib/legal.ts, para los textos que son datos y no están escritos en los componentes.

What:

1. Aplica las mismas reglas de redacción de la spec (sección "Reglas de redacción") a
   todos los textos que están escritos dentro de los componentes: etiquetas, ayudas,
   botones, avisos y mensajes de error. Por ejemplo:
   - "Base liquidable" → "Lo que ganas antes de impuestos";
   - "Cuota íntegra" → "Lo que te cobra Hacienda antes de deducciones";
   - "Ducción" → "Lo que te devuelve Hacienda";
   - "Donativo reiterado" → "Donar tres años seguidos a la misma entidad";
   - "Tope de la base de deducción" → "El máximo que puedes descontar este año";
   - "Ha ejercido la opción al régimen fiscal especial" → "Ha pedido entrar en el
     régimen especial de entidades sin fines lucrativos".
   El término legal va entre paréntesis con su artículo la primera vez que aparece.

2. Las entradas de lib/legal.ts que el simulador muestra (REQUISITOS, CONDICIONES,
   ESCALA_IS, ESCALA_IRPF, ESCALA_NAVARRA, NAVARRA_REGLAS, IRPF_CUBO, LIMITE_SIMBOLICO,
   NAVARRA_TOPE, FIGURAS) reciben su campo `plano`, `extracto`, `origen` y `confianza`,
   con las mismas reglas del ticket 05.

3. Cada aviso bloqueante y cada resultado del cálculo lleva su botón "Ver la ley", con
   el modal del ticket 03, y la línea de fuente con la confianza.

4. El texto de los PDF (informe de cálculo y certificado) NO se reescribe en este
   ticket: son documentos que prepara el usuario y su redacción se queda como está.
   Si el usuario se queja, es otro ticket.

5. No cambies el cálculo, ni el estado guardado, ni la clave de localStorage. Si la
   reescritura obliga a tocar el estado, es que la reescritura se ha pasado de la raya:
   vuelve atrás.

Boundary:
- No escribas cifras de la ley en los componentes: lib/cifras.test.ts lo vigila.
- No cambies lib/mecenazgo.ts ni lib/programas.ts.
- No cambies la clave de localStorage (CLAVE_ALMACEN) ni la forma del estado guardado:
  si el texto llano necesita más sitio en el estado, no lo guardes, se calcula.
- No toques la ruta /ley: eso ya está hecho en la ronda 1.
- No añadas dependencias.

Match:
- Chakra v3 con los tokens del repo: colorPalette="ley" | "fdj" | "mixto".
- Condiciones resolubles (CODING_STANDARDS): un aviso bloqueante tiene su control a la
  vista. Si al reescribir el aviso se alarga, no tapes el control.
- Accesibilidad: todo lo que se distingue por color lleva también texto.

Checks antes de dar el ticket por hecho:
npm run check
```

Notas de entrega:

- Ronda 2. Tres pestañas, tres commits: `aportante`, `entidad`, `certificado`.
- Rama `feature/lenguaje-plano-09-simulador`.
- Si al reescribir aparece un texto que no sabes de dónde sale, se anota en el ticket en
  lugar de inventarlo.
- Cuando termine, la ronda 1 y la 2 juntas cubren la aplicación entera menos los PDF.

## Comments

Hecho: las tres pestañas del simulador muestran el texto llano y abren el modal de la ley. Los PDF no cambian de redactado.

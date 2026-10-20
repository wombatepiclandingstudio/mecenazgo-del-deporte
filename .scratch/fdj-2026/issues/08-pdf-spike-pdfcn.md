# Spike de pdfcn/Takumi en Next.js (puerta de decisiÃ³n)

Status: resolved
Type: prototype

Vendorizar los componentes `@pdfcn/takumi/*` y resolver tres puntos:

1. Tailwind: los componentes del registry usan clases de Tailwind y el repo usa
   Chakra. Decidir entre Tailwind v4 sin preflight con prefijo o reestilizar los
   componentes a objetos de estilo de Takumi (mÃ¡s seguro, mÃ¡s trabajo).
2. WASM: comprobar si `takumi-pdf/wasm-url` resuelve bajo webpack; plan B,
   copiar el WASM a `public/` en el build.
3. Worker: `new Worker(new URL(...), { type: "module" })` con webpack y Next 15.

Sin salida de red al registry, este ticket se bloquea y `@react-pdf/renderer`
sigue como plan B.

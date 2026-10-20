import { readFile, copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Copia el binario WebAssembly de Takumi a `public/`.
 *
 * El worker lo descarga desde el propio origen, igual que cualquier recurso
 * estatico, para que el build no dependa de que el empaquetador entienda los
 * modulos WebAssembly.
 */

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const origen = resolve(
  raiz,
  "node_modules/takumi-pdf/pkg/takumi_pdf_wasm_bg.wasm",
);
const destino = resolve(raiz, "public/takumi_pdf.wasm");

await mkdir(dirname(destino), { recursive: true });
await copyFile(origen, destino);

const { size } = await readFile(destino);
console.log(`PDF: binario copiado a public/takumi_pdf.wasm (${size} bytes)`);

import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

/**
 * Build estatico para GitHub Pages (o cualquier hosting de estaticos).
 *
 * El sitio puede vivir bajo /<repositorio>, asi que la ruta base se pasa al
 * build. La da `actions/configure-pages` (BASE_PATH) y, si no, el nombre del
 * repositorio (REPO o GITHUB_REPOSITORY).
 *
 * Ojo: el nombre se pasa como repositorio, no como ruta. Algunos entornos
 * traducen "/algo" a una ruta de Windows y la base se pierde.
 */

const raiz = resolve(import.meta.dirname, "..");

/** Una ruta base válida: barra inicial, sin unidad de disco, sin barra final. */
function normaliza(bruto) {
  const limpio = (bruto ?? "").trim().replace(/\/+$/, "");
  if (!limpio) return "";
  if (!limpio.startsWith("/") || /^[A-Za-z]:/.test(limpio)) return "";
  return limpio;
}

// Si BASE_PATH viene definida, manda: vacia significa sitio en la raiz del
// dominio, que es el caso de un sitio de usuario en GitHub Pages.
const desdeEntorno =
  process.env.BASE_PATH !== undefined ? normaliza(process.env.BASE_PATH) : null;
const repositorio = process.env.REPO ?? process.env.GITHUB_REPOSITORY ?? "";
const nombre = repositorio.split("/").pop() ?? "";
const basePath =
  desdeEntorno !== null
    ? desdeEntorno
    : nombre && !nombre.endsWith(".github.io")
      ? `/${nombre}`
      : "";

console.log(`Build estatico con ruta base "${basePath || "/"}"`);

if (process.argv.includes("--dry")) {
  console.log("Solo comprobacion: no se construye nada.");
  process.exit(0);
}

const copiar = spawnSync(
  process.execPath,
  [resolve(raiz, "scripts/copiar-wasm.mjs")],
  { cwd: raiz, stdio: "inherit" },
);
if (copiar.status !== 0) process.exit(copiar.status ?? 1);

const construir = spawnSync(
  process.execPath,
  [resolve(raiz, "node_modules/next/dist/bin/next"), "build"],
  {
    cwd: raiz,
    stdio: "inherit",
    env: {
      ...process.env,
      NEXT_OUTPUT: "export",
      NEXT_PUBLIC_BASE_PATH: basePath,
    },
  },
);
process.exit(construir.status ?? 1);

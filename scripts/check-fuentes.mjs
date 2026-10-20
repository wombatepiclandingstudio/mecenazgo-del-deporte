import { readFileSync } from "node:fs";

/**
 * Comprueba que los enlaces de docs/fuentes.md siguen vivos.
 *
 * Una fuente que cambia de identificador en el BOE se queda 404, y ese enlace
 * es la red de seguridad de todo el contenido legal de la aplicacion.
 */

const RUTA = new URL("../docs/fuentes.md", import.meta.url);
const texto = readFileSync(RUTA, "utf8");

const urls = [
  ...new Set(
    [...texto.matchAll(/https?:\/\/[^\s|)\]]+/g)].map((m) =>
      m[0].replace(/[.,;:]$/, ""),
    ),
  ),
];

const COMPROBAR = async (url) => {
  const opciones = { redirect: "follow", signal: AbortSignal.timeout(25000) };
  try {
    let res = await fetch(url, { ...opciones, method: "HEAD" });
    if (res.status === 405 || res.status === 501) {
      res = await fetch(url, { ...opciones, method: "GET" });
    }
    if (res.status === 404 || res.status === 410) {
      return { url, estado: res.status, roto: true };
    }
    if (!res.ok && res.status !== 403 && res.status !== 429) {
      return { url, estado: res.status, roto: false };
    }
    return { url, estado: res.status, roto: false };
  } catch (error) {
    return { url, estado: error.message, roto: false };
  }
};

const resultados = [];
for (let i = 0; i < urls.length; i += 5) {
  const tanda = urls.slice(i, i + 5);
  resultados.push(...(await Promise.all(tanda.map(COMPROBAR))));
}

const rotos = resultados.filter((r) => r.roto);
const avisos = resultados.filter(
  (r) => !r.roto && (typeof r.estado !== "number" || (r.estado !== 200 && r.estado !== 403 && r.estado !== 429)),
);

for (const r of avisos) {
  console.warn(`aviso  ${r.estado} ${r.url}`);
}
for (const r of rotos) {
  console.error(`roto   ${r.estado} ${r.url}`);
}

console.log(
  `\n${resultados.length} enlaces comprobados, ${rotos.length} rotos, ${avisos.length} con aviso`,
);

if (rotos.length > 0) {
  console.error("\nHay enlaces rotos. Actualiza docs/fuentes.md y el contenido que los cita.");
  process.exit(1);
}

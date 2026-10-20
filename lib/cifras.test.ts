import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * El texto de la ley vive en lib/legal.ts, con su fuente. Estas cifras no
 * pueden aparecer escritas a mano en la interfaz: cuando se copiaron a los
 * componentes, seis de ellas se quedaron desfasadas respecto a la norma.
 */

const RAIZ = new URL("../", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

/** Cifras de la ley que solo pueden aparecer en lib/legal.ts. */
const CIFRAS = [
  "25.000",
  "50.000 euros",
  "12.000.000",
  "3 por mil",
  "80%",
  "85%",
  "55%",
  "50%",
  "45%",
  "40%",
  "30%",
  "20%",
  "15%",
  "10%",
  "25 %",
  "90 %",
  "2,75",
  "1.000",
  "300 euros",
  "250 euros",
];

function codigo(dir: string): string[] {
  return readdirSync(join(RAIZ, dir), { recursive: true, withFileTypes: true })
    .filter(
      (d) =>
        d.isFile() &&
        (d.name.endsWith(".tsx") || d.name.endsWith(".ts")) &&
        !d.name.endsWith(".test.ts") &&
        !d.name.endsWith(".test.tsx"),
    )
    .map((d) => join(d.parentPath, d.name));
}

/**
 * Ficheros que se revisan: la interfaz y el dominio, menos `lib/legal.ts`, que
 * es la fuente, y `lib/mecenazgo.ts`, que arrastra cifras escritas a mano desde
 * antes de este trabajo (deuda conocida, ticket 52).
 */
const ficheros = [
  ...codigo("components"),
  ...codigo("app"),
  ...codigo("lib").filter(
    (f) => !f.endsWith("legal.ts") && !f.endsWith("mecenazgo.ts"),
  ),
];

describe("las cifras de la ley no se duplican fuera de lib/legal.ts", () => {
  it("hay ficheros que revisar", () => {
    expect(ficheros.length).toBeGreaterThan(5);
  });

  it("ninguna cifra de la ley esta escrita a mano fuera de lib/legal.ts", () => {
    const ofensas: string[] = [];
    for (const fichero of ficheros) {
      if (fichero.endsWith("legal.ts")) continue;
      const contenido = readFileSync(fichero, "utf8");
      contenido.split("\n").forEach((linea, i) => {
        for (const cifra of CIFRAS) {
          if (linea.includes(cifra)) {
            ofensas.push(
              `${fichero.replace(RAIZ, "")}:${i + 1} -> "${cifra}"`,
            );
          }
        }
      });
    }
    expect(ofensas).toEqual([]);
  });
});

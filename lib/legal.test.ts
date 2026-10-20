import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import * as legal from "./legal";

/**
 * La disciplina de verificacion se hace automatica: toda entrada del
 * contenido legal tiene que decir de donde sale y cuando se contrasto, y esa
 * fuente tiene que existir en docs/fuentes.md.
 */

const fuentes = readFileSync(
  new URL("../docs/fuentes.md", import.meta.url),
  "utf8",
);

const IDS_FUENTE = new Set(
  Array.from(fuentes.matchAll(/^\|\s*([FS]\d+)\s*\|/gm)).map((m) => m[1]),
);

const arrays = Object.entries(legal).filter(([, v]) => Array.isArray(v));

/** Solo las entradas con forma de objeto: GRUPOS es una lista de nombres. */
const entradas = (v: unknown): Record<string, unknown>[] =>
  (v as unknown[]).filter(
    (e): e is Record<string, unknown> =>
      typeof e === "object" && e !== null,
  );

describe("contenido legal", () => {
  it("hay contenido legal que verificar", () => {
    expect(arrays.length).toBeGreaterThan(5);
  });

  it("cada entrada lleva su fuente y la fecha del ultimo contraste", () => {
    for (const [nombre, valor] of arrays) {
      for (const entrada of entradas(valor)) {
        expect(typeof entrada.fuente, `${nombre}`).toBe("string");
        expect(String(entrada.fuente).length, `${nombre}`).toBeGreaterThan(0);
        expect(entrada.verificadoEn, `${nombre}`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      }
    }
  });

  it("toda fuente citada existe en docs/fuentes.md", () => {
    for (const [nombre, valor] of arrays) {
      for (const entrada of entradas(valor)) {
        expect(IDS_FUENTE.has(String(entrada.fuente)), `${nombre}`).toBe(true);
      }
    }
  });

  it("toda fuente citada tiene su ficha con enlace", () => {
    for (const [nombre, valor] of arrays) {
      for (const entrada of entradas(valor)) {
        expect(legal.FUENTES[String(entrada.fuente)], `${nombre}`).toBeDefined();
      }
    }
  });

  it("las fichas de fuente coinciden con el catalogo de docs/fuentes.md", () => {
    for (const id of Object.keys(legal.FUENTES)) {
      expect(IDS_FUENTE.has(id), id).toBe(true);
    }
  });

  it("la certificacion recoge los seis extremos del articulo 24.3", () => {
    expect(legal.CERTIFICACION_DATOS).toHaveLength(6);
    expect(
      legal.CERTIFICACION_DATOS.some((d) => d.texto.includes("autentico")),
    ).toBe(true);
  });

  it("la relacion de actividades prioritarias trae los 20 puntos de la DA 57a", () => {
    expect(legal.ACTIVIDADES_PRIORITARIAS).toHaveLength(20);
  });
});

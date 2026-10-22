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

  it("ninguna entrada es una cadena convertida en objeto", () => {
    for (const [nombre, valor] of arrays) {
      for (const entrada of entradas(valor)) {
        const numericas = Object.keys(entrada).filter((k) => /^\d+$/.test(k));
        expect(numericas, `${nombre}`).toHaveLength(0);
      }
    }
  });

  it("toda entrada tiene contenido, no solo sus metadatos", () => {
    for (const [nombre, valor] of arrays) {
      for (const entrada of entradas(valor)) {
        const contenido = Object.entries(entrada).filter(
          ([k, v]) => k !== "fuente" && k !== "verificadoEn" && typeof v === "string" && v.length > 0,
        );
        expect(contenido.length, `${nombre}`).toBeGreaterThan(0);
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
    for (const a of legal.ACTIVIDADES_PRIORITARIAS) {
      expect(typeof a.texto).toBe("string");
      expect(a.texto.length).toBeGreaterThan(20);
    }
  });
});

describe("lenguaje claro y trazabilidad", () => {
  it("toda entrada con texto llano declara su confianza", () => {
    for (const [nombre, valor] of arrays) {
      for (const entrada of entradas(valor)) {
        if (!entrada.plano) continue;
        expect(
          ["alta", "media", "baja"].includes(String(entrada.confianza)),
          `${nombre}: ${String(entrada.confianza)}`,
        ).toBe(true);
      }
    }
  });

  it("ningun extracto es un texto vacio", () => {
    for (const [nombre, valor] of arrays) {
      for (const entrada of entradas(valor)) {
        if (entrada.extracto === undefined) continue;
        expect(typeof entrada.extracto, `${nombre}`).toBe("string");
        expect(String(entrada.extracto).length, `${nombre}`).toBeGreaterThan(19);
      }
    }
  });

  it("toda ancla es un ancla dentro de la pagina de la norma", () => {
    for (const [nombre, valor] of arrays) {
      for (const entrada of entradas(valor)) {
        if (entrada.ancla === undefined) continue;
        expect(String(entrada.ancla), `${nombre}`).toMatch(/^#[a-z0-9-]+$/);
      }
    }
  });

  it("toda fuente adicional existe en FUENTES", () => {
    for (const [nombre, valor] of arrays) {
      for (const entrada of entradas(valor)) {
        const extra = entrada.fuentes as string[] | undefined;
        if (!extra) continue;
        for (const id of extra) {
          expect(legal.FUENTES[id], `${nombre}`).toBeDefined();
        }
      }
    }
  });

  it("el origen se deriva de las fuentes: la ley, la Fundacion o los dos", () => {
    expect(legal.origen({ fuente: "F1" })).toBe("ley");
    expect(legal.origen({ fuente: "F24" })).toBe("fdj");
    expect(legal.origen({ fuente: "F1", fuentes: ["F1", "F24"] })).toBe("mixto");
    expect(legal.origenDe(["F17", "F22"])).toBe("ley");
  });

  it("las anclas del BOE apuntan a una fuente que existe", () => {
    for (const clave of Object.keys(legal.ANCLAS)) {
      const [fuente] = clave.split("#");
      expect(legal.FUENTES[fuente], clave).toBeDefined();
      expect(legal.ANCLAS[clave], clave).toMatch(/^#[a-z0-9-]+$/);
    }
  });
});

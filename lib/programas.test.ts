import { describe, expect, it } from "vitest";
import { calcular, type Parametros } from "./mecenazgo";
import {
  canonDe,
  diasHasta,
  mesesAbiertos,
  programa,
  publicidadDe,
  repartoDe,
  resultadoPrograma,
} from "./programas";

/**
 * Los ejemplos salen de la investigacion sobre los programas de 2026: son las
 * cifras que la Fundacion publica y que un patrocinador puede comprobar.
 */

const empresa = (extra: Partial<Parametros> = {}): Parametros => ({
  perfil: "is",
  regimen: "estatal",
  cifraNegocios: 0,
  destinoNavarra: "deportivo",
  importe: 0,
  base: 0,
  tipoImpositivo: 25,
  otrasAportaciones: 0,
  prioritaria: true,
  reiterada: false,
  certificado: true,
  entregaSimbolica: false,
  valorSimbolico: 0,
  interesSocial: true,
  ...extra,
});

const autonomo = (extra: Partial<Parametros> = {}): Parametros =>
  empresa({ perfil: "irpf", tipoImpositivo: 0, ...extra });

describe("tope anual de España Compite", () => {
  it("recorta la base deducible al 20 % de la base imponible antes del tipo", () => {
    const r = calcular(
      empresa({ importe: 35000, base: 150000, topeAportacion: 50000 }),
    );
    expect(r.base).toBe(30000);
    expect(r.deduccion).toBe(13500);
  });

  it("aplica el tope de 50.000 euros cuando aprieta mas que la base imponible", () => {
    const r = calcular(
      empresa({ importe: 80000, base: 300000, topeAportacion: 50000 }),
    );
    expect(r.base).toBe(50000);
    expect(r.deduccion).toBe(22500);
  });

  it("avisa de que el exceso del tope no entra en la base", () => {
    const r = calcular(
      empresa({ importe: 80000, base: 300000, topeAportacion: 50000 }),
    );
    expect(r.pendiente).toBe(30000);
    expect(
      r.avisos.some((a) => a.texto.includes("tope anual por aportante")),
    ).toBe(true);
  });

  it("no toca el calculo cuando el programa no tiene tope", () => {
    const r = calcular(empresa({ importe: 80000, base: 300000 }));
    expect(r.base).toBe(60000);
    expect(r.deduccion).toBe(27000);
  });
});

describe("escala del IRPF con actividad prioritaria", () => {
  it("aplica el 85 % a los primeros 250 euros y el 45 % al resto", () => {
    const r = calcular(autonomo({ importe: 500, base: 10000 }));
    expect(r.deduccion).toBeCloseTo(325, 2);
  });

  it("el tipo de fidelidad se aplica solo al exceso de 250 euros", () => {
    const r = calcular(
      autonomo({ importe: 500, base: 10000, reiterada: true }),
    );
    expect(r.deduccion).toBeCloseTo(337.5, 2);
  });

  it("el limite del 15 % de la base liquidable recorta por abajo", () => {
    const r = calcular(autonomo({ importe: 5000, base: 10000 }));
    expect(r.base).toBe(1500);
  });
});

describe("canon de gestión", () => {
  it("España Compite aplica el canon plano", () => {
    const c = canonDe(programa("espana-compite"), 20000);
    expect(c.importe).toBeCloseTo(550, 2);
    expect(c.neto).toBeCloseTo(19450, 2);
  });

  it("un programa AEIP no cobra canon en el primer tramo", () => {
    const c = canonDe(programa("universo-mujer-iv"), 500);
    expect(c.importe).toBe(0);
    expect(c.neto).toBe(500);
  });

  it("un programa AEIP cobra el 10 % en el tramo de 1.000 a 50.000", () => {
    const c = canonDe(programa("universo-mujer-iv"), 20000);
    expect(c.importe).toBeCloseTo(2000, 2);
    expect(c.neto).toBeCloseTo(18000, 2);
  });

  it("y baja al 7,95 % por encima de 50.000", () => {
    const c = canonDe(programa("adb-2030-ii"), 100000);
    expect(c.importe).toBeCloseTo(7950, 2);
  });
});

describe("vía publicitaria del artículo 27.3", () => {
  it("deduce el 15 % del gasto cuando la publicidad es esencial", () => {
    const r = publicidadDe({
      gasto: 10000,
      donacion: 20000,
      esencial: true,
    });
    expect(r.base).toBe(10000);
    expect(r.deduccion).toBeCloseTo(1500, 2);
  });

  it("reduce la base al 25 % cuando la publicidad no es esencial", () => {
    const r = publicidadDe({
      gasto: 10000,
      donacion: 20000,
      esencial: false,
    });
    expect(r.base).toBeCloseTo(2500, 2);
    expect(r.deduccion).toBeCloseTo(375, 2);
  });

  it("nunca excede el 90 % de las donaciones", () => {
    const r = publicidadDe({
      gasto: 200000,
      donacion: 20000,
      esencial: true,
    });
    expect(r.techo).toBeCloseTo(18000, 2);
    expect(r.deduccion).toBeCloseTo(18000, 2);
    expect(r.limite).toBe("techo");
  });

  it("España Compite no admite la vía publicitaria", () => {
    const r = resultadoPrograma({
      programa: "espana-compite",
      via: "publicidad",
      importe: 20000,
      gastoPublicidad: 10000,
      publicidadEsencial: true,
      donacion: 20000,
      hoy: "2026-10-21",
    });
    expect(r.avisos.some((a) => a.bloqueante)).toBe(true);
  });

  it("un programa AEIP sí la admite", () => {
    const r = resultadoPrograma({
      programa: "universo-mujer-iv",
      via: "publicidad",
      importe: 20000,
      gastoPublicidad: 10000,
      publicidadEsencial: true,
      donacion: 20000,
      hoy: "2026-10-21",
    });
    expect(r.publicidad?.deduccion).toBeCloseTo(1500, 2);
  });
});

describe("calendario de 2026", () => {
  it("en octubre solo quedan octubre, noviembre y diciembre", () => {
    expect(mesesAbiertos("2026-10-21")).toEqual([
      "octubre",
      "noviembre",
      "diciembre",
    ]);
  });

  it("después de 2026 el calendario está cerrado", () => {
    expect(mesesAbiertos("2027-01-15")).toEqual([]);
  });

  it("cuenta los días que faltan para la solicitud de ayuda", () => {
    expect(diasHasta("2026-10-21", "2026-12-04")).toBe(44);
  });

  it("ofrece una fracción por mes abierto", () => {
    const r = repartoDe("2026-10-21");
    expect(r.fracciones).toBe(3);
    expect(r.fraccionMinima).toBe(1000);
  });
});

describe("resultado del programa", () => {
  it("el tope de España Compite recorta la base del programa", () => {
    const r = resultadoPrograma({
      programa: "espana-compite",
      via: "donacion",
      importe: 80000,
      gastoPublicidad: 0,
      publicidadEsencial: true,
      donacion: 80000,
      hoy: "2026-10-21",
    });
    expect(r.tope.limite).toBe(50000);
    expect(r.tope.base).toBe(50000);
    expect(r.tope.exceso).toBe(30000);
  });

  it("los programas AEIP no tienen tope anual", () => {
    const r = resultadoPrograma({
      programa: "deporte-inclusivo-iii",
      via: "donacion",
      importe: 80000,
      gastoPublicidad: 0,
      publicidadEsencial: true,
      donacion: 80000,
      hoy: "2026-10-21",
    });
    expect(r.tope.limite).toBeNull();
    expect(r.tope.exceso).toBe(0);
  });

  it("avisa cuando la aportación no llega al mínimo del programa", () => {
    const r = resultadoPrograma({
      programa: "espana-compite",
      via: "donacion",
      importe: 100,
      gastoPublicidad: 0,
      publicidadEsencial: true,
      donacion: 100,
      hoy: "2026-10-21",
    });
    expect(r.avisos.some((a) => a.bloqueante)).toBe(true);
  });
});

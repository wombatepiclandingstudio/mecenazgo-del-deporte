import { describe, expect, it } from "vitest";
import {
  calcular,
  limitePartidaDeducible,
  tipoAplicable,
  topePorcentaje,
  type Parametros,
} from "./mecenazgo";

/**
 * Fijan el comportamiento que exige la norma verificada (docs/verificacion-legal.md).
 * Cada test cita el articulo que lo obliga.
 */

const base: Parametros = {
  perfil: "is",
  regimen: "estatal",
  cifraNegocios: 1_000_000,
  destinoNavarra: "cultural",
  importe: 0,
  base: 0,
  tipoImpositivo: 25,
  otrasAportaciones: 0,
  prioritaria: false,
  reiterada: false,
  certificado: true,
  entregaSimbolica: false,
  valorSimbolico: 0,
  interesSocial: true,
};

const p = (over: Partial<Parametros>): Parametros => ({ ...base, ...over });

describe("tabla de tipos (arts. 19 y 20, con DA 57a de la Ley 31/2022)", () => {
  it("IS: 40 general, 50 reiterado, 45 prioritaria, 55 prioritaria y reiterada", () => {
    expect(tipoAplicable("is", false, false)).toBe(40);
    expect(tipoAplicable("is", false, true)).toBe(50);
    expect(tipoAplicable("is", true, false)).toBe(45);
    expect(tipoAplicable("is", true, true)).toBe(55);
  });

  it("IRPF: 40 general, 45 reiterado, 45 prioritaria, 50 prioritaria y reiterada", () => {
    expect(tipoAplicable("irpf", false, false)).toBe(40);
    expect(tipoAplicable("irpf", false, true)).toBe(45);
    expect(tipoAplicable("irpf", true, false)).toBe(45);
    expect(tipoAplicable("irpf", true, true)).toBe(50);
  });

  it("limite de la base de deduccion: 15 % IS, 20 % IS prioritaria, 10 % IRPF, 15 % IRPF prioritaria", () => {
    expect(topePorcentaje("is", false)).toBe(15);
    expect(topePorcentaje("is", true)).toBe(20);
    expect(topePorcentaje("irpf", false)).toBe(10);
    expect(topePorcentaje("irpf", true)).toBe(15);
  });
});

describe("regimen estatal, Impuesto sobre Sociedades (art. 20)", () => {
  it("deduce el 40 % del importe cuando no hay tope", () => {
    const r = calcular(p({ perfil: "is", importe: 1_000, base: 100_000 }));
    expect(r.tipo).toBe(40);
    expect(r.limite).toBe(15_000);
    expect(r.base).toBe(1_000);
    expect(r.deduccion).toBe(400);
    expect(r.pendiente).toBe(0);
  });

  it("la base de deduccion no puede exceder del 15 % de la base imponible (art. 20.2)", () => {
    const r = calcular(p({ perfil: "is", importe: 5_000, base: 10_000 }));
    expect(r.limite).toBe(1_500);
    expect(r.base).toBe(1_500);
    expect(r.deduccion).toBe(600);
    expect(r.pendiente).toBe(3_500);
  });

  it("el 20 % es el limite para actividad prioritaria", () => {
    const r = calcular(p({ perfil: "is", importe: 5_000, base: 10_000, prioritaria: true }));
    expect(r.limite).toBe(2_000);
    expect(r.deduccion).toBe(900);
  });

  it("el exceso sobre el tope se traslada durante diez ejercicios (art. 20.2)", () => {
    const r = calcular(p({ perfil: "is", importe: 5_000, base: 10_000 }));
    expect(r.avisos.some((a) => a.texto.includes("10 anos"))).toBe(true);
  });

  it("sin certificacion no hay deduccion (art. 24.3)", () => {
    const r = calcular(p({ perfil: "is", importe: 1_000, base: 100_000, certificado: false }));
    expect(r.avisos.some((a) => a.bloqueante && a.texto.includes("certificacion"))).toBe(true);
  });
});

describe("regimen estatal, IRPF (art. 19)", () => {
  it("80 % de los primeros 250 euros y 40 % del resto", () => {
    const r = calcular(p({ perfil: "irpf", importe: 300, base: 100_000 }));
    expect(r.deduccion).toBe(220);
  });

  it("los 250 euros son un unico cubo por contribuyente y ejercicio: lo consumen las demas aportaciones", () => {
    const r = calcular(
      p({ perfil: "irpf", importe: 200, otrasAportaciones: 100, base: 100_000 }),
    );
    // 150 euros en el tramo del 80 % y 50 al 40 %.
    expect(r.deduccion).toBe(140);
  });

  it("la base de deduccion no puede exceder del 10 % de la base liquidable (art. 69.1 LIRPF)", () => {
    const r = calcular(p({ perfil: "irpf", importe: 500, base: 1_000 }));
    expect(r.limite).toBe(100);
    expect(r.base).toBe(100);
    expect(r.pendiente).toBe(400);
  });
});

describe("limite simbolico (art. 17.2)", () => {
  it("bloquea cuando lo recibido supera el 15 % de la aportacion", () => {
    const r = calcular(
      p({ perfil: "is", importe: 1_000, base: 100_000, entregaSimbolica: true, valorSimbolico: 200 }),
    );
    expect(r.avisos.some((a) => a.bloqueante && a.texto.includes("limite simbolico"))).toBe(true);
  });

  it("bloquea cuando lo recibido supera los 25.000 euros", () => {
    const r = calcular(
      p({
        perfil: "is",
        importe: 1_000_000,
        base: 1_000_000,
        entregaSimbolica: true,
        valorSimbolico: 25_001,
      }),
    );
    expect(r.avisos.some((a) => a.bloqueante && a.texto.includes("25.000"))).toBe(true);
  });

  it("mantiene la deduccion cuando la entrega es simbolica dentro del limite", () => {
    const r = calcular(
      p({ perfil: "is", importe: 1_000, base: 100_000, entregaSimbolica: true, valorSimbolico: 100 }),
    );
    expect(r.avisos.some((a) => a.bloqueante)).toBe(false);
    expect(r.deduccion).toBe(400);
  });
});

describe("regimen foral navarro: empresas (arts. 31.1 y 44.1 del DFL 2/2023)", () => {
  const is = (over: Partial<Parametros>) =>
    calcular(p({ perfil: "is", regimen: "navarra", base: 10_000, ...over }));

  it("el tope de la partida deducible es el mayor entre el 30 % de la base y el 3 por mil del importe neto de la cifra de negocios", () => {
    expect(limitePartidaDeducible(10_000, 1_000_000)).toBe(3_000);
    expect(limitePartidaDeducible(100_000, 1_000_000)).toBe(30_000);
    expect(limitePartidaDeducible(10_000, 10_000_000)).toBe(30_000);
  });

  it("mecenazgo cultural: 30 % de los primeros 300 euros y 20 % del resto en cuota liquida (art. 31.1.b)", () => {
    const r = is({ destinoNavarra: "cultural", importe: 1_000 });
    // Partida deducible 1.000 al 25 % = 250; cuota liquida 0,3 x 300 + 0,2 x 700 = 230.
    expect(r.deduccion).toBe(480);
  });

  it("mecenazgo social, medioambiental y deportivo: 20 % en plano de la cuota liquida (art. 44.1.b)", () => {
    const r = is({ destinoNavarra: "social", importe: 1_000 });
    // Partida deducible 1.000 al 25 % = 250; cuota liquida 0,2 x 1.000 = 200.
    expect(r.deduccion).toBe(450);
  });

  it("el destino deportivo usa tambien el 20 % en plano", () => {
    const r = is({ destinoNavarra: "deportivo", importe: 1_000 });
    expect(r.deduccion).toBe(450);
  });
});

describe("regimen foral navarro: personas fisicas (arts. 30.1 y 43.1 del DFL 2/2023)", () => {
  it("deduce solo el 80 % de los primeros 250 euros y el 40 % del resto, sin deduccion adicional", () => {
    const r = calcular(
      p({ perfil: "irpf", regimen: "navarra", destinoNavarra: "cultural", importe: 1_000, base: 10_000 }),
    );
    expect(r.deduccion).toBe(500);
    expect(r.lineas).toHaveLength(1);
  });

  it("el articulo aplicable depende del destino: 30.1 en cultural y 43.1 en el resto", () => {
    const cultural = calcular(
      p({ perfil: "irpf", regimen: "navarra", destinoNavarra: "cultural", importe: 1_000, base: 10_000 }),
    );
    const deportivo = calcular(
      p({ perfil: "irpf", regimen: "navarra", destinoNavarra: "deportivo", importe: 1_000, base: 10_000 }),
    );
    expect(cultural.articulo).toContain("30.1");
    expect(deportivo.articulo).toContain("43.1");
  });
});

describe("mecenazgo deportivo navarro (arts. 39, 41.3 y 42 del DFL 2/2023)", () => {
  it("exige que la actividad este declarada de interes social", () => {
    const r = calcular(
      p({
        perfil: "is",
        regimen: "navarra",
        destinoNavarra: "deportivo",
        importe: 1_000,
        base: 10_000,
        interesSocial: false,
      }),
    );
    expect(r.avisos.some((a) => a.bloqueante && a.texto.includes("interés social"))).toBe(true);
  });

  it("advierte de que las competiciones federadas no pueden declararse de interes social", () => {
    const r = calcular(
      p({
        perfil: "is",
        regimen: "navarra",
        destinoNavarra: "deportivo",
        importe: 1_000,
        base: 10_000,
        interesSocial: false,
      }),
    );
    expect(r.avisos.some((a) => a.texto.includes("41.3"))).toBe(true);
  });

  it("sin el aviso de interes social el resultado es correcto", () => {
    const r = calcular(
      p({
        perfil: "is",
        regimen: "navarra",
        destinoNavarra: "deportivo",
        importe: 1_000,
        base: 10_000,
        interesSocial: true,
      }),
    );
    expect(r.avisos.some((a) => a.bloqueante)).toBe(false);
  });
});

describe("estimacion de la cuota integra en el IS (art. 20.1)", () => {
  it("el aviso de traslado habla de cuota integra estimada, no de la cuota real", () => {
    const r = calcular(
      p({ perfil: "is", importe: 5_000, base: 1_000, tipoImpositivo: 5 }),
    );
    const aviso = r.avisos.find((a) => a.texto.includes("traslada"));
    expect(aviso).toBeDefined();
    expect(aviso?.texto).toContain("estimada");
  });
});

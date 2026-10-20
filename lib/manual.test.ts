import { describe, expect, it } from "vitest";
import { manualOperativo } from "./manual";

/**
 * El manual operativo se genera desde `lib/legal.ts`. Estos tests comprueban
 * que sale completo y que conserva los errores verificados del material de la
 * Fundación, que es lo que un asistente debe contradecir cuando las bases los
 * contradicen.
 */
describe("manual operativo", () => {
  const manual = manualOperativo();

  it("tiene las cuatro secciones que un asistente necesita", () => {
    expect(manual).toContain("## Cómo usar este manual");
    expect(manual).toContain("## Reglas fiscales vigentes (2026)");
    expect(manual).toContain("## Calendario 2026");
    expect(manual).toContain("## Errores documentados en el material de la Fundación");
  });

  it("conserva los errores verificados con su cita literal", () => {
    expect(manual).toContain("Ley 9/2002");
    expect(manual).toContain("15.750");
    expect(manual).toContain("000 €");
  });

  it("lista los cuatro programas con su tope y su canon", () => {
    expect(manual).toContain("España Compite");
    expect(manual).toContain("Universo Mujer IV");
    expect(manual).toContain("Plan 2030 de Apoyo al Deporte Base II");
    expect(manual).toContain("Deporte Inclusivo III");
  });

  it("avisa de que las cifras dependen de la prorroga presupuestaria", () => {
    expect(manual).toContain("prorrogados");
  });
});

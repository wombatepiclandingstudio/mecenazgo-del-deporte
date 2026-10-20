import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { PDFDocument } from "pdf-lib";
import { initTakumi, renderDocumento } from "./render";
import { modeloInforme } from "./informe";
import { estadoInicial } from "../estado";

/**
 * El PDF se genera entero en el navegador, con el binario de Takumi. Aqui se
 * comprueba que el documento se compone y sale un PDF valido, sin depender de
 * un navegador.
 */

const WASM = resolve(
  process.cwd(),
  "node_modules/takumi-pdf/pkg/takumi_pdf_wasm_bg.wasm",
);

describe("informe de calculo en PDF", () => {
  it("genera un PDF con una pagina", async () => {
    const bytes = await readFile(WASM);
    await initTakumi(bytes);
    const estado = estadoInicial();
    const modelo = modeloInforme(estado);
    const pdf = await renderDocumento("informe-calculo", modelo, bytes);
    expect(new TextDecoder().decode(pdf.slice(0, 5))).toBe("%PDF-");
    const documento = await PDFDocument.load(pdf);
    expect(documento.getPageCount()).toBe(1);
  });

  it("el modelo recoge el importe, el tipo y la deduccion", () => {
    const estado = estadoInicial();
    estado.programa.id = "espana-compite";
    estado.aportante.importe = 35000;
    estado.aportante.base = 150000;
    const modelo = modeloInforme(estado);
    const clave = (k: string) =>
      modelo.lineas.find((l) => l.key === k)?.value ?? "";
    expect(clave("Importe de la aportacion")).toContain("35.000");
    expect(clave("Deduccion estimada")).toContain("13.500");
    expect(clave("Canon de gestion del programa")).toContain("962,50");
  });
});

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { manualOperativo } from "../lib/manual.ts";

/**
 * Escribe el manual operativo para asistentes de IA. Todas las cifras salen de
 * `lib/legal.ts`: el manual no puede desviarse del codigo.
 */

const destino = resolve(process.cwd(), "MANUAL-OPERATIVO.md");
writeFileSync(destino, manualOperativo(), "utf8");
console.log(`Manual escrito en ${destino}`);

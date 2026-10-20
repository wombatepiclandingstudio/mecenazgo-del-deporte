/**
 * Reglas de los programas de mecenazgo de la Fundacion Deporte Joven en 2026.
 *
 * Funcion pura, sin estado y sin dependencias, como `lib/mecenazgo.ts`. Todo lo
 * que se calcula aqui sale de `lib/legal.ts`: este fichero no contiene ninguna
 * cifra, solo la manera de combinarlas.
 *
 * Tres reglas que el calculo generico del mecenazgo no conoce: el tope anual
 * por aportante de España Compite, el canon de gestion que cada programa
 * descuenta de lo que llega al proyecto, y la via publicitaria del articulo
 * 27.3, que es alternativa y excluyente de la donacion.
 */

import {
  ESCALA_CANON_AEIP,
  FIGURAS,
  PROGRAMAS_2026,
  type Programa,
  type ProgramaId,
} from "./legal";
import { euros, type Aviso } from "./mecenazgo";

/** Via de la aportacion: donacion o deduccion por publicidad. */
export type Via = "donacion" | "publicidad";

export interface ResultadoCanon {
  /** Tipo de canon aplicado. */
  tipo: number;
  /** Canon de gestion en euros. */
  importe: number;
  /** Lo que llega al proyecto tras el canon. */
  neto: number;
  /** Descripcion del tipo aplicado, sin repetir la cifra. */
  tramo: string;
}

export interface ResultadoTope {
  /** Tope anual por aportante del programa. Null si el programa no lo tiene. */
  limite: number | null;
  /** Parte de la aportacion que entra en la base deducible. */
  base: number;
  /** Parte que no entra. */
  exceso: number;
}

export interface ResultadoPublicidad {
  /** Gasto en propaganda y publicidad. */
  gasto: number;
  /** Gasto admisible: todo si la publicidad es esencial, la cuarta parte si no. */
  base: number;
  /** Techo sobre las donaciones efectuadas al programa. */
  techo: number;
  /** Deduccion final. */
  deduccion: number;
  /** Que limite ha mordido. */
  limite: "techo" | "gasto" | "ninguno";
}

export interface ResultadoPrograma {
  programa: ProgramaId;
  via: Via;
  canon: ResultadoCanon;
  tope: ResultadoTope;
  publicidad: ResultadoPublicidad | null;
  avisos: Aviso[];
}

/** Meses del calendario de pagos del donante. */
export const MESES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
] as const;

/** Reparto posible de una aportacion en el calendario de pagos. */
export interface Reparto {
  /** Meses que siguen abiertos en el calendario de pagos. */
  meses: string[];
  /** Fracciones que caben como maximo: una por mes abierto. */
  fracciones: number;
  /** Fraccion minima que admite el formulario de donante. */
  fraccionMinima: number;
}

/** Programa por identificador. */
export function programa(id: ProgramaId): Programa {
  const encontrado = PROGRAMAS_2026.find((p) => p.id === id);
  if (!encontrado) throw new Error(`programa desconocido: ${id}`);
  return encontrado;
}

/** Formato de tipo con coma decimal, como en el material de la Fundacion. */
export function formatoTipo(tipo: number): string {
  return `${(tipo * 100).toFixed(2).replace(".", ",")} %`;
}

/**
 * Canon de gestion de un programa.
 *
 * España Compite tiene canon plano. Los programas AEIP tienen una escala
 * progresiva: se aplica el tipo del tramo en el que cae la aportacion a toda
 * la aportacion, que es lo que resulta del ejemplo de 20.000 euros del propio
 * material de la Fundacion. La lectura marginal sigue sin confirmar.
 */
export function canonDe(p: Programa, importe: number): ResultadoCanon {
  const total = Math.max(0, importe);
  if (p.canonPlano !== null) {
    const canon = total * p.canonPlano;
    return {
      tipo: p.canonPlano,
      importe: canon,
      neto: total - canon,
      tramo: `Canon plano de ${formatoTipo(p.canonPlano)}`,
    };
  }
  const tramos = ESCALA_CANON_AEIP;
  const tramo =
    tramos.find((t) => total <= t.hasta) ??
    tramos[tramos.length - 1];
  const canon = total * tramo.tipo;
  return {
    tipo: tramo.tipo,
    importe: canon,
    neto: total - canon,
    tramo: tramo.etiqueta,
  };
}

/**
 * Tope anual por aportante.
 *
 * Solo España Compite lo tiene, y recorta la aportacion antes de que se
 * aplique el tipo. Los programas AEIP no lo tienen.
 */
export function topeDe(p: Programa, importe: number): ResultadoTope {
  const total = Math.max(0, importe);
  if (p.topeAnual === null) {
    return { limite: null, base: total, exceso: 0 };
  }
  const base = Math.min(total, p.topeAnual);
  return { limite: p.topeAnual, base, exceso: total - base };
}

/**
 * Deduccion por propaganda y publicidad del articulo 27.3.
 *
 * Es una via alternativa y excluyente: si se aplica, la donacion no puede
 * acogerse a los demas incentivos de la ley.
 */
export function publicidadDe(args: {
  gasto: number;
  donacion: number;
  esencial: boolean;
}): ResultadoPublicidad {
  const gasto = Math.max(0, args.gasto);
  const base = args.esencial
    ? gasto
    : gasto * FIGURAS.basePublicidadNoEsencial;
  const techo = Math.max(0, args.donacion) * FIGURAS.techoDeduccionPublicidad;
  const bruto = base * FIGURAS.tipoDeduccionPublicidad;
  const deduccion = Math.min(bruto, techo);
  return {
    gasto,
    base,
    techo,
    deduccion,
    limite: bruto > techo ? "techo" : "gasto",
  };
}

/** Meses del calendario de pagos que siguen abiertos en la fecha dada. */
export function mesesAbiertos(hoy: string): string[] {
  const anio = hoy.slice(0, 4);
  const mes = Number(hoy.slice(5, 7));
  if (!Number.isFinite(mes) || mes < 1 || mes > 12) return [];
  if (anio !== "2026") return [];
  return MESES.slice(mes - 1);
}

/** Reparto posible de la aportacion segun la fecha de hoy. */
export function repartoDe(hoy: string): Reparto {
  const meses = mesesAbiertos(hoy);
  return {
    meses,
    fracciones: meses.length,
    fraccionMinima: FIGURAS.fraccionMinima,
  };
}

/** Dias que faltan desde hoy hasta una fecha ISO. Negativo si ya paso. */
export function diasHasta(hoy: string, fecha: string): number {
  const desde = Date.parse(`${hoy}T00:00:00Z`);
  const hasta = Date.parse(`${fecha}T00:00:00Z`);
  if (Number.isNaN(desde) || Number.isNaN(hasta)) return 0;
  return Math.round((hasta - desde) / 86400000);
}

/** Entrada del calculo de un programa. */
export interface EntradaPrograma {
  programa: ProgramaId;
  via: Via;
  /** Importe de la aportacion. */
  importe: number;
  /** Gasto en propaganda y publicidad, para la via publicitaria. */
  gastoPublicidad: number;
  /** Si la publicidad es esencial para la difusion del acontecimiento. */
  publicidadEsencial: boolean;
  /** Donacion ya realizada al programa, para el techo de la via publicitaria. */
  donacion: number;
  /** Fecha de hoy en formato ISO. */
  hoy: string;
}

/**
 * Resultado completo del programa: canon, tope y, si procede, la via
 * publicitaria. Los avisos son los que el componente muestra al usuario.
 */
export function resultadoPrograma(e: EntradaPrograma): ResultadoPrograma {
  const p = programa(e.programa);
  const canon = canonDe(p, e.importe);
  const tope = topeDe(p, e.importe);
  const avisos: Aviso[] = [];

  if (e.via === "publicidad") {
    if (!p.viaPublicitaria) {
      avisos.push({
        bloqueante: true,
        texto:
          "Este programa no admite la deduccion por publicidad: es una via alternativa y excluyente que solo existe para los acontecimientos de excepcional interes publico.",
        destacados: ["no admite"],
      });
    }
  }

  const publicidad =
    e.via === "publicidad"
      ? publicidadDe({
          gasto: e.gastoPublicidad,
          donacion: e.donacion,
          esencial: e.publicidadEsencial,
        })
      : null;

  if (tope.limite !== null && tope.exceso > 0) {
    avisos.push({
      bloqueante: false,
      texto:
        "El tope anual por aportante de este programa es de " +
        euros(tope.limite) +
        ". Lo que exceda (" +
        euros(tope.exceso) +
        ") no entra en la base deducible de este ejercicio.",
      destacados: [euros(tope.limite), euros(tope.exceso)],
    });
  }

  if (publicidad && publicidad.limite === "techo") {
    avisos.push({
      bloqueante: false,
      texto:
        "La deduccion por publicidad no puede exceder del " +
        formatoTipo(FIGURAS.techoDeduccionPublicidad) +
        " de las donaciones efectuadas al programa. Con una donacion de " +
        euros(e.donacion) +
        " el techo son " +
        euros(publicidad.techo) +
        ".",
      destacados: [euros(publicidad.techo)],
    });
  }

  if (publicidad && !e.publicidadEsencial) {
    avisos.push({
      bloqueante: false,
      texto:
        "Cuando el soporte publicitario no se refiere de modo esencial a la divulgacion del acontecimiento, la base de la deduccion es el " +
        formatoTipo(FIGURAS.basePublicidadNoEsencial) +
        " del gasto realizado.",
      destacados: [formatoTipo(FIGURAS.basePublicidadNoEsencial)],
    });
  }

  if (e.importe > 0 && e.importe < FIGURAS.aportacionMinimaEspanaCompite) {
    avisos.push({
      bloqueante: true,
      texto:
        "Este programa no acepta aportaciones de menos de " +
        euros(FIGURAS.aportacionMinimaEspanaCompite) +
        ". Es una regla del programa, no del regimen fiscal.",
      destacados: [euros(FIGURAS.aportacionMinimaEspanaCompite)],
    });
  }

  const reparto = repartoDe(e.hoy);
  if (reparto.meses.length === 0) {
    avisos.push({
      bloqueante: true,
      texto:
        "El calendario de pagos de 2026 esta cerrado: no queda ningun mes para repartir la aportacion.",
      destacados: ["cerrado"],
    });
  }

  if (p.regimen === "aeip") {
    avisos.push({
      bloqueante: false,
      texto:
        "El canon de los programas AEIP se aplica sobre toda la aportacion, con el tipo del tramo en el que cae. La Fundacion todavia no ha confirmado si el tipo es marginal.",
      destacados: ["marginal"],
    });
  }

  return {
    programa: e.programa,
    via: e.via,
    canon,
    tope,
    publicidad,
    avisos,
  };
}

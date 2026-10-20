/**
 * Logica fiscal del mecenazgo segun la Ley 49/2002, de 23 de diciembre.
 *
 * Funcion pura, sin estado y sin dependencias: toda la parte que se puede
 * equivocar (tipos, topes, arrastre) vive aqui y no dentro de los componentes.
 *
 * Articulos: 17 y 18 (naturaleza y base de la deduccion), 19 (IRPF),
 * 20 (Impuesto sobre Sociedades) y 22 (actividades prioritarias).
 */

export const LIMITE_SIMBOLICO_PORCENTAJE = 0.15;
export const LIMITE_SIMBOLICO_EUROS = 25000;
export const MICRO_MECENAZGO_IRPF = 250;
export const ANIOS_ARRASTRE = 10;
export const EJERCICIOS_REITERACION = 3;

export type Perfil = "is" | "irpf";

/** Regime aplicable. Navarra tiene normativa foral propia. */
export type Regimen = "estatal" | "navarra";

/** Destino de la aportacion dentro del regimen foral navarro. */
export type DestinoNavarra =
  "deportivo" | "cultural" | "social" | "investigacion";

/** Tramos de la deduccion en la cuota liquida del regime foral. */
export const NAVARRA_TRAMO_1 = 300;
export const NAVARRA_MICRO = 250;

export interface Parametros {
  perfil: Perfil;
  regimen: Regimen;
  /** Solo para Navarra: importe neto de la cifra de negocios. */
  cifraNegocios: number;
  /** Solo para Navarra: tipo de mecenazgo foral. */
  destinoNavarra: DestinoNavarra;
  /** Importe de la aportacion en euros. */
  importe: number;
  /** Base imponible (IS) o base liquidable (IRPF) del ejercicio. */
  base: number;
  /** Tipo impositivo aplicable, solo para el IS. */
  tipoImpositivo: number;
  /** Otras aportaciones con derecho a deduccion del mismo ejercicio (solo IRPF). */
  otrasAportaciones: number;
  /** La aportacion se destina a una actividad prioritaria de mecenazgo. */
  prioritaria: boolean;
  /** Donativos a la misma entidad en periodos anteriores, por importe igual o superior. */
  reiterada: boolean;
  /** La entidad ha emitido la certificacion exigida por el articulo 17. */
  certificado: boolean;
  /** La entidad entrega algo a cambio, de caracter simbolico. */
  entregaSimbolica: boolean;
  /** Valor de lo recibido a cambio, en euros. */
  valorSimbolico: number;
}

export interface Aviso {
  /** Texto plano: el formato se resuelve en el componente, nunca con HTML. */
  texto: string;
  /** Fragmentos que deben ir en negrita dentro del texto. */
  destacados: string[];
  bloqueante: boolean;
}

export interface Linea {
  concepto: string;
  detalle: string;
  importe: number;
}

export interface Resultado {
  tipo: number;
  /** Lineas que componen el ahorro, cuando el regimen las separa. */
  lineas: Linea[];
  tipoEtiqueta: string;
  topePorcentaje: number;
  limite: number;
  base: number;
  deduccion: number;
  pendiente: number;
  neto: number;
  descuento: number;
  avisos: Aviso[];
}

export function tipoAplicable(
  perfil: Perfil,
  prioritaria: boolean,
  reiterada: boolean,
): number {
  if (perfil === "is") {
    if (prioritaria) return reiterada ? 55 : 45;
    return reiterada ? 50 : 40;
  }
  if (prioritaria) return reiterada ? 50 : 45;
  return reiterada ? 45 : 40;
}

/** Porcentaje aplicable a los primeros euros en el IRPF (micromecenazgo). */
export function tipoMicromecenazgo(prioritaria: boolean): number {
  return prioritaria ? 85 : 80;
}

/** Tope de la base de deduccion sobre la base imponible o liquidable. */
export function topePorcentaje(perfil: Perfil, prioritaria: boolean): number {
  if (perfil === "is") return prioritaria ? 20 : 15;
  return prioritaria ? 15 : 10;
}

const noNegativo = (n: number): number =>
  Number.isFinite(n) && n >= 0 ? n : 0;

export function calcular(p: Parametros): Resultado {
  return p.regimen === "navarra" ? calcularNavarra(p) : calcularEstatal(p);
}

/** Limite de la partida deducible en la base imponible (regimen foral). */
export function limitePartidaDeducible(
  base: number,
  cifraNegocios: number,
): number {
  return Math.max(0.3 * noNegativo(base), 0.003 * noNegativo(cifraNegocios));
}

/**
 * Regimen foral de Navarra: Decreto Foral Legislativo 2/2023.
 *
 * No hay deduccion del 40-55% sobre la cuota integra como en el regimen
 * estatal. Para las empresas la aportacion es partida deducible en la base
 * imponible (con tope) y se anade una deduccion del 30% de la cuota liquida
 * sobre los primeros 300 euros, y del 20% en el resto.
 */
function calcularNavarra(p: Parametros): Resultado {
  const importe = noNegativo(p.importe);
  const base = noNegativo(p.base);
  const tipoImp = noNegativo(p.tipoImpositivo) || 25;
  const lineas: Linea[] = [];
  const avisos: Aviso[] = [];

  const enTramo1 = Math.min(importe, NAVARRA_TRAMO_1);
  const exceso = importe - enTramo1;

  if (p.perfil === "is") {
    if (p.destinoNavarra === "investigacion") {
      lineas.push({
        concepto: "Deduccion del 40% en la cuota integra",
        detalle:
          "Donaciones a entidades sin fines lucrativos con actividades similares a las de los organismos publicos de investigacion o a las de los centros tecnologicos.",
        importe: 0.4 * importe,
      });
    } else {
      const limite = limitePartidaDeducible(base, p.cifraNegocios);
      const partida = Math.min(importe, limite);
      lineas.push({
        concepto: "Partida deducible en la base imponible",
        detalle:
          "Tope: el mayor entre el 30% de la base imponible y el 3 por mil de la cifra de negocios, que son " +
          euros(limite) +
          ". Ahorro estimado al " +
          tipoImp +
          "%.",
        importe: partida * (tipoImp / 100),
      });
      lineas.push({
        concepto: "Deduccion del 30% / 20% en la cuota liquida",
        detalle:
          "30% de los primeros " +
          NAVARRA_TRAMO_1 +
          " euros y 20% de los siguientes.",
        importe: 0.3 * enTramo1 + 0.2 * exceso,
      });
      if (importe > limite) {
        avisos.push({
          bloqueante: false,
          texto:
            "El importe que se activa como partida deducible se corta en " +
            euros(limite) +
            ". Lo que exceda no genera esa deducción, aunque sí computa para la del 30% / 20% de la cuota líquida.",
          destacados: [euros(limite)],
        });
      }
    }
  } else {
    const micro = Math.min(importe, NAVARRA_MICRO);
    lineas.push({
      concepto: "Deduccion del 80% / 40% en la cuota",
      detalle:
        "80% de los primeros " +
        NAVARRA_MICRO +
        " euros y 40% de los siguientes.",
      importe: 0.8 * micro + 0.4 * (importe - micro),
    });
    if (p.destinoNavarra === "cultural") {
      lineas.push({
        concepto: "Deduccion adicional en la cuota liquida",
        detalle:
          "30% de los primeros " +
          NAVARRA_TRAMO_1 +
          " euros y 20% de los siguientes, exclusiva del mecenazgo cultural.",
        importe: 0.3 * enTramo1 + 0.2 * exceso,
      });
    }
  }

  const ahorroBruto = lineas.reduce((suma, l) => suma + l.importe, 0);
  // Las deducciones recaen sobre bases distintas (cuota integra y cuota
  // liquida), asi que sumarlas puede dar un ahorro superior a la aportacion.
  // El tope es el propio importe donado: no se puede ahorrar mas de lo que se
  // entrega. Se avisa para que la cifra se lea como estimacion.
  const ahorro = Math.min(ahorroBruto, importe);
  if (ahorroBruto > importe + 0.5) {
    avisos.push({
      bloqueante: false,
      texto:
        "La suma de las deducciones forales supera el importe aportado. Se ha limitado al propio donativo, porque no se puede ahorrar mas de lo que se entrega; el efecto real depende de la situacion del contribuyente.",
      destacados: ["limitado al propio donativo"],
    });
    lineas.push({
      concepto: "Efectivo acotado al importe donado",
      detalle:
        "Suma teorica de las deducciones: " +
        euros(ahorroBruto) +
        ". Se recorta a " +
        euros(importe) +
        ".",
      importe: 0,
    });
  }
  const neto = importe - ahorro;
  const descuento = importe > 0 ? (ahorro / importe) * 100 : 0;

  if (!p.certificado && importe > 0) {
    avisos.push({
      bloqueante: true,
      texto:
        "Sin la certificacion de la entidad no hay deduccion. En Navarra las entidades necesitan el reconocimiento previo del regimen ante el departamento competente.",
      destacados: ["certificacion"],
    });
  }
  if (
    p.entregaSimbolica &&
    p.valorSimbolico >
      Math.max(importe * LIMITE_SIMBOLICO_PORCENTAJE, LIMITE_SIMBOLICO_EUROS)
  ) {
    avisos.push({
      bloqueante: true,
      texto:
        "Lo recibido a cambio supera el limite simbolico (15% o 25.000 euros).",
      destacados: ["15% o 25.000 euros"],
    });
  }
  if (importe <= 0) {
    avisos.push({
      bloqueante: false,
      texto: "Introduce el importe de la aportacion para ver el resultado.",
      destacados: [],
    });
  }
  avisos.push({
    bloqueante: false,
    texto:
      "Cifra estimada del ahorro. En Navarra se acumulan deducciones sobre la cuota integra y sobre la cuota liquida, y su efecto conjunto depende de la situacion concreta del contribuyente: confirmalo con un asesor foral.",
    destacados: ["asesor foral"],
  });

  return {
    tipo: 0,
    tipoEtiqueta:
      p.perfil === "is" ? "Partida deducible + cuota" : "80% / 40% en cuota",
    lineas,
    topePorcentaje: 0,
    limite: limitePartidaDeducible(base, p.cifraNegocios),
    base: importe,
    deduccion: ahorro,
    pendiente: 0,
    neto,
    descuento,
    avisos,
  };
}

function calcularEstatal(p: Parametros): Resultado {
  const importe = noNegativo(p.importe);
  const base = noNegativo(p.base);
  const otras = p.perfil === "irpf" ? noNegativo(p.otrasAportaciones) : 0;
  const tipoImp = noNegativo(p.tipoImpositivo) || 25;
  const valorSimb = noNegativo(p.valorSimbolico);

  const tipo = tipoAplicable(p.perfil, p.prioritaria, p.reiterada);
  const tope = topePorcentaje(p.perfil, p.prioritaria);
  const limite = (tope / 100) * base;

  let baseDed = 0;
  let deduccion = 0;
  let pendiente = 0;
  let tipoEtiqueta = tipo + "%";

  if (p.perfil === "is") {
    baseDed = Math.min(importe, limite);
    deduccion = (tipo / 100) * baseDed;
    pendiente = importe - baseDed;
  } else {
    // El cubo de 250 euros es unico del contribuyente en todo el ejercicio:
    // lo consumen primero las demas aportaciones.
    const cuboRestante = Math.max(0, MICRO_MECENAZGO_IRPF - otras);
    const enCubo = Math.min(importe, cuboRestante);
    const resto = importe - enCubo;
    const total = importe + otras;
    const exceso = Math.max(0, total - limite);
    baseDed = total - exceso;
    pendiente = exceso;
    const bruta =
      (enCubo * tipoMicromecenazgo(p.prioritaria) + resto * tipo) / 100;
    deduccion = total > 0 ? (bruta * baseDed) / total : 0;
    if (enCubo > 0)
      tipoEtiqueta = tipoMicromecenazgo(p.prioritaria) + "% + " + tipo + "%";
  }

  // La deduccion se practica sobre la cuota integra: nunca puede excederla.
  const cuota = p.perfil === "is" ? (tipoImp / 100) * base : 0;
  const aplicada =
    p.perfil === "is" && cuota > 0 ? Math.min(deduccion, cuota) : deduccion;
  const traslado = deduccion - aplicada;

  const neto = importe - aplicada;
  const descuento = importe > 0 ? (aplicada / importe) * 100 : 0;

  const simboloExcede =
    p.entregaSimbolica &&
    (valorSimb > importe * LIMITE_SIMBOLICO_PORCENTAJE ||
      valorSimb > LIMITE_SIMBOLICO_EUROS);

  const avisos: Resultado["avisos"] = [];

  if (importe <= 0) {
    avisos.push({
      bloqueante: false,
      texto: "Introduce el importe de la aportacion para ver el resultado.",
      destacados: [],
    });
  } else {
    if (!p.certificado) {
      avisos.push({
        bloqueante: true,
        texto:
          "Sin la certificacion de la entidad no hay deduccion, por buena que sea la aportacion.",
        destacados: ["certificacion"],
      });
    }

    if (simboloExcede) {
      avisos.push({
        bloqueante: true,
        texto:
          "Lo recibido a cambio supera el limite simbolico (15% o 25.000 euros): deja de ser donativo y no se deduce.",
        destacados: ["15% o 25.000 euros"],
      });
    } else if (p.entregaSimbolica) {
      avisos.push({
        bloqueante: false,
        texto:
          "La entrega simbolica esta dentro del limite, asi que la deduccion se mantiene.",
        destacados: [],
      });
    }

    if (pendiente > 0.5) {
      avisos.push({
        bloqueante: false,
        texto: `Te pasas del limite del ${tope}% de la base. El exceso (${euros(pendiente)}) no se pierde: se aplica en los ${ANIOS_ARRASTRE} anos siguientes.`,
        destacados: [`${tope}%`, euros(pendiente), `${ANIOS_ARRASTRE} anos`],
      });
    }

    if (!p.reiterada) {
      avisos.push({
        bloqueante: false,
        texto:
          p.perfil === "is"
            ? `Con donativos repetidos durante ${EJERCICIOS_REITERACION} anos a la misma entidad subirias del ${
                p.prioritaria ? 45 : 40
              }% al ${p.prioritaria ? 55 : 50}%.`
            : `Sin donativos repetidos el resto se queda en el ${
                p.prioritaria ? 45 : 40
              }% en lugar del ${p.prioritaria ? 50 : 45}%.`,
        destacados: [
          `${p.prioritaria ? 45 : 40}%`,
          `${p.prioritaria ? 55 : 50}%`,
        ],
      });
    }

    if (!p.prioritaria) {
      avisos.push({
        bloqueante: false,
        texto:
          "Sin destino a actividad prioritaria te quedas en el tipo general. Esa relacion la fija la Ley de Presupuestos cada ano.",
        destacados: [],
      });
    }

    if (traslado > 0.5) {
      avisos.push({
        bloqueante: false,
        texto: `La deduccion calculada (${euros(deduccion)}) supera tu cuota integra del ejercicio (${euros(
          cuota,
        )}): ahora aplicas ${euros(aplicada)} y el resto se traslada.`,
        destacados: [euros(deduccion), euros(cuota), euros(aplicada)],
      });
    }
  }

  return {
    tipo,
    tipoEtiqueta,
    lineas: [],
    topePorcentaje: tope,
    limite,
    base: baseDed,
    deduccion: aplicada,
    pendiente,
    neto,
    descuento,
    avisos,
  };
}

export function euros(n: number, decimales = 0): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: decimales,
  }).format(n);
}

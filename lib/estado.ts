import { REQUISITOS, type ProgramaId } from "./legal";
import type { DestinoNavarra, Parametros, Perfil, Regimen } from "./mecenazgo";
import type { Via } from "./programas";

/** Clave de version: al cambiar la forma de los datos se incrementa. */
export const CLAVE_ALMACEN = "mecenazgo:datos:v3";

export interface DatosCertificado {
  entidad: string;
  nifEntidad: string;
  donante: string;
  nifDonante: string;
  importe: number;
  fecha: string;
  destino: string;
  cargo: string;
}

/** Datos del programa de mecenazgo al que va la aportacion. */
export interface DatosPrograma {
  /** Programa elegido. "" cuando la aportacion no va a un programa. */
  id: ProgramaId | "";
  /** Via de la aportacion: donacion o deduccion por publicidad. */
  via: Via;
  /** Gasto en propaganda y publicidad, para la via publicitaria. */
  gastoPublicidad: number;
  /** Si la publicidad es esencial para la difusion del acontecimiento. */
  publicidadEsencial: boolean;
}

/** Quien pide la ayuda y en que linea de actuacion. */
export interface DatosSolicitud {
  /** Entidad deportiva, deportista individual o promotor de un programa AEIP. */
  rol: "entidad" | "deportista" | "promotor";
  /** Linea de actuacion de España Compite. */
  linea:
    | "competiciones"
    | "preparacion"
    | "actividades"
    | "carrera-dual";
}

export interface EstadoApp {
  cumplimiento: Record<string, boolean>;
  aportante: Parametros;
  certificado: DatosCertificado;
  programa: DatosPrograma;
  solicitud: DatosSolicitud;
}

export const hoyISO = (): string => new Date().toISOString().slice(0, 10);

export const estadoInicial = (): EstadoApp => ({
  cumplimiento: Object.fromEntries(REQUISITOS.map((r) => [r.id, false])),
  aportante: {
    perfil: "is" as Perfil,
    regimen: "estatal" as Regimen,
    destinoNavarra: "cultural" as DestinoNavarra,
    importe: 20000,
    base: 500000,
    cifraNegocios: 1000000,
    tipoImpositivo: 25,
    otrasAportaciones: 0,
    prioritaria: false,
    reiterada: false,
    certificado: false,
    entregaSimbolica: false,
    valorSimbolico: 0,
    interesSocial: false,
  },
  certificado: {
    entidad: "",
    nifEntidad: "",
    donante: "",
    nifDonante: "",
    importe: 20000,
    // Se rellena en el navegador, nunca aqui: la pagina se prerenderiza en el
    // build y una fecha calculada en el servidor quedaria congelada al dia del
    // despliegue, ademas de romper la hidratacion.
    fecha: "",
    destino: "",
    cargo: "Representante",
  },
  programa: {
    id: "",
    via: "donacion",
    gastoPublicidad: 0,
    publicidadEsencial: true,
  },
  solicitud: {
    rol: "entidad",
    linea: "competiciones",
  },
});

/**
 * Rellena la fecha del certificado si falta. Se ejecuta siempre en el cliente:
 * en el servidor no hay fecha "de hoy" fiable y no debe existir en el HTML.
 */
export const conFecha = (e: EstadoApp): EstadoApp =>
  e.certificado.fecha
    ? e
    : { ...e, certificado: { ...e.certificado, fecha: hoyISO() } };

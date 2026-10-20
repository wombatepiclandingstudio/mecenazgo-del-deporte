import { REQUISITOS } from "./legal";
import type { DestinoNavarra, Parametros, Perfil, Regimen } from "./mecenazgo";

/** Clave de version: al cambiar la forma de los datos se incrementa. */
export const CLAVE_ALMACEN = "mecenazgo:datos:v2";

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

export interface EstadoApp {
  cumplimiento: Record<string, boolean>;
  aportante: Parametros;
  certificado: DatosCertificado;
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
});

/**
 * Rellena la fecha del certificado si falta. Se ejecuta siempre en el cliente:
 * en el servidor no hay fecha "de hoy" fiable y no debe existir en el HTML.
 */
export const conFecha = (e: EstadoApp): EstadoApp =>
  e.certificado.fecha
    ? e
    : { ...e, certificado: { ...e.certificado, fecha: hoyISO() } };

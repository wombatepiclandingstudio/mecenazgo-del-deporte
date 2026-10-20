import { euros } from "@/lib/mecenazgo";
import { programa as programaDe, resultadoPrograma } from "@/lib/programas";
import { calcular } from "@/lib/mecenazgo";
import type { EstadoApp } from "@/lib/estado";

/**
 * Modelo del informe de calculo. Es datos planos: el componente del PDF solo
 * los pinta. Al ser puro, se puede probar sin navegador.
 */

export interface LineaInforme {
  key: string;
  value: string;
}

export interface InformeCalculoModel {
  titulo: string;
  subtitulo: string;
  donante: string;
  programa: string;
  lineas: LineaInforme[];
  notas: string[];
  pie: string;
}

/** Construye el informe a partir del estado del simulador. */
export function modeloInforme(estado: EstadoApp): InformeCalculoModel {
  const p = estado.aportante;
  const r = calcular({
    ...p,
    prioritaria: p.prioritaria || !!estado.programa.id,
    topeAportacion: estado.programa.id
      ? (programaDe(estado.programa.id).topeAnual ?? undefined)
      : undefined,
  });

  const prog = estado.programa.id ? programaDe(estado.programa.id) : null;
  const rp = prog
    ? resultadoPrograma({
        programa: prog.id,
        via: estado.programa.via,
        importe: p.importe,
        gastoPublicidad: estado.programa.gastoPublicidad,
        publicidadEsencial: estado.programa.publicidadEsencial,
        donacion: p.importe,
        hoy: "",
      })
    : null;

  const lineas: LineaInforme[] = [
    { key: "Perfil del aportante", value: p.perfil === "is" ? "Empresa" : "Persona fisica" },
    { key: "Importe de la aportacion", value: euros(p.importe) },
    {
      key: p.perfil === "is" ? "Base imponible" : "Base liquidable",
      value: euros(p.base),
    },
    { key: "Tipo de deduccion", value: r.tipoEtiqueta },
    { key: "Base de la deduccion", value: euros(r.base, 2) },
    { key: "Deduccion estimada", value: euros(r.deduccion, 2) },
  ];

  if (rp) {
    lineas.push({
      key: "Canon de gestion del programa",
      value: euros(rp.canon.importe, 2),
    });
    lineas.push({
      key: "Neto al proyecto tras el canon",
      value: euros(rp.canon.neto, 2),
    });
  }

  if (r.pendiente > 0.5) {
    lineas.push({
      key: "Pendiente para los ejercicios siguientes",
      value: euros(r.pendiente),
    });
  }

  const notas = [...r.avisos, ...(rp ? rp.avisos : [])].map((a) => a.texto);

  return {
    titulo: "Informe de calculo de la aportacion",
    subtitulo: prog ? prog.nombre : "Mecenazgo general de la Ley 49/2002",
    donante: estado.certificado.donante || "Donante sin identificar",
    programa: prog ? prog.nombre : "Sin programa",
    lineas,
    notas,
    pie: "Documento de trabajo. No es una declaracion ni un certificado.",
  };
}

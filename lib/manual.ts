import {
  AVISO_PRESUPUESTO,
  CALENDARIO_2026,
  DEFECTOS_FDJ,
  ESCALA_CANON_AEIP,
  FIGURAS,
  FUENTES,
  NOTAS_PROGRAMAS,
  PREGUNTAS_FDJ,
  PRIORITARIAS,
  PRIORITARIAS_TITULO,
  PROGRAMAS_2026,
  REQUISITOS_SOLICITUD,
  VERIFICADO_EN,
} from "./legal.ts";

/**
 * Manual operativo para un asistente de IA que drive el papeleo de los
 * programas de mecenatismo de 2026.
 *
 * Se genera desde `lib/legal.ts`: ninguna cifra vive aqui. Si el manual y la
 * fuente discrepan, manda la fuente.
 */

const euros = (n: number) =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(
    n,
  );

/** Formato de tipo con coma decimal, como en el material de la Fundación. */
const formatoTipo = (tipo: number) =>
  `${(tipo * 100).toFixed(2).replace(".", ",")} %`;

/** Documentos que prepara cada persona, deducidos de los requisitos. */
const POR_PERSONA = [
  {
    titulo: "Mecenas",
    rol: "todos",
    orden: [
      "Formulario de donante del programa, con el calendario de pagos y el NIF o CIF.",
      "Justificante de la aportacion, o del valor de la aportacion en especie.",
      "Informe de calculo en PDF generado por la aplicacion, como respaldo del importe.",
      "Contrato de patrocinio y derecho de uso de marca, si los hay.",
    ],
  },
  {
    titulo: "Entidad deportiva",
    rol: "entidad",
    orden: [
      "Formulario de solicitante con el presupuesto desglosado.",
      "Licencia federativa o documento de vinculacion.",
      "Acuerdo con un centro educativo y listado de deportistas con licencia en vigor, en la linea de carrera dual.",
      "Memoria justificativa con la relacion de justificantes de gasto y pago.",
    ],
  },
  {
    titulo: "Deportista individual",
    rol: "deportista",
    orden: [
      "Licencia federativa en vigor.",
      "Acuerdo con el centro educativo, si opta a la linea de carrera dual.",
      "Certificados de estar al corriente con la Agencia Tributaria y con la Seguridad Social.",
      "Memoria justificativa del proyecto al cierre.",
    ],
  },
  {
    titulo: "Promotor de un programa AEIP",
    rol: "promotor",
    orden: [
      "Modelo de solicitud (Anexo 2) del programa, con el proyecto y el plan de difusion.",
      "Certificado de validacion del organo administrativo.",
      "Detalle del gasto en propaganda y publicidad, si se usa la via publicitaria.",
      "Solicitud de certificacion en los quince dias siguientes a la celebracion.",
    ],
  },
];

export function manualOperativo(): string {
  const lineas: string[] = [];

  lineas.push(
    "# Manual operativo de mecenazgo deportivo — España Compite 2026 y programas AEIP",
    "",
    `Generado desde \`lib/legal.ts\` (verificado el ${VERIFICADO_EN}). No se edita a mano:`,
    "se regenera con `npm run manual`.",
    "",
    "## Cómo usar este manual",
    "",
    "1. Identifica primero el perfil (mecenas, entidad deportiva, deportista o promotor AEIP)",
    "   y aplica solo los documentos de ese perfil.",
    "2. Las cifras de este manual salen de `lib/legal.ts`. No las recalcules de memoria ni las",
    "   sustituyas por las del material de la Fundación cuando se contradigan.",
    "3. Si un dato del expediente no está aquí, no lo inventes: dilo y señala qué habría que",
    "   confirmar con la Fundación.",
    "4. Redacta en español y cita el artículo o la norma cuando justifiques una cifra.",
    "5. Contacto: espanacompite@deportejoven.es",
    "",
    "## Reglas fiscales vigentes (2026)",
    "",
    "| Concepto | Valor | Base legal |",
    "| --- | --- | --- |",
    `| Donación de empresa (IS) | ${PRIORITARIAS[0].is} y ${PRIORITARIAS[2].is} con fidelidad | Ley 49/2002 art. 20.1 + DA 57ª Ley 31/2022 |`,
    `| Donación de autónomo (IRPF) | ${PRIORITARIAS[0].irpf} y ${PRIORITARIAS[2].irpf} con fidelidad | Ley 49/2002 art. 19.1 + DA 57ª |`,
    `| Límite de base deducible (IS) | ${PRIORITARIAS[3].is} de la base imponible | Ley 49/2002 art. 20.2 + DA 57ª |`,
    `| Límite de base deducible (IRPF) | ${PRIORITARIAS[3].irpf} de la base liquidable | Ley 49/2002 art. 19.2 |`,
    `| Límite anual por aportante | ${euros(FIGURAS.topeAnualEspanaCompite)} | DA 57ª Ley 31/2022, punto 5.º |`,
    `| Canon de gestión «España Compite» | ${formatoTipo(FIGURAS.canonEspanaCompite)} plano | Bases 2026, apartado II |`,
    `| Deducción por publicidad | ${formatoTipo(FIGURAS.tipoDeduccionPublicidad)} del gasto admisible | Ley 49/2002 art. 27.3 |`,
    `| Techo de la deducción publicitaria | ${formatoTipo(FIGURAS.techoDeduccionPublicidad)} de la donación | Ley 49/2002 art. 27.3 |`,
    `| Publicidad no esencial | base admisible del ${formatoTipo(FIGURAS.basePublicidadNoEsencial)} del gasto | Ley 49/2002 art. 27.3 |`,
    `| Arrastre de lo no aplicado | ${FIGURAS.aniosArrastre} ejercicios | Ley 49/2002 arts. 19.2 y 20 |`,
    "",
    `> ${AVISO_PRESUPUESTO.texto}`,
    "",
    `${PRIORITARIAS_TITULO.texto}`,
    "",
    "| Concepto | IRPF | IS |",
    "| --- | --- | --- |",
    ...PRIORITARIAS.map(
      (p) => `| ${p.concepto} | ${p.irpf} | ${p.is} |`,
    ),
    "",
    "## Los tres regímenes",
    "",
    "- **Actividad prioritaria de mecenazgo, vía donación.** Aplicable a España Compite y a los",
    "  programas AEIP. Es la vía general.",
    "- **Acontecimiento de excepcional interés público.** Los tres programas AEIP admiten además",
    "  la vía publicitaria y aplican un canon de gestión progresivo en lugar del plano.",
    "- **Vía publicitaria (art. 27.3).** Deducción sobre el gasto de propaganda y publicidad,",
    "  con techo sobre las donaciones. Si la publicidad no se refiere de modo esencial a la",
    "  divulgación del acontecimiento, la base es la cuarta parte del gasto. Las vías son",
    "  excluyentes: la misma donación no puede acogerse a dos incentivos a la vez.",
    "",
    "## Los programas de 2026",
    "",
    "| Programa | Régimen | Tope anual | Canon | Vía publicitaria |",
    "| --- | --- | --- | --- | --- |",
    ...PROGRAMAS_2026.map(
      (p) =>
        `| ${p.nombre} | ${p.regimen} | ${
          p.topeAnual === null ? "sin tope" : euros(p.topeAnual)
        } | ${
          p.canonPlano === null
            ? "escala progresiva"
            : `${formatoTipo(p.canonPlano)} plano`
        } | ${p.viaPublicitaria ? "sí" : "no"} |`,
    ),
    "",
    "## Canon de gestión de los programas AEIP",
    "",
    "| Tramo | Tipo |",
    "| --- | --- |",
    ...ESCALA_CANON_AEIP.map((t) => `| ${t.etiqueta} | ${formatoTipo(t.tipo)} |`),
    "",
    "El material de la Fundación usa dos lecturas de esta escala y divergen a partir de",
    `${euros(FIGURAS.topeAnualEspanaCompite)}. Se aplica el tipo del tramo sobre toda la`,
    "aportacion, que es lo que resulta del ejemplo del propio material. La duda sigue",
    "planteada a la Fundación.",
    "",
    "## Calendario 2026",
    "",
    "| Hito | Fecha o plazo |",
    "| --- | --- |",
    ...CALENDARIO_2026.map(
      (h) => `| ${h.hito} | ${h.fecha ? h.fecha.split("-").reverse().join("/") : (h.plazo ?? "")} |`,
    ),
    "",
    `El calendario de pagos del donante recorre el ejercicio 2026 y cada fracción no puede`,
    `ser inferior a ${euros(FIGURAS.fraccionMinima)}. Los pagos en efectivo de`,
    `${euros(FIGURAS.fraccionMinima)} o más están prohibidos.`,
    "",
    "## Documentación por persona",
    "",
  );

  for (const persona of POR_PERSONA) {
    lineas.push(`### ${persona.titulo}`, "");
    persona.orden.forEach((d, i) => lineas.push(`${i + 1}. ${d}`));
    lineas.push("");
  }

  lineas.push(
    "## Requisitos de acceso por rol",
    "",
    "| Rol | Requisito |",
    "| --- | --- |",
    ...REQUISITOS_SOLICITUD.map(
      (r) => `| ${r.rol} | ${r.texto} |`,
    ),
    "",
    "## Errores documentados en el material de la Fundación",
    "",
    "| Documento | Valor publicado | Valor correcto |",
    "| --- | --- | --- |",
    ...DEFECTOS_FDJ.map(
      (d) => `| ${d.documento} | ${d.publicado} | ${d.correcto} |`,
    ),
    "",
    "## Preguntas que hay que hacer a la Fundación",
    "",
    ...PREGUNTAS_FDJ.map((p, i) => `${i + 1}. ${p.pregunta}`),
    "",
    "## Notas",
    "",
    ...NOTAS_PROGRAMAS.map((n) => `- **${n.titulo}**: ${n.texto}`),
    "",
    "## Fuentes",
    "",
    ...Object.entries(FUENTES).map(
      ([id, f]) => `- ${id}: ${f.titulo} — ${f.url}`,
    ),
    "",
  );

  return lineas.join("\n");
}

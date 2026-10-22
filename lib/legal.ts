/**
 * Contenido legal de la aplicacion.
 *
 * Cada entrada lleva la fuente primaria de la que procede (identificador de
 * docs/fuentes.md) y la fecha del ultimo contraste. Si el texto de la
 * aplicacion y esta tabla discrepan, manda la fuente primaria: el detalle de
 * cada contraste esta en docs/verificacion-legal.md.
 */

export const VERIFICADO_EN = "2026-10-20";

/**
 * Fuentes primarias con su enlace, para citarlas en la interfaz. El
 * catalogo completo, con la fuente secundaria que lo acompaña, esta en
 * docs/fuentes.md.
 */
export const FUENTES: Record<string, { titulo: string; url: string }> = {
  F1: {
    titulo: "Ley 49/2002, texto consolidado (BOE)",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-25039",
  },
  F2: {
    titulo: "Ley 49/2002, texto consolidado en PDF (BOE)",
    url: "https://boe.es/buscar/pdf/2002/BOE-A-2002-25039-consolidado.pdf",
  },
  F5: {
    titulo: "Actividades prioritarias de mecenazgo (AEAT, Manual del IS 2025)",
    url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-sociedades-2025/capitulo-06-liquidacion-is-determinacion-tributaria/cuota-liquida-casilla-00592/deducc-donac-entid-sin-fines-2002/deduccion-donaciones-actividades-prioritarias-mecenazgo/actividades-prioritarias-mecenazgo.html",
  },
  F6: {
    titulo: "Real Decreto-ley 3/2026, de 3 de febrero (BOE)",
    url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2026-2548",
  },
  F11: {
    titulo: "Entidades acreedoras del mecenazgo (AEAT, Manual del IRPF 2025)",
    url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota/deducciones-donativos-otras-aportaciones/donativos-realizados-entidades-incluidas/general-donativos-donaciones-entidades-beneficiarias-mecenazgo/entidades-beneficiarias-mecenazgo.html",
  },
  F12: {
    titulo: "Entidades sin fines lucrativos, modelo 036 (AEAT)",
    url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/guia-practica-cumplimentacion-modelo-censal-036/capitulo-08-regimen-fiscal-especial.html",
  },
  F13: {
    titulo: "Contenido de la certificacion (AEAT, Manual del IRPF 2025)",
    url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-ayuda-presentacion/irpf-2025/9-cumplimentacion-irpf-anexos/9_4-deducciones-donativos-otras-aportaciones/9_4_1-donativos-realizados-entidades-ley-492002/9_4_1_2-aportaciones-entidades-beneficiarias-mecenazgo.html",
  },
  F17: {
    titulo: "DFL 2/2023, de 24 de mayo (BOE)",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-16401",
  },
  F18: {
    titulo: "DA 57a de la Ley 31/2022, actividades prioritarias (BOE)",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-22128",
  },
  F19: {
    titulo: "Ley 35/2006 del IRPF, art. 69.1 (BOE)",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764",
  },
  F20: {
    titulo: "Convenio Economico con Navarra, arts. 18 a 21 (BOE)",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-1990-31117",
  },
  F21: {
    titulo: "Ley 34/1988, General de Publicidad (BOE)",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-1988-16636",
  },
  F22: {
    titulo:
      "Real Decreto-ley 8/2025, de 8 de julio, acontecimientos de excepcional interes publico (BOE)",
    url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2025-14083",
  },
  F23: {
    titulo:
      "Real Decreto-ley 12/2026, de 26 de mayo, acontecimientos de excepcional interes publico (BOE)",
    url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2026-11397",
  },
  F24: {
    titulo:
      "Fundacion Deporte Joven, Bases 2026 del programa «España Compite: en la Empresa como en el Deporte»",
    url: "https://deportejoven.es/wp-content/uploads/2026/02/Bases-2026-Espa%C3%B1a-Compite.pdf",
  },
  F25: {
    titulo:
      "Fundacion Deporte Joven, Guia de consultas (FAQ) de los programas de mecenazgo deportivo",
    url: "https://deportejoven.es/programas-de-mecenazgo-deportivo-guia-de-consultas/",
  },
  F26: {
    titulo:
      "Consejo Superior de Deportes y Fundacion Deporte Joven, Fiscalidad de los programas AEIP (díptico)",
    url: "https://deportejoven.es/wp-content/uploads/2024/05/diptico_AEIP_21x21.pdf",
  },
  F30: {
    titulo:
      "Fundacion Deporte Joven, Formulario del solicitante de «España Compite» 2026",
    url: "https://deportejoven.es/wp-content/uploads/2026/02/Formulario-Solicitante-Espa%C3%B1a-Compite-2026-2.pdf",
  },
  F31: {
    titulo: "Fundacion Deporte Joven, Formulario del donante de «España Compite» 2026",
    url: "https://deportejoven.es/wp-content/uploads/2026/03/Formulario-Donante-Espa%C3%B1a-Compite-2026.pdf",
  },
  F32: {
    titulo: "Fundacion Deporte Joven, Fiscalidad APM 2025 («España Compite»)",
    url: "https://deportejoven.es/wp-content/uploads/2026/06/Fiscalidad-APM-2025.pdf",
  },
  F33: {
    titulo: "Fundacion Deporte Joven, Lineas de actuacion de ADB 2030 II (tríptico)",
    url: "https://deportejoven.es/wp-content/uploads/2026/06/ADB-2030-II-Tr%C3%ADptico.pdf",
  },
  F34: {
    titulo:
      "Fundacion Deporte Joven, Manual de identidad corporativa de Universo Mujer IV",
    url: "https://deportejoven.es/wp-content/uploads/2025/12/UNIVERSO-MUJER-IV-Manual-de-identidad-corporativa-1.pdf",
  },
  F35: {
    titulo:
      "Fundacion Deporte Joven, Anexo 2, modelo de solicitud de Universo Mujer IV",
    url: "https://deportejoven.es/wp-content/uploads/2025/12/Modelo-de-SOLICITUD-Programa-Universo-Mujer-IV-3-1.docx",
  },
  F36: {
    titulo:
      "Fundacion Deporte Joven, Anexo 2, modelo de solicitud de ADB 2030 II",
    url: "https://deportejoven.es/wp-content/uploads/2025/12/Modelo-de-SOLICITUD-Programa-ADB2030-II-2-1.docx",
  },
  F37: {
    titulo:
      "Fundacion Deporte Joven, Pagina del programa «España Compite» (modelos y avisos)",
    url: "https://deportejoven.es/linea-actuacion/espana-compite/",
  },
  F27: {
    titulo:
      "Ley 39/2022, de 30 de diciembre, del Deporte, disposicion adicional decimoctava (BOE)",
    url: "https://www.boe.es/eli/es/l/2022/12/30/39/con",
  },
  F28: {
    titulo:
      "Ley 7/2012, de 29 de octubre, limite a los pagos en efectivo, art. 7 (BOE)",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2012-13416",
  },
  F29: {
    titulo:
      "Ley 11/2021, de 9 de julio, que baja el limite de pagos en efectivo a 1.000 euros (BOE)",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2021-11473",
  },
};

/**
 * Anclas comprobadas dentro de la pagina de cada norma en el BOE. La clave es
 * la fuente y el articulo ("F1#16"); el valor, el id del elemento en el HTML.
 * El enlace va siempre a la norma: el articulo es un ancla dentro de ella.
 */
export const ANCLAS: Record<string, string> = {
  "F1#2": "#a2",
  "F1#3": "#a3",
  "F1#6": "#a6",
  "F1#15": "#a15",
  "F1#16": "#a16",
  "F1#17": "#a17",
  "F1#18": "#a18",
  "F1#19": "#a19",
  "F1#20": "#a20",
  "F1#21": "#a21",
  "F1#22": "#a22",
  "F1#24": "#a24",
  "F1#25": "#a25",
  "F1#26": "#a26",
  "F1#27": "#a27",
  "F1#DA5": "#daquinta",
  "F1#DA6": "#dasexta",
  "F1#DA7": "#daseptima",
  "F1#DA8": "#daoctava",
  "F1#DA9": "#danovena",
  "F1#DA10": "#dadecima",
  "F1#DA12": "#dadecimosegunda",
  "F1#DA18": "#dadecimoctava",
  "F1#DA19": "#dadecimonovena",
  "F17#15": "#a1-7",
  "F17#30": "#a3-2",
  "F17#31": "#a3-3",
  "F17#39": "#a3-11",
  "F17#41": "#a4-3",
  "F17#43": "#a4-5",
  "F17#44": "#a4-6",
  "F17#DA1": "#da-2",
  "F18#DA57": "#da-57",
  "F20#18": "#a1-21",
  "F27#DA18": "#da-18",
};

/**
 * Los campos de lenguaje claro y trazabilidad que puede llevar cualquier
 * entrada del contenido legal. Todos son opcionales: una entrada sin ellos
 * sigue siendo valida y la interfaz cae en su texto original.
 */
export interface TextoClaro {
  /**
   * Texto llano para la interfaz: la misma idea en palabras corrientes.
   * El texto legal se queda en `texto` o en `extracto`.
   */
  plano?: string;
  /** Cita literal de la norma. Se muestra en cursiva. */
  extracto?: string;
  /** Confianza en la reescritura del texto llano. */
  confianza?: Confianza;
  /** Fuentes adicionales, cuando el texto depende de mas de una. */
  fuentes?: string[];
  /** Ancla dentro de la pagina de la norma en el BOE, p. ej. "#a16". */
  ancla?: string;
}

export interface ConFuente extends TextoClaro {
  /** Identificador de la fuente en docs/fuentes.md. */
  fuente: string;
  /** Fecha del ultimo contraste con esa fuente. */
  verificadoEn: string;
}

/** De donde sale un contenido: la ley, la Fundacion o los dos. */
export type Origen = "ley" | "fdj" | "mixto";

/** Confianza en la reescritura de un texto llano. */
export type Confianza = "alta" | "media" | "baja";

/**
 * Una fuente es de la Fundacion cuando su documento esta en deportejoven.es.
 * Se decide por la URL y no por una lista de identificadores, para que una
 * fuente nueva no tenga que declararse en ningun sitio.
 */
const esFuenteFdj = (id: string): boolean =>
  FUENTES[id]?.url.includes("deportejoven.es") ?? false;

/** Origen de un conjunto de fuentes. */
export const origenDe = (ids: string[]): Origen => {
  const fdj = ids.some(esFuenteFdj);
  const ley = ids.some((id) => !esFuenteFdj(id));
  if (fdj && ley) return "mixto";
  return fdj ? "fdj" : "ley";
};

/** Origen de una entrada: usa `fuentes` si la hay y `fuente` si no. */
export const origen = (e: { fuente: string; fuentes?: string[] }): Origen =>
  origenDe(e.fuentes ?? [e.fuente]);

type ConFuenteOpcional = { fuente?: string };

/** Anade a cada entrada su fuente y la fecha del ultimo contraste. */
const legal = <T>(
  items: (T & TextoClaro)[],
  fuente: string,
): (T & ConFuente)[] =>
  items.map((i) => {
    const propia = (i as ConFuenteOpcional).fuente;
    return {
      ...i,
      fuente: propia ?? fuente,
      verificadoEn: VERIFICADO_EN,
    };
  });

/** Una entrada suelta, con su fuente y la fecha del ultimo contraste. */
const legalUno = <T>(
  item: T & TextoClaro,
  fuente: string,
): T & ConFuente => {
  const propia = (item as ConFuenteOpcional).fuente;
  return {
    ...item,
    fuente: propia ?? fuente,
    verificadoEn: VERIFICADO_EN,
  };
};

/* ------------------------------------------------------------------ */
/* Requisitos del regimen de las entidades sin fines lucrativos        */
/* ------------------------------------------------------------------ */

export interface Requisito {
  id: string;
  grupo: string;
  texto: string;
  ayuda?: string;
  /** Fuente propia del requisito, cuando no es la del grupo. */
  fuente?: string;
}

export const GRUPOS = [
  "Forma y regimen",
  "Requisitos del articulo 3",
  "Obligaciones de cada ano",
] as const;

export const REQUISITOS: (Requisito & ConFuente)[] = legal<Requisito>(
  [
    {
      id: "nif",
      grupo: "Forma y regimen",
      texto: "Tiene personalidad juridica y NIF",
      ayuda: "Sin NIF no hay certificacion posible",
      plano: "Tu entidad necesita NIF: sin él no hay ninguna certificación posible.",
      confianza: "alta",
    },
    {
      id: "opcion",
      grupo: "Forma y regimen",
      texto:
        "Ha ejercido la opcion al regimen fiscal especial y la ha comunicado a la Administracion",
      ayuda: "El regimen es voluntario y vinculante mientras no se renuncie",
      fuente: "F12",
      plano:
        "Tu entidad ha pedido entrar en el régimen especial y lo ha comunicado a la Administración.",
      confianza: "alta",
    },
    {
      id: "acreedora",
      grupo: "Forma y regimen",
      texto: "Esta incluida en el articulo 16 como entidad acreedora",
      ayuda:
        "Fundacion, asociacion de utilidad publica, universidad publica y los demas supuestos",
      plano:
        "Tu entidad está en la lista de entidades que pueden recibir mecenazgo (art. 16).",
      extracto:
        "Los incentivos fiscales previstos en este Título serán aplicables a los donativos, donaciones y aportaciones que, cumpliendo los requisitos establecidos en este Título, se hagan en favor de las siguientes entidades:",
      ancla: "#a16",
      confianza: "alta",
    },
    {
      id: "fines",
      grupo: "Requisitos del articulo 3",
      texto: "Persigue fines de interes general",
      plano: "Tu entidad persigue fines de interés general.",
      extracto:
        "Que persigan fines de interés general, como pueden ser, entre otros, los de defensa de los derechos humanos, de las víctimas del terrorismo y actos violentos, los de asistencia social e inclusión social, cívicos, educativos, culturales, científicos, deportivos, sanitarios, laborales, de fortalecimiento institucional, de cooperación para el desarrollo, de promoción del voluntariado, de promoción de la acción social, de defensa del medio ambiente, de defensa de los animales, de promoción y atención a las personas en riesgo de exclusión por razones físicas, económicas o culturales, de promoción de los valores constitucionales y defensa de los principios democráticos, de fomento de la tolerancia, de fomento de la economía social, de desarrollo de la sociedad de la información, de investigación científica, desarrollo o innovación tecnológica y de transferencia de la misma hacia el tejido productivo como elemento impulsor de la productividad y competitividad empresarial.",
      ancla: "#a3",
      confianza: "alta",
    },
    {
      id: "setenta",
      grupo: "Requisitos del articulo 3",
      texto: "Destina al menos el 70% de sus rentas e ingresos a esos fines",
      ayuda:
        "Puede hacerlo en los cuatro anos siguientes al cierre del ejercicio",
      plano: "Destina al menos el 70 % de sus rentas e ingresos a esos fines.",
      extracto:
        "Que destinen, directa o indirectamente, a la realización de dichos fines al menos el 70 por ciento de las siguientes rentas e ingresos",
      ancla: "#a3",
      confianza: "alta",
    },
    {
      id: "cuarenta",
      grupo: "Requisitos del articulo 3",
      texto:
        "Sus explotaciones no exentas ajenas al objeto no superan el 40% de los ingresos",
      ayuda:
        "Incluye ademas que no se vulneren las normas de defensa de la competencia",
      plano: "Lo que explota al margen de su objeto no pasa del 40 % de los ingresos.",
      extracto:
        "Se entenderá cumplido este requisito si el importe neto de la cifra de negocios del ejercicio correspondiente al conjunto de las explotaciones económicas no exentas ajenas a su objeto o finalidad estatutaria no excede del 40 % de los ingresos totales de la entidad, siempre que el desarrollo de estas explotaciones económicas no exentas no vulnere las normas reguladoras de defensa de la competencia en relación con empresas que realicen la misma actividad.",
      ancla: "#a3",
      confianza: "alta",
    },
    {
      id: "beneficiarios",
      grupo: "Requisitos del articulo 3",
      texto:
        "Fundadores, patronos y asociados no son destinatarios principales ni reciben condiciones especiales",
      plano:
        "Ni fundadores, ni patronos, ni asociados son los destinatarios principales ni reciben trato especial.",
      extracto:
        "Que los fundadores, asociados, patronos, representantes estatutarios, miembros de los órganos de gobierno y los cónyuges o parientes hasta el cuarto grado inclusive de cualquiera de ellos no sean los destinatarios principales de las actividades que se realicen por las entidades, ni se beneficien de condiciones especiales para utilizar sus servicios.",
      ancla: "#a3",
      confianza: "alta",
    },
    {
      id: "gratuitos",
      grupo: "Requisitos del articulo 3",
      texto:
        "Los organos de representacion, vigilancia y administracion son gratuitos",
      plano:
        "Los cargos de patrono, de representante y de miembro del órgano de gobierno no se pagan.",
      extracto:
        "Que los cargos de patrono, representante estatutario y miembro del órgano de gobierno sean gratuitos, sin perjuicio del derecho a ser reembolsados de los gastos debidamente justificados que el desempeño de su función les ocasione, sin que las cantidades percibidas por este concepto puedan exceder de los límites previstos en la normativa del Impuesto sobre la Renta de las Personas Físicas para ser consideradas dietas exceptuadas de gravamen.",
      ancla: "#a3",
      confianza: "alta",
    },
    {
      id: "disolucion",
      grupo: "Requisitos del articulo 3",
      texto:
        "Su patrimonio se destina a otra entidad sin fines lucrativos en caso de disolucion",
      plano:
        "Si tu entidad se disuelve, su patrimonio va a otra entidad sin fines lucrativos.",
      extracto:
        "Que, en caso de disolución, su patrimonio se destine en su totalidad a alguna de las entidades consideradas como entidades beneficiarias del mecenazgo a los efectos previstos en los artículos 16 a 25, ambos inclusive, de esta Ley, o a entidades públicas de naturaleza no fundacional que persigan fines de interés general, y esta circunstancia esté expresamente contemplada en el negocio fundacional o en los estatutos de la entidad disuelta, siendo aplicable a dichas entidades sin fines lucrativos lo dispuesto en la letra c) del apartado 1 del artículo 97 de la Ley 43/1995, de 27 de diciembre, del Impuesto sobre Sociedades.",
      ancla: "#a3",
      confianza: "alta",
    },
    {
      id: "registro",
      grupo: "Obligaciones de cada ano",
      texto: "Esta inscrita en el registro correspondiente",
      fuente: "F12",
      plano: "Tu entidad está inscrita en el registro que le corresponde.",
      extracto: "Que estén inscritas en el registro correspondiente.",
      fuentes: ["F12","F1"],
      confianza: "alta",
    },
    {
      id: "cuentas",
      grupo: "Obligaciones de cada ano",
      texto: "Cumple sus obligaciones contables y ha rendido cuentas",
      fuente: "F12",
      plano: "Tu entidad cumple sus obligaciones contables y ha rendido cuentas.",
      extracto:
        "Que cumplan las obligaciones contables previstas en las normas por las que se rigen o, en su defecto, en el Código de Comercio y disposiciones complementarias.",
      fuentes: ["F12","F1"],
      confianza: "alta",
    },
    {
      id: "memoria",
      grupo: "Obligaciones de cada ano",
      texto: "Ha elaborado la memoria economica anual",
      ayuda: "Ingresos y gastos por categorias y por proyectos",
      fuente: "F12",
      plano: "Tu entidad ha hecho la memoria económica del año.",
      extracto:
        "Que elaboren anualmente una memoria económica en la que se especifiquen los ingresos y gastos del ejercicio, de manera que puedan identificarse por categorías y por proyectos, así como el porcentaje de participación que mantengan en entidades mercantiles.",
      fuentes: ["F12","F1"],
      confianza: "alta",
    },
  ],
  "F1",
);

/* ------------------------------------------------------------------ */
/* Tipos y limites del regimen estatal                                  */
/* ------------------------------------------------------------------ */

export const ESCALA_IS = legal(
  [
    {
      titulo: "Aportacion general",
      detalle: "Primer ano o sin donativos repetidos",
      tipo: 40,
      plano: "Aportación normal, sin repetir: el tipo general de la ley.",
      extracto:
        "Los sujetos pasivos del Impuesto sobre Sociedades tendrán derecho a deducir de la cuota íntegra, minorada en las deducciones y bonificaciones previstas en los Capítulos II, III y IV del Título VI de la Ley 43/1995, de 27 de diciembre, del Impuesto sobre Sociedades, el 40 % de la base de la deducción determinada según lo dispuesto en el artículo 18.",
      ancla: "#a20",
      confianza: "alta",
    },
    {
      titulo: "Donativo reiterado",
      detalle: "Tres ejercicios a la misma entidad, importe igual o superior",
      tipo: 50,
      plano: "Repites tres años seguidos a la misma entidad: sube el tipo.",
      extracto:
        "Si en los dos períodos impositivos inmediatos anteriores se hubieran realizado donativos, donaciones o aportaciones con derecho a deducción en favor de una misma entidad, siendo el importe del donativo, donación o aportación de este período impositivo y el del período impositivo anterior, por importe igual o superior, en cada uno de ellos, al del período impositivo inmediato anterior, el porcentaje de deducción aplicable a la base de la deducción en favor de esa misma entidad será el 50 %.",
      ancla: "#a20",
      confianza: "alta",
    },
    {
      titulo: "Actividad prioritaria",
      detalle: "Destino a una actividad prioritaria de mecenazgo",
      tipo: 45,
      plano: "Tu aportación va a una actividad prioritaria: sube cinco puntos.",
      extracto:
        "En relación con dichas actividades y entidades, la Ley de Presupuestos Generales del Estado podrá elevar en cinco puntos porcentuales, como máximo, los porcentajes y límites de las deducciones establecidas en los artículos 19, 20 y 21 de esta Ley.",
      ancla: "#a22",
      confianza: "alta",
    },
    {
      titulo: "Prioritaria y reiterada",
      detalle: "El mejor caso realista",
      tipo: 55,
      plano: "Prioritaria y repetida: el tipo más alto.",
      extracto:
        "En relación con dichas actividades y entidades, la Ley de Presupuestos Generales del Estado podrá elevar en cinco puntos porcentuales, como máximo, los porcentajes y límites de las deducciones establecidas en los artículos 19, 20 y 21 de esta Ley.",
      ancla: "#a22",
      confianza: "alta",
    },
  ],
  "F1",
);

export const ESCALA_IRPF = legal(
  [
    {
      titulo: "Primeros 250 euros",
      detalle: "Micro-mecenazgo: un unico cubo por contribuyente y ano",
      tipo: 80,
      plano: "Los primeros 250 euros de tu aportación.",
      extracto:
        "Los contribuyentes del Impuesto sobre la Renta de las Personas Físicas tendrán derecho a deducir de la cuota íntegra el resultado de aplicar a la base de la deducción correspondiente al conjunto de donativos, donaciones y aportaciones con derecho a deducción, determinada según lo dispuesto en el artículo 18 de esta Ley, la siguiente escala:",
      ancla: "#a19",
      confianza: "alta",
    },
    { titulo: "Resto de la base", detalle: "Donativos no repetidos", tipo: 40,
      plano: "Todo lo que pasa de esos primeros euros.",
      confianza: "alta",
    },
    {
      titulo: "Resto con donativo reiterado",
      detalle: "Tres ejercicios a la misma entidad",
      tipo: 45,
      plano: "El resto, si repites con la misma entidad.",
      extracto:
        "Si en los dos períodos impositivos inmediatos anteriores se hubieran realizado donativos, donaciones o aportaciones con derecho a deducción en favor de una misma entidad, siendo el importe del donativo, donación o aportación de este ejercicio y el del período impositivo anterior, igual o superior, en cada uno de ellos, al del ejercicio inmediato anterior, el porcentaje de deducción aplicable a la base de la deducción en favor de esa misma entidad que exceda de 250 euros, será el 45 por ciento.",
      ancla: "#a19",
      confianza: "alta",
    },
  ],
  "F1",
);

export const PRIORITARIAS = legal(
  [
    { concepto: "Primer tramo o tipo general", irpf: "85%", is: "45%",
      plano: "El primer tramo de tu aportación.",
      extracto:
        "Dos. Los porcentajes y los límites de las deducciones establecidas en los artículos 19, 20 y 21 de la citada Ley 49/2002, de 23 de diciembre, se elevarán en cinco puntos porcentuales en relación con las actividades incluidas en el apartado anterior.",
      ancla: "#da-57",
      confianza: "alta",
    },
    { concepto: "Resto de la base de deduccion", irpf: "45%", is: "45%",
      plano: "El resto de lo que has aportado.",
      extracto:
        "Dos. Los porcentajes y los límites de las deducciones establecidas en los artículos 19, 20 y 21 de la citada Ley 49/2002, de 23 de diciembre, se elevarán en cinco puntos porcentuales en relación con las actividades incluidas en el apartado anterior.",
      ancla: "#da-57",
      confianza: "alta",
    },
    { concepto: "Tipo incrementado por reiteracion", irpf: "50%", is: "55%",
      plano: "El tipo por repetir la aportación varios años.",
      extracto:
        "Dos. Los porcentajes y los límites de las deducciones establecidas en los artículos 19, 20 y 21 de la citada Ley 49/2002, de 23 de diciembre, se elevarán en cinco puntos porcentuales en relación con las actividades incluidas en el apartado anterior.",
      ancla: "#da-57",
      confianza: "alta",
    },
    { concepto: "Limite de la base de deduccion", irpf: "15%", is: "20%",
      plano: "El tope de lo que puedes deducir.",
      extracto:
        "Dos. Los porcentajes y los límites de las deducciones establecidas en los artículos 19, 20 y 21 de la citada Ley 49/2002, de 23 de diciembre, se elevarán en cinco puntos porcentuales en relación con las actividades incluidas en el apartado anterior.",
      ancla: "#da-57",
      confianza: "alta",
    },
  ],
  "F18",
);

/**
 * Regimen foral de Navarra (DFL 2/2023). No guarda paralelismo con la escala
 * estatal: aqui no hay un porcentaje sobre la cuota integra de 40-55%, sino una
 * partida deducible en la base mas una deduccion sobre la cuota liquida, y el
 * reparto entre cultural y el resto cambia el tipo de deduccion.
 */
export const ESCALA_NAVARRA = legal(
  [
    {
      titulo: "Partida deducible en la base imponible",
      detalle:
        "Tope: el mayor entre el 30% de la base imponible y el 3 por mil del importe neto de la cifra de negocios",
      tipo: 0,
      plano: "La aportación se te resta de la base imponible.",
      extracto:
        "Para la determinación de la base imponible, el importe en que se valoren las modalidades de cada tipo de mecenazgo tendrá la consideración de partida deducible.",
      ancla: "#a4-6",
      confianza: "alta",
    },
    {
      titulo: "Cuota liquida, mecenazgo cultural",
      detalle:
        "Solo empresas. 30% de los primeros 300 euros y 20% de los siguientes (art. 31.1.b)",
      tipo: 30,
      plano:
        "Además, sobre la cuota: un 30 % de los primeros 300 euros y un 20 % del resto.",
      extracto:
        "Además, tendrán derecho a practicar una deducción de la cuota líquida del impuesto del 30 por ciento de los primeros 300 euros en que se valoren las modalidades de mecenazgo cultural a que se refiere el artículo 24. Los importes superiores a 300 euros tendrán derecho a una deducción de la cuota líquida del 20 por ciento.",
      ancla: "#a3-3",
      confianza: "alta",
    },
    {
      titulo: "Cuota liquida, mecenazgo social, medioambiental y deportivo",
      detalle: "Solo empresas. 20% en plano del importe (art. 44.1.b)",
      tipo: 20,
      plano:
        "Además, sobre la cuota: un 20 % para el mecenazgo social, medioambiental y deportivo.",
      extracto:
        "Además, tendrán derecho a practicar una deducción de la cuota líquida del impuesto del 20 por ciento del importe en que se valoren las modalidades de cada tipo de mecenazgo.",
      ancla: "#a4-6",
      confianza: "alta",
    },
    {
      titulo: "Cuota, primeros 250 euros",
      detalle: "Personas fisicas. Micro-mecenazgo (arts. 30.1 y 43.1)",
      tipo: 80,
      plano: "Persona física: el 80 % de los primeros 250 euros.",
      extracto:
        "Los contribuyentes del Impuesto sobre la Renta de las Personas Físicas tendrán derecho a deducir de la cuota del impuesto el 80 por ciento de los primeros 250 euros en que se valoren las modalidades de cada tipo de mecenazgo.",
      ancla: "#a4-5",
      confianza: "alta",
    },
    {
      titulo: "Cuota, exceso",
      detalle: "Personas fisicas. Resto de la aportacion",
      tipo: 40,
      plano: "Persona física: el 40 % de lo que pasa de esos euros.",
      extracto:
        "Los importes superiores a 250 euros tendrán derecho a una deducción del 40 por ciento.",
      ancla: "#a4-5",
      confianza: "alta",
    },
  ],
  "F17",
);

/* ------------------------------------------------------------------ */
/* Articulos                                                            */
/* ------------------------------------------------------------------ */

export const ARTICULOS = legal(
  [
    { art: "Art. 2", que: "Quien es entidad sin fines lucrativos",
      plano: "Quién puede entrar en el régimen especial de entidades sin fines lucrativos.",
      extracto:
        "Se consideran entidades sin fines lucrativos a efectos de esta ley, siempre que cumplan los requisitos establecidos en el artículo siguiente:",
      ancla: "#a2",
      confianza: "alta",
    },
    { art: "Art. 3", que: "Requisitos para acogerse al regimen",
      plano: "Las nueve condiciones que hay que cumplir para entrar en ese régimen.",
      extracto:
        "Las entidades a que se refiere el artículo anterior, que cumplan los siguientes requisitos, serán consideradas, a efectos de esta Ley, como entidades sin fines lucrativos:",
      ancla: "#a3",
      confianza: "alta",
    },
    { art: "Art. 6", que: "Rentas exentas en el Impuesto sobre Sociedades",
      plano: "Qué ingresos de tu entidad no pagan Impuesto sobre Sociedades.",
      extracto:
        "Están exentas del Impuesto sobre Sociedades las siguientes rentas obtenidas por entidades sin fines lucrativos:",
      ancla: "#a6",
      confianza: "alta",
    },
    { art: "Art. 15", que: "Tributos locales",
      plano:
        "Qué impuestos locales no pagas: el de bienes inmuebles, el de actividades económicas y el delincremento del valor de los terrenos.",
      extracto:
        "Estarán exentos del Impuesto sobre Bienes Inmuebles los bienes de los que sean titulares, en los términos previstos en la normativa reguladora de las Haciendas Locales, las entidades sin fines lucrativos, excepto los afectos a explotaciones económicas no exentas del Impuesto sobre Sociedades.",
      ancla: "#a15",
      confianza: "alta",
    },
    { art: "Art. 16", que: "Entidades acreedoras del mecenazgo",
      plano: "La lista de entidades que pueden recibir tu aportación.",
      extracto:
        "Los incentivos fiscales previstos en este Título serán aplicables a los donativos, donaciones y aportaciones que, cumpliendo los requisitos establecidos en este Título, se hagan en favor de las siguientes entidades:",
      ancla: "#a16",
      confianza: "alta",
    },
    {
      art: "Art. 17",
      que: "Donativos, donaciones y aportaciones deducibles, y limite simbolico",
      plano: "Qué aportaciones cuentan y hasta cuánto puedes recibir a cambio.",
      extracto:
        "Darán derecho a practicar las deducciones previstas en este Título los siguientes donativos, donaciones y aportaciones irrevocables, puros y simples, realizados en favor de las entidades a las que se refiere el artículo anterior:",
      ancla: "#a17",
      confianza: "alta",
    },
    { art: "Art. 18", que: "Base de la deduccion",
      plano: "Sobre qué cantidad se calcula la deducción, según lo que donas.",
      extracto:
        "La base de las deducciones por donativos, donaciones y aportaciones realizados en favor de las entidades a las que se refiere el artículo 16 será:",
      ancla: "#a18",
      confianza: "alta",
    },
    { art: "Art. 19", que: "Deduccion en el IRPF",
      plano: "Lo que te devuelve Hacienda por donar, en el IRPF.",
      extracto:
        "Los contribuyentes del Impuesto sobre la Renta de las Personas Físicas tendrán derecho a deducir de la cuota íntegra el resultado de aplicar a la base de la deducción correspondiente al conjunto de donativos, donaciones y aportaciones con derecho a deducción, determinada según lo dispuesto en el artículo 18 de esta Ley, la siguiente escala:",
      ancla: "#a19",
      confianza: "alta",
    },
    { art: "Art. 20", que: "Deduccion en el Impuesto sobre Sociedades",
      plano: "Lo que te devuelve Hacienda por donar, en el Impuesto sobre Sociedades.",
      extracto:
        "Los sujetos pasivos del Impuesto sobre Sociedades tendrán derecho a deducir de la cuota íntegra, minorada en las deducciones y bonificaciones previstas en los Capítulos II, III y IV del Título VI de la Ley 43/1995, de 27 de diciembre, del Impuesto sobre Sociedades, el 40 % de la base de la deducción determinada según lo dispuesto en el artículo 18.",
      ancla: "#a20",
      confianza: "alta",
    },
    {
      art: "Art. 21",
      que: "Deduccion en el IRNR, con y sin establecimiento permanente",
      plano: "Lo mismo, para quien no reside en España pero opera aquí.",
      extracto:
        "Los contribuyentes del Impuesto sobre la Renta de no Residentes que operen en territorio español sin establecimiento permanente podrán aplicar la deducción establecida en el apartado 1 del artículo 19 de esta Ley en las declaraciones que por dicho impuesto presenten por hechos imponibles acaecidos en el plazo de un año desde la fecha del donativo, donación o aportación.",
      ancla: "#a21",
      confianza: "alta",
    },
    { art: "Art. 22", que: "Actividades prioritarias de mecenazgo",
      plano: "Qué es una actividad prioritaria y cuánto sube la deducción.",
      extracto:
        "En relación con dichas actividades y entidades, la Ley de Presupuestos Generales del Estado podrá elevar en cinco puntos porcentuales, como máximo, los porcentajes y límites de las deducciones establecidas en los artículos 19, 20 y 21 de esta Ley.",
      ancla: "#a22",
      confianza: "alta",
    },
    {
      art: "Art. 24",
      que: "Justificacion de los donativos: contenido de la certificacion",
      plano: "El papel que te da la entidad para justificar la deducción.",
      extracto:
        "La certificación a la que se hace referencia en los apartados anteriores deberá contener, al menos, los siguientes extremos:",
      ancla: "#a24",
      confianza: "alta",
    },
    { art: "Arts. 25-27", que: "Convenios, gastos y acontecimientos",
      plano: "Las otras tres formas de colaborar. No se pueden sumar con las anteriores.",
      extracto:
        "El régimen fiscal aplicable a las ayudas económicas en cumplimiento de estos convenios de colaboración será incompatible con los demás incentivos fiscales previstos en esta Ley.",
      ancla: "#a25",
      confianza: "media",
    },
    {
      art: "DA 12.ª",
      que: "Federaciones deportivas, Comite Olimpico y Comite Paralimpico",
      plano:
        "Las reglas que la ley da a las federaciones y a los comités olímpico y paralímpico.",
      extracto:
        "Disposición adicional decimosegunda. Federaciones deportivas, Comité Olímpico Español y Comité Paralímpico Español.",
      ancla: "#dadecimosegunda",
      confianza: "alta",
    },
  ],
  "F1",
);

export const NAVARRA_ARTICULOS = legal(
  [
    {
      art: "Arts. 30.1 y 43.1",
      que: "Personas fisicas: 80% de los primeros 250 euros y 40% del resto",
      plano: "Personas físicas: el 80 % de los primeros 250 euros y el 40 % del resto.",
      extracto:
        "Los contribuyentes del Impuesto sobre la Renta de las Personas Físicas tendrán derecho a deducir de la cuota del impuesto el 80 por ciento de los primeros 250 euros en que se valoren las modalidades de mecenazgo cultural a que se refiere el artículo 24. Los importes superiores a 250 euros tendrán derecho a una deducción del 40 por ciento.",
      ancla: "#a3-2",
      confianza: "alta",
    },
    {
      art: "Art. 31.1",
      que: "Empresas, mecenazgo cultural: partida deducible y 30%/20% sobre la cuota liquida",
      plano:
        "Empresas, mecenazgo cultural: parte deducible en la base y un 30 % de los primeros 300 euros sobre la cuota líquida.",
      extracto:
        "Además, tendrán derecho a practicar una deducción de la cuota líquida del impuesto del 30 por ciento de los primeros 300 euros en que se valoren las modalidades de mecenazgo cultural a que se refiere el artículo 24. Los importes superiores a 300 euros tendrán derecho a una deducción de la cuota líquida del 20 por ciento.",
      ancla: "#a3-3",
      confianza: "alta",
    },
    {
      art: "Art. 44.1",
      que: "Empresas, mecenazgo social, medioambiental y deportivo: partida deducible y 20% sobre la cuota liquida",
      plano:
        "Empresas, mecenazgo social, medioambiental y deportivo: parte deducible en la base y un 20 % sobre la cuota líquida.",
      extracto:
        "Además, tendrán derecho a practicar una deducción de la cuota líquida del impuesto del 20 por ciento del importe en que se valoren las modalidades de cada tipo de mecenazgo.",
      ancla: "#a4-6",
      confianza: "alta",
    },
    {
      art: "Arts. 39 a 42",
      que: "Mecenazgo deportivo: concepto, beneficiarios, interes social y solicitud",
      plano: "Qué es el mecenazgo deportivo en Navarra y cómo se hace.",
      extracto:
        "Se entiende por mecenazgo deportivo la participación privada en la financiación de actividades deportivas de duración determinada que sean declaradas de interés social por la Administración Deportiva de la Comunidad Foral de Navarra.",
      ancla: "#a3-11",
      confianza: "alta",
    },
    {
      art: "Art. 41.3",
      que: "Las competiciones federadas nunca pueden declararse de interes social",
      plano: "Las competiciones federadas nunca pueden declararse de interés social.",
      extracto:
        "En ningún caso podrán ser declaradas de interés social, a los efectos del mecenazgo deportivo, las actividades deportivas consistentes en la participación en competiciones federadas.",
      ancla: "#a4-3",
      confianza: "alta",
    },
    {
      art: "Arts. 15 a 23",
      que: "Regimen distinto de donaciones a entidades en el regimen foral, no cubierto por el simulador",
      plano:
        "Las donaciones a entidades en el régimen foral: otro régimen, y el simulador no lo cubre.",
      extracto:
        "Disposición adicional primera. Aplicación a otras entidades del régimen tributario especial regulado en el título I.",
      ancla: "#da-2",
      confianza: "media",
    },
  ],
  "F17",
);

/* ------------------------------------------------------------------ */
/* Entidades acreedoras                                                  */
/* ------------------------------------------------------------------ */

/**
 * Entidades acreedoras del mecenazgo. Lista tomada de la relacion operativa
 * de la Agencia Tributaria, que recoge el articulo 16 y las disposiciones
 * adicionales que anaden supuestos. `deporte` marca las entidades que estan
 * directamente vinculadas al ambito deportivo.
 */
export interface Acreedora {
  texto: string;
  deporte?: boolean;
  /** Fuente propia, cuando no es la del grupo. */
  fuente?: string;
}

export const ACREEDORAS: (Acreedora & ConFuente)[] = legal<Acreedora>(
  [
    { texto: "Fundaciones y asociaciones declaradas de utilidad publica",
      plano: "Fundaciones y asociaciones declaradas de utilidad pública.",
      extracto:
        "a) Las entidades sin fines lucrativos a las que sea de aplicación el régimen fiscal establecido en el Título II de esta Ley.",
      ancla: "#a16",
      confianza: "alta",
    },
    {
      texto:
        "Organizaciones no gubernamentales de desarrollo de la Ley 23/1998",
      plano:
        "Organizaciones no gubernamentales de desarrollo (Cooperación Internacional para el Desarrollo).",
      extracto:
        "c) Las organizaciones no gubernamentales de desarrollo a que se refiere la Ley 23/1998, de 7 de julio, de Cooperación Internacional para el Desarrollo, siempre que tengan alguna de las formas jurídicas a que se refieren los párrafos anteriores.",
      ancla: "#a2",
      confianza: "alta",
    },
    {
      texto:
        "Federaciones deportivas espanolas y territoriales, el Comite Olimpico Espanol y el Comite Paralimpico Espanol",
      deporte: true,
      plano:
        "Federaciones deportivas españolas y territoriales, Comité Olímpico y Comité Paralímpico.",
      extracto:
        "d) Las federaciones deportivas españolas, las federaciones deportivas territoriales de ámbito autonómico integradas en aquellas, el Comité Olímpico Español y el Comité Paralímpico Español.",
      ancla: "#a2",
      confianza: "alta",
    },
    { texto: "Sus federaciones y asociaciones", deporte: true,
      plano: "Las federaciones y asociaciones de esas entidades.",
      extracto:
        "e) Las federaciones y asociaciones de las entidades sin fines lucrativos a que se refieren las letras anteriores.",
      ancla: "#a2",
      confianza: "alta",
    },
    { texto: "Entidades no residentes con establecimiento permanente anologas",
      plano: "Entidades de fuera de España con un establecimiento permanente aquí.",
      extracto:
        "f) Las entidades no residentes en territorio español que operen en el mismo con establecimiento permanente y sean análogas a algunas de las previstas en las letras anteriores.",
      ancla: "#a2",
      confianza: "alta",
    },
    {
      texto:
        "Entidades residentes en la UE o el EEE con normativa de asistencia mutua",
      plano: "Entidades de la UE o del EEE sin establecimiento permanente aquí.",
      extracto:
        "g) Las entidades residentes en un Estado miembro de la Unión Europea o de otros Estados integrantes del Espacio Económico Europeo con los que exista normativa sobre asistencia mutua en materia de intercambio de información tributaria en los términos previstos en la Ley 58/2003, de 17 de diciembre, General Tributaria, que sea de aplicación, sin establecimiento permanente en territorio español, que sean análogas a alguna de las previstas en las letras anteriores.",
      ancla: "#a2",
      confianza: "media",
    },
    { texto: "El Estado, las comunidades autonomas y las entidades locales",
      plano: "El Estado, las comunidades autónomas y las entidades locales.",
      extracto:
        "b) El Estado, las Comunidades Autónomas y las Entidades Locales, así como los Organismos autónomos del Estado y las entidades autónomas de carácter análogo de las Comunidades Autónomas y de las Entidades Locales.",
      ancla: "#a16",
      confianza: "alta",
    },
    { texto: "Universidades publicas y los colegios mayores adscritos",
      plano: "Universidades públicas y los colegios mayores adscritos.",
      extracto:
        "c) Las universidades públicas y los colegios mayores adscritos a las mismas.",
      ancla: "#a16",
      confianza: "alta",
    },
    { texto: "Instituto Cervantes",
      plano: "El Instituto Cervantes.",
      extracto:
        "d) El Instituto Cervantes, el Institut Ramon Llull y las demás instituciones con fines análogos de las Comunidades Autónomas con lengua oficial propia.",
      ancla: "#a16",
      confianza: "alta",
    },
    { texto: "Institut Ramon Llull e instituciones analogas",
      plano: "El Institut Ramon Llull y las instituciones con lengua oficial propia.",
      extracto:
        "d) El Instituto Cervantes, el Institut Ramon Llull y las demás instituciones con fines análogos de las Comunidades Autónomas con lengua oficial propia.",
      ancla: "#a16",
      confianza: "alta",
    },
    { texto: "Organismos Publicos de Investigacion de la AGE",
      plano: "Los Organismos Públicos de Investigación del Estado.",
      extracto:
        "e) Los Organismos Públicos de Investigación dependientes de la Administración General del Estado.",
      ancla: "#a16",
      confianza: "alta",
    },
    { texto: "Cruz Roja Espanola y Organizacion Nacional de Ciegos Espanoles",
      plano: "Cruz Roja Española y Organización Nacional de Ciegos Españoles.",
      extracto:
        "Estas entidades serán consideradas como entidades beneficiarias del mecenazgo a los efectos previstos en los artículos 16 a 25, ambos inclusive, de esta Ley.",
      ancla: "#daquinta",
      confianza: "alta",
    },
    { texto: "Obra Pia de los Santos Lugares",
      plano: "La Obra Pía de los Santos Lugares.",
      extracto:
        "La Obra Pía será considerada como entidad beneficiaria del mecenazgo a los efectos previstos en los artículos 16 a 25, ambos inclusive, de esta Ley.",
      ancla: "#dasexta",
      confianza: "alta",
    },
    {
      texto:
        "Consorcios Casa de America, Casa de Asia y Museu Nacional d Art de Catalunya",
      plano:
        "Consorcios Casa de América, Casa de Asia, Institut Européen de la Casa de la Mediterrània y Museo Nacional de Arte de Cataluña.",
      extracto:
        "Los consorcios Casa de América, Casa de Asia, \"Institut Europeu de la Casa de la Mediterrània\" y el Museo Nacional de Arte de Cataluña serán considerados entidades beneficiarias del mecenazgo a los efectos previstos en los artículos 16 a 25, ambos inclusive, de esta ley.",
      ancla: "#daseptima",
      confianza: "alta",
    },
    {
      texto:
        "Fundaciones propias de entidades religiosas inscritas en su registro",
      plano: "Fundaciones de entidades religiosas inscritas en su registro.",
      extracto:
        "para las fundaciones propias de estas entidades, que podrán optar por el régimen fiscal establecido en los artículos 5 a 25 de esta Ley, siempre que en este último caso presenten la certificación de su inscripción en el Registro de Entidades Religiosas, y cumplan el requisito establecido en el número 5.º del artículo 3 de esta Ley.",
      ancla: "#daoctava",
      confianza: "alta",
    },
    {
      texto:
        "Entidades de la Iglesia Catolica y confesiones con acuerdo de cooperacion",
      plano: "La Iglesia Católica y las iglesias con acuerdo de cooperación con el Estado.",
      extracto:
        "Las entidades de la Iglesia Católica contempladas en los artículos IV y V del Acuerdo sobre Asuntos Económicos entre el Estado español y la Santa Sede, y las igualmente existentes en los acuerdos de cooperación del Estado español con otras iglesias, confesiones y comunidades religiosas, serán consideradas entidades beneficiarias del mecenazgo a los efectos previstos en los artículos 16 a 25, ambos inclusive, de esta Ley.",
      ancla: "#danovena",
      confianza: "alta",
    },
    {
      texto: "Instituto de Espana y las Reales Academias integradas en el mismo",
      plano: "El Instituto de España y las Reales Academias.",
      extracto:
        "Estas entidades serán consideradas como entidades beneficiarias del mecenazgo a los efectos previstos en los artículos 16 a 25, ambos inclusive, de esta Ley.",
      ancla: "#dadecima",
      confianza: "alta",
    },
    { texto: "Museo Nacional del Prado",
      plano: "El Museo Nacional del Prado.",
      extracto:
        "El Museo Nacional del Prado será considerado entidad beneficiaria del mecenazgo a los efectos previstos en los artículos 16 a 25, ambos inclusive, de esta ley.",
      ancla: "#dadecimoctava",
      confianza: "alta",
    },
    { texto: "Museo Nacional Centro de Arte Reina Sofia",
      plano: "El Museo Nacional Centro de Arte Reina Sofía.",
      extracto:
        "El Museo Nacional Centro de Arte Reina Sofía será considerado entidad beneficiaria del mecenazgo a los efectos previstos en los artículos 16 a 25, ambos inclusive, de esta ley.",
      ancla: "#dadecimonovena",
      confianza: "alta",
    },
  ],
  "F1",
);

/* ------------------------------------------------------------------ */
/* Reglas del angulo deportivo                                           */
/* ------------------------------------------------------------------ */

/**
 * Reglas que la ley establece especificamente para el deporte. Son las que
 * separan a una federacion de una fundacion cualquiera, y conviene conocerlas
 * antes de dar por perdido un mecenazgo.
 */
export const DEPORTE_LEY = legal(
  [
    {
      art: "Art. 2",
      titulo: "Las federaciones son entidades sin fines lucrativos",
      texto:
        "El articulo 2 incluye a las federaciones deportivas espanolas, las territoriales integradas en aquellas, el Comite Olimpico Espanol y el Comite Paralimpico Espanol. Quien este en ese articulo puede acogerse voluntariamente al regimen fiscal especial del Titulo II.",
      plano:
        "Las federaciones deportivas españolas, las territoriales, el Comité Olímpico y el Comité Paralímpico pueden pedir entrar en el régimen especial de entidades sin fines lucrativos. Es voluntario.",
      extracto:
        "d) Las federaciones deportivas españolas, las federaciones deportivas territoriales de ámbito autonómico integradas en aquellas, el Comité Olímpico Español y el Comité Paralímpico Español.",
      ancla: "#a2",
      confianza: "alta",
    },
    {
      art: "DA 12.ª.1",
      titulo: "Los ingresos de espectáculos deportivos no cuentan para el 40%",
      texto:
        "Los ingresos de los espectáculos deportivos obtenidos por las entidades relacionadas en el parrafo e) del articulo 2 no se incluyen en el computo del 40% de ingresos de explotaciones economicas no exentas del articulo 3.3. Para una federacion, en la practica, esto relaja el requisito mas duro de los tres.",
      plano:
        "Si tu entidad organiza espectáculos deportivos, lo que ingresa con ellos no cuenta para el requisito del 40 %.",
      extracto:
        "Los ingresos de los espectáculos deportivos obtenidos por las entidades relacionadas en el párrafo e) del artículo 2 de esta Ley no se incluirán en el cómputo del 40 por 100 de los ingresos de explotaciones económicas no exentas a que se refiere el requisito del número 3.º de su artículo 3.",
      ancla: "#dadecimosegunda",
      confianza: "alta",
    },
    {
      art: "DA 12.ª.2",
      titulo: "Exentas las rentas de selecciones nacionales o autonomicas",
      texto:
        "Estan exentas del Impuesto sobre Sociedades las rentas obtenidas por esas entidades que procedan de la celebracion, retransmision o difusion de competiciones amistosas u oficiales en las que participen las selecciones nacionales o autonomicas, siempre que la organizacion de dichas competiciones sea de su exclusiva competencia.",
      plano:
        "Lo que tu entidad ingrese retransmitiendo o difundiendo las competiciones en las que juegan las selecciones nacionales o autonómicas no paga Impuesto sobre Sociedades. Solo cuando la entidad organiza esas competiciones.",
      extracto:
        "Están exentas del Impuesto sobre Sociedades las rentas obtenidas por las entidades relacionadas en el párrafo e) del artículo 2 de esta Ley que procedan de la celebración, retransmisión o difusión por cualquier medio de las competiciones amistosas u oficiales en las que participen las selecciones nacionales o autonómicas, siempre que la organización de dichas competiciones sea de su exclusiva competencia.",
      ancla: "#dadecimosegunda",
      confianza: "alta",
    },
    {
      art: "Art. 16 y 24.3",
      titulo: "Quien puede aportar",
      texto:
        "Recibir una aportacion con incentivo fiscal exige que la entidad este en el articulo 16 y que el aportante obtenga la certificacion con los datos del articulo 24.3. Un patrocinio deportivo corriente no es por si solo mecenazgo: la entidad tiene que estar en esa relacion y cumplir el Titulo II.",
      plano:
        "Para que tu aportación tenga ventaja fiscal, la entidad que la recibe tiene que estar en la lista del artículo 16 y darte un certificado con los datos del artículo 24.3. Un patrocinio corriente no cuenta: no es mecenazgo.",
      extracto:
        "Los incentivos fiscales previstos en este Título serán aplicables a los donativos, donaciones y aportaciones que, cumpliendo los requisitos establecidos en este Título, se hagan en favor de las siguientes entidades:",
      ancla: "#a16",
      confianza: "alta",
    },
    {
      art: "Art. 17.2 y Ley 34/1988",
      titulo: "Mecenazgo y patrocinio no son lo mismo",
      texto:
        "El mecenazgo admite una contraprestacion simbolica: hasta el 15% del valor de la aportacion y 25.000 euros como maximo, o nada a cambio (art. 17.2). El patrocinio publicitario, con contraprestacion por la difusion de la marca, se rige por la Ley 34/1988, de 11 de noviembre, General de Publicidad, no por esta ley, y no deduce.",
      plano:
        "Puedes recibir algo a cambio, pero solo si es simbólico: hasta el 15 % de lo aportado y 25.000 euros como máximo. Si a cambio hay publicidad de tu marca, es patrocinio y no deduce: lo rige la Ley General de Publicidad.",
      extracto:
        "También darán derecho a deducción los donativos, donaciones y aportaciones aun cuando el donante o aportante pudiera recibir bienes o servicios, entregados o prestados por el donatario o beneficiario, de carácter simbólico, siempre y cuando el valor de los bienes o servicios recibidos no represente más del 15 % del valor del donativo, donación o aportación y, en todo caso, no supere el importe de 25.000 euros.",
      ancla: "#a17",
      fuentes: ["F1","F21"],
      confianza: "alta",
    },
  ],
  "F1",
);

/* ------------------------------------------------------------------ */
/* Base de la deduccion y contenido de la certificacion                 */
/* ------------------------------------------------------------------ */

export const BASE_DEDUCCION = legal(
  [
    { tipo: "Donativos dinerarios", base: "El importe",
      plano: "Donativo en dinero: la base es lo que das.",
      extracto: "a) En los donativos dinerarios, su importe.",
      ancla: "#a18",
      confianza: "alta",
    },
    {
      tipo: "Bienes o derechos",
      base: "Valor contable; a falta de el, el del Impuesto sobre el Patrimonio",
      plano:
        "Bienes o derechos: el valor contable y, si no lo hay, el del Impuesto sobre el Patrimonio.",
      extracto:
        "b) En los donativos o donaciones de bienes o derechos, el valor contable que tuviesen en el momento de la transmisión y, en su defecto, el valor determinado conforme a las normas del Impuesto sobre el Patrimonio.",
      ancla: "#a18",
      confianza: "alta",
    },
    {
      tipo: "Usufructo sobre inmuebles",
      base: "2% del valor catastral al ano, prorrateado por dias",
      plano:
        "Usufructo de un inmueble: el 2 % del valor catastral al año, prorrateado por días.",
      extracto:
        "c) En la constitución de un derecho real de usufructo sobre bienes inmuebles, el importe anual que resulte de aplicar, en cada uno de los períodos impositivos de duración del usufructo, el 2 % al valor catastral, determinándose proporcionalmente al número de días que corresponda en cada período impositivo.",
      ancla: "#a18",
      confianza: "alta",
    },
    {
      tipo: "Usufructo sobre valores",
      base: "Dividendos o intereses percibidos en cada ejercicio",
      plano: "Usufructo de valores: los dividendos o intereses que cobras cada año.",
      extracto:
        "d) En la constitución de un derecho real de usufructo sobre valores, el importe anual de los dividendos o intereses percibidos por el usufructuario en cada uno de los períodos impositivos de duración del usufructo.",
      ancla: "#a18",
      confianza: "alta",
    },
    {
      tipo: "Obras de arte garantizadas o del Patrimonio Historico",
      base: "Valoracion de la Junta de Calificacion, Valoracion y Exportacion",
      plano:
        "Obras de arte garantizadas o del Patrimonio Histórico: lo que valore la Junta de Calificación, Valoración y Exportación.",
      extracto:
        "f) En los donativos o donaciones de obras de arte de calidad garantizada y de los bienes que formen parte del Patrimonio Histórico Español a que se refieren las letras c) y d) del apartado 1 del artículo 17 de esta Ley, la valoración efectuada por la Junta de Calificación, Valoración y Exportación.",
      ancla: "#a18",
      confianza: "alta",
    },
    {
      tipo: "Cesion de uso sin contraprestacion",
      base: "Los gastos del cedente, si fueran deducibles de haber cedido onerosamente",
      plano: "Cesión de uso sin contraprestación: los gastos que asume quien cede.",
      extracto:
        "g) En la cesión de uso de un bien mueble o inmueble a que se refiere la letra f) del apartado 1 del artículo 17, el importe de los gastos soportados por el cedente en relación con tales bienes durante el periodo de cesión, siempre que tuvieran la consideración de gastos fiscalmente deducibles de haberse cedido de forma onerosa y sean distintos de tributos y de los intereses de los capitales ajenos y demás gastos de financiación, y estén debidamente contabilizados cuando el cedente esté obligado a llevar contabilidad de acuerdo con el Código de Comercio o legislación equivalente.",
      ancla: "#a18",
      confianza: "media",
    },
  ],
  "F1",
);

/**
 * Contenido de la certificacion: los seis extremos del articulo 24.3. El
 * extremo d) solo procede cuando el donativo no es en dinero.
 */
export const CERTIFICACION_DATOS = legal(
  [
    {
      letra: "a",
      texto:
        "NIF y datos de identificacion personal del donante y de la entidad donataria",
      plano: "Tu NIF y tus datos, y los de la entidad que recibe.",
      extracto:
        "a) El número de identificación fiscal y los datos de identificación personal del donante y de la entidad donataria.",
      ancla: "#a24",
      confianza: "alta",
    },
    {
      letra: "b",
      texto:
        "Mencion expresa de que la entidad donataria esta incluida en las reguladas en el articulo 16",
      plano: "Que la entidad está en la lista del artículo 16.",
      extracto:
        "b) Mención expresa de que la entidad donataria se encuentra incluida en las reguladas en el artículo 16 de esta Ley.",
      ancla: "#a24",
      confianza: "alta",
    },
    {
      letra: "c",
      texto: "Fecha e importe del donativo cuando sea dinerario",
      plano: "La fecha y el importe, cuando el donativo es en dinero.",
      extracto: "c) Fecha e importe del donativo cuando éste sea dinerario.",
      ancla: "#a24",
      confianza: "alta",
    },
    {
      letra: "d",
      texto:
        "Documento publico u otro documento autentico que acredite la entrega del bien donado cuando no se trate de donativos en dinero",
      plano: "Un documento que acredite la entrega, cuando no es dinero.",
      extracto:
        "d) Documento público u otro documento auténtico que acredite la entrega del bien donado cuando no se trate de donativos en dinero.",
      ancla: "#a24",
      confianza: "alta",
    },
    {
      letra: "e",
      texto: "Destino que la entidad donataria dara al objeto donado",
      plano: "Para qué va a servir lo que donas.",
      extracto:
        "e) Destino que la entidad donataria dará al objeto donado en el cumplimiento de su finalidad específica.",
      ancla: "#a24",
      confianza: "alta",
    },
    {
      letra: "f",
      texto: "Mencion expresa del caracter irrevocable de la donacion",
      plano: "Que la donación no se puede deshacer.",
      extracto:
        "f) Mención expresa del carácter irrevocable de la donación, sin perjuicio de lo establecido en las normas imperativas civiles que regulan la revocación de donaciones.",
      ancla: "#a24",
      confianza: "alta",
    },
  ],
  "F1",
);

/* ------------------------------------------------------------------ */
/* Modalidades de mecenazgo                                              */
/* ------------------------------------------------------------------ */

export const MODALIDADES = legal(
  [
    {
      art: "Art. 25",
      titulo: "Convenio de colaboracion empresarial",
      tratamiento: "Gasto deducible en la base imponible",
      texto:
        "La entidad se compromete por escrito a difundir la participacion del colaborador. Esa difusion no constituye una prestacion de servicios. Incompatible con los demas incentivos de la ley.",
      plano:
        "Un convenio por escrito: la entidad se compromete a difundir tu participación y eso no cuenta como servicio.",
      extracto:
        "La difusión a que se refiere el párrafo anterior, en el marco de los convenios de colaboración definidos en este artículo no constituye una prestación de servicios.",
      ancla: "#a25",
      confianza: "alta",
    },
    {
      art: "Art. 26",
      titulo: "Gastos en actividades de interes general",
      tratamiento: "Gasto deducible en la base imponible",
      texto:
        "Los gastos realizados para los fines de interes general tienen la consideracion de deducibles. Tambien incompatible con los demas incentivos de la ley.",
      plano:
        "Gastos de la entidad en actividades de interés general: se pueden deducir de la base.",
      extracto:
        "tendrán la consideración de deducibles los gastos realizados para los fines de interés general a que se refiere el número 1.º del artículo 3 de esta Ley.",
      ancla: "#a26",
      confianza: "alta",
    },
    {
      art: "Art. 27",
      titulo:
        "Programas de apoyo a acontecimientos de excepcional interes publico",
      tratamiento: "Gasto deducible mas incentivo adicional",
      texto:
        "La ley crea el programa de apoyo y regula el tratamiento fiscal de los gastos de propaganda y publicidad originados por su ejecucion.",
      plano:
        "Un programa con incentivos fiscales para eventos deportivos de interés general.",
      extracto:
        "Son programas de apoyo a acontecimientos de excepcional interés público el conjunto de incentivos fiscales específicos aplicables a las actuaciones que se realicen para asegurar el adecuado desarrollo de los acontecimientos que, en su caso, se determinen por Ley.",
      ancla: "#a27",
      confianza: "media",
    },
  ],
  "F1",
);

/* ------------------------------------------------------------------ */
/* Actividades prioritarias de mecenazgo                                 */
/* ------------------------------------------------------------------ */

/**
 * Relacion vigente de actividades prioritarias de mecenazgo: DA 57a de la Ley
 * 31/2022 (PGE 2023), apartado Uno. No es permanente: la fija la ley de
 * presupuestos de cada ejercicio y, mientras no se aprueben, se renueva con su
 * prorroga. El texto integro esta en docs/actividades-prioritarias.md.
 */
export const ACTIVIDADES_PRIORITARIAS = legal(
  [
    {
      texto:
        "Las llevadas a cabo por el Instituto Cervantes para la promocion y difusion de la lengua espanola y de la cultura mediante redes telematicas, nuevas tecnologias y otros medios.",
      plano:
        "Actividades del Instituto Cervantes para difundir la lengua española y la cultura por internet.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "Las actividades llevadas a cabo por el Museo Nacional del Prado para la consecucion de sus fines establecidos en la Ley 46/2003, de 25 de noviembre, reguladora del Museo Nacional del Prado y en el Real Decreto 433/2004, de 12 de marzo, por el que se aprueba el Estatuto del Museo Nacional del Prado.",
      plano:
        "Actividades del Museo Nacional del Prado para cumplir los fines que le fijan su ley y su estatuto.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "Las actividades llevadas a cabo por el Museo Nacional Centro de Arte Reina Sofia en cumplimiento de los fines establecidos por la Ley 34/2011, de 4 de octubre, reguladora del Museo Nacional Centro de Arte Reina Sofia y por el Real Decreto 188/2013, de 15 de marzo, por el que se aprueba el Estatuto del Museo Nacional Centro de Arte Reina Sofia.",
      plano:
        "Actividades del Museo Nacional Centro de Arte Reina Sofía para cumplir los fines de su ley y su estatuto.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "Las llevadas a cabo por la Biblioteca Nacional de Espana en cumplimiento de los fines y funciones de caracter cultural y de investigacion cientifica establecidos por la Ley 1/2015, de 24 de marzo, reguladora de la Biblioteca Nacional de Espana, y por el Real Decreto 640/2016, de 9 de diciembre, por el que se aprueba el Estatuto de la Biblioteca Nacional de Espana.",
      plano:
        "Actividades de la Biblioteca Nacional de España para sus fines culturales y de investigación científica.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "Las llevadas a cabo por la Fundacion Deporte Joven en colaboracion con el Consejo Superior de Deportes en el marco del proyecto «Espana Compite: en la Empresa como en el Deporte» con la finalidad de contribuir al impulso y proyeccion de las PYMES espanolas en el ambito interno e internacional, la potenciacion del deporte y la promocion del empresario como motor de crecimiento asociado a los valores del deporte.",
      plano:
        "El proyecto «España Compite», con el Consejo Superior de Deportes, para impulsar a las PYMES y el deporte.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "La conservacion, restauracion o rehabilitacion de los bienes del Patrimonio Historico Espanol que se relacionan en el anexo XIII de la ley de presupuestos.",
      plano:
        "Conservación, restauración y rehabilitación de los bienes del Patrimonio Histórico Español del anexo XIII.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "Las actividades de fomento, promocion y difusion de las artes scenicas y musicales llevadas a cabo por las Administraciones publicas o con el apoyo de estas.",
      plano:
        "Actividades de fomento, promoción y difusión de las artes escénicas y musicales.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "Las llevadas a cabo por el Instituto de la Cinematografia y de las Artes Audiovisuales para el fomento, promocion, difusion y exhibicion de la actividad cinematografica y audiovisual asi como todas aquellas medidas orientadas a la recuperacion, restauracion, conservacion y difusion del patrimonio cinematografico y audiovisual, todo ello en un contexto de defensa y promocion de la identidad y la diversidad culturales.",
      plano:
        "Actividades del Instituto de la Cinematografía para el cine y el audiovisual y su patrimonio.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "La investigacion, desarrollo e innovacion en las infraestructuras que forman parte del Mapa nacional de Infraestructuras Cientificas y Tecnicas Singulares (ICTS) en vigor y que, a este efecto, se relacionan en el anexo XIV de la ley de presupuestos.",
      plano:
        "Investigación, desarrollo e innovación en las infraestructuras científicas y tecnológicas singulares del anexo XIV.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "La investigacion, el desarrollo y la innovacion orientados a resolver los retos de la sociedad identificados en la Estrategia Espanola de Ciencia y Tecnologia e Innovacion vigente y financiados o realizados por las entidades que, a estos efectos, se reconozcan por el Ministerio de Hacienda y Funcion Publica, a propuesta del Ministerio de Ciencia e Innovacion.",
      plano:
        "Investigación, desarrollo e innovación para los retos de la sociedad, por entidades reconocidas por Hacienda.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "La investigacion, el desarrollo y la innovacion orientados a resolver los retos de la sociedad realizados por los Organismos Publicos de Investigacion Consejo Superior de Investigaciones Cientificas, Instituto de Salud Carlos III, Centro de Investigaciones Energeticas, Medioambientales y Tecnologicas, e Instituto de Astrofisica de Canarias.",
      plano:
        "Investigación, desarrollo e innovación en los Organismos Públicos de Investigación que enumera la ley.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "El fomento de la difusion, divulgacion y comunicacion de la cultura cientifica y de la innovacion llevadas a cabo por la Fundacion Espanola para la Ciencia y la Tecnologia.",
      plano:
        "Actividades de la Fundación Española para la Ciencia y la Tecnología para difundir la cultura científica.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "Las llevadas a cabo por la Agencia Estatal de Investigacion para el fomento y financiacion de las actuaciones que derivan de las politicas de I+D de la Administracion General del Estado.",
      plano:
        "Actividades de la Agencia Estatal de Investigación para las políticas de I+D del Estado.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "La I+D+I en Biomedicina y Ciencias de la Salud de la Accion Estrategica en Salud llevadas a cabo por el CIBER y CIBERNED.",
      plano:
        "Investigación en biomedicina y salud de la Acción Estratégica en Salud, hecha por el CIBER y el CIBERNED.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "Los programas de formacion y promocion del voluntariado que hayan sido objeto de subvencion por parte de las Administraciones Publicas.",
      plano:
        "Programas de formación y promoción del voluntariado subvencionados por las Administraciones públicas.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "Las llevadas a cabo por la Fundacion ONCE en el marco del Programa de Becas «Oportunidad al Talento», asi como las actividades desarrolladas por esta entidad en el marco del Programa de Formacion en Competencias y Profesiones Digitales y Tecnologicas «Por Talento Digital».",
      plano: "Becas «Oportunidad al Talento» y formación digital de la Fundación ONCE.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "Las llevadas a cabo por la Fundacion ONCE del Perro Guia en el marco del Proyecto 2022-2023 «Avances para la movilidad de las personas ciegas asistidas por perros guia».",
      plano:
        "Programa de la Fundación ONCE para la movilidad de las personas ciegas con perros guía.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "Los programas dirigidos a la erradicacion de la violencia de genero que hayan sido objeto de subvencion por parte de las Administraciones Publicas o se realicen en colaboracion con estas.",
      plano:
        "Programas contra la violencia de género subvencionados por las Administraciones públicas.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "Las llevadas a cabo por el Fondo de Becas Soledad Cazorla para Hurfanos de la violencia de genero (Fundacion Mujeres).",
      plano: "Becas del Fondo Soledad Cazorla para huérfanos de la violencia de género.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      texto:
        "Las llevadas a cabo por las Universidades Publicas en cumplimiento de los fines y funciones de caracter educativo, cientifico, tecnologico, cultural y de transferencia del conocimiento, establecidos por la Ley Organica 6/2001, de 21 de diciembre, de Universidades.",
      plano:
        "Actividades de las universidades públicas para sus fines educativos, científicos, culturales y de transferencia.",
      ancla: "#da-57",
      confianza: "alta",
    },
  ],
  "F18",
);

export const NOTAS_PRIORITARIAS = legal(
  [
    {
      titulo: "Limite de la actividad 5.ª",
      texto:
        "Los donativos a la actividad 5.ª que pueden beneficiarse de la elevacion en cinco puntos tienen el limite de 50.000 euros anuales para cada aportante.",
      fuente: "F18",
      plano: "El límite de 50.000 € solo se aplica a la actividad de España Compite.",
      extracto:
        "Los donativos, donaciones y aportaciones a las actividades señaladas en el párrafo anterior que, de conformidad con el apartado Dos de esta disposición adicional, pueden beneficiarse de la elevación en cinco puntos porcentuales de los porcentajes y límites de las deducciones establecidas en los artículos 19, 20 y 21 de la citada Ley 49/2002 tendrán el límite de 50.000 euros anuales para cada aportante.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      titulo: "Acontecimientos de excepcional interes publico",
      texto:
        "Cada ano se declaran por real decreto-ley los acontecimientos de excepcional interes publico. Sus programas y actividades entran en el regime de mecenazgo prioritario del art. 22 (art. 27). En 2026, el Real Decreto-ley 12/2026, de 26 de mayo.",
      fuente: "F1",
      plano:
        "Cada año se declaran por real decreto-ley los eventos con incentivos fiscales extra.",
      extracto:
        "Son programas de apoyo a acontecimientos de excepcional interés público el conjunto de incentivos fiscales específicos aplicables a las actuaciones que se realicen para asegurar el adecuado desarrollo de los acontecimientos que, en su caso, se determinen por Ley.",
      ancla: "#a27",
      fuentes: ["F1", "F18", "F23"],
      confianza: "alta",
    },
    {
      titulo: "La lista no es permanente",
      texto:
        "La relacion la fija la Ley de Presupuestos Generales del Estado de cada ejercicio. Como no se han aprobado PGE para 2026, sigue vigente la DA 57a de la Ley 31/2022 por la prorroga del Real Decreto-ley 3/2026, de 3 de febrero. Si se aprueban los PGE de 2027 con una nueva disposicion adicional, hay que reverificar esta lista.",
      fuente: "F1",
      plano:
        "La lista de actividades prioritarias cambia con los presupuestos: no es para siempre.",
      extracto:
        "La Ley de Presupuestos Generales del Estado podrá establecer una relación de actividades prioritarias de mecenazgo en el ámbito de los fines de interés general citados en el número 1.º del artículo 3 de esta Ley, así como las entidades beneficiarias, de acuerdo con su artículo 16.",
      ancla: "#a22",
      fuentes: ["F1", "F6"],
      confianza: "alta",
    },
  ],
  "F18",
);

/**
 * Cifras de la ley que usa el calculo. Viven aqui, con el articulo que las
 * fija, para que el calculo y el texto que las explica no puedan separarse.
 */
export const FIGURAS = {
  /** Limite simbolico: porcentaje maximo de lo recibido a cambio (art. 17.2). */
  limiteSimbolicoPorcentaje: 0.15,
  /** Limite simbolico en euros (art. 17.2). */
  limiteSimbolicoEuros: 25000,
  /** Tramo del 80 % en el IRPF estatal (art. 19.1). */
  microMecenazgoIrpf: 250,
  /** Ejercicios de arrastre del exceso no deducido (arts. 19.2 y 20). */
  aniosArrastre: 10,
  /** Ejercicios consecutivos para el donativo reiterado (arts. 19.1 y 20.1). */
  ejerciciosReiteracion: 3,
  /** Tramo del 30 % en la cuota liquida del foral (art. 31.1.b). */
  navarraTramo1: 300,
  /** Tramo del 80 % en el IRPF foral (arts. 30.1 y 43.1). */
  navarraMicro: 250,
  /* --- Programas de mecenazgo de la Fundacion Deporte Joven (2026) --- */
  /** Canon de gestion plano de España Compite (Bases 2026). */
  canonEspanaCompite: 0.0275,
  /** Tope anual por aportante en España Compite (DA 57a, punto 5.o). */
  topeAnualEspanaCompite: 50000,
  /** Aportacion minima que acepta el programa España Compite (Bases 2026). */
  aportacionMinimaEspanaCompite: 150,
  /** Fraccion minima del calendario de pagos del donante (formulario 2026). */
  fraccionMinima: 1000,
  /** Plazo de justificacion en dias tras la conclusion del proyecto. */
  plazoJustificacionDias: 30,
  /** Plazo de justificacion en dias si el proyecto termina el 31 de diciembre. */
  plazoJustificacionDiasCierre31Diciembre: 15,
  /** Anios de custodia de los justificantes originales (formulario 2026). */
  aniosCustodia: 2,
  /** Plazo de justificacion en dias en los programas AEIP. */
  plazoJustificacionDiasAeip: 60,
  /** Tipo de la deduccion por publicidad (art. 27.3, punto primero). */
  tipoDeduccionPublicidad: 0.15,
  /** Techo de la deduccion publicitaria sobre las donaciones (art. 27.3). */
  techoDeduccionPublicidad: 0.9,
  /** Base de la deduccion si la publicidad no es esencial (art. 27.3). */
  basePublicidadNoEsencial: 0.25,
} as const;

/* ------------------------------------------------------------------ */
/* Textos que la interfaz muestra y que la ley fija                    */
/* ------------------------------------------------------------------ */

/** Como se describe cada regimen en la interfaz. */
export const REGIMENES = legal(
  [
    {
      regimen: "estatal",
      texto:
        "Ley 49/2002, de 23 de diciembre, de regimen fiscal de las entidades sin fines lucrativos y de los incentivos fiscales al mecenazgo.",
    },
    {
      regimen: "navarra",
      texto:
        "Decreto Foral Legislativo 2/2023, de 24 de mayo. No es el mismo regimen que el estatal: aqui la aportacion es partida deducible en la base, no una deduccion del 40-55% de la cuota.",
      fuente: "F17",
    },
  ],
  "F1",
);

/** Regla que aplica al destino foral elegido, para empresa o persona fisica. */
export const NAVARRA_DESTINOS = legal(
  [
    {
      destino: "cultural",
      is: "Partida deducible en la base mas el 30% de los primeros 300 euros y el 20% del resto sobre la cuota liquida (art. 31.1.b).",
      irpf:
        "80% de los primeros 250 euros y 40% del resto en la cuota (art. 30.1). Las personas fisicas no tienen deduccion adicional sobre la cuota liquida.",
      plano:
        "Mecenazgo cultural: un 30 % de los primeros 300 euros y un 20 % del resto sobre la cuota.",
      extracto:
        "Además, tendrán derecho a practicar una deducción de la cuota líquida del impuesto del 30 por ciento de los primeros 300 euros en que se valoren las modalidades de mecenazgo cultural a que se refiere el artículo 24. Los importes superiores a 300 euros tendrán derecho a una deducción de la cuota líquida del 20 por ciento.",
      ancla: "#a3-3",
      confianza: "alta",
    },
    {
      destino: "social",
      is: "Partida deducible en la base mas el 20% en plano sobre la cuota liquida (art. 44.1.b).",
      irpf: "80% de los primeros 250 euros y 40% del resto en la cuota (art. 43.1).",
      plano: "Mecenazgo social: un 20 % sobre la cuota líquida.",
      extracto:
        "Además, tendrán derecho a practicar una deducción de la cuota líquida del impuesto del 20 por ciento del importe en que se valoren las modalidades de cada tipo de mecenazgo.",
      ancla: "#a4-6",
      confianza: "alta",
    },
    {
      destino: "medioambiental",
      is: "Partida deducible en la base mas el 20% en plano sobre la cuota liquida (art. 44.1.b).",
      irpf: "80% de los primeros 250 euros y 40% del resto en la cuota (art. 43.1).",
      plano: "Mecenazgo medioambiental: un 20 % sobre la cuota líquida.",
      extracto:
        "Además, tendrán derecho a practicar una deducción de la cuota líquida del impuesto del 20 por ciento del importe en que se valoren las modalidades de cada tipo de mecenazgo.",
      ancla: "#a4-6",
      confianza: "alta",
    },
    {
      destino: "deportivo",
      is: "Partida deducible en la base mas el 20% en plano sobre la cuota liquida (art. 44.1.b).",
      irpf: "80% de los primeros 250 euros y 40% del resto en la cuota (art. 43.1).",
      plano: "Mecenazgo deportivo: un 20 % sobre la cuota líquida.",
      extracto:
        "Además, tendrán derecho a practicar una deducción de la cuota líquida del impuesto del 20 por ciento del importe en que se valoren las modalidades de cada tipo de mecenazgo.",
      ancla: "#a4-6",
      confianza: "alta",
    },
  ],
  "F17",
);

/** Tope de la partida deducible en el regimen foral. */
export const NAVARRA_TOPE = legalUno(
  {
    texto:
      "El tope de la partida deducible es el mayor entre el 30% de la base imponible y el 3 por mil de este importe.",
      plano:
        "El tope es el mayor entre el 30 % de la base imponible y el 3 por mil.",
      extracto:
        "El importe de la partida deducible en la base imponible no podrá exceder del mayor de los siguientes límites: 1.º El 30 por ciento de la base imponible conforme a lo establecido en el artículo 49.1. 2.º El 3 por mil del importe neto de la cifra de negocios.",
      ancla: "#a4-6",
      confianza: "alta",
  },
  "F17",
);

/** El tramo de 250 euros del IRPF es un cubo unico por contribuyente y ejercicio. */
export const IRPF_CUBO = legalUno(
  {
    texto:
      "Los 250 euros del micro-mecenazgo son un unico cubo por contribuyente y ano: lo que consuman otras aportaciones resta a esta.",
      plano: "Es un único cubo por persona y año: lo que dones en otros sitios lo consume.",
      extracto:
        "Los contribuyentes del Impuesto sobre la Renta de las Personas Físicas tendrán derecho a deducir de la cuota íntegra el resultado de aplicar a la base de la deducción correspondiente al conjunto de donativos, donaciones y aportaciones con derecho a deducción, determinada según lo dispuesto en el artículo 18 de esta Ley, la siguiente escala:",
      ancla: "#a19",
      confianza: "media",
  },
  "F1",
);

/** Limite de la contraprestacion que puede ser simbolica (art. 17.2). */
export const LIMITE_SIMBOLICO = legalUno(
  {
    texto:
      "Hasta el 15% del valor y 25.000 euros como maximo, o nada a cambio (art. 17.2).",
      plano:
        "Puedes dar algo a cambio, pero solo si vale poco: hasta el 15 % y 25.000 euros.",
      extracto:
        "También darán derecho a deducción los donativos, donaciones y aportaciones aun cuando el donante o aportante pudiera recibir bienes o servicios, entregados o prestados por el donatario o beneficiario, de carácter simbólico, siempre y cuando el valor de los bienes o servicios recibidos no represente más del 15 % del valor del donativo, donación o aportación y, en todo caso, no supere el importe de 25.000 euros.",
      ancla: "#a17",
      confianza: "alta",
  },
  "F1",
);

/** Condiciones que la persona donante declara. */
export const CONDICIONES = legal(
  [
    {
      id: "prioritaria",
      etiqueta: "Va dirigida a una actividad prioritaria de mecenazgo",
      ayuda:
        "Sube el tipo 5 puntos y el limite otros 5 (art. 22 y DA 57a de la Ley 31/2022)",
      fuente: "F18",
      plano:
        "Tu aportación va a una actividad prioritaria: sube el tipo cinco puntos y el límite otros cinco.",
      extracto:
        "Dos. Los porcentajes y los límites de las deducciones establecidas en los artículos 19, 20 y 21 de la citada Ley 49/2002, de 23 de diciembre, se elevarán en cinco puntos porcentuales en relación con las actividades incluidas en el apartado anterior.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      id: "reiterada",
      etiqueta:
        "Hay donativos a esta misma entidad en los 2 periodos anteriores y en este",
      ayuda:
        "Por importe igual o superior al de hace dos años, y durante 3 años seguidos",
      plano:
        "Has donado a esta misma entidad los dos periodos anteriores y en este, por importe igual o superior.",
      extracto:
        "Si en los dos períodos impositivos inmediatos anteriores se hubieran realizado donativos, donaciones o aportaciones con derecho a deducción en favor de una misma entidad, siendo el importe del donativo, donación o aportación de este período impositivo y el del período impositivo anterior, por importe igual o superior, en cada uno de ellos, al del período impositivo inmediato anterior, el porcentaje de deducción aplicable a la base de la deducción en favor de esa misma entidad será el 50 %.",
      ancla: "#a20",
      confianza: "alta",
    },
    {
      id: "certificado",
      etiqueta:
        "La entidad ha emitido el certificado con los datos exigidos (art. 24.3)",
      plano:
        "La entidad te ha dado el certificado con los datos que pide la ley (art. 24.3).",
      extracto:
        "La certificación a la que se hace referencia en los apartados anteriores deberá contener, al menos, los siguientes extremos:",
      ancla: "#a24",
      confianza: "alta",
    },
    {
      id: "simbolico",
      etiqueta: "La entidad entrega algo a cambio, de caracter simbolico",
      ayuda:
        "Hasta el 15% del valor y 25.000 euros como maximo (art. 17.2)",
      plano:
        "A cambio de tu aportación, la entidad te da algo que no vale más del 15 % (art. 17.2).",
      extracto:
        "También darán derecho a deducción los donativos, donaciones y aportaciones aun cuando el donante o aportante pudiera recibir bienes o servicios, entregados o prestados por el donatario o beneficiario, de carácter simbólico, siempre y cuando el valor de los bienes o servicios recibidos no represente más del 15 % del valor del donativo, donación o aportación y, en todo caso, no supere el importe de 25.000 euros.",
      ancla: "#a17",
      confianza: "alta",
    },
    {
      id: "interesSocial",
      etiqueta: "La actividad esta declarada de interes social",
      ayuda:
        "Exigido por los arts. 39.1 y 42 del DFL 2/2023. Las competiciones federadas nunca pueden declararse de interes social (art. 41.3)",
      fuente: "F17",
      plano:
        "La actividad está declarada de interés social por la Administración Deportiva de Navarra.",
      extracto:
        "En ningún caso podrán ser declaradas de interés social, a los efectos del mecenazgo deportivo, las actividades deportivas consistentes en la participación en competiciones federadas.",
      ancla: "#a4-3",
      confianza: "alta",
    },
  ],
  "F1",
);

/** El foral navarro no recoge el incremento por actividades prioritarias. */
export const NAVARRA_PRIORITARIAS = legalUno(
  {
    texto:
      "El Decreto Foral Legislativo 2/2023 fija sus propios porcentajes y no recoge el incremento por actividades prioritarias. No se aplica en este calculo.",
      plano:
        "En Navarra no sube el tipo por actividad prioritaria: no se aplica en el cálculo.",
      extracto:
        "Los contribuyentes del Impuesto sobre la Renta de las Personas Físicas tendrán derecho a deducir de la cuota del impuesto el 80 por ciento de los primeros 250 euros en que se valoren las modalidades de cada tipo de mecenazgo.",
      ancla: "#a4-5",
      confianza: "alta",
  },
  "F17",
);

/** Rotulo de la tabla de porcentajes aplicables a actividades prioritarias. */
export const PRIORITARIAS_TITULO = legalUno(
  {
    texto:
      "Con destino a actividad prioritaria de mecenazgo (articulo 22):",
      plano: "Si tu aportación va a una actividad prioritaria, estos son los tipos.",
      extracto:
        "En relación con dichas actividades y entidades, la Ley de Presupuestos Generales del Estado podrá elevar en cinco puntos porcentuales, como máximo, los porcentajes y límites de las deducciones establecidas en los artículos 19, 20 y 21 de esta Ley.",
      ancla: "#a22",
      confianza: "alta",
  },
  "F1",
);

/** Tabla de reglas del regimen foral. */
export const NAVARRA_REGLAS = legal(
  [
    { concepto: "Persona fisica, primeros 250 euros", regla: "80%",
      plano: "Persona física, los primeros 250 euros: el 80 %.",
      extracto:
        "Los contribuyentes del Impuesto sobre la Renta de las Personas Físicas tendrán derecho a deducir de la cuota del impuesto el 80 por ciento de los primeros 250 euros en que se valoren las modalidades de cada tipo de mecenazgo.",
      ancla: "#a4-5",
      confianza: "alta",
    },
    { concepto: "Persona fisica, exceso", regla: "40%",
      plano: "Persona física, el resto: el 40 %.",
      extracto:
        "Los importes superiores a 250 euros tendrán derecho a una deducción del 40 por ciento.",
      ancla: "#a4-5",
      confianza: "alta",
    },
    { concepto: "Empresa: base imponible", regla: "Partida deducible",
      plano: "Empresa: la aportación se resta de la base imponible.",
      extracto:
        "a) Para la determinación de la base imponible, el importe en que se valoren las modalidades de cada tipo de mecenazgo tendrá la consideración de partida deducible.",
      ancla: "#a4-6",
      confianza: "alta",
    },
    {
      concepto: "Tope de esa partida",
      regla:
        "Mayor entre el 30% de la base imponible y el 3 por mil del importe neto de la cifra de negocios",
      plano:
        "Empresa: ese tope es el mayor entre el 30 % de la base imponible y el 3 por mil de la cifra de negocios.",
      extracto:
        "El importe de la partida deducible en la base imponible no podrá exceder del mayor de los siguientes límites: 1.º El 30 por ciento de la base imponible conforme a lo establecido en el artículo 49.1. 2.º El 3 por mil del importe neto de la cifra de negocios.",
      ancla: "#a4-6",
      confianza: "alta",
    },
    {
      concepto: "Empresa, mecenazgo cultural: cuota liquida",
      regla: "30% de los primeros 300 euros y 20% del resto (art. 31.1.b)",
      plano:
        "Empresa, mecenazgo cultural: un 30 % de los primeros 300 euros y un 20 % del resto.",
      extracto:
        "b) Además, tendrán derecho a practicar una deducción de la cuota líquida del impuesto del 30 por ciento de los primeros 300 euros en que se valoren las modalidades de mecenazgo cultural a que se refiere el artículo 24. Los importes superiores a 300 euros tendrán derecho a una deducción de la cuota líquida del 20 por ciento.",
      ancla: "#a3-3",
      confianza: "alta",
    },
    {
      concepto:
        "Empresa, mecenazgo social, medioambiental y deportivo: cuota liquida",
      regla: "20% en plano (art. 44.1.b)",
      plano: "Empresa, mecenazgo social, medioambiental o deportivo: un 20 % en plano.",
      extracto:
        "b) Además, tendrán derecho a practicar una deducción de la cuota líquida del impuesto del 20 por ciento del importe en que se valoren las modalidades de cada tipo de mecenazgo.",
      ancla: "#a4-6",
      confianza: "alta",
    },
    {
      concepto: "Persona fisica: deduccion adicional sobre la cuota liquida",
      regla: "No existe",
      plano: "Persona física: no hay ninguna deducción extra sobre la cuota líquida.",
      confianza: "media",
    },
  ],
  "F17",
);

/** Presentacion de la relacion de actividades prioritarias. */
export const ACTIVIDADES_INTRO = legalUno(
  {
    texto:
      "Esta lista es la que eleva la deduccion en 5 puntos (45% o 55% en el Impuesto sobre Sociedades, 85%, 45% o 50% en el IRPF). No es permanente: la fija la Ley de Presupuestos Generales del Estado de cada ejercicio y, mientras no se aprueben unos nuevos presupuestos, sigue vigente por prorroga. Cada ano se declaran tambien los acontecimientos de excepcional interes publico que entran en el mismo regime prioritario.",
      plano:
        "Esta lista es la que sube la deducción en 5 puntos. Cambia con los presupuestos: mientras no haya unos nuevos, sigue la anterior por prórroga.",
      extracto:
        "La Ley de Presupuestos Generales del Estado podrá establecer una relación de actividades prioritarias de mecenazgo en el ámbito de los fines de interés general citados en el número 1.º del artículo 3 de esta Ley, así como las entidades beneficiarias, de acuerdo con su artículo 16.",
      ancla: "#a22",
      confianza: "alta",
  },
  "F18",
);

/* ------------------------------------------------------------------ */
/* Notas de regimen                                                     */
/* ------------------------------------------------------------------ */

export const NOTAS = legal(
  [
    {
      titulo: "Estar en Navarra no es tributar por el regimen foral",
      texto:
        "El 75% del Convenio Economico (art. 18.2) solo opera para los sujetos pasivos que tributan conjuntamente a ambas Administraciones, es decir, los que operan en ambos territorios y cuyo volumen total de operaciones del ejercicio anterior excede de 12.000.000 euros (art. 19.2). El computo se hace con los puntos de conexion de los arts. 19 a 21 y se refiere al ejercicio anterior. No es una regla automatica: si dudas de que te aplica, confirmalo con un asesor.",
      fuente: "F20",
      plano: "Estar en Navarra no es tributar por el régimen foral.",
      extracto:
        "los sujetos pasivos que tributando conjuntamente a ambas Administraciones y teniendo su domicilio fiscal en Navarra hubieran realizado en el ejercicio anterior en territorio común el 75 por ciento o más de sus operaciones totales, de acuerdo con los puntos de conexión que se establecen en los artículos 19, 20 y 21 siguientes, quedarán sometidos a la normativa de territorio común.",
      ancla: "#a1-21",
      confianza: "alta",
    },
    {
      titulo: "El DFL 2/2023 tiene un regimen de donaciones aparte",
      texto:
        "Sus arts. 15 a 23 regulan las donaciones a entidades que aplican el regimen tributario especial del Titulo I (el IRPF deduce el 25%, art. 16.1, y el IS lo trata como partida deducible con topes del 30% y 3 por mil para bienes de interes cultural y obras de arte, y del 10% y 1 por mil en el resto, art. 20). Es un regime distinto del del mecenazgo y el simulador no lo cubre.",
      fuente: "F17",
      plano:
        "El DFL 2/2023 tiene además un régimen de donaciones, que es otro distinto y el simulador no cubre.",
      extracto: "Artículo 15. Donaciones.",
      ancla: "#a1-7",
      confianza: "media",
    },
  ],
  "F1",
);

/* ------------------------------------------------------------------ */
/* Programas de mecenazgo de la Fundacion Deporte Joven (2026)        */
/* ------------------------------------------------------------------ */

/** Identificador de un programa de mecenazgo deportivo de 2026. */
export type ProgramaId =
  | "espana-compite"
  | "universo-mujer-iv"
  | "adb-2030-ii"
  | "deporte-inclusivo-iii";

export interface Programa {
  id: ProgramaId;
  nombre: string;
  /**
   * "prioritaria": actividad prioritaria de mecenazgo del art. 22.
   * "aeip": acontecimiento de excepcional interes publico del art. 27.
   */
  regimen: "prioritaria" | "aeip";
  /** Tope anual por aportante, en euros. Null cuando el programa no lo tiene. */
  topeAnual: number | null;
  /** Tipo de canon de gestion plano. Null cuando el canon es una escala progresiva. */
  canonPlano: number | null;
  /** La via publicitaria del art. 27.3 es alternativa a la donacion. */
  viaPublicitaria: boolean;
  /** Como se eleva el tratamiento fiscal del programa. */
  elevacion: string;
  /** Fuente propia del programa, cuando no es la del grupo. */
  fuente?: string;
}

/**
 * Programas de mecenazgo de la Fundacion Deporte Joven que estan vivos en 2026.
 *
 * España Compite es una actividad prioritaria de mecenazgo del art. 22 (DA 57a
 * de la Ley 31/2022, punto 5.o) y por eso tiene tope anual de 50.000 euros.
 * Los tres programas AEIP son acontecimientos de excepcional interes publico
 * del art. 27 y no tienen tope.
 */
export const PROGRAMAS_2026 = legal<Programa>(
  [
    {
      id: "espana-compite",
      nombre: "España Compite: en la Empresa como en el Deporte",
      regimen: "prioritaria",
      topeAnual: FIGURAS.topeAnualEspanaCompite,
      canonPlano: FIGURAS.canonEspanaCompite,
      viaPublicitaria: false,
      elevacion:
        "Actividad prioritaria de mecenazgo (art. 22): tipos y limites elevados en cinco puntos.",
      fuente: "F24",
      plano:
        "Donar aquí sube cinco puntos tu deducción: es una actividad prioritaria de mecenazgo (art. 22).",
      extracto:
        "“España Compite” está calificado como actividad prioritaria de mecenazgo, ofreciendo importantes beneficios fiscales a las empresas y empresarios individuales (autónomos) que realicen donativos, donaciones y aportaciones a la Fundación Deporte Joven con destino a la financiación de dicho programa.",
      confianza: "alta",
    },
    {
      id: "universo-mujer-iv",
      nombre: "Universo Mujer IV",
      regimen: "aeip",
      topeAnual: null,
      canonPlano: null,
      viaPublicitaria: true,
      elevacion:
        "Acontecimiento de excepcional interes publico (art. 27.3): admite la via publicitaria.",
      fuente: "F22",
      plano:
        "Deporte de las mujeres: es un acontecimiento de excepcional interés público (art. 27.3) y admite deducir la publicidad.",
      extracto:
        "Los beneficios fiscales de todas estas iniciativas serán los máximos establecidos en el artículo 27.3 de la Ley 49/2002, de 23 de diciembre.",
      confianza: "alta",
    },
    {
      id: "adb-2030-ii",
      nombre: "Plan 2030 de Apoyo al Deporte Base II",
      regimen: "aeip",
      topeAnual: null,
      canonPlano: null,
      viaPublicitaria: true,
      elevacion:
        "Acontecimiento de excepcional interes publico (art. 27.3): admite la via publicitaria.",
      fuente: "F22",
      plano:
        "Deporte base: es un acontecimiento de excepcional interés público (art. 27.3) y admite deducir la publicidad.",
      extracto:
        "Los beneficios fiscales de todas estas iniciativas serán los máximos establecidos en el artículo 27.3 de la Ley 49/2002, de 23 de diciembre.",
      confianza: "alta",
    },
    {
      id: "deporte-inclusivo-iii",
      nombre: "Deporte Inclusivo III",
      regimen: "aeip",
      topeAnual: null,
      canonPlano: null,
      viaPublicitaria: true,
      elevacion:
        "Acontecimiento de excepcional interes publico (art. 27.3): admite la via publicitaria.",
      fuente: "F22",
      plano:
        "Deporte inclusivo: es un acontecimiento de excepcional interés público (art. 27.3) y admite deducir la publicidad.",
      extracto:
        "Los beneficios fiscales de todas estas iniciativas serán los máximos establecidos en el artículo 27.3 de la Ley 49/2002, de 23 de diciembre.",
      confianza: "alta",
    },
  ],
  "F22",
);

/** Tramo de la escala de canon de gestion de los programas AEIP. */
export interface TramoCanon {
  /** Limite superior del tramo, inclusive. */
  hasta: number;
  /** Tipo de canon que se aplica en el tramo. */
  tipo: number;
  etiqueta: string;
  fuente?: string;
}

/**
 * Escala de canon de gestion de los programas AEIP.
 *
 * El material de la Fundacion no aclara si el tipo de cada tramo se aplica solo
 * a la parte del importe que cae en el tramo o a toda la aportacion. Se aplica
 * a toda la aportacion, que es lo que resulta del ejemplo de 20.000 euros del
 * propio material, y queda pendiente de confirmar con la Fundacion.
 */
export const ESCALA_CANON_AEIP = legal<TramoCanon>(
  [
    { hasta: 1000, tipo: 0, etiqueta: "Hasta 1.000 €",
      plano: "Hasta 1.000 €: la Fundación no se queda nada.",
      extracto: "Hasta 1.000,00 € 0,00%",
      confianza: "baja",
    },
    { hasta: 50000, tipo: 0.1, etiqueta: "De 1.000,01 € a 50.000 €",
      plano: "De 1.000,01 € a 50.000 €: la Fundación retiene un 10 %.",
      extracto: "1.000,01 € a 50.000,00 € 10,00%",
      confianza: "baja",
    },
    { hasta: 150000, tipo: 0.0795, etiqueta: "De 50.000,01 € a 150.000 €",
      plano: "De 50.000,01 € a 150.000 €: la Fundación retiene un 7,95 %.",
      extracto: "50.000,01 € a 150.000,00 € 7,95%",
      confianza: "baja",
    },
    { hasta: 500000, tipo: 0.0695, etiqueta: "De 150.000,01 € a 500.000 €",
      plano: "De 150.000,01 € a 500.000 €: la Fundación retiene un 6,95 %.",
      extracto: "150.000,01 € a 500.000,00 € 6,95%",
      confianza: "baja",
    },
    { hasta: 2000000, tipo: 0.0595, etiqueta: "De 500.000,01 € a 2.000.000 €",
      plano: "De 500.000,01 € a 2.000.000 €: la Fundación retiene un 5,95 %.",
      extracto: "500.000,01 € a 2.000.000,00 € 5,95%",
      confianza: "baja",
    },
    {
      hasta: Number.POSITIVE_INFINITY,
      tipo: 0.0395,
      etiqueta: "A partir de 2.000.000,01 €",
      plano: "A partir de 2.000.000,01 €: la Fundación retiene un 3,95 %.",
      extracto: "a partir de 2.000.000,01 € 3,95%",
      confianza: "baja",
    },
  ],
  "F26",
);

/** Hito del calendario de los programas de 2026. */
export interface Hito {
  hito: string;
  /** Fecha en formato ISO, cuando el hito tiene dia. */
  fecha?: string;
  /** Plazo relativo, cuando el hito se cuenta desde otro hecho. */
  plazo?: string;
  nota?: string;
  fuente?: string;
}

export const CALENDARIO_2026 = legal<Hito>(
  [
    {
      hito: "Solicitud de ayuda de la entidad promotora",
      fecha: "2026-12-04",
      nota: "La entidad presenta el proyecto antes de esa fecha.",
      fuente: "F24",
      plano: "La entidad promotora presenta su proyecto antes del 4 de diciembre de 2026.",
      extracto:
        "Los solicitantes de las ayudas, deberán presentar su solicitud, antes del 04/12/2026, enviando un email al buzón espanacompite@deportejoven.es, adjuntando el formulario “Solicitante de ayuda - 2026” y el “Cuestionario de identificación de entidad deportiva / persona física”",
      confianza: "alta",
    },
    {
      hito: "Solicitud de donacion",
      fecha: "2026-12-11",
      nota: "El donante entrega el formulario; la Fundacion valida los proyectos.",
      fuente: "F24",
      plano: "Envías el formulario de donación antes del 11 de diciembre de 2026.",
      extracto:
        "La fecha límite de admisión de solicitudes de donación es el 11/12/2026. No se tramitarán solicitudes recibidas con posterioridad.",
      confianza: "alta",
    },
    {
      hito: "Donacion cobrada por la Fundacion",
      fecha: "2026-12-18",
      nota: "La aprobacion de la ayuda depende de que el dinero ya haya entrado.",
      fuente: "F24",
      plano: "El dinero tiene que estar en la Fundación antes del 18 de diciembre de 2026.",
      extracto:
        "En todo caso, la Fundación Deporte Joven deberá disponer efectivamente de la donación antes del 18/12/2026.",
      confianza: "alta",
    },
    {
      hito: "Justificacion del proyecto",
      plazo: "30 dias desde la conclusion del proyecto",
      nota: "15 dias si el proyecto termina el 31 de diciembre de 2026.",
      fuente: "F24",
      plano: "Entregas la memoria justificativa en el mes siguiente al final del proyecto.",
      extracto:
        "Los beneficiarios deberán presentar una memoria explicativa sobre el proyecto/actividad ejecutada (descargable en https://deportejoven.es/linea-actuacion/espana-compite/), en el plazo de 1 mes una vez finalizado el proyecto/actividad objeto de la ayuda.",
      confianza: "alta",
    },
    {
      hito: "Custodia de los justificantes originales",
      plazo: "2 anos desde la conclusion del proyecto validado",
      fuente: "F24",
      plano: "Guardas los justificantes originales durante dos años.",
      extracto:
        "Los justificantes de gasto y pago por el importe de la ayuda neta concedida deberán ser conservados por los beneficiarios, ya que podrán ser requeridos por motivos de auditoría.",
      confianza: "alta",
    },
    {
      hito: "Justificacion en los programas AEIP",
      plazo: "60 dias desde la conclusion del proyecto",
      nota: "Se justifica ante el organo administrativo del programa, no ante la Fundacion.",
      fuente: "F26",
      plano:
        "Justificas el gasto en 60 días, ante el órgano del programa y no ante la Fundación.",
      extracto:
        "La documentación deberá presentarse en el plazo de dos meses desde la finalización del proyecto, conforme a las condiciones establecidas en el acuerdo.",
      fuentes: ["F26","F25"],
      confianza: "media",
    },
    {
      hito: "Certificacion de los gastos de publicidad",
      plazo: "15 dias tras la celebracion del acontecimiento",
      fuente: "F26",
      plano:
        "Certificas los gastos de publicidad en los 15 días siguientes al acontecimiento.",
      extracto:
        "Debe respetarse el manual de marca y tramitarse la certificación de adecuación de los gastos. Es recomendable conservar facturas, muestras de los soportes y pruebas de difusión desde el inicio de la campaña.",
      fuentes: ["F26","F25"],
      confianza: "media",
    },
    {
      hito: "Remision trimestral de certificaciones a la Agencia Tributaria",
      plazo: "enero, abril, julio y octubre",
      fuente: "F26",
      plano:
        "La Fundación remite a Hacienda las certificaciones en enero, abril, julio y octubre.",
      confianza: "media",
    },
    {
      hito: "Pagos en efectivo",
      plazo: "Prohibidos a partir de 1.000 €",
      nota:
        "El limite general lo fijo la Ley 11/2021, que lo bajo desde el 1 de enero de 2022. Quedan fuera los pagos con cheque o pagare al portador.",
      fuente: "F29",
      plano:
        "No puedes pagar en efectivo a partir de 1.000 €; el cheque y el pagaré al portador quedan fuera.",
      extracto:
        "disminuyendo el límite general de pagos en efectivo de 2.500 a 1.000 euros.",
      confianza: "alta",
    },
  ],
  "F24",
);

/** Defecto verificado en el material publicado por la Fundacion. */
export interface Defecto {
  documento: string;
  publicado: string;
  correcto: string;
  fuente?: string;
}

/**
 * Errores verificados en el material de la Fundacion. Se muestran para que el
 * donante no calcule con las cifras de la prosa, que en algun caso contradicen
 * al grafico del mismo documento.
 */
export const DEFECTOS_FDJ = legal<Defecto>(
  [
    {
      documento: "Bases 2026 y 2025, apartado I",
      publicado: "Citan el «artículo 22 de la Ley 9/2002» como norma del mecenatismo.",
      correcto:
        "El regimen es el de la Ley 49/2002. La Ley 9/2002 es la de los presupuestos de Cantabria.",
      plano:
        "Citan la ley equivocada: el artículo 22 que citan es de presupuestos autonómicos, no del mecenazgo.",
      extracto:
        "Durante 2026, el proyecto “España Compite” está considerado como actividad prioritaria de mecenazgo. Ello implica, de conformidad con lo establecido en el artículo 22 de la Ley 9/2002, de 23 de diciembre, de régimen fiscal de las entidades sin fines lucrativos y de los incentivos fiscales al mecenazgo, que los donativos, donaciones y aportaciones realizadas a la Fundación Deporte Joven que se destinen a “España Compite”, se beneficien de la elevación en cinco puntos porcentuales de los porcentajes y límites de las deducciones establecidas en la citada Ley 49/2002.",
      fuentes: ["F25","F24"],
      confianza: "alta",
    },
    {
      documento: "«Fiscalidad APM 2025», ejemplo practico",
      publicado: "Una donacion de 35.000 € genera una deduccion de 15.750 €.",
      correcto:
        "Son 13.500 €: el limite del 20 % de la base imponible recorta la base antes de aplicar el 45 %.",
      plano:
        "En su ejemplo, la deducción sale más alta de lo que es: el límite recorta antes la base.",
      extracto:
        "Una empresa realiza una donación de 35.000€. El importe de la donación es superior a 150€ e inferior a 50.000€. Además, siempre que dicho importe sea menor o igual al 20% de la base imponible del IS de la empresa, esta podrá deducirse de la cuota íntegra el 45% de 35.000€, es decir, 15.750€.",
      fuentes: ["F25","F32"],
      confianza: "alta",
    },
    {
      documento: "FAQ de mecenatismo, ejemplo de deduccion publicitaria",
      publicado: "El ejemplo muestra «000 €» en los tres importes.",
      correcto: "El ejemplo publicado no es utilizable tal como esta.",
      plano: "En su ejemplo las cifras salen en blanco: el ejemplo no se puede usar.",
      extracto:
        "El 15 % de la publicidad es 000 € . El 90 % de la donación es 000 € . La deducción calculada sería 000 € , antes de los demás límites y requisitos.",
      confianza: "alta",
    },
    {
      documento: "Formulario de donante 2026 y bases, apartado II",
      publicado: "Remiten a los incentivos del «artículo 16 de la Ley 49/2002».",
      correcto:
        "El art. 16 regula las entidades acreedoras; los incentivos estan en los arts. 19 a 22 y la certificacion en el art. 24 del Real Decreto 1270/2003.",
      plano:
        "Mandan a un artículo que no habla de los incentivos: es el de las entidades acreedoras.",
      extracto:
        "Tras la recepción de la Donación, la Fundación Deporte Joven emitirá la correspondiente certificación para que la empresa donante pueda ser beneficiaria de los incentivos fiscales al mecenazgo regulados en el artículo 16 de la Ley 49/2002 de 23 de diciembre.",
      fuentes: ["F25","F31"],
      confianza: "alta",
    },
    {
      documento: "Bases 2026, apartado I",
      publicado: "Fijan el umbral de 150 € junto a la escala del IRPF de 250 €.",
      correcto:
        "El umbral del IRPF es de 250 € desde el Real Decreto-ley 6/2023. El minimo de 150 € es una regla del programa.",
      plano: "Confunden dos límites distintos: el mínimo del programa y el tramo del IRPF.",
      extracto:
        "Por otro lado, cada aportante podrá destinar a “España Compite” un mínimo de 150 euros, y un máximo de 50.000 euros por año.",
      fuentes: ["F25","F24"],
      confianza: "alta",
    },
    {
      documento: "FAQ, seccion de España Compite",
      publicado:
        "Atribuyen la aprobacion del proyecto al certificado del Consejo Superior de Deportes.",
      correcto:
        "España Compite no tiene organo administrativo: evalua una Comision de Valoracion de la Fundacion y la aprobacion la comunica la Fundacion.",
      plano: "Atribuyen a un tercero la aprobación, que en realidad decide la Fundación.",
      extracto:
        "No, una vez que se recibe el certificado de validación por parte del Consejo Superior de Deportes, el proyecto se entiende como aprobado. Pero cada proyecto debe ir acompañado de sus mecenas.",
      confianza: "alta",
    },
    {
      documento: "FAQ, ventajas fiscales para autonomos",
      publicado: "Presentan el 50 % de fidelidad como si sustituyera a los dos tramos.",
      correcto:
        "El 50 % se aplica solo al exceso de 250 €. Con fidelidad, 500 € dan 337,50 € y no 325 €.",
      plano:
        "Presentan el tipo de fidelidad como si sustituyera a los dos tramos del IRPF.",
      extracto:
        "En la cuota íntegra del IRPF, el 85% en los primeros 250€ y del 45% en el importe restante, o el 50% si se cumplen los requisitos de recurrencia: donaciones a la misma entidad durante tres ejercicios, sin disminuir sus importes.",
      confianza: "alta",
    },
    {
      documento: "Formulario de memoria justificativa 2026",
      publicado: "Declara el cumplimiento «durante todo el ejercicio 2025».",
      correcto: "Es un formulario de 2026 que remite al ejercicio anterior.",
      plano: "El formulario es de 2026, pero habla del ejercicio anterior.",
      confianza: "alta",
    },
    {
      documento: "FAQ, procedimiento de solicitud",
      publicado: "Indica «hasta el 4 de diciembre» sin año.",
      correcto: "La fecha es el 4 de diciembre de 2026.",
      plano: "No dicen de qué año es la fecha límite.",
      extracto: "Las solicitudes de ayuda pueden presentarse hasta el 4 de diciembre.",
      confianza: "alta",
    },
    {
      documento: "Modelo «Certificado relacion estudiantes - entidad academica»",
      publicado:
        "El titulo, el texto y el nombre del archivo apuntan a tres emisarios distintos.",
      correcto:
        "Ninguna lectura esta resuelta en la documentacion: hay que confirmar quien firma.",
      plano:
        "El título, el texto y el nombre del archivo apuntan a personas distintas: hay que confirmar quién firma.",
      extracto:
        "Una vez establecido el acuerdo de compromiso para la formación dual académica-deportiva, enmarcado dentro de las bases del programa España Compite, la Entidad Deportiva, con CIF y representado por nombre y cargo, se compromete mediante el presente certificado a dar la relación de deportistas inscritos en su entidad deportiva que van a ser beneficiarios de la dualidad académica-deportiva en la siguiente tabla.",
      fuentes: ["F25","F37"],
      confianza: "baja",
    },
    {
      documento: "Material grafico de AEIP (díptico)",
      publicado: "Anuncia «50 % al 55 %» en la primera columna.",
      correcto:
        "El primer tramo es el 45 %; el 50 % es el tipo de fidelidad sin elevar.",
      plano:
        "En la primera columna saltan dos tipos distintos: el general y el de fidelidad.",
      extracto:
        "Las empresas mecenas podrán deducirse de la cuota del Impuesto sobre Sociedades (IS) del 50% al 55% del importe de la donación que realicen a FDJ para financiar el AEIP.",
      fuentes: ["F25","F26"],
      confianza: "alta",
    },
    {
      documento: "Bases y material de la Fundacion",
      publicado: "Presentan el tope de 50.000 € como regla general del mecenatismo.",
      correcto:
        "Ese tope solo alcanza a la actividad 5.o de la DA 57a, la de España Compite. Los programas AEIP no lo tienen.",
      plano:
        "Lo presentan como tope general del mecenazgo, pero solo alcanza a un programa.",
      extracto:
        "Dicho importe no podrá ser inferior a 150 euros, ni superar el límite de 50.000 euros por año y aportante.",
      fuentes: ["F25","F32"],
      confianza: "alta",
    },
  ],
  "F25",
);

/** Pregunta pendiente de respuesta por la Fundacion. */
export interface Pregunta {
  pregunta: string;
  respuesta?: string;
  fuente?: string;
}

export const PREGUNTAS_FDJ = legal<Pregunta>(
  [
    {
      pregunta:
        "El canon de los programas AEIP se aplica por tramos sobre el total de la aportacion o de forma marginal?",
      fuente: "F26",
      plano:
        "Pregunta si el canon se aplica a toda la aportación o solo a cada tramo, porque cambia el resultado.",
      extracto:
        "FDJ destinará a la ejecución técnica de los proyectos el importe neto resultante de deducir una cuantía-canon de la donación aportada por el mecenas, de acuerdo al cuadro siguiente:",
      confianza: "baja",
    },
    {
      pregunta:
        "La línea de carrera dual tiene publicado el modelo de acuerdo con el centro educativo, y quien firma el certificado de listado de deportistas?",
      fuente: "F24",
      plano:
        "Pregunta quién firma el certificado de la carrera dual, porque el modelo no lo aclara.",
      extracto:
        "En caso de entidad deportiva: Lista de deportistas que desarrollan una carrera dual en el centro académico asociado al acuerdo (modelo disponible para su descarga en la página web de la FDJ)",
      fuentes: ["F24","F25"],
      confianza: "baja",
    },
    {
      pregunta:
        "Que fecha limite real hay para la solicitud de donacion cuando la aportacion se cierra despues del 11 de diciembre de 2026?",
      fuente: "F25",
      plano:
        "Pregunta cuál es la fecha límite real si la aportación se cierra después del 11 de diciembre de 2026.",
      extracto:
        "La fecha límite de admisión de solicitudes de donación es el 11/12/2026. No se tramitarán solicitudes recibidas con posterioridad.",
      fuentes: ["F25", "F24"],
      confianza: "media",
    },
    {
      pregunta:
        "Se mantiene el limite de 50.000 € por aportante en las ediciones de 2027, y se extiende a los programas AEIP?",
      fuente: "F24",
      plano:
        "Pregunta si el tope por aportante se mantiene en 2027 y si se extiende a los programas AEIP.",
      extracto:
        "cada aportante podrá destinar a “España Compite” un mínimo de 150 euros, y un máximo de 50.000 euros por año.",
      confianza: "media",
    },
    {
      pregunta:
        "Que relacion de actividades prioritarias se aplicara si se aprueban los presupuestos de 2026 antes de la convocatoria?",
      fuente: "F6",
      plano:
        "Pregunta qué lista de actividades prioritarias aplicará si se aprueban los presupuestos de 2026 antes de la convocatoria.",
      extracto:
        "la falta de aprobación de la Ley de Presupuestos Generales del Estado para el año 2026 determina la prórroga automática de la Ley 31/2022, de 23 de diciembre, de Presupuestos Generales del Estado para el año 2023 hasta la aprobación de la nueva ley.",
      confianza: "media",
    },
    {
      pregunta:
        "Que pasa con un proyecto ejecutado en el primer trimestre de 2026 cuya ayuda se aprueba en diciembre: solo podra justificar gastos de diciembre?",
      fuente: "F24",
      plano:
        "Pregunta si un proyecto ya ejecutado puede justificar gastos anteriores a la aprobación de su ayuda.",
      extracto:
        "El gasto que podrá financiarse con la ayuda recibida tendrá que haberse generado entre el 01/01/2026 y el 31/12/2026 (período de vigencia de “España Compite”), y dentro del período de ejecución del proyecto presentado por el solicitante.",
      confianza: "media",
    },
  ],
  "F24",
);

/** Nota sobre los programas de 2026 que la interfaz debe mostrar. */
export const NOTAS_PROGRAMAS = legal(
  [
    {
      titulo: "El canon de los programas AEIP esta pendiente de confirmar",
      texto:
        "El material de la Fundacion usa dos lecturas de la escala de canon y divergen a partir de 50.000 €. Se aplica el tipo del tramo sobre toda la aportacion, que es lo que resulta del ejemplo de 20.000 € del propio material, y la duda queda planteada a la Fundacion.",
      fuente: "F26",
      plano:
        "El material de la Fundación no aclara si el canon se aplica al todo o a cada tramo.",
      extracto:
        "FDJ destinará a la ejecución técnica de los proyectos el importe neto resultante de deducir una cuantía-canon de la donación aportada por el mecenas, de acuerdo al cuadro siguiente:",
      confianza: "baja",
    },
    {
      titulo: "Reto De ya no esta en vigor",
      texto:
        "El programa «RETO DE» fue declarado acontecimiento de excepcional interes publico desde el 1 de enero de 2023 hasta el 31 de diciembre de 2025. Su vigencia termino y no aparece en la relacion de 2026, aunque la pagina web de la Fundacion lo siga mostrando como abierto.",
      fuente: "F27",
      plano:
        "El programa «RETO DE» ya no está en vigor, aunque la web de la Fundación lo siga mostrando como abierto.",
      extracto:
        "La duración del programa de apoyo a este acontecimiento abarcará desde el 1 de enero de 2023 hasta el 31 de diciembre de 2025.",
      ancla: "#da-18",
      confianza: "alta",
    },
    {
      titulo: "España Compite no tiene via publicitaria",
      texto:
        "La deduccion del art. 27.3 sobre propaganda y publicidad es una via alternativa y excluyente: solo existe para los acontecimientos de excepcional interes publico. En España Compite la aportacion es siempre donacion.",
      fuente: "F1",
      plano:
        "La deducción por publicidad es una vía aparte y excluyente: en España Compite siempre es donación.",
      extracto:
        "De aplicarse esta deducción, dichas donaciones no podrán acogerse a cualquiera de los incentivos fiscales previstos en esta Ley.",
      ancla: "#a27",
      confianza: "alta",
    },
    {
      titulo: "El tope de 50.000 € recorta antes del tipo",
      texto:
        "La base deducible es la menor de la aportacion, del 20 % de la base imponible y del tope de 50.000 € por aportante. El tipo se aplica despues sobre esa base.",
      fuente: "F18",
      plano: "El tope por aportante recorta la base antes de aplicar el tipo de deducción.",
      extracto:
        "Los donativos, donaciones y aportaciones a las actividades señaladas en el párrafo anterior que, de conformidad con el apartado Dos de esta disposición adicional, pueden beneficiarse de la elevación en cinco puntos porcentuales de los porcentajes y límites de las deducciones establecidas en los artículos 19, 20 y 21 de la citada Ley 49/2002 tendrán el límite de 50.000 euros anuales para cada aportante.",
      ancla: "#da-57",
      confianza: "alta",
    },
    {
      titulo: "El canon no reduce el beneficio fiscal del donante",
      texto:
        "El canon de gestion se descuenta de lo que llega al proyecto, pero la deduccion del donante se calcula sobre el importe total aportado.",
      fuente: "F24",
      plano:
        "El canon se descuenta del proyecto, pero tu deducción se calcula sobre todo lo aportado.",
      extracto:
        "Los gastos de gestión no afectan en modo alguno al beneficio fiscal del que goza el donante (empresa/empresario individual (autónomo)), pudiendo aplicarse el porcentaje de deducción correspondiente sobre la cantidad total donada, con los límites expuestos en el apartado I.",
      confianza: "alta",
    },
  ],
  "F24",
);

/** Aviso de la dependencia del regimen con los presupuestos prorrogados. */
export const AVISO_PRESUPUESTO = legalUno(
  {
    texto:
      "Los porcentajes y los limites de 2026 (45 % y 55 % en el Impuesto sobre Sociedades, 85 %, 45 % y 50 % en el IRPF, el 20 % y el 15 % de tope y los 50.000 €) no vienen de un articulo estable: vienen de la relacion de actividades prioritarias de la DA 57a de la Ley 31/2022, que sigue vigente porque los presupuestos de 2026 no se han aprobado y los de 2023 estan prorrogados. Si se aprueban presupuestos nuevos con otra relacion, las cifras cambian.",
      plano:
        "Las cifras de 2026 dependen de la lista de actividades prioritarias, que cambia con los presupuestos.",
      extracto:
        "En aplicación de la previsión contenida en el artículo 134.4 de la Constitución Española, la falta de aprobación de la Ley de Presupuestos Generales del Estado para el año 2026 determina la prórroga automática de la Ley 31/2022, de 23 de diciembre, de Presupuestos Generales del Estado para el año 2023 hasta la aprobación de la nueva ley.",
      confianza: "media",
  },
  "F6",
);

/* ------------------------------------------------------------------ */
/* Solicitud de ayuda en los programas de 2026                         */
/* ------------------------------------------------------------------ */

/** Linea de actuacion de España Compite 2026. */
export interface LineaActuacion {
  id: "competiciones" | "preparacion" | "actividades" | "carrera-dual";
  nombre: string;
  detalle: string;
  fuente?: string;
}

export const LINEAS_2026 = legal<LineaActuacion>(
  [
    {
      id: "competiciones",
      nombre: "Entidades en competiciones de ligas no profesionales",
      detalle:
        "La entidad participa en competiciones de ligas que no sean profesionales.",
      plano: "Proyectos de entidades que compiten en ligas no profesionales.",
      extracto:
        "1. Participación de entidades deportivas en competiciones (ligas no profesionales).",
      confianza: "alta",
    },
    {
      id: "preparacion",
      nombre: "Preparacion y participacion de deportistas",
      detalle:
        "El deportista prepara y compite, con licencia federativa en vigor.",
      plano: "Proyectos de deportistas que se preparan y compiten con licencia en vigor.",
      extracto:
        "2. Preparación y/o participación de deportistas individuales en competiciones deportivas.",
      confianza: "alta",
    },
    {
      id: "actividades",
      nombre: "Organizacion de actividades deportivas",
      detalle:
        "El proyecto organiza actividades deportivas de promocion y formacion.",
      plano: "Proyectos que organizan actividades deportivas de promoción y formación.",
      extracto: "4. Organización de actividades deportivas.",
      confianza: "alta",
    },
    {
      id: "carrera-dual",
      nombre: "Carrera dual academico-deportiva",
      detalle:
        "La nueva linea de 2026: el entrainamiento compatible con los estudios. Admite gastos del curso academico del ejercicio.",
      fuente: "F24",
      plano: "La línea nueva: el entrenamiento compatible con los estudios.",
      extracto: "3. Carrera dual. Modalidad académico-deportiva",
      confianza: "alta",
    },
  ],
  "F24",
);

/** Requisito de acceso a un programa de 2026. */
export interface RequisitoSolicitud {
  id: string;
  /** A quien se aplica. */
  rol: "entidad" | "deportista" | "promotor" | "todos";
  texto: string;
  ayuda?: string;
  /** Requisito propio de la linea de carrera dual. */
  soloCarreraDual?: boolean;
  fuente?: string;
}

/**
 * Requisitos de acceso a los programas de 2026. Son reglas del programa, no
 * del regimen fiscal: por eso su fuente es el documento del programa.
 */
export const REQUISITOS_SOLICITUD = legal<RequisitoSolicitud>(
  [
    {
      id: "sol-objetivo",
      rol: "todos",
      texto: "Presentar un proyecto que cumpla los objetivos del programa",
      plano: "Presentas un proyecto que encaje con los objetivos del programa.",
      extracto:
        "Presentar un proyecto deportivo que cumpla con los objetivos del programa.",
      confianza: "alta",
    },
    {
      id: "sol-dopaje",
      rol: "todos",
      texto: "No estar sancionado en firme por dopaje",
      plano: "No tienes ninguna sanción de dopaje firme.",
      extracto: "No estar sancionado en firme por dopaje.",
      confianza: "alta",
    },
    {
      id: "sol-sancion",
      rol: "todos",
      texto:
        "No tener sancion disciplinaria o administrativa en materia deportiva de caracter grave o muy grave",
      plano:
        "No tienes sanciones disciplinarias o administrativas graves en materia deportiva.",
      extracto:
        "No tener sanción disciplinaria o administrativa en materia deportiva de carácter grave o muy grave.",
      confianza: "alta",
    },
    {
      id: "sol-competicion",
      rol: "todos",
      texto:
        "Haber participado en alguna competicion oficial en el ano anterior o en el presente",
      plano: "Has competido en alguna competición oficial el año pasado o este año.",
      extracto:
        "Haber participado en alguna competición oficial (año anterior o presente) en cualquiera de las categorías/modalidades reconocidas por su Federación.",
      confianza: "alta",
    },
    {
      id: "sol-aeat",
      rol: "todos",
      texto:
        "Certificado positivo vigente de estar al corriente con la Agencia Estatal de Administracion Tributaria",
      plano: "Presentas el certificado de estar al corriente con Hacienda.",
      extracto:
        "Certificado positivo, en vigor, de estar al corriente en sus obligaciones con la Agencia Estatal de Administración Tributaria.",
      confianza: "alta",
    },
    {
      id: "sol-tgss",
      rol: "todos",
      texto:
        "Certificado positivo vigente de estar al corriente con la Tesoreria General de la Seguridad Social",
      plano: "Presentas el certificado de estar al corriente con la Seguridad Social.",
      extracto:
        "Certificado positivo, en vigor, de estar al corriente en sus obligaciones con la Tesorería General de la Seguridad Social.",
      confianza: "alta",
    },
    {
      id: "sol-blanqueo",
      rol: "todos",
      texto:
        "Cuestionario de identificacion y documentacion de prevencion del blanqueo de capitales y financiacion del terrorismo",
      plano:
        "Rellenas el cuestionario de prevención del blanqueo de capitales y del terrorismo.",
      extracto:
        "Cuestionario de identificación y documentación requerida por la normativa de prevención del blanqueo de capitales y la financiación del terrorismo.",
      confianza: "alta",
    },
    {
      id: "sol-cuenta",
      rol: "todos",
      texto: "Certificado de titularidad de la cuenta bancaria de abono",
      plano:
        "Aportas el certificado de titularidad de la cuenta donde se abonará la ayuda.",
      extracto:
        "Certificado de titularidad de la cuenta bancaria en la que se abonará la ayuda.",
      confianza: "alta",
    },
    {
      id: "sol-inscripcion",
      rol: "entidad",
      texto:
        "Inscripcion en la federacion deportiva o en el Registro de Entidades Deportivas",
      plano:
        "Te has inscrito en la federación deportiva o en el Registro de Entidades Deportivas.",
      extracto:
        "En el caso de entidades, copia de la inscripción en la federación deportiva, o copia de la inscripción en el Registro de entidades deportivas, según corresponda.",
      confianza: "alta",
    },
    {
      id: "sol-licencia-entidad",
      rol: "entidad",
      texto: "Licencia federativa en vigor o documento de vinculacion",
      plano: "Tienes licencia federativa en vigor o un documento que te vincula.",
      confianza: "alta",
    },
    {
      id: "sol-presupuesto",
      rol: "entidad",
      texto: "Presupuesto desglosado del proyecto en el formulario de solicitante",
      plano:
        "Entregas el presupuesto desglosado del proyecto en el formulario de solicitante.",
      extracto:
        "El presupuesto debe ser equilibrado; los ingresos deben ser igual a los gastos",
      fuentes: ["F24","F30"],
      confianza: "alta",
    },
    {
      id: "sol-licencia-deportista",
      rol: "deportista",
      texto: "Licencia federativa en vigor",
      plano: "Tienes la licencia federativa en vigor.",
      extracto:
        "Tener licencia federativa en vigor expedida por alguna de las Federaciones Deportivas oficiales.",
      confianza: "alta",
    },
    {
      id: "sol-matricula",
      rol: "deportista",
      texto:
        "Matricula en un centro educativo con el que exista un acuerdo de colaboracion",
      plano: "Estás matriculado en un centro educativo con acuerdo de colaboración.",
      extracto:
        "Estar matriculado/a en un centro educativo con el que exista un acuerdo de colaboración para facilitar la carrera dual del deportista.",
      confianza: "alta",
    },
    {
      id: "sol-acuerdo-dual",
      rol: "entidad",
      soloCarreraDual: true,
      texto:
        "Acuerdo de colaboracion con un centro educativo, con el modelo que publica la Fundacion",
      plano:
        "Tienes un acuerdo de colaboración con un centro educativo, con el modelo de la Fundación.",
      extracto:
        "ACUERDO DE COMPROMISO PARA LA FORMACIÓN DUAL ACADÉMICO-DEPORTIVA ENTIDAD DEPORTIVA - CENTRO EDUCATIVO",
      fuentes: ["F24","F37"],
      confianza: "alta",
    },
    {
      id: "sol-listado-dual",
      rol: "entidad",
      soloCarreraDual: true,
      texto:
        "Listado de deportistas incluidos en el proyecto, con licencia federativa en vigor",
      ayuda:
        "El modelo que ofrece la Fundacion se titula «Certificado relacion estudiantes - entidad academica»: no queda claro si lo firma la entidad, el centro o ambos.",
      plano: "Entregas la lista de deportistas del proyecto, todos con licencia en vigor.",
      extracto:
        "Una vez establecido el acuerdo de compromiso para la formación dual académica-deportiva, enmarcado dentro de las bases del programa España Compite, la Entidad Deportiva, con CIF y representado por nombre y cargo, se compromete mediante el presente certificado a dar la relación de deportistas inscritos en su entidad deportiva que van a ser beneficiarios de la dualidad académica-deportiva en la siguiente tabla.",
      fuentes: ["F24","F37"],
      confianza: "baja",
    },
    {
      id: "sol-acuerdo-dual-deportista",
      rol: "deportista",
      soloCarreraDual: true,
      texto:
        "Acuerdo de colaboracion con un centro educativo para la linea de carrera dual",
      plano:
        "Tienes un acuerdo de colaboración con un centro educativo para la línea de carrera dual.",
      extracto:
        "ACUERDO DE COMPROMISO PARA LA FORMACIÓN DUAL ACADÉMICO-DEPORTIVA DEPORTISTA - CENTRO EDUCATIVO",
      fuentes: ["F24","F37"],
      confianza: "alta",
    },
    {
      id: "sol-anexo",
      rol: "promotor",
      texto:
        "Modelo de solicitud (Anexo 2) del programa, con el proyecto y el plan de difusion",
      plano:
        "Entregas el modelo de solicitud del programa (Anexo 2) con el proyecto y el plan de difusión.",
      extracto: "FDJ publica un «Anexo 2 – Modelo de solicitud» para cada programa.",
      fuentes: ["F24","F25"],
      confianza: "alta",
    },
    {
      id: "sol-validacion",
      rol: "promotor",
      texto:
        "Certificado de validacion del organo administrativo: el proyecto se entiende aprobado al recibirlo, sin garantia de financiacion",
      plano:
        "El certificado de validación del órgano administrativo es el que aprueba tu proyecto.",
      extracto:
        "No, una vez que se recibe el certificado de validación por parte del Órgano Administrativo, el proyecto se entiende como aprobado. Pero cada proyecto debe ir acompañado de sus mecenas.",
      fuentes: ["F24","F25"],
      confianza: "alta",
    },
  ],
  "F24",
);

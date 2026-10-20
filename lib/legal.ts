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
    url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/guia-practica-cumplimentacion-modelo-censal-036/capitulo-08-regimen-fiscal-especial/entidades-sin-fines-lucrativos.html",
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
};

export interface ConFuente {
  /** Identificador de la fuente en docs/fuentes.md. */
  fuente: string;
  /** Fecha del ultimo contraste con esa fuente. */
  verificadoEn: string;
}

type ConFuenteOpcional = { fuente?: string };

/** Anade a cada entrada su fuente y la fecha del ultimo contraste. */
const legal = <T>(items: T[], fuente: string): (T & ConFuente)[] =>
  items.map((i) => {
    const propia = (i as ConFuenteOpcional).fuente;
    return {
      ...i,
      fuente: propia ?? fuente,
      verificadoEn: VERIFICADO_EN,
    };
  });

/** Una entrada suelta, con su fuente y la fecha del ultimo contraste. */
const legalUno = <T>(item: T, fuente: string): T & ConFuente => {
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
    },
    {
      id: "opcion",
      grupo: "Forma y regimen",
      texto:
        "Ha ejercido la opcion al regimen fiscal especial y la ha comunicado a la Administracion",
      ayuda: "El regimen es voluntario y vinculante mientras no se renuncie",
      fuente: "F12",
    },
    {
      id: "acreedora",
      grupo: "Forma y regimen",
      texto: "Esta incluida en el articulo 16 como entidad acreedora",
      ayuda:
        "Fundacion, asociacion de utilidad publica, universidad publica y los demas supuestos",
    },
    {
      id: "fines",
      grupo: "Requisitos del articulo 3",
      texto: "Persigue fines de interes general",
    },
    {
      id: "setenta",
      grupo: "Requisitos del articulo 3",
      texto: "Destina al menos el 70% de sus rentas e ingresos a esos fines",
      ayuda:
        "Puede hacerlo en los cuatro anos siguientes al cierre del ejercicio",
    },
    {
      id: "cuarenta",
      grupo: "Requisitos del articulo 3",
      texto:
        "Sus explotaciones no exentas ajenas al objeto no superan el 40% de los ingresos",
      ayuda:
        "Incluye ademas que no se vulneren las normas de defensa de la competencia",
    },
    {
      id: "beneficiarios",
      grupo: "Requisitos del articulo 3",
      texto:
        "Fundadores, patronos y asociados no son destinatarios principales ni reciben condiciones especiales",
    },
    {
      id: "gratuitos",
      grupo: "Requisitos del articulo 3",
      texto:
        "Los organos de representacion, vigilancia y administracion son gratuitos",
    },
    {
      id: "disolucion",
      grupo: "Requisitos del articulo 3",
      texto:
        "Su patrimonio se destina a otra entidad sin fines lucrativos en caso de disolucion",
    },
    {
      id: "registro",
      grupo: "Obligaciones de cada ano",
      texto: "Esta inscrita en el registro correspondiente",
      fuente: "F12",
    },
    {
      id: "cuentas",
      grupo: "Obligaciones de cada ano",
      texto: "Cumple sus obligaciones contables y ha rendido cuentas",
      fuente: "F12",
    },
    {
      id: "memoria",
      grupo: "Obligaciones de cada ano",
      texto: "Ha elaborado la memoria economica anual",
      ayuda: "Ingresos y gastos por categorias y por proyectos",
      fuente: "F12",
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
    },
    {
      titulo: "Donativo reiterado",
      detalle: "Tres ejercicios a la misma entidad, importe igual o superior",
      tipo: 50,
    },
    {
      titulo: "Actividad prioritaria",
      detalle: "Destino a una actividad prioritaria de mecenazgo",
      tipo: 45,
    },
    {
      titulo: "Prioritaria y reiterada",
      detalle: "El mejor caso realistically alcanzable",
      tipo: 55,
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
    },
    { titulo: "Resto de la base", detalle: "Donativos no repetidos", tipo: 40 },
    {
      titulo: "Resto con donativo reiterado",
      detalle: "Tres ejercicios a la misma entidad",
      tipo: 45,
    },
  ],
  "F1",
);

export const PRIORITARIAS = legal(
  [
    { concepto: "Primer tramo o tipo general", irpf: "85%", is: "45%" },
    { concepto: "Resto de la base de deduccion", irpf: "45%", is: "45%" },
    { concepto: "Tipo incrementado por reiteracion", irpf: "50%", is: "55%" },
    { concepto: "Limite de la base de deduccion", irpf: "15%", is: "20%" },
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
    },
    {
      titulo: "Cuota liquida, mecenazgo cultural",
      detalle:
        "Solo empresas. 30% de los primeros 300 euros y 20% de los siguientes (art. 31.1.b)",
      tipo: 30,
    },
    {
      titulo: "Cuota liquida, mecenazgo social, medioambiental y deportivo",
      detalle: "Solo empresas. 20% en plano del importe (art. 44.1.b)",
      tipo: 20,
    },
    {
      titulo: "Cuota, primeros 250 euros",
      detalle: "Personas fisicas. Micro-mecenazgo (arts. 30.1 y 43.1)",
      tipo: 80,
    },
    {
      titulo: "Cuota, exceso",
      detalle: "Personas fisicas. Resto de la aportacion",
      tipo: 40,
    },
  ],
  "F17",
);

/* ------------------------------------------------------------------ */
/* Articulos                                                            */
/* ------------------------------------------------------------------ */

export const ARTICULOS = legal(
  [
    { art: "Art. 2", que: "Quien es entidad sin fines lucrativos" },
    { art: "Art. 3", que: "Requisitos para acogerse al regimen" },
    { art: "Art. 6", que: "Rentas exentas en el Impuesto sobre Sociedades" },
    { art: "Art. 15", que: "Tributos locales" },
    { art: "Art. 16", que: "Entidades acreedoras del mecenazgo" },
    {
      art: "Art. 17",
      que: "Donativos, donaciones y aportaciones deducibles, y limite simbolico",
    },
    { art: "Art. 18", que: "Base de la deduccion" },
    { art: "Art. 19", que: "Deduccion en el IRPF" },
    { art: "Art. 20", que: "Deduccion en el Impuesto sobre Sociedades" },
    {
      art: "Art. 21",
      que: "Deduccion en el IRNR, con y sin establecimiento permanente",
    },
    { art: "Art. 22", que: "Actividades prioritarias de mecenazgo" },
    {
      art: "Art. 24",
      que: "Justificacion de los donativos: contenido de la certificacion",
    },
    { art: "Arts. 25-27", que: "Convenios, gastos y acontecimientos" },
    {
      art: "DA 12.ª",
      que: "Federaciones deportivas, Comite Olimpico y Comite Paralimpico",
    },
  ],
  "F1",
);

export const NAVARRA_ARTICULOS = legal(
  [
    {
      art: "Arts. 30.1 y 43.1",
      que: "Personas fisicas: 80% de los primeros 250 euros y 40% del resto",
    },
    {
      art: "Art. 31.1",
      que: "Empresas, mecenazgo cultural: partida deducible y 30%/20% sobre la cuota liquida",
    },
    {
      art: "Art. 44.1",
      que: "Empresas, mecenazgo social, medioambiental y deportivo: partida deducible y 20% sobre la cuota liquida",
    },
    {
      art: "Arts. 39 a 42",
      que: "Mecenazgo deportivo: concepto, beneficiarios, interes social y solicitud",
    },
    {
      art: "Art. 41.3",
      que: "Las competiciones federadas nunca pueden declararse de interes social",
    },
    {
      art: "Arts. 15 a 23",
      que: "Regimen distinto de donaciones a entidades en el regimen foral, no cubierto por el simulador",
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
    { texto: "Fundaciones y asociaciones declaradas de utilidad publica" },
    {
      texto:
        "Organizaciones no gubernamentales de desarrollo de la Ley 23/1998",
    },
    {
      texto:
        "Federaciones deportivas espanolas y territoriales, el Comite Olimpico Espanol y el Comite Paralimpico Espanol",
      deporte: true,
    },
    { texto: "Sus federaciones y asociaciones", deporte: true },
    { texto: "Entidades no residentes con establecimiento permanente anologas" },
    {
      texto:
        "Entidades residentes en la UE o el EEE con normativa de asistencia mutua",
    },
    { texto: "El Estado, las comunidades autonomas y las entidades locales" },
    { texto: "Universidades publicas y los colegios mayores adscritos" },
    { texto: "Instituto Cervantes" },
    { texto: "Institut Ramon Llull e instituciones analogas" },
    { texto: "Organismos Publicos de Investigacion de la AGE" },
    { texto: "Cruz Roja Espanola y Organizacion Nacional de Ciegos Espanoles" },
    { texto: "Obra Pia de los Santos Lugares" },
    {
      texto:
        "Consorcios Casa de America, Casa de Asia y Museu Nacional d Art de Catalunya",
    },
    {
      texto:
        "Fundaciones propias de entidades religiosas inscritas en su registro",
    },
    {
      texto:
        "Entidades de la Iglesia Catolica y confesiones con acuerdo de cooperacion",
    },
    {
      texto: "Instituto de Espana y las Reales Academias integradas en el mismo",
    },
    { texto: "Museo Nacional del Prado" },
    { texto: "Museo Nacional Centro de Arte Reina Sofia" },
  ],
  "F11",
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
    },
    {
      art: "DA 12.ª.1",
      titulo: "Los ingresos de espectáculos deportivos no cuentan para el 40%",
      texto:
        "Los ingresos de los espectáculos deportivos obtenidos por las entidades relacionadas en el parrafo e) del articulo 2 no se incluyen en el computo del 40% de ingresos de explotaciones economicas no exentas del articulo 3.3. Para una federacion, en la practica, esto relaja el requisito mas duro de los tres.",
    },
    {
      art: "DA 12.ª.2",
      titulo: "Exentas las rentas de selecciones nacionales o autonomicas",
      texto:
        "Estan exentas del Impuesto sobre Sociedades las rentas obtenidas por esas entidades que procedan de la celebracion, retransmision o difusion de competiciones amistosas u oficiales en las que participen las selecciones nacionales o autonomicas, siempre que la organizacion de esas competiciones sea de su exclusiva competencia.",
    },
    {
      art: "Art. 16 y 24.3",
      titulo: "Quien puede aportar",
      texto:
        "Recibir una aportacion con incentivo fiscal exige que la entidad este en el articulo 16 y que el aportante obtenga la certificacion con los datos del articulo 24.3. Un patrocinio deportivo corriente no es por si solo mecenazgo: la entidad tiene que estar en esa relacion y cumplir el Titulo II.",
    },
    {
      art: "Art. 17.2 y Ley 34/1988",
      titulo: "Mecenazgo y patrocinio no son lo mismo",
      texto:
        "El mecenazgo admite una contraprestacion simbolica: hasta el 15% del valor de la aportacion y 25.000 euros como maximo, o nada a cambio (art. 17.2). El patrocinio publicitario, con contraprestacion por la difusion de la marca, se rige por la Ley 34/1988, de 11 de noviembre, General de Publicidad, no por esta ley, y no deduce.",
    },
  ],
  "F1",
);

/* ------------------------------------------------------------------ */
/* Base de la deduccion y contenido de la certificacion                 */
/* ------------------------------------------------------------------ */

export const BASE_DEDUCCION = legal(
  [
    { tipo: "Donativos dinerarios", base: "El importe" },
    {
      tipo: "Bienes o derechos",
      base: "Valor contable; a falta de el, el del Impuesto sobre el Patrimonio",
    },
    {
      tipo: "Usufructo sobre inmuebles",
      base: "2% del valor catastral al ano, prorrateado por dias",
    },
    {
      tipo: "Usufructo sobre valores",
      base: "Dividendos o intereses percibidos en cada ejercicio",
    },
    {
      tipo: "Obras de arte garantizadas o del Patrimonio Historico",
      base: "Valoracion de la Junta de Calificacion, Valoracion y Exportacion",
    },
    {
      tipo: "Cesion de uso sin contraprestacion",
      base: "Los gastos del cedente, si fueran deducibles de haber cedido onerosamente",
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
    },
    {
      letra: "b",
      texto:
        "Mencion expresa de que la entidad donataria esta incluida en las reguladas en el articulo 16",
    },
    {
      letra: "c",
      texto: "Fecha e importe del donativo cuando sea dinerario",
    },
    {
      letra: "d",
      texto:
        "Documento publico u otro documento autentico que acredite la entrega del bien donado cuando no se trate de donativos en dinero",
    },
    {
      letra: "e",
      texto: "Destino que la entidad donataria dara al objeto donado",
    },
    {
      letra: "f",
      texto: "Mencion expresa del caracter irrevocable de la donacion",
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
    },
    {
      art: "Art. 26",
      titulo: "Gastos en actividades de interes general",
      tratamiento: "Gasto deducible en la base imponible",
      texto:
        "Los gastos realizados para los fines de interes general tienen la consideracion de deducibles. Tambien incompatible con los demas incentivos de la ley.",
    },
    {
      art: "Art. 27",
      titulo:
        "Programas de apoyo a acontecimientos de excepcional interes publico",
      tratamiento: "Gasto deducible mas incentivo adicional",
      texto:
        "La ley crea el programa de apoyo y regula el tratamiento fiscal de los gastos de propaganda y publicidad originados por su ejecucion.",
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
    "Las llevadas a cabo por el Instituto Cervantes para la promocion y difusion de la lengua espanola y de la cultura mediante redes telematicas, nuevas tecnologias y otros medios.",    "Las actividades llevadas a cabo por el Museo Nacional del Prado para la consecucion de sus fines establecidos en la Ley 46/2003, de 25 de noviembre, reguladora del Museo Nacional del Prado y en el Real Decreto 433/2004, de 12 de marzo, por el que se aprueba el Estatuto del Museo Nacional del Prado.",
    "Las actividades llevadas a cabo por el Museo Nacional Centro de Arte Reina Sofia en cumplimiento de los fines establecidos por la Ley 34/2011, de 4 de octubre, reguladora del Museo Nacional Centro de Arte Reina Sofia y por el Real Decreto 188/2013, de 15 de marzo, por el que se aprueba el Estatuto del Museo Nacional Centro de Arte Reina Sofia.",
    "Las llevadas a cabo por la Biblioteca Nacional de Espana en cumplimiento de los fines y funciones de caracter cultural y de investigacion cientifica establecidos por la Ley 1/2015, de 24 de marzo, reguladora de la Biblioteca Nacional de Espana, y por el Real Decreto 640/2016, de 9 de diciembre, por el que se aprueba el Estatuto de la Biblioteca Nacional de Espana.",
    "Las llevadas a cabo por la Fundacion Deporte Joven en colaboracion con el Consejo Superior de Deportes en el marco del proyecto «Espana Compite: en la Empresa como en el Deporte» con la finalidad de contribuir al impulso y proyeccion de las PYMES espanolas en el ambito interno e internacional, la potenciacion del deporte y la promocion del empresario como motor de crecimiento asociado a los valores del deporte.",
    "La conservacion, restauracion o rehabilitacion de los bienes del Patrimonio Historico Espanol que se relacionan en el anexo XIII de la ley de presupuestos.",
    "Las actividades de fomento, promocion y difusion de las artes scenicas y musicales llevadas a cabo por las Administraciones publicas o con el apoyo de estas.",
    "Las llevadas a cabo por el Instituto de la Cinematografia y de las Artes Audiovisuales para el fomento, promocion, difusion y exhibicion de la actividad cinematografica y audiovisual asi como todas aquellas medidas orientadas a la recuperacion, restauracion, conservacion y difusion del patrimonio cinematografico y audiovisual, todo ello en un contexto de defensa y promocion de la identidad y la diversidad culturales.",
    "La investigacion, desarrollo e innovacion en las infraestructuras que forman parte del Mapa nacional de Infraestructuras Cientificas y Tecnicas Singulares (ICTS) en vigor y que, a este efecto, se relacionan en el anexo XIV de la ley de presupuestos.",
    "La investigacion, el desarrollo y la innovacion orientados a resolver los retos de la sociedad identificados en la Estrategia Espanola de Ciencia y Tecnologia e Innovacion vigente y financiados o realizados por las entidades que, a estos efectos, se reconozcan por el Ministerio de Hacienda y Funcion Publica, a propuesta del Ministerio de Ciencia e Innovacion.",
    "La investigacion, el desarrollo y la innovacion orientados a resolver los retos de la sociedad realizados por los Organismos Publicos de Investigacion Consejo Superior de Investigaciones Cientificas, Instituto de Salud Carlos III, Centro de Investigaciones Energeticas, Medioambientales y Tecnologicas, e Instituto de Astrofisica de Canarias.",
    "El fomento de la difusion, divulgacion y comunicacion de la cultura cientifica y de la innovacion llevadas a cabo por la Fundacion Espanola para la Ciencia y la Tecnologia.",
    "Las llevadas a cabo por la Agencia Estatal de Investigacion para el fomento y financiacion de las actuaciones que derivan de las politicas de I+D de la Administracion General del Estado.",
    "La I+D+I en Biomedicina y Ciencias de la Salud de la Accion Estrategica en Salud llevadas a cabo por el CIBER y CIBERNED.",
    "Los programas de formacion y promocion del voluntariado que hayan sido objeto de subvencion por parte de las Administraciones Publicas.",
    "Las llevadas a cabo por la Fundacion ONCE en el marco del Programa de Becas «Oportunidad al Talento», asi como las actividades desarrolladas por esta entidad en el marco del Programa de Formacion en Competencias y Profesiones Digitales y Tecnologicas «Por Talento Digital».",
    "Las llevadas a cabo por la Fundacion ONCE del Perro Guia en el marco del Proyecto 2022-2023 «Avances para la movilidad de las personas ciegas asistidas por perros guia».",
    "Los programas dirigidos a la erradicacion de la violencia de genero que hayan sido objeto de subvencion por parte de las Administraciones Publicas o se realicen en colaboracion con estas.",
    "Las llevadas a cabo por el Fondo de Becas Soledad Cazorla para Hurfanos de la violencia de genero (Fundacion Mujeres).",
    "Las llevadas a cabo por las Universidades Publicas en cumplimiento de los fines y funciones de caracter educativo, cientifico, tecnologico, cultural y de transferencia del conocimiento, establecidos por la Ley Organica 6/2001, de 21 de diciembre, de Universidades.",
  ].map((texto) => ({ texto })),
  "F18",
);

export const NOTAS_PRIORITARIAS = legal(
  [
    {
      titulo: "Limite de la actividad 5.ª",
      texto:
        "Los donativos a la actividad 5.ª que pueden beneficiarse de la elevacion en cinco puntos tienen el limite de 50.000 euros anuales para cada aportante.",
      fuente: "F18",
    },
    {
      titulo: "Acontecimientos de excepcional interes publico",
      texto:
        "Cada ano se declaran por real decreto-ley los acontecimientos de excepcional interes publico. Sus programas y actividades entran en el regime de mecenazgo prioritario del art. 22 (art. 27). En 2026, el Real Decreto-ley 12/2026, de 26 de mayo.",
      fuente: "F18",
    },
    {
      titulo: "La lista no es permanente",
      texto:
        "La relacion la fija la Ley de Presupuestos Generales del Estado de cada ejercicio. Como no se han aprobado PGE para 2026, sigue vigente la DA 57a de la Ley 31/2022 por la prorroga del Real Decreto-ley 3/2026, de 3 de febrero. Si se aprueban los PGE de 2027 con una nueva disposicion adicional, hay que reverificar esta lista.",
      fuente: "F6",
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
    },
    {
      destino: "social",
      is: "Partida deducible en la base mas el 20% en plano sobre la cuota liquida (art. 44.1.b).",
      irpf: "80% de los primeros 250 euros y 40% del resto en la cuota (art. 43.1).",
    },
    {
      destino: "medioambiental",
      is: "Partida deducible en la base mas el 20% en plano sobre la cuota liquida (art. 44.1.b).",
      irpf: "80% de los primeros 250 euros y 40% del resto en la cuota (art. 43.1).",
    },
    {
      destino: "deportivo",
      is: "Partida deducible en la base mas el 20% en plano sobre la cuota liquida (art. 44.1.b).",
      irpf: "80% de los primeros 250 euros y 40% del resto en la cuota (art. 43.1).",
    },
  ],
  "F17",
);

/** Tope de la partida deducible en el regimen foral. */
export const NAVARRA_TOPE = legalUno(
  {
    texto:
      "El tope de la partida deducible es el mayor entre el 30% de la base imponible y el 3 por mil de este importe.",
  },
  "F17",
);

/** El tramo de 250 euros del IRPF es un cubo unico por contribuyente y ejercicio. */
export const IRPF_CUBO = legalUno(
  {
    texto:
      "Los 250 euros del micro-mecenazgo son un unico cubo por contribuyente y ano: lo que consuman otras aportaciones resta a esta.",
  },
  "F1",
);

/** Limite de la contraprestacion que puede ser simbolica (art. 17.2). */
export const LIMITE_SIMBOLICO = legalUno(
  {
    texto:
      "Hasta el 15% del valor y 25.000 euros como maximo, o nada a cambio (art. 17.2).",
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
    },
    {
      id: "reiterada",
      etiqueta:
        "Hay donativos a esta misma entidad en los 2 periodos anteriores y en este",
      ayuda:
        "Por importe igual o superior al de hace dos años, y durante 3 años seguidos",
    },
    {
      id: "certificado",
      etiqueta:
        "La entidad ha emitido el certificado con los datos exigidos (art. 24.3)",
    },
    {
      id: "simbolico",
      etiqueta: "La entidad entrega algo a cambio, de caracter simbolico",
      ayuda:
        "Hasta el 15% del valor y 25.000 euros como maximo (art. 17.2)",
    },
    {
      id: "interesSocial",
      etiqueta: "La actividad esta declarada de interes social",
      ayuda:
        "Exigido por los arts. 39.1 y 42 del DFL 2/2023. Las competiciones federadas nunca pueden declararse de interes social (art. 41.3)",
      fuente: "F17",
    },
  ],
  "F1",
);

/** El foral navarro no recoge el incremento por actividades prioritarias. */
export const NAVARRA_PRIORITARIAS = legalUno(
  {
    texto:
      "El Decreto Foral Legislativo 2/2023 fija sus propios porcentajes y no recoge el incremento por actividades prioritarias. No se aplica en este calculo.",
  },
  "F17",
);

/** Rotulo de la tabla de porcentajes aplicables a actividades prioritarias. */
export const PRIORITARIAS_TITULO = legalUno(
  {
    texto:
      "Con destino a actividad prioritaria de mecenazgo (articulo 22):",
  },
  "F1",
);

/** Tabla de reglas del regimen foral. */
export const NAVARRA_REGLAS = legal(
  [
    { concepto: "Persona fisica, primeros 250 euros", regla: "80%" },
    { concepto: "Persona fisica, exceso", regla: "40%" },
    { concepto: "Empresa: base imponible", regla: "Partida deducible" },
    {
      concepto: "Tope de esa partida",
      regla:
        "Mayor entre el 30% de la base imponible y el 3 por mil del importe neto de la cifra de negocios",
    },
    {
      concepto: "Empresa, mecenazgo cultural: cuota liquida",
      regla: "30% de los primeros 300 euros y 20% del resto (art. 31.1.b)",
    },
    {
      concepto:
        "Empresa, mecenazgo social, medioambiental y deportivo: cuota liquida",
      regla: "20% en plano (art. 44.1.b)",
    },
    {
      concepto: "Persona fisica: deduccion adicional sobre la cuota liquida",
      regla: "No existe",
    },
  ],
  "F17",
);

/** Presentacion de la relacion de actividades prioritarias. */
export const ACTIVIDADES_INTRO = legalUno(
  {
    texto:
      "Esta lista es la que eleva la deduccion en 5 puntos (45% o 55% en el Impuesto sobre Sociedades, 85%, 45% o 50% en el IRPF). No es permanente: la fija la Ley de Presupuestos Generales del Estado de cada ejercicio y, mientras no se aprueben unos nuevos presupuestos, sigue vigente por prorroga. Cada ano se declaran tambien los acontecimientos de excepcional interes publico que entran en el mismo regime prioritario.",
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
    },
    {
      titulo: "El DFL 2/2023 tiene un regimen de donaciones aparte",
      texto:
        "Sus arts. 15 a 23 regulan las donaciones a entidades que aplican el regimen tributario especial del Titulo I (el IRPF deduce el 25%, art. 16.1, y el IS lo trata como partida deducible con topes del 30% y 3 por mil para bienes de interes cultural y obras de arte, y del 10% y 1 por mil en el resto, art. 20). Es un regime distinto del del mecenazgo y el simulador no lo cubre.",
      fuente: "F17",
    },
  ],
  "F1",
);

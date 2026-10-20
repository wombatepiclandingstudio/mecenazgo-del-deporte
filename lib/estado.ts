import type { Parametros, Perfil, Regimen, DestinoNavarra } from "./mecenazgo";

/** Clave de version: al cambiar la forma de los datos se incrementa. */
export const CLAVE_ALMACEN = "mecenazgo:datos:v1";

export interface Requisito {
  id: string;
  grupo: string;
  texto: string;
  ayuda?: string;
}

export const GRUPOS = [
  "Forma y regimen",
  "Requisitos del articulo 3",
  "Obligaciones de cada ano",
] as const;

export const REQUISITOS: Requisito[] = [
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
  },
  {
    id: "cuentas",
    grupo: "Obligaciones de cada ano",
    texto: "Cumple sus obligaciones contables y ha rendido cuentas",
  },
  {
    id: "memoria",
    grupo: "Obligaciones de cada ano",
    texto: "Ha elaborado la memoria economica anual",
    ayuda: "Ingresos y gastos por categorias y por proyectos",
  },
];

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

/** Resumen de laLey 49/2002 para la pestana de referencia. */
export const ESCALA_IS = [
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
    detalle: "El mejor caso realisticamente alcanzable",
    tipo: 55,
  },
];

export const ESCALA_IRPF = [
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
];

export const PRIORITARIAS = [
  { concepto: "Primer tramo o tipo general", irpf: "85%", is: "45%" },
  { concepto: "Resto de la base de deduccion", irpf: "45%", is: "45%" },
  { concepto: "Tipo incrementado por reiteracion", irpf: "50%", is: "55%" },
  { concepto: "Limite de la base de deduccion", irpf: "15%", is: "20%" },
];

/**
 * Regimen foral de Navarra (Decreto Foral Legislativo 2/2023). No guarda
 * paralelismo con la escala estatal: aqui no hay un porcentaje sobre la cuota
 * integra de 40-55%, sino una partida deducible en la base mas una deduccion
 * sobre la cuota liquida.
 */
export const ESCALA_NAVARRA = [
  {
    titulo: "Partida deducible en la base imponible",
    detalle:
      "Tope: el mayor entre el 30% de la base imponible y el 3 por mil de la cifra de negocios",
    tipo: 0,
  },
  {
    titulo: "Cuota liquida, primeros 300 euros",
    detalle: "Solo empresas. Un unico cubo por contribuyente y periodo",
    tipo: 30,
  },
  {
    titulo: "Cuota liquida, exceso",
    detalle: "Sobre lo que pase de 300 euros",
    tipo: 20,
  },
  {
    titulo: "Cuota, primeros 250 euros",
    detalle: "Personas fisicas. Micro-mecenazgo",
    tipo: 80,
  },
  {
    titulo: "Cuota, exceso",
    detalle: "Personas fisicas. Resto de la aportacion",
    tipo: 40,
  },
  {
    titulo: "Investigacion o tecnologia",
    detalle:
      "Empresas: 40% en la cuota integra por donaciones a entidades de investigacion o tecnologia",
    tipo: 40,
  },
];

export const ARTICULOS = [
  { art: "Art. 2", que: "Quien es entidad sin fines lucrativos" },
  { art: "Art. 3", que: "Requisitos para acogerse al regimen" },
  { art: "Art. 6", que: "Rentas exentas en el Impuesto sobre Sociedades" },
  { art: "Art. 9", que: "Exenciones en tributos locales" },
  { art: "Art. 16", que: "Entidades acreedoras del mecenazgo" },
  { art: "Art. 17", que: "Donativos y aportaciones deducibles" },
  { art: "Art. 18", que: "Base de la deduccion" },
  { art: "Art. 19", que: "Deduccion en el IRPF" },
  { art: "Art. 20", que: "Deduccion en el Impuesto sobre Sociedades" },
  {
    art: "Art. 21",
    que: "Deduccion en el IRNR con establecimiento permanente",
  },
  { art: "Art. 22", que: "Actividades prioritarias de mecenazgo" },
  { art: "Arts. 25-27", que: "Convenios, gastos y acontecimientos" },
];

/**
 * Entidades acreedoras del mecenazgo. Lista tomada de la relacion operativa
 * de la Agencia Tributaria, que recoge el articulo 16 y las disposiciones
 * adicionales que anaden supuestos. `deporte` marca las entidades que estan
 * directamente vinculadas al ambito deportivo.
 */
export interface Acreedora {
  texto: string;
  deporte?: boolean;
}

export const ACREEDORAS: Acreedora[] = [
  { texto: "Fundaciones y asociaciones declaradas de utilidad publica" },
  {
    texto: "Organizaciones no gubernamentales de desarrollo de la Ley 23/1998",
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
  { texto: "Instituto de Espana y las Reales Academias integradas en el" },
  { texto: "Museo Nacional del Prado" },
  { texto: "Museo Nacional Centro de Arte Reina Sofia" },
];

/**
 * Reglas que la ley establece especificamente para el deporte. Son las que
 * separan a una federacion de una fundacion cualquiera, y conviene conocerlas
 * antes de dar por perdido un mecenazgo.
 */
export const DEPORTE_LEY = [
  {
    art: "Art. 2",
    titulo: "Las federaciones son entidades sin fines lucrativos",
    texto:
      "El articulo 2 incluye a las federaciones deportivas espanolas, las territoriales integradas en aquellas, el Comite Olimpico Espanol y el Comite Paralimpico Espanol. Quien este en ese articulo puede acogerse voluntariamente al regimen fiscal especial del Titulo II.",
  },
  {
    art: "DA 12a.1",
    titulo: "Los ingresos de espectáculos deportivos no cuentan para el 40%",
    texto:
      "Los ingresos de los espectáculos deportivos obtenidos por esas entidades no se incluyen en el computo del 40% de ingresos de explotaciones economicas no exentas del articulo 3.3. Para una federacion, en la practica, esto relaja el requisito mas duro de los tres.",
  },
  {
    art: "DA 12a.2",
    titulo: "Exentas las rentas de selecciones nacionales o autonomicas",
    texto:
      "Estan exentas del Impuesto sobre Sociedades las rentas obtenidas por esas entidades que procedan de la celebracion, retransmision o difusion de competiciones amistosas u oficiales en las que participen las selecciones nacionales o autonomicas, siempre que la organizacion de esas competiciones sea de su exclusiva competencia.",
  },
  {
    art: "Art. 16",
    titulo: "Quien puede aportar",
    texto:
      "Recibir una aportacion con incentivo fiscal exige que la entidad este en el articulo 16 y que el aportante obtenga el certificado con los datos del articulo 17. Un patrocinio deportivo corriente no es por si solo mecenazgo: la entidad tiene que estar en esa relacion y cumplir el Titulo II.",
  },
  {
    art: "Arts. 25 a 27",
    titulo: "Patrocinio no es lo mismo que mecenazgo",
    texto:
      "El mecenazgo exige contraprestacion simbolica: hasta el 15% del valor de la aportacion y 25.000 euros como maximo, o nada a cambio. El patrocinio publicitario, con contraprestacion por la difusion de la marca, se regula en los articulos 25 a 27: gasto deducible en el Impuesto sobre Sociedades, y en el IRPF tributa en base la parte que se incrute en la renta, quedando exenta la que constituye ahorro.",
  },
];

export const BASE_DEDUCCION = [
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
];

export const CERTIFICACION_DATOS = [
  "NIF y datos de identificacion del donante",
  "NIF y datos de identificacion de la entidad donataria",
  "Mencion expresa de que la entidad esta incluida en el articulo 16",
  "Fecha e importe del donativo cuando es dinerario",
  "Documento autentico de la entrega si el donativo no es en dinero",
  "Destino que dara la entidad al objeto donado",
  "Mencion expresa del caracter irrevocable de la donacion",
];

export const MODALIDADES = [
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
];

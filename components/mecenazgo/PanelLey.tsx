"use client";

import {
  Badge,
  Box,
  Card,
  Grid,
  Heading,
  HStack,
  List,
  SimpleGrid,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import {
  ACREEDORAS,
  ACTIVIDADES_INTRO,
  ACTIVIDADES_PRIORITARIAS,
  ARTICULOS,
  BASE_DEDUCCION,
  CERTIFICACION_DATOS,
  DEPORTE_LEY,
  FUENTES,
  MODALIDADES,
  NAVARRA_ARTICULOS,
  NAVARRA_REGLAS,
  NOTAS,
  NOTAS_PRIORITARIAS,
  VERIFICADO_EN,
  origen,
  type Confianza,
} from "@/lib/legal";
import { EnlaceLey } from "@/components/mecenazgo/EnlaceLey";

/** Fechas de verificacion en formato espanol. */
const fecha = (iso: string) => iso.split("-").reverse().join("/");

/**
 * De donde sale cada cosa: azul la ley, rojo la Fundacion, violeta los dos.
 * El color nunca va solo: la etiqueta lo dice con palabras.
 */
const PROCEDENCIA = [
  { color: "ley", texto: "Lo que dice la ley (BOE)" },
  { color: "fdj", texto: "Lo que dice deportejoven.es" },
  { color: "mixto", texto: "Lo que dicen los dos" },
] as const;

/** Fuentes agrupadas por donde estan publicadas. */
const FUENTES_LEY = Object.entries(FUENTES).filter(([, f]) =>
  f.url.includes("boe.es"),
);
const FUENTES_AEAT = Object.entries(FUENTES).filter(([, f]) =>
  f.url.includes("agenciatributaria.gob.es"),
);
const FUENTES_FDJ = Object.entries(FUENTES).filter(([, f]) =>
  f.url.includes("deportejoven.es"),
);

export function PanelLey() {
  return (
    <Stack gap={12}>
      <Card.Root>
        <Card.Header>
          <Heading as="h2" size="lg">
            De dónde sale este texto
          </Heading>
          <Card.Description>
            Contraste con fuentes primarias el {fecha(VERIFICADO_EN)}
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap={5}>
            <Text fontSize="sm" color="fg.muted" maxW="70ch">
              Todo el contenido de esta pagina se ha contrastado con las fuentes
              primarias (BOE, Agencia Tributaria y normativa foral de Navarra)
              el {fecha(VERIFICADO_EN)}. Si la aplicacion y la ley discrepan,
              manda la ley.
            </Text>
            <HStack gap={3} flexWrap="wrap">
              {PROCEDENCIA.map((p) => (
                <Badge
                  key={p.color}
                  colorPalette={p.color}
                  variant="subtle"
                  size="sm"
                >
                  {p.texto}
                </Badge>
              ))}
            </HStack>
            <Stack gap={4}>
              <ListaFuentes titulo="Leyes y normas" fuentes={FUENTES_LEY} />
              <ListaFuentes
                titulo="Manuales de la Agencia Tributaria"
                fuentes={FUENTES_AEAT}
              />
              <ListaFuentes
                titulo="Documentos de la Fundación"
                fuentes={FUENTES_FDJ}
              />
            </Stack>
          </Stack>
        </Card.Body>
      </Card.Root>

      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Lo que la ley dice del deporte
        </Heading>
        <Text color="fg.muted" mb={5} maxW="70ch">
          El mecenazgo es un régimen pensado para entidades sin fines lucrativos,
          no para el deporte en general. Estas son las normas que hacen mención
          expresa a las federaciones, y las que separan mecenazgo de patrocinio.
        </Text>
        <Stack gap={4}>
          {DEPORTE_LEY.map((d) => (
            <Card.Root key={d.art} variant="outline">
              <Card.Body>
                <HStack gap={3} mb={2} flexWrap="wrap">
                  <Badge colorPalette="ley" variant="solid">
                    {d.art}
                  </Badge>
                  <Heading as="h3" size="sm">
                    {d.titulo}
                  </Heading>
                </HStack>
                <Text fontSize="sm">{d.plano ?? d.texto}</Text>
                <HStack gap={3} mt={3} flexWrap="wrap" alignItems="center">
                  <EnlaceLey
                    fuente={d.fuente}
                    art={d.art}
                    ancla={d.ancla}
                    plano={d.plano}
                    extracto={d.extracto}
                    origen={origen(d)}
                    confianza={d.confianza}
                  >
                    Ver la ley
                  </EnlaceLey>
                  <FuenteLine entrada={d} />
                </HStack>
              </Card.Body>
            </Card.Root>
          ))}
        </Stack>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Actividades prioritarias de mecenazgo
        </Heading>
        <Text color="fg.muted" mb={3} maxW="70ch">
          {ACTIVIDADES_INTRO.plano ?? ACTIVIDADES_INTRO.texto}
        </Text>
        <Box mb={5}>
          <EnlaceLey
            fuente={ACTIVIDADES_INTRO.fuente}
            art="DA 57.ª"
            ancla={ACTIVIDADES_INTRO.ancla}
            plano={ACTIVIDADES_INTRO.plano}
            extracto={ACTIVIDADES_INTRO.extracto}
            origen={origen(ACTIVIDADES_INTRO)}
            confianza={ACTIVIDADES_INTRO.confianza}
          >
            Ver la lista en el BOE
          </EnlaceLey>
        </Box>
        <Stack gap={5}>
          <List.Root as="ol" variant="plain" listStyleType="none" gap={3}>
            {ACTIVIDADES_PRIORITARIAS.map((a, i) => (
              <List.Item key={i}>
                <List.Indicator
                  fontSize="sm"
                  fontWeight="bold"
                  color="fg.muted"
                  fontVariantNumeric="tabular-nums"
                  minW="1.75rem"
                  textAlign="center"
                >
                  {i + 1}.
                </List.Indicator>
                <Text fontSize="sm">{a.plano ?? a.texto}</Text>
              </List.Item>
            ))}
          </List.Root>
          {NOTAS_PRIORITARIAS.map((n) => (
            <Box key={n.titulo} p={3} borderRadius="md" bg="ley.muted">
              <Text fontSize="sm" fontWeight="semibold" mb={1}>
                {n.titulo}
              </Text>
              <Text fontSize="sm">{n.plano ?? n.texto}</Text>
              <HStack gap={3} mt={2} flexWrap="wrap" alignItems="center">
                <EnlaceLey
                  fuente={n.fuente}
                  ancla={n.ancla}
                  plano={n.plano}
                  extracto={n.extracto}
                  origen={origen(n)}
                  confianza={n.confianza}
                >
                  Ver la ley
                </EnlaceLey>
                <FuenteLine entrada={n} />
              </HStack>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Qué dice cada artículo
        </Heading>
        <Text color="fg.muted" mb={5}>
          El Título II regula el régimen de la entidad que recibe; el Titulo
          III, los incentivos de quien aporta.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={3}>
          {ARTICULOS.map((a) => (
            <Card.Root key={a.art} variant="outline" size="sm">
              <Card.Body>
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  color="ley.fg"
                  letterSpacing="0.06em"
                >
                  {a.art.toUpperCase()}
                </Text>
                <Text fontSize="sm" mt={1}>
                  {a.plano ?? a.que}
                </Text>
                <Box mt={2}>
                  <EnlaceLey
                    fuente={a.fuente}
                    art={a.art}
                    ancla={a.ancla}
                    plano={a.plano}
                    extracto={a.extracto}
                    origen={origen(a)}
                    confianza={a.confianza}
                  >
                    Ver la ley
                  </EnlaceLey>
                </Box>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Quién puede recibir tu aportación con ventaja fiscal
        </Heading>
        <Text color="fg.muted" mb={5} maxW="70ch">
          Es la relación del artículo 16 y de las disposiciones adicionales que
          añaden supuestos. Las marcadas con la etiqueta «deporte» son las que
          tocan al ambito deportivo.
        </Text>
        <Stack as="ul" gap={3}>
          {ACREEDORAS.map((a, i) => (
            <Box as="li" key={a.texto}>
              <HStackLine
                n={i + 1}
                texto={a.plano ?? a.texto}
                deporte={!!a.deporte}
                entrada={a}
              />
            </Box>
          ))}
        </Stack>
      </Box>

      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={5}
        alignItems="start"
      >
        <Card.Root>
          <Card.Header>
            <Card.Title>Sobre qué cantidad se calcula la deducción</Card.Title>
            <Card.Description>Articulo 18</Card.Description>
          </Card.Header>
          <Card.Body>
            <Table.Root size="sm" variant="line" interactive={false}>
              <Table.Caption textAlign="left" fontSize="xs" color="fg.muted">
                Modalidad de la aportacion y base de la deduccion (articulo 18)
              </Table.Caption>
              <Table.Body>
                {BASE_DEDUCCION.map((b) => (
                  <Table.Row key={b.tipo}>
                    <Table.Cell as="th" scope="row" fontWeight="medium">
                      {b.plano ?? b.tipo}
                    </Table.Cell>
                    <Table.Cell color="fg.muted">
                      {b.base}
                      <Box mt={1}>
                        <EnlaceLey
                          fuente={b.fuente}
                          art="Art. 18"
                          ancla={b.ancla}
                          plano={b.plano}
                          extracto={b.extracto}
                          origen={origen(b)}
                          confianza={b.confianza}
                        >
                          Ver la ley
                        </EnlaceLey>
                      </Box>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Card.Title>El papel que te da la entidad</Card.Title>
            <Card.Description>
              Los seis datos que debe llevar el certificado (articulo 24.3)
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <Stack as="ul" gap={3}>
              {CERTIFICACION_DATOS.map((c) => (
                <Box as="li" key={c.letra}>
                  <HStackLine
                    n={c.letra}
                    texto={c.plano ?? c.texto}
                    entrada={c}
                  />
                </Box>
              ))}
            </Stack>
          </Card.Body>
        </Card.Root>
      </Grid>

      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Navarra
        </Heading>
        <Text color="fg.muted" mb={5} maxW="70ch">
          La Ley 49/2002 es la norma estatal, pero no la unica aplicable.
          Navarra tiene régimen foral con reglas propias, y desde 2023 incluye
          tambien el mecenazgo deportivo.
        </Text>
        <Grid
          templateColumns={{ base: "1fr", lg: "1.1fr 1fr" }}
          gap={5}
          alignItems="start"
        >
          <Card.Root borderColor="ley.focusRing" borderWidth="1px">
            <Card.Header>
              <HStack gap={2} flexWrap="wrap">
                <Card.Title>El régimen de Navarra</Card.Title>
                <Badge colorPalette="ley" variant="solid">
                  En vigor
                </Badge>
              </HStack>
              <Card.Description>
                Decreto Foral Legislativo 2/2023, de 24 de mayo
              </Card.Description>
            </Card.Header>
            <Card.Body>
              <Stack gap={3}>
                <Text fontSize="sm">
                  No aplica la Ley 49/2002 a quien tribute por el régimen foral,
                  y los números son distintos, no una versión más alta de los
                  mismos:
                </Text>
                <Table.Root size="sm" variant="line" interactive={false}>
                  <Table.Caption textAlign="left" fontSize="xs" color="fg.muted">
                    Regimen foral de Navarra (Decreto Foral Legislativo 2/2023)
                  </Table.Caption>
                  <Table.Body>
                    {NAVARRA_REGLAS.map((r) => (
                      <Table.Row key={r.concepto}>
                        <Table.Cell as="th" scope="row" fontWeight="medium">
                          {r.plano ?? r.concepto}
                        </Table.Cell>
                        <Table.Cell color="fg.muted" textAlign="end">
                          {r.regla}
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
                <Text fontSize="xs" color="fg.muted">
                  El Decreto Foral Legislativo 2/2023 fija sus propios
                  porcentajes y no recoge el incremento por actividades
                  prioritarias que si aplica la ley estatal.
                </Text>
              </Stack>
            </Card.Body>
          </Card.Root>

          <Card.Root variant="outline">
            <Card.Header>
              <Card.Title>Mecenazgo deportivo en Navarra</Card.Title>
              <Card.Description>
                Articulos 39 a 42 del DFL 2/2023 y los incentivos de los
                articulos 43 y 44
              </Card.Description>
            </Card.Header>
            <Card.Body>
              <Stack gap={3}>
                <Text fontSize="sm">
                  Se entiende por mecenazgo deportivo la participacion privada
                  en la financiacion de actividades deportivas de duracion
                  determinadas declaradas de interes social por la
                  Administracion deportiva foral.
                </Text>
                <Box p={3} borderRadius="md" bg="ley.muted">
                  <Text fontSize="sm" fontWeight="semibold" mb={1}>
                    El limite que conviene saber
                  </Text>
                  <Text fontSize="sm">
                    Nunca pueden declararse de interes social las actividades
                    que consisten en la participacion en competiciones
                    federadas. El mecenazgo foral sportivo se mueve alrededor de
                    la Competicion: formacion, promocion, salud, investigacion y
                    fomento deportivo.
                  </Text>
                </Box>
                <Stack gap={2}>
                  {NAVARRA_ARTICULOS.map((a) => (
                    <Box key={a.art}>
                      <Text fontSize="sm" fontWeight="medium">
                        {a.plano ?? a.que}
                      </Text>
                      <HStack gap={2} mt={1} flexWrap="wrap" alignItems="center">
                        <EnlaceLey
                          fuente={a.fuente}
                          art={a.art}
                          ancla={a.ancla}
                          plano={a.plano}
                          extracto={a.extracto}
                          origen={origen(a)}
                          confianza={a.confianza}
                        >
                          Ver la ley
                        </EnlaceLey>
                        <FuenteLine entrada={a} />
                      </HStack>
                    </Box>
                  ))}
                </Stack>
                <Text fontSize="xs" color="fg.muted">
                  Un patrocinio con contraprestacion publicitaria no entra aqui:
                  es patrocinio a los efectos de los articulos 25 a 27 de la ley
                  estatal.
                </Text>
              </Stack>
            </Card.Body>
          </Card.Root>
        </Grid>
        <Stack gap={4} mt={5}>
          {NOTAS.map((n) => (
            <Box key={n.titulo} p={3} borderRadius="md" bg="ley.muted">
              <Text fontSize="sm" fontWeight="semibold" mb={1}>
                {n.titulo}
              </Text>
              <Text fontSize="sm">{n.plano ?? n.texto}</Text>
              <HStack gap={3} mt={2} flexWrap="wrap" alignItems="center">
                <EnlaceLey
                  fuente={n.fuente}
                  ancla={n.ancla}
                  plano={n.plano}
                  extracto={n.extracto}
                  origen={origen(n)}
                  confianza={n.confianza}
                >
                  Ver la ley
                </EnlaceLey>
                <FuenteLine entrada={n} />
              </HStack>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Las otras formas de colaborar
        </Heading>
        <Text color="fg.muted" mb={5}>
          Ademas del donativo, la ley regula tres vias con tratamiento distinto
          y no acumulable con los incentivos anteriores. El simulador no
          calcula ninguna de las tres: solo aportaciones en dinero.
        </Text>
        <Text color="fg.muted" mb={5} maxW="70ch">
          Tampoco calcula el IRNR, con o sin establecimiento permanente
          (articulo 21), ni el patrocinio publicitario, que se rige por la Ley
          34/1988 y no es mecenazgo.
        </Text>
        <Stack gap={4}>
          {MODALIDADES.map((m) => (
            <Card.Root key={m.art} variant="outline">
              <Card.Body>
                <HStack gap={3} mb={2} flexWrap="wrap">
                  <Badge colorPalette="ley" variant="subtle">
                    {m.art}
                  </Badge>
                  <Heading as="h3" size="sm">
                    {m.titulo}
                  </Heading>
                  <Badge colorPalette="accent" variant="subtle">
                    {m.tratamiento}
                  </Badge>
                </HStack>
                <Text fontSize="sm">{m.plano ?? m.texto}</Text>
                <HStack gap={3} mt={3} flexWrap="wrap" alignItems="center">
                  <EnlaceLey
                    fuente={m.fuente}
                    art={m.art}
                    ancla={m.ancla}
                    plano={m.plano}
                    extracto={m.extracto}
                    origen={origen(m)}
                    confianza={m.confianza}
                  >
                    Ver la ley
                  </EnlaceLey>
                  <FuenteLine entrada={m} />
                </HStack>
              </Card.Body>
            </Card.Root>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}

/** Lista de fuentes con su enlace. */
function ListaFuentes({
  titulo,
  fuentes,
}: {
  titulo: string;
  fuentes: [string, { titulo: string; url: string }][];
}) {
  if (fuentes.length === 0) return null;
  return (
    <Box>
      <Text
        fontSize="xs"
        fontWeight="bold"
        color="ley.fg"
        letterSpacing="0.06em"
        mb={1}
      >
        {titulo.toUpperCase()}
      </Text>
      <Stack gap={1}>
        {fuentes.map(([id, f]) => (
          <Text key={id} fontSize="sm">
            <a href={f.url} target="_blank" rel="noreferrer">
              {f.titulo}
            </a>
          </Text>
        ))}
      </Stack>
    </Box>
  );
}

function HStackLine({
  n,
  texto,
  deporte,
  entrada,
}: {
  n: number | string;
  texto: string;
  deporte?: boolean;
  entrada: {
    fuente: string;
    verificadoEn: string;
    ancla?: string;
    plano?: string;
    extracto?: string;
    confianza?: Confianza;
    fuentes?: string[];
  };
}) {
  return (
    <Stack direction="row" gap={3} alignItems="flex-start">
      <Badge
        variant="surface"
        colorPalette="ley"
        size="sm"
        fontVariantNumeric="tabular-nums"
        minW="1.75rem"
        justifyContent="center"
      >
        {n}
      </Badge>
      <Text
        fontSize="sm"
        color={deporte ? "fg" : "fg.muted"}
        fontWeight={deporte ? "semibold" : "normal"}
      >
        {texto}
      </Text>
      {deporte && (
        <Badge colorPalette="accent" variant="solid" size="xs" flexShrink={0}>
          deporte
        </Badge>
      )}
      <Box flexShrink={0}>
        <EnlaceLey
          fuente={entrada.fuente}
          ancla={entrada.ancla}
          plano={entrada.plano}
          extracto={entrada.extracto}
          origen={origen(entrada)}
          confianza={entrada.confianza}
        >
          Ver la ley
        </EnlaceLey>
      </Box>
    </Stack>
  );
}

/** De donde sale el dato, cuando se compruebo, y con que confianza. */
function FuenteLine({
  entrada,
}: {
  entrada: {
    fuente: string;
    verificadoEn: string;
    confianza?: Confianza;
    fuentes?: string[];
  };
}) {
  const f = FUENTES[entrada.fuente];
  if (!f) return null;
  const dia = fecha(entrada.verificadoEn);
  const paleta = origen(entrada);
  return (
    <Text fontSize="xs" color="fg.muted">
      Fuente:{" "}
      <a href={f.url} target="_blank" rel="noreferrer">
        {f.titulo}
      </a>{" "}
      · verificado el {dia}
      {entrada.confianza && (
        <Badge
          colorPalette={paleta}
          variant="outline"
          size="xs"
          ml={2}
          verticalAlign="middle"
        >
          confianza {entrada.confianza}
        </Badge>
      )}
    </Text>
  );
}

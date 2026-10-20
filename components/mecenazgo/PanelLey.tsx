"use client";

import {
  Badge,
  Box,
  Card,
  Grid,
  Heading,
  HStack,
  Link,
  List,
  SimpleGrid,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import {
  ACREEDORAS,
  ACTIVIDADES_PRIORITARIAS,
  ARTICULOS,
  BASE_DEDUCCION,
  CERTIFICACION_DATOS,
  DEPORTE_LEY,
  FUENTES,
  MODALIDADES,
  NAVARRA_ARTICULOS,
  NOTAS,
  NOTAS_PRIORITARIAS,
  VERIFICADO_EN,
} from "@/lib/legal";

const NAVARRA_RULES = [
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
];

/** Fechas de verificacion en formato espanol. */
const fecha = (iso: string) => iso.split("-").reverse().join("/");

/** Texto de cada actividad prioritaria, con independencia de como llegue. */
const ACTIVIDADES = ACTIVIDADES_PRIORITARIAS.map((a) => a.texto);

/** Fuentes citadas por el contenido que esta pagina muestra. */
const FUENTES_DE_ESTA_PAGINA = [
  ...new Set(
    [
      ...DEPORTE_LEY,
      ...ARTICULOS,
      ...NAVARRA_ARTICULOS,
      ...ACTIVIDADES_PRIORITARIAS,
      ...NOTAS_PRIORITARIAS,
      ...NOTAS,
    ].map((e) => e.fuente),
  ),
].flatMap((id) => {
  const f = FUENTES[id];
  return f ? [{ id, titulo: f.titulo, url: f.url }] : [];
});

export function PanelLey() {
  return (
    <Stack gap={12}>
      <Card.Root>
        <Card.Header>
          <Heading as="h2" size="lg">
            De donde sale este texto
          </Heading>
          <Card.Description>
            Contraste con fuentes primarias el {fecha(VERIFICADO_EN)}
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap={4}>
            <Text fontSize="sm" color="fg.muted" maxW="70ch">
              Todo el contenido de esta pagina se ha contrastado con las fuentes
              primarias (BOE, Agencia Tributaria y normativa foral de Navarra)
              el {fecha(VERIFICADO_EN)}. Si la aplicacion y la ley discrepan,
              manda la ley.
            </Text>
            <Stack gap={1}>
              <Text
                fontSize="xs"
                fontWeight="bold"
                color="brand.fg"
                letterSpacing="0.06em"
              >
                FUENTES
              </Text>
              {FUENTES_DE_ESTA_PAGINA.map((f) => (
                <Text key={f.id} fontSize="sm">
                  <Link
                    href={f.url}
                    target="_blank"
                    rel="noreferrer"
                    color="brand.fg"
                    textDecoration="underline"
                  >
                    {f.titulo}
                  </Link>
                </Text>
              ))}
            </Stack>
          </Stack>
        </Card.Body>
      </Card.Root>

      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Lo que la ley dice del deporte
        </Heading>
        <Text color="fg.muted" mb={5} maxW="70ch">
          El mecenazgo es un regimen pensado para entidades sin fines
          lucrativos, no para el deporte en general. Estas son las normas que
          hacen mencion expresa a las federaciones, y las que separan mecenazgo
          de patrocinio.
        </Text>
        <Stack gap={4}>
          {DEPORTE_LEY.map((d) => (
            <Card.Root key={d.art} variant="outline">
              <Card.Body>
                <HStack gap={3} mb={2} flexWrap="wrap">
                  <Badge colorPalette="brand" variant="solid">
                    {d.art}
                  </Badge>
                  <Heading as="h3" size="sm">
                    {d.titulo}
                  </Heading>
                </HStack>
                <Text fontSize="sm" color="fg.muted">
                  {d.texto}
                </Text>
                <FuenteLine id={d.fuente} fecha={d.verificadoEn} />
              </Card.Body>
            </Card.Root>
          ))}
        </Stack>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Actividades prioritarias de mecenazgo
        </Heading>
        <Text color="fg.muted" mb={5} maxW="70ch">
          Esta lista es la que eleva la deduccion en 5 puntos (45% o 55% en el
          Impuesto sobre Sociedades, 85%, 45% o 50% en el IRPF). No es
          permanente: la fija la Ley de Presupuestos Generales del Estado de
          cada ejercicio y, mientras no se aprueben unos nuevos presupuestos,
          sigue vigente por prorroga. El punto 5.ª tiene un limite de 50.000
          euros por aportante y ano, y cada ano se declaran tambien los
          acontecimientos de excepcional interes publico que entran en el
          mismo regime prioritario.
        </Text>
        <Stack gap={5}>
          <List.Root as="ol" variant="plain" listStyleType="none" gap={3}>
            {ACTIVIDADES.map((a, i) => (
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
                <Text fontSize="sm" color="fg.muted">
                  {a}
                </Text>
              </List.Item>
            ))}
          </List.Root>
          {NOTAS_PRIORITARIAS.map((n) => (
            <Box key={n.titulo} p={3} borderRadius="md" bg="accent.muted">
              <Text fontSize="sm" fontWeight="semibold" mb={1}>
                {n.titulo}
              </Text>
              <Text fontSize="sm">{n.texto}</Text>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Mapa de los articulos
        </Heading>
        <Text color="fg.muted" mb={5}>
          El Titulo II regula el regimen de la entidad beneficiaria; el Titulo
          III, los incentivos del aportante.
        </Text>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={3}>
          {ARTICULOS.map((a) => (
            <Card.Root key={a.art} variant="outline" size="sm">
              <Card.Body>
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  color="brand.fg"
                  letterSpacing="0.06em"
                >
                  {a.art.toUpperCase()}
                </Text>
                <Text fontSize="sm" color="fg.muted" mt={1}>
                  {a.que}
                </Text>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Quien puede recibir una aportacion con incentivo
        </Heading>
        <Text color="fg.muted" mb={5} maxW="70ch">
          Relacion de entidades acreedoras del mecenazgo, con el articulo 16 y
          las disposiciones adicionales que anaden supuestos. Las marcadas con
          la etiqueta «deporte» son las que tocan al ambito deportivo.
        </Text>
        <SimpleGrid as="ul" columns={{ base: 1, md: 2 }} gap={3}>
          {ACREEDORAS.map((a, i) => (
            <Box as="li" key={a.texto}>
              <HStackLine
                n={i + 1}
                texto={a.texto}
                deporte={!!a.deporte}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={5}
        alignItems="start"
      >
        <Card.Root>
          <Card.Header>
            <Card.Title>Base de la deduccion</Card.Title>
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
                      {b.tipo}
                    </Table.Cell>
                    <Table.Cell color="fg.muted">{b.base}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Card.Title>La certificacion</Card.Title>
            <Card.Description>
              Articulo 24.3: los seis extremos que debe recoger
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <Stack as="ul" gap={3}>
              {CERTIFICACION_DATOS.map((c) => (
                <Box as="li" key={c.letra}>
                  <HStackLine n={c.letra} texto={c.texto} />
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
          Navarra tiene regimen foral con reglas propias, y desde 2023 incluye
          tambien el mecenazgo deportivo.
        </Text>
        <Grid
          templateColumns={{ base: "1fr", lg: "1.1fr 1fr" }}
          gap={5}
          alignItems="start"
        >
          <Card.Root borderColor="brand.focusRing" borderWidth="1px">
            <Card.Header>
              <HStack gap={2} flexWrap="wrap">
                <Card.Title>Regimen foral</Card.Title>
                <Badge colorPalette="brand" variant="solid">
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
                  No aplica la Ley 49/2002 a quien tribute por el regimen foral,
                  y los numeros son distintos, no una version mas alta de los
                  mismos:
                </Text>
                <Table.Root size="sm" variant="line" interactive={false}>
                  <Table.Caption textAlign="left" fontSize="xs" color="fg.muted">
                    Regimen foral de Navarra (Decreto Foral Legislativo 2/2023)
                  </Table.Caption>
                  <Table.Body>
                    {NAVARRA_RULES.map((r) => (
                      <Table.Row key={r.concepto}>
                        <Table.Cell as="th" scope="row" fontWeight="medium">
                          {r.concepto}
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
                <Box p={3} borderRadius="md" bg="accent.muted">
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
            <Box key={n.titulo} p={3} borderRadius="md" bg="accent.muted">
              <Text fontSize="sm" fontWeight="semibold" mb={1}>
                {n.titulo}
              </Text>
              <Text fontSize="sm">{n.texto}</Text>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Otras modalidades de colaboracion
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
                  <Badge colorPalette="brand" variant="subtle">
                    {m.art}
                  </Badge>
                  <Heading as="h3" size="sm">
                    {m.titulo}
                  </Heading>
                  <Badge colorPalette="accent" variant="subtle">
                    {m.tratamiento}
                  </Badge>
                </HStack>
                <Text fontSize="sm" color="fg.muted">
                  {m.texto}
                </Text>
              </Card.Body>
            </Card.Root>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}

function HStackLine({
  n,
  texto,
  deporte,
}: {
  n: number | string;
  texto: string;
  deporte?: boolean;
}) {
  return (
    <HStackLike>
      <Badge
        variant="surface"
        colorPalette="brand"
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
    </HStackLike>
  );
}

function HStackLike({ children }: { children: React.ReactNode }) {
  return (
    <Stack direction="row" gap={3} alignItems="flex-start">
      {children}
    </Stack>
  );
}

function FuenteLine({ id, fecha }: { id: string; fecha: string }) {
  const f = FUENTES[id];
  if (!f) return null;
  const dia = fecha.split("-").reverse().join("/");
  return (
    <Text fontSize="xs" color="fg.muted" mt={2}>
      Fuente:{" "}
      <Link
        href={f.url}
        target="_blank"
        rel="noreferrer"
        color="brand.fg"
        textDecoration="underline"
      >
        {f.titulo}
      </Link>{" "}
      · verificado el {dia}
    </Text>
  );
}

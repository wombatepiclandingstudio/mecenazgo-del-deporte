"use client";

import {
  Badge,
  Box,
  Card,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import {
  ACREEDORAS,
  ARTICULOS,
  BASE_DEDUCCION,
  CERTIFICACION_DATOS,
  DEPORTE_LEY,
  MODALIDADES,
} from "@/lib/estado";

const NAVARRA_RULES = [
  { concepto: "Persona fisica, primeros 250 euros", regla: "80%" },
  { concepto: "Persona fisica, exceso", regla: "40%" },
  { concepto: "Empresa: base imponible", regla: "Partida deducible" },
  {
    concepto: "Tope de esa partida",
    regla: "Mayor entre 30% de la base y 3 por mil de la cifra",
  },
  { concepto: "Empresa, cuota liquida", regla: "30% / 20%" },
  {
    concepto: "Empresa, investigacion o tecnologia",
    regla: "40% en cuota integra",
  },
];

export function PanelLey() {
  return (
    <Stack gap={12}>
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
              </Card.Body>
            </Card.Root>
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
          Relacion de entidades beneficiarias del mecenazgo. Las marcadas con
          una estrella son las que tocan al ambito deportivo.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
          {ACREEDORAS.map((a, i) => (
            <HStackLine
              key={a.texto}
              n={i + 1}
              texto={a.texto}
              deporte={!!a.deporte}
            />
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
              <Table.Body>
                {BASE_DEDUCCION.map((b) => (
                  <Table.Row key={b.tipo}>
                    <Table.Cell fontWeight="medium">{b.tipo}</Table.Cell>
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
              Articulo 17: datos que debe recoger
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <Stack gap={3}>
              {CERTIFICACION_DATOS.map((c, i) => (
                <HStackLine key={c} n={i + 1} texto={c} />
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
                  <Table.Body>
                    {NAVARRA_RULES.map((r) => (
                      <Table.Row key={r.concepto}>
                        <Table.Cell fontWeight="medium">
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
                  La ley foral permite que una ley foral eleve hasta 5 puntos
                  los porcentajes de las actividades prioritarias de mecenazgo
                  cultural, social, medioambiental y deportivo.
                </Text>
              </Stack>
            </Card.Body>
          </Card.Root>

          <Card.Root variant="outline">
            <Card.Header>
              <Card.Title>Mecenazgo deportivo en Navarra</Card.Title>
              <Card.Description>
                Articulos 39 a 43 del DFL 2/2023
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
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Otras modalidades de colaboracion
        </Heading>
        <Text color="fg.muted" mb={5}>
          Ademas del donativo, la ley regula tres vias con tratamiento distinto
          y no acumulable con los incentivos anteriores.
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
  n: number;
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

import type { Metadata } from "next";
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mecenazgo del deporte",
  description:
    "Cuanto te devuelve donar y que requisitos tiene que cumplir la entidad que recibe. Simulador del mecenazgo segun la Ley 49/2002 y el regimen foral de Navarra.",
};

const PUERTAS = [
  {
    titulo: "Quiero aportar",
    texto:
      "Cuanto te devuelve la donacion en el IRPF o en el Impuesto sobre Sociedades, con los topes, el limite simbolico y el regimen foral de Navarra.",
    cta: "Calcular mi deduccion",
    href: "/simulador#aportante",
    pie: "El donante, en 30 segundos",
  },
  {
    titulo: "Quiero recibir mecenazgo",
    texto:
      "Si tu entidad cumple los requisitos del regimen fiscal especial y que certificado necesita quien te aporta, con el PDF listo para firmar.",
    cta: "Comprobar mi entidad",
    href: "/simulador#entidad",
    pie: "La entidad acreedora, paso a paso",
  },
];

/**
 * Portada: dos puertas. Una para quien aporta y otra para la entidad que
 * recibe, porque son dos tareas distintas con dos preguntas distintas. La ley
 * queda a un clic, como material de apoyo de las dos.
 */
export default function Page() {
  return (
    <Container maxW="6xl" px={{ base: 4, md: 6 }}>
      <Stack gap={0} pt={{ base: 10, md: 16 }} pb={10}>
        <HStack gap={2} mb={5} flexWrap="wrap">
          <Badge colorPalette="brand" variant="solid" size="sm">
            Ley 49/2002
          </Badge>
          <Badge colorPalette="accent" variant="subtle" size="sm">
            Mecenazgo
          </Badge>
          <Text fontSize="sm" color="fg.muted">
            España y regimen foral de Navarra
          </Text>
        </HStack>

        <Heading as="h1" size="3xl" letterSpacing="-0.02em" maxW="22ch">
          Mecenazgo del deporte
        </Heading>
        <Text mt={5} color="fg.muted" fontSize="lg" maxW="62ch">
          El mecenazgo es el regimen fiscal de las entidades sin fines
          lucrativos: lo que aportan se deduce. Esta herramienta dice cuanto
          te devuelve, y que tiene que cumplir la entidad que lo recibe.
        </Text>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} pb={8}>
        {PUERTAS.map((p) => (
          <Card.Root key={p.titulo} variant="outline" size="lg">
            <Card.Body gap={3}>
              <Text fontSize="xs" color="fg.muted" textTransform="uppercase">
                {p.pie}
              </Text>
              <Heading as="h2" size="md">
                {p.titulo}
              </Heading>
              <Text color="fg.muted" fontSize="sm">
                {p.texto}
              </Text>
            </Card.Body>
            <Card.Footer>
              <Link href={p.href} style={{ textDecoration: "none" }}>
                <Button colorPalette="brand" variant="solid" size="md">
                  {p.cta}
                </Button>
              </Link>
            </Card.Footer>
          </Card.Root>
        ))}
      </SimpleGrid>

      <Stack gap={4} pb={12}>
        <Box>
          <Link href="/ley" style={{ textDecoration: "none" }}>
            <Button variant="outline" colorPalette="gray" size="md">
              Consultar la ley
            </Button>
          </Link>
          <Text mt={3} fontSize="sm" color="fg.muted" maxW="62ch">
            El texto de la ley, los requisitos de las entidades acreedoras y
            las actividades prioritarias de mecenazgo, con la fuente primaria
            de cada dato.
          </Text>
        </Box>

        <Text fontSize="sm" color="fg.muted" maxW="62ch">
          Nada sale de tu navegador: no hay cuentas, ni servidor, ni analítica.
          Los datos se guardan solo en este dispositivo.
        </Text>
      </Stack>
    </Container>
  );
}

import type { Metadata } from "next";
import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { PanelLey } from "@/components/mecenazgo/PanelLey";
import { PanelProgramas } from "@/components/mecenazgo/PanelProgramas";
import { VERIFICADO_EN } from "@/lib/legal";

export const metadata: Metadata = {
  title: "La ley | Mecenazgo del deporte",
  description:
    "Lo que la Ley 49/2002 dice de una federacion, un club o cualquier entidad deportiva: quien puede aportar, cuando la aportacion es mecenazgo y cuando es solo patrocinio.",
};

const fecha = (iso: string) =>
  iso.split("-").reverse().join("/");

/**
 * La ley: texto y referencia. No hay estado ni datos guardados aqui, solo el
 * contenido contrastado con la fuente primaria.
 */
export default function PageLey() {
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
            Texto consolidado del BOE, verificado el {fecha(VERIFICADO_EN)}
          </Text>
        </HStack>

        <Heading as="h1" size="3xl" letterSpacing="-0.02em" maxW="20ch">
          Mecenazgo del deporte
        </Heading>
        <Text mt={5} color="fg.muted" fontSize="lg" maxW="66ch">
          Lo que la Ley 49/2002 dice de una federacion, un club o cualquier
          entidad deportiva: quien puede aportar, cuando la aportacion se
          considera mecenazgo y cuando es solo patrocinio.
        </Text>

        <Box mt={7}>
          <Link href="/simulador" style={{ textDecoration: "none" }}>
            <Button colorPalette="brand" size="lg">
              Ir al simulador
            </Button>
          </Link>
        </Box>
      </Stack>

      <PanelLey />
      <PanelProgramas />
    </Container>
  );
}

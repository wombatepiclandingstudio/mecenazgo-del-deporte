import { Badge, Box, Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { PanelLey } from '@/components/mecenazgo/PanelLey';

/**
 * Portada: la ley. El simulador vive en /simulador, asi que aqui no hay estado
 * ni datos guardados, solo el texto y la referencia.
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
            Texto consolidado del BOE, vigente desde el 1 de enero de 2024
          </Text>
        </HStack>

        <Heading as="h1" size="3xl" letterSpacing="-0.02em" maxW="20ch">
          Mecenazgo del deporte
        </Heading>
        <Text mt={5} color="fg.muted" fontSize="lg" maxW="66ch">
          Lo que la Ley 49/2002 dice de una federacion, un club o cualquier entidad deportiva: quien
          puede aportar, cuando la aportacion se considera mecenazgo y cuando es solo patrocinio.
        </Text>

        <Box mt={7}>
          <Link href="/simulador" style={{ textDecoration: 'none' }}>
            <Button colorPalette="brand" size="lg">
              Ir al simulador
            </Button>
          </Link>
        </Box>
      </Stack>

      <PanelLey />
    </Container>
  );
}

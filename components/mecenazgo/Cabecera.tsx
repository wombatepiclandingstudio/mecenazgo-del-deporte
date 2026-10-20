"use client";

import { Badge, Box, Container, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ENLACES = [
  { href: "/", etiqueta: "La ley" },
  { href: "/simulador", etiqueta: "Simulador" },
];

/**
 * Cabecera comun. El nombre del sitio y la navegacion viven en el layout para
 * que las dos rutas compartan la misma identidad visual.
 */
export function Cabecera() {
  const ruta = usePathname();

  return (
    <Box
      as="header"
      borderBottomWidth="1px"
      bg="bg.panel"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Container maxW="6xl" px={{ base: 4, md: 6 }}>
        <HStack h="64px" justify="space-between" gap={4}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <HStack gap={3}>
              <Box
                w="8px"
                h="22px"
                borderRadius="full"
                bgGradient="to-b"
                gradientFrom="brand.solid"
                gradientTo="accent.solid"
              />
              <Box>
                <Text
                  fontWeight="bold"
                  fontSize="md"
                  lineHeight="1.1"
                  color="fg"
                >
                  Mecenazgo del deporte
                </Text>
                <HStack gap={2} mt="2px">
                  <Badge colorPalette="brand" variant="subtle" size="xs">
                    Ley 49/2002
                  </Badge>
                  <Text fontSize="xs" color="fg.muted">
                    España
                  </Text>
                </HStack>
              </Box>
            </HStack>
          </Link>

          <HStack gap={1} role="navigation" aria-label="Principal">
            {ENLACES.map((e) => {
              const activo = ruta === e.href;
              return (
                <Link
                  key={e.href}
                  href={e.href}
                  aria-current={activo ? "page" : undefined}
                  style={{ textDecoration: "none" }}
                >
                  <Text
                    px={3}
                    py={1.5}
                    borderRadius="md"
                    fontSize="sm"
                    fontWeight={activo ? "semibold" : "normal"}
                    bg={activo ? "brand.subtle" : "transparent"}
                    color={activo ? "brand.fg" : "fg.muted"}
                  >
                    {e.etiqueta}
                  </Text>
                </Link>
              );
            })}
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}

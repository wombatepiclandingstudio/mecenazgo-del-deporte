"use client";

import {
  Badge,
  Box,
  Button,
  CloseButton,
  Dialog,
  HStack,
  Link,
  Portal,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FUENTES, type Confianza, type Origen } from "@/lib/legal";

export interface Props {
  /** Etiqueta del boton, p. ej. "Ver el art. 16". */
  children: React.ReactNode;
  /** Identificador de la fuente, para buscar la URL en FUENTES. */
  fuente: string;
  /** Etiqueta del articulo, p. ej. "Art. 16". */
  art?: string;
  /** Ancla dentro de la pagina de la norma en el BOE, p. ej. "#a16". */
  ancla?: string;
  /** Texto llano: que significa, en palabras corrientes. */
  plano?: string;
  /** Cita literal de la norma. Se muestra en cursiva. */
  extracto?: string;
  /** De donde sale: "ley", "fdj" o "mixto". */
  origen: Origen;
  /** Confianza de la reescritura. */
  confianza?: Confianza;
}

/** Lo que dice cada procedencia, en palabras. */
const PROCEDENCIA: Record<Origen, string> = {
  ley: "Lo dice la ley",
  fdj: "Lo dice deportejoven.es",
  mixto: "Lo dicen los dos",
};

/**
 * Enlace a la norma: abre un modal con la cita literal y el enlace al BOE.
 *
 * El BOE manda X-Frame-Options, asi que no se puede incrustar: el modal
 * enseña el extracto que llega en las props y enlaza fuera.
 */
export function EnlaceLey({
  children,
  fuente,
  art,
  ancla,
  plano,
  extracto,
  origen,
  confianza,
}: Props) {
  const datos = FUENTES[fuente];
  // En movil el modal llena la pantalla; en escritorio va centrado y sin
  // ocupar toda la altura.
  const tamano = useBreakpointValue<"full" | "md">({ base: "full", md: "md" });

  if (!datos) {
    return (
      <Button variant="outline" size="sm" colorPalette={origen} disabled>
        Fuente no disponible
      </Button>
    );
  }

  const destino = ancla ? `${datos.url}${ancla}` : datos.url;
  const textoEnlace = datos.url.includes("boe.es")
    ? "Ver en el BOE"
    : "Ver el documento";

  return (
    <Dialog.Root size={tamano} placement="center" scrollBehavior="inside">
      <Dialog.Trigger asChild>
        <Button variant="outline" size="sm" colorPalette={origen}>
          {children}
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header alignItems="center" flexWrap="wrap">
              <Dialog.Title>{datos.titulo}</Dialog.Title>
              {art && (
                <Badge colorPalette={origen} variant="subtle">
                  {art}
                </Badge>
              )}
            </Dialog.Header>
            <Dialog.Body>
              <Stack gap={4}>
                {plano && <Text fontSize="sm">{plano}</Text>}
                {extracto && (
                  <Box
                    borderLeftWidth="3px"
                    borderLeftColor={`${origen}.solid`}
                    bg={`${origen}.muted`}
                    py={3}
                    pl={4}
                    pr={3}
                  >
                    <Text fontSize="sm" fontStyle="italic">
                      {extracto}
                    </Text>
                  </Box>
                )}
                <HStack gap={2} flexWrap="wrap">
                  <Badge colorPalette={origen} variant="solid">
                    {PROCEDENCIA[origen]}
                  </Badge>
                  {confianza && (
                    <Badge colorPalette={origen} variant="outline">
                      confianza {confianza}
                    </Badge>
                  )}
                </HStack>
                <Link
                  href={destino}
                  target="_blank"
                  rel="noreferrer"
                  color={`${origen}.fg`}
                  textDecoration="underline"
                  fontSize="sm"
                >
                  {textoEnlace} (se abre en otra pestaña)
                </Link>
              </Stack>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" colorPalette={origen} aria-label="Cerrar" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

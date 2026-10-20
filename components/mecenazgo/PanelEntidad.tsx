"use client";

import {
  Badge,
  Box,
  Card,
  Checkbox,
  Grid,
  Heading,
  HStack,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import { type EstadoApp } from "@/lib/estado";
import { GRUPOS, REQUISITOS } from "@/lib/legal";

interface Props {
  estado: EstadoApp;
  onAlternar: (id: string, valor: boolean) => void;
  cumplimiento: { hechos: number; total: number; pct: number };
}

export function PanelEntidad({ estado, onAlternar, cumplimiento }: Props) {
  const { hechos, total, pct } = cumplimiento;

  const mensaje =
    pct === 100
      ? "Todos los puntos marcados. La entidad puede emitir la certificacion con los datos que exige la ley."
      : pct >= 70
        ? "Casi lista. Lo que falte puede dejar sin efecto la deduccion de quien aporta, asi que conviene cerrarlo antes de emitir el certificado."
        : `Faltan ${total - hechos} requisitos por confirmar. Mientras no esten todos, la aportacion puede no deducir.`;

  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1.15fr 0.85fr" }}
      gap={5}
      alignItems="start"
    >
      <Card.Root>
        <Card.Header>
          <Card.Title>Checklist de cumplimiento</Card.Title>
          <Card.Description>
            Requisitos de los articulos 2, 3 y 16 de la Ley 49/2002
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap={0}>
            {GRUPOS.map((grupo) => (
              <Box key={grupo}>
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  color="brand.fg"
                  mt={6}
                  mb={2}
                >
                  {grupo}
                </Text>
                <Stack gap={1}>
                  {REQUISITOS.filter((r) => r.grupo === grupo).map((r) => (
                    <Checkbox.Root
                      key={r.id}
                      checked={!!estado.cumplimiento[r.id]}
                      onCheckedChange={(e) => onAlternar(r.id, !!e.checked)}
                      colorPalette="accent"
                      alignItems="flex-start"
                    >
                      <Checkbox.HiddenInput />
                      <Checkbox.Control mt="2px" />
                      <Checkbox.Label>
                        {r.texto}
                        {r.ayuda && (
                          <Text
                            as="span"
                            display="block"
                            fontSize="xs"
                            color="fg.muted"
                            mt="1px"
                          >
                            {r.ayuda}
                          </Text>
                        )}
                      </Checkbox.Label>
                    </Checkbox.Root>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Card.Body>
      </Card.Root>

      <Stack gap={5}>
        <Card.Root>
          <Card.Header>
            <Card.Title>Estado</Card.Title>
          </Card.Header>
          <Card.Body>
            <HStack justify="space-between" align="baseline" mb={3}>
              <Text fontSize="3xl" fontWeight="bold" letterSpacing="-0.02em">
                {pct}%
              </Text>
              <Badge
                colorPalette={
                  pct === 100 ? "green" : pct >= 70 ? "accent" : "gray"
                }
                variant="subtle"
              >
                {hechos} de {total}
              </Badge>
            </HStack>
            <Progress.Root
              value={pct}
              colorPalette={pct === 100 ? "green" : "accent"}
              size="sm"
            >
              <Progress.Track>
                <Progress.Range />
              </Progress.Track>
            </Progress.Root>
            <Text mt={4} fontSize="sm" color="fg.muted">
              {mensaje}
            </Text>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Card.Title>Que implica para quien aporta</Card.Title>
          </Card.Header>
          <Card.Body>
            <Stack gap={3} fontSize="sm" color="fg.muted">
              <Text>
                El aportante necesita un certificado de la entidad con los seis
                extremos del articulo 24.3. Se genera en la pestana{" "}
                <Text as="span" color="fg" fontWeight="semibold">
                  Certificado
                </Text>
                , en descarga como PDF.
              </Text>
              <Text>
                Si la entidad pierde el regimen fiscal especial, se cae tambien
                la deduccion de las aportaciones ya realizadas. El art. 3 obliga
                ademas a elaborar la memoria economica anual.
              </Text>
            </Stack>
          </Card.Body>
        </Card.Root>

        <Box>
          <Heading as="h3" size="sm" mb={3}>
            Nota sobre la declaracion de utilidad publica
          </Heading>
          <Text fontSize="sm" color="fg.muted">
            Es un filtro de entrada, no una llave. El articulo 2 incluye a las
            fundaciones sin exigir la declaracion, y el articulo 16 abre
            dieciseis supuestos mas. Para una asociacion si es imprescindible.
          </Text>
        </Box>
      </Stack>
    </Grid>
  );
}

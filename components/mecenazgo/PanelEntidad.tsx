"use client";

import {
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Field,
  Grid,
  Heading,
  HStack,
  NativeSelect,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import { type EstadoApp } from "@/lib/estado";
import {
  GRUPOS,
  LINEAS_2026,
  REQUISITOS,
  REQUISITOS_SOLICITUD,
} from "@/lib/legal";

interface Props {
  estado: EstadoApp;
  onAlternar: (id: string, valor: boolean) => void;
  onSolicitud: (parcial: Partial<EstadoApp["solicitud"]>) => void;
  cumplimiento: { hechos: number; total: number; pct: number };
}

export function PanelEntidad({
  estado,
  onAlternar,
  onSolicitud,
  cumplimiento,
}: Props) {
  const { hechos, total, pct } = cumplimiento;
  const rol = estado.solicitud.rol;
  const linea = estado.solicitud.linea;

  /** Requisitos de acceso que aplican al rol y a la linea elegidos. */
  const requisitos = REQUISITOS_SOLICITUD.filter(
    (r) =>
      (r.rol === rol || r.rol === "todos") &&
      (!r.soloCarreraDual || linea === "carrera-dual"),
  );
  const hechosSolicitud = requisitos.filter(
    (r) => estado.cumplimiento[`sol-${r.id}`],
  ).length;

  const mensaje =
    pct === 100
      ? "Todos los puntos marcados. La entidad puede emitir la certificacion con los datos que exige la ley."
      : pct >= 70
        ? "Casi lista. Lo que falte puede dejar sin efecto la deduccion de quien aporta, asi que conviene cerrarlo antes de emitir el certificado."
        : `Faltan ${total - hechos} requisitos por confirmar. Mientras no estén todos, la aportación puede no deducir.`;

  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1.15fr 0.85fr" }}
      gap={5}
      alignItems="start"
    >
      <Card.Root>
        <Card.Header>
          <Card.Title>Lo que tienes que cumplir</Card.Title>
          <Card.Description>
            Requisitos de los artículos 2, 3 y 16 de la Ley 49/2002
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap={0}>
            {GRUPOS.map((grupo) => (
              <Box key={grupo}>
                <Heading as="h3" size="xs" color="brand.fg" mt={6} mb={2}>
                  {grupo}
                </Heading>
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
                        {r.plano ?? r.texto}
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
            <Card.Title>Solicitud de ayuda</Card.Title>
            <Card.Description>
              Quién pide la ayuda y en qué línea de actuación de la convocatoria
              de 2026
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <Stack gap={4}>
              <Box>
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  color="brand.fg"
                  mb={2}
                >
                  Quién solicita la ayuda
                </Text>
                <HStack gap={2} flexWrap="wrap">
                  {(
                    [
                      ["entidad", "Entidad deportiva"],
                      ["deportista", "Deportista individual"],
                      ["promotor", "Promotor AEIP"],
                    ] as const
                  ).map(([id, etiqueta]) => (
                    <Button
                      key={id}
                      size="sm"
                      variant={rol === id ? "subtle" : "ghost"}
                      colorPalette="brand"
                      onClick={() => onSolicitud({ rol: id })}
                    >
                      {etiqueta}
                    </Button>
                  ))}
                </HStack>
              </Box>

              <Field.Root>
                <Field.Label htmlFor="linea">Línea de actuación</Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field
                    id="linea"
                    value={linea}
                    onChange={(e) =>
                      onSolicitud({
                        linea: e.target.value as EstadoApp["solicitud"]["linea"],
                      })
                    }
                  >
                    {LINEAS_2026.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.plano ?? l.nombre}
                      </option>
                    ))}
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
                <Field.HelperText>
                  {LINEAS_2026.find((l) => l.id === linea)?.detalle}
                </Field.HelperText>
              </Field.Root>

              <Box>
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  color="brand.fg"
                  mb={2}
                >
                  Requisitos de acceso ({hechosSolicitud} de {requisitos.length})
                </Text>
                <Stack gap={1}>
                  {requisitos.map((r) => (
                    <Checkbox.Root
                      key={r.id}
                      checked={!!estado.cumplimiento[`sol-${r.id}`]}
                      onCheckedChange={(e) =>
                        onAlternar(`sol-${r.id}`, !!e.checked)
                      }
                      colorPalette="accent"
                      alignItems="flex-start"
                    >
                      <Checkbox.HiddenInput />
                      <Checkbox.Control mt="2px" />
                      <Checkbox.Label>
                        {r.plano ?? r.texto}
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
            </Stack>
          </Card.Body>
        </Card.Root>

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
            <Card.Title>Qué implica para quien aporta</Card.Title>
          </Card.Header>
          <Card.Body>
            <Stack gap={3} fontSize="sm" color="fg.muted">
              <Text>
                Quien aporta necesita un certificado de la entidad con los
                seis datos del artículo 24.3. Se genera en la pestaña{" "}
                <Text as="span" color="fg" fontWeight="semibold">
                  Certificado
                </Text>
                , en descarga como PDF.
              </Text>
              <Text>
                Si la entidad pierde el régimen fiscal especial, se cae también
                la deducción de las aportaciones ya realizadas. El artículo 3
                obliga además a elaborar la memoria económica anual.
              </Text>
            </Stack>
          </Card.Body>
        </Card.Root>

        <Box>
          <Heading as="h3" size="sm" mb={3}>
            Nota sobre la declaracion de utilidad publica
          </Heading>
          <Text fontSize="sm" color="fg.muted">
            Es un filtro de entrada, no una llave. El artículo 2 incluye a las
            fundaciones sin exigir la declaración, y el artículo 16 abre
            dieciséis supuestos más. Para una asociación sí es imprescindible.
          </Text>
        </Box>
      </Stack>
    </Grid>
  );
}

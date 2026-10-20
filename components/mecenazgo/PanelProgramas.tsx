"use client";

import {
  Badge,
  Box,
  Card,
  Heading,
  HStack,
  List,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import { euros } from "@/lib/mecenazgo";
import { formatoTipo } from "@/lib/programas";
import {
  AVISO_PRESUPUESTO,
  CALENDARIO_2026,
  DEFECTOS_FDJ,
  NOTAS_PROGRAMAS,
  PREGUNTAS_FDJ,
  PROGRAMAS_2026,
} from "@/lib/legal";

/**
 * Referencia de los programas de mecenazgo de la Fundacion Deporte Joven en
 * 2026: que ofrece cada uno, que errores trae el material publicado y que
 * queda por preguntar a la Fundacion.
 */
export function PanelProgramas() {
  return (
    <Stack gap={6} mt={10}>
      <Box>
        <Heading as="h2" size="xl" letterSpacing="-0.02em">
          Los programas de 2026
        </Heading>
        <Text mt={3} color="fg.muted" maxW="70ch">
          La Fundacion gestiona cuatro programas de mecenazgo deportivo. Todos
          son actividades prioritarias: suben el tipo cinco puntos. No todos se
          tratan igual: España Compite es una actividad prioritaria de la ley de
          presupuestos y tiene tope anual; los otros tres son acontecimientos
          de excepcional interes publico y admiten la via publicitaria.
        </Text>
      </Box>

      <Card.Root>
        <Card.Header>
          <Card.Title>Comparativa</Card.Title>
        </Card.Header>
        <Card.Body>
          <Table.Root size="sm" variant="line" interactive={false}>
            <Table.Caption captionSide="top">
              Reglas de cada programa en la convocatoria de 2026
            </Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader scope="col">Programa</Table.ColumnHeader>
                <Table.ColumnHeader scope="col">Tope anual</Table.ColumnHeader>
                <Table.ColumnHeader scope="col">Canon de gestion</Table.ColumnHeader>
                <Table.ColumnHeader scope="col">Via publicitaria</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {PROGRAMAS_2026.map((p) => (
                <Table.Row key={p.id}>
                  <Table.Cell as="th" scope="row" fontWeight="normal">
                    {p.nombre}
                    <Text fontSize="xs" color="fg.muted">
                      {p.elevacion}
                    </Text>
                  </Table.Cell>
                  <Table.Cell textAlign="end" fontWeight="semibold">
                    {p.topeAnual === null
                      ? "sin tope"
                      : euros(p.topeAnual)}
                  </Table.Cell>
                  <Table.Cell textAlign="end" fontWeight="semibold">
                    {p.canonPlano === null
                      ? "escala progresiva"
                      : `${formatoTipo(p.canonPlano)} plano`}
                  </Table.Cell>
                  <Table.Cell textAlign="end" fontWeight="semibold">
                    {p.viaPublicitaria ? "si (art. 27.3)" : "no"}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>

          <Text fontSize="xs" color="fg.muted" mt={4}>
            {AVISO_PRESUPUESTO.texto}
          </Text>
        </Card.Body>
      </Card.Root>

      <Card.Root>
        <Card.Header>
          <Card.Title>Calendario</Card.Title>
          <Card.Description>
            El orden de los plazos no es el que se lee: la aprobacion de la
            ayuda depende de que el dinero del donante ya haya entrado.
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Table.Root size="sm" variant="line" interactive={false}>
            <Table.Caption captionSide="top">
              Hitos de la convocatoria y plazos de justificacion
            </Table.Caption>
            <Table.Body>
              {CALENDARIO_2026.map((h) => (
                <Table.Row key={h.hito}>
                  <Table.Cell as="th" scope="row" fontWeight="normal">
                    {h.hito}
                    {h.nota && (
                      <Text fontSize="xs" color="fg.muted">
                        {h.nota}
                      </Text>
                    )}
                  </Table.Cell>
                  <Table.Cell textAlign="end" fontWeight="semibold">
                    {h.fecha ? h.fecha.split("-").reverse().join("/") : h.plazo}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Card.Body>
      </Card.Root>

      <Card.Root>
        <Card.Header>
          <Card.Title>Errores en el material de la Fundacion</Card.Title>
          <Card.Description>
            Verificados uno por uno. En algun caso la prosa contradice al
            grafico del mismo documento.
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Table.Root size="sm" variant="line" interactive={false}>
            <Table.Caption captionSide="top">
              Lo que dice el documento y lo que hay que calcular
            </Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader scope="col">Documento</Table.ColumnHeader>
                <Table.ColumnHeader scope="col">Lo que publica</Table.ColumnHeader>
                <Table.ColumnHeader scope="col">Lo correcto</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {DEFECTOS_FDJ.map((d) => (
                <Table.Row key={d.documento}>
                  <Table.Cell as="th" scope="row" fontWeight="normal">
                    {d.documento}
                  </Table.Cell>
                  <Table.Cell fontSize="xs" color="fg.muted">
                    {d.publicado}
                  </Table.Cell>
                  <Table.Cell fontSize="xs">{d.correcto}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Card.Body>
      </Card.Root>

      <Card.Root>
        <Card.Header>
          <Card.Title>Notas y preguntas para la Fundacion</Card.Title>
        </Card.Header>
        <Card.Body>
          <Stack gap={5}>
            {NOTAS_PROGRAMAS.map((n) => (
              <Box key={n.titulo}>
                <HStack gap={2} mb={1}>
                  <Badge colorPalette="accent" variant="subtle" size="xs">
                    nota
                  </Badge>
                  <Heading as="h3" size="sm">
                    {n.titulo}
                  </Heading>
                </HStack>
                <Text fontSize="sm" color="fg.muted">
                  {n.texto}
                </Text>
              </Box>
            ))}

            <Box>
              <Heading as="h3" size="sm" mb={2}>
                Preguntas pendientes
              </Heading>
              <List.Root gap={2} m={0} p={0}>
                {PREGUNTAS_FDJ.map((p, i) => (
                  <List.Item key={p.pregunta} display="flex" gap={2}>
                    <Text fontSize="sm" color="fg.muted" minW="1.5em">
                      {i + 1}.
                    </Text>
                    <Text fontSize="sm">{p.pregunta}</Text>
                  </List.Item>
                ))}
              </List.Root>
              <Text fontSize="sm" mt={3}>
                <a href="mailto:espanacompite@deportejoven.es">
                  espanacompite@deportejoven.es
                </a>
              </Text>
            </Box>
          </Stack>
        </Card.Body>
      </Card.Root>
    </Stack>
  );
}

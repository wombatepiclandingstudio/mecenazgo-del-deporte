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
  origen,
} from "@/lib/legal";
import { EnlaceLey } from "@/components/mecenazgo/EnlaceLey";

/**
 * Referencia de los programas de mecenazgo deportivo de la Fundacion en
 * 2026: que ofrece cada uno, que errores trae el material publicado y que
 * queda por preguntar a la Fundacion.
 */
export function PanelProgramas() {
  return (
    <Stack gap={6} mt={10}>
      <Box>
        <Heading as="h2" size="xl" letterSpacing="-0.02em">
          Los programas de mecenazgo deportivo de 2026
        </Heading>
        <Text mt={3} color="fg.muted" maxW="70ch">
          La Fundacion gestiona cuatro programas de mecenazgo deportivo. Todos
          son actividades prioritarias: suben el tipo cinco puntos. No todos se
          tratan igual: Espana Compite es una actividad prioritaria de la ley de
          presupuestos y tiene tope anual; los otros tres son acontecimientos
          de excepcional interes publico y admiten la via publicitaria.
        </Text>
      </Box>

      <Card.Root>
        <Card.Header>
          <Card.Title>Las reglas de cada programa</Card.Title>
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
                      {p.plano ?? p.elevacion}
                    </Text>
                    <Box mt={1}>
                      <EnlaceLey
                        fuente={p.fuente}
                        plano={p.plano}
                        extracto={p.extracto}
                        origen={origen(p)}
                        confianza={p.confianza}
                      >
                        Ver el documento
                      </EnlaceLey>
                    </Box>
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

          <Box mt={4}>
            <Text fontSize="xs" color="fg.muted">
              {AVISO_PRESUPUESTO.plano ?? AVISO_PRESUPUESTO.texto}
            </Text>
            <Box mt={2}>
              <EnlaceLey
                fuente={AVISO_PRESUPUESTO.fuente}
                plano={AVISO_PRESUPUESTO.plano}
                extracto={AVISO_PRESUPUESTO.extracto}
                origen={origen(AVISO_PRESUPUESTO)}
                confianza={AVISO_PRESUPUESTO.confianza}
              >
                Ver la ley
              </EnlaceLey>
            </Box>
          </Box>
        </Card.Body>
      </Card.Root>

      <Card.Root>
        <Card.Header>
          <Card.Title>Los plazos</Card.Title>
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
                    {h.plano ?? h.hito}
                    {h.nota && (
                      <Text fontSize="xs" color="fg.muted">
                        {h.nota}
                      </Text>
                    )}
                    <Box mt={1}>
                      <EnlaceLey
                        fuente={h.fuente}
                        plano={h.plano}
                        extracto={h.extracto}
                        origen={origen(h)}
                        confianza={h.confianza}
                      >
                        Ver el documento
                      </EnlaceLey>
                    </Box>
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
                  <Table.Cell fontSize="xs">
                    {d.correcto}
                    {d.plano && (
                      <Text fontSize="xs" color="fg.muted" mt={1}>
                        {d.plano}
                      </Text>
                    )}
                    <Box mt={1}>
                      <EnlaceLey
                        fuente={d.fuente}
                        plano={d.plano}
                        extracto={d.extracto}
                        origen={origen(d)}
                        confianza={d.confianza}
                      >
                        Ver el documento
                      </EnlaceLey>
                    </Box>
                  </Table.Cell>
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
                <HStack gap={2} mb={1} flexWrap="wrap">
                  <Badge colorPalette="fdj" variant="subtle" size="xs">
                    nota
                  </Badge>
                  <Heading as="h3" size="sm">
                    {n.titulo}
                  </Heading>
                  {n.confianza && (
                    <Badge
                      colorPalette={origen(n)}
                      variant="outline"
                      size="xs"
                    >
                      confianza {n.confianza}
                    </Badge>
                  )}
                </HStack>
                <Text fontSize="sm" color="fg.muted">
                  {n.plano ?? n.texto}
                </Text>
                <Box mt={2}>
                  <EnlaceLey
                    fuente={n.fuente}
                    plano={n.plano}
                    extracto={n.extracto}
                    origen={origen(n)}
                    confianza={n.confianza}
                  >
                    Ver el documento
                  </EnlaceLey>
                </Box>
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
                    <Box>
                      <Text fontSize="sm">{p.pregunta}</Text>
                      {p.plano && (
                        <Text fontSize="xs" color="fg.muted">
                          {p.plano}
                        </Text>
                      )}
                      <Box mt={1}>
                        <EnlaceLey
                          fuente={p.fuente}
                          plano={p.plano}
                          extracto={p.extracto}
                          origen={origen(p)}
                          confianza={p.confianza}
                        >
                          Ver el documento
                        </EnlaceLey>
                      </Box>
                    </Box>
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

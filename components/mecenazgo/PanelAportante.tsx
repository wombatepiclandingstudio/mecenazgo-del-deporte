"use client";

import { useMemo } from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Field,
  Grid,
  Heading,
  HStack,
  Input,
  NativeSelect,
  Stack,
  Table,
  Tabs,
  Text,
} from "@chakra-ui/react";
import {
  calcular,
  euros,
  type Perfil,
  type Regimen,
  type DestinoNavarra,
} from "@/lib/mecenazgo";
import type { EstadoApp } from "@/lib/estado";
import {
  ESCALA_IRPF,
  ESCALA_IS,
  ESCALA_NAVARRA,
  PRIORITARIAS,
} from "@/lib/estado";

interface Props {
  estado: EstadoApp;
  onCambiar: (parcial: Partial<EstadoApp["aportante"]>) => void;
}

/**
 * Renderiza el texto de un aviso resaltando los fragmentos indicados.
 * Se hace por trozos en React en lugar de con HTML: el dato llega del modulo
 * de calculo y no debe interpretarse como marcado.
 */
function TextoAviso({
  texto,
  destacados,
}: {
  texto: string;
  destacados: string[];
}) {
  if (!destacados.length) return <>{texto}</>;
  const patron = new RegExp(
    `(${destacados.map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g",
  );
  return (
    <>
      {texto.split(patron).map((trozo, i) =>
        destacados.includes(trozo) ? (
          <b key={i}>{trozo}</b>
        ) : (
          <Text as="span" key={i}>
            {trozo}
          </Text>
        ),
      )}
    </>
  );
}

function Barras() {
  const filas = [...ESCALA_IS.map((f) => ({ ...f, tipo: f.tipo }))];
  return (
    <Stack gap={2}>
      {filas.map((f) => (
        <Grid
          key={f.titulo}
          templateColumns="200px 1fr 56px"
          gap={3}
          alignItems="center"
        >
          <Box>
            <Text fontSize="sm" fontWeight="semibold">
              {f.titulo}
            </Text>
            <Text fontSize="xs" color="fg.muted">
              {f.detalle}
            </Text>
          </Box>
          <Box bg="bg.subtle" borderRadius="md" h="22px" overflow="hidden">
            <Box h="100%" w={`${f.tipo}%`} bg="brand.solid" borderRadius="md" />
          </Box>
          <Text
            fontWeight="bold"
            textAlign="right"
            fontVariantNumeric="tabular-nums"
          >
            {f.tipo}%
          </Text>
        </Grid>
      ))}
    </Stack>
  );
}

export function PanelAportante({ estado, onCambiar }: Props) {
  const p = estado.aportante;
  const r = useMemo(() => calcular(p), [p]);

  const actualizarNumero = (
    campo:
      | "importe"
      | "base"
      | "otrasAportaciones"
      | "valorSimbolico"
      | "cifraNegocios",
    v: string,
  ) =>
    onCambiar({ [campo]: v === "" ? 0 : Math.max(0, Number(v)) } as Partial<
      EstadoApp["aportante"]
    >);

  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      gap={5}
      alignItems="start"
    >
      <Card.Root>
        <Card.Header>
          <Card.Title>Datos de la aportacion</Card.Title>
        </Card.Header>
        <Card.Body>
          <Box mb={5}>
            <Text
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="0.1em"
              textTransform="uppercase"
              color="brand.fg"
              mb={2}
            >
              Regimen aplicable
            </Text>
            <HStack gap={2}>
              <Button
                size="sm"
                flex="1"
                variant={p.regimen === "estatal" ? "subtle" : "ghost"}
                colorPalette="brand"
                onClick={() => onCambiar({ regimen: "estatal" })}
              >
                Estatal
              </Button>
              <Button
                size="sm"
                flex="1"
                variant={p.regimen === "navarra" ? "subtle" : "ghost"}
                colorPalette="brand"
                onClick={() => onCambiar({ regimen: "navarra" })}
              >
                Foral de Navarra
              </Button>
            </HStack>
            <Text fontSize="xs" color="fg.muted" mt={2}>
              {p.regimen === "estatal"
                ? "Ley 49/2002, de 27 de diciembre, de Mecenazgo y deducciones fiscales por donativos a entidades sin fines lucrativos."
                : "Decreto Foral Legislativo 2/2023. No es el mismo regimen que el estatal: aqui la aportacion es partida deducible en la base, no una deduccion del 40-55% de la cuota."}
            </Text>
          </Box>

          <Tabs.Root
            value={p.perfil}
            onValueChange={(e) => onCambiar({ perfil: e.value as Perfil })}
            variant="subtle"
            colorPalette="brand"
            mb={5}
          >
            <Tabs.List>
              <Tabs.Trigger value="is">Empresa (IS)</Tabs.Trigger>
              <Tabs.Trigger value="irpf">Persona fisica (IRPF)</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>

          <Stack gap={4}>
            <Field.Root>
              <Field.Label htmlFor="importe">
                Importe de la aportacion
              </Field.Label>
              <Input
                id="importe"
                type="number"
                min={0}
                step={100}
                inputMode="numeric"
                value={p.importe}
                onChange={(e) => actualizarNumero("importe", e.target.value)}
              />
            </Field.Root>

            <Field.Root>
              <Field.Label htmlFor="base">
                {p.perfil === "is"
                  ? "Base imponible del ejercicio"
                  : "Base liquidable del ejercicio"}
              </Field.Label>
              <Input
                id="base"
                type="number"
                min={0}
                step={1000}
                inputMode="numeric"
                value={p.base}
                onChange={(e) => actualizarNumero("base", e.target.value)}
              />
            </Field.Root>

            {p.regimen === "navarra" && (
              <>
                <Field.Root>
                  <Field.Label htmlFor="destino-navarra">
                    Tipo de mecenazgo foral
                  </Field.Label>
                  <NativeSelect.Root>
                    <NativeSelect.Field
                      id="destino-navarra"
                      value={p.destinoNavarra}
                      onChange={(e) =>
                        onCambiar({
                          destinoNavarra: e.target.value as DestinoNavarra,
                        })
                      }
                    >
                      <option value="deportivo">
                        Deportivo - actividad declarada de interes social (arts.
                        39 a 43)
                      </option>
                      <option value="cultural">
                        Cultural - proyecto declarado de interes social
                      </option>
                      <option value="social">
                        Social - entidad reconocida por el Gobierno de Navarra
                      </option>
                      <option value="investigacion">
                        Investigacion o tecnologia - entidad con actividad
                        similar (solo empresas)
                      </option>
                    </NativeSelect.Field>
                    <NativeSelect.Indicator />
                  </NativeSelect.Root>
                  <Field.HelperText>
                    {p.destinoNavarra === "cultural" &&
                      "Da derecho a la deduccion del 80% / 40% y, en el caso de las empresas, a la partida deducible mas el 30% / 20% de la cuota liquida."}
                    {p.destinoNavarra === "deportivo" &&
                      "Mismas reglas que el mecenazgo social: 80% de los primeros 250 euros y 40% del resto en la cuota. Ojo: en Navarra no pueden declararse de interes social las actividades que consisten en la participacion en competiciones federadas."}
                    {p.destinoNavarra === "social" &&
                      "Mismo 80% / 40% en cuota, pero sin la deduccion adicional sobre la cuota liquida del 30% / 20%."}
                    {p.destinoNavarra === "investigacion" &&
                      "Para empresas: deduccion del 40% en la cuota integra por donaciones a entidades con actividad similar a la de los organismos publicos de investigacion o a los centros tecnologicos."}
                  </Field.HelperText>
                </Field.Root>

                {p.perfil === "is" && (
                  <Field.Root>
                    <Field.Label htmlFor="cifra">
                      Importe neto de la cifra de negocios
                    </Field.Label>
                    <Input
                      id="cifra"
                      type="number"
                      min={0}
                      step={10000}
                      inputMode="numeric"
                      value={p.cifraNegocios}
                      onChange={(e) =>
                        actualizarNumero("cifraNegocios", e.target.value)
                      }
                    />
                    <Field.HelperText>
                      El tope de la partida deducible es el mayor entre el 30%
                      de la base imponible y el 3 por mil de este importe.
                    </Field.HelperText>
                  </Field.Root>
                )}
              </>
            )}

            {p.perfil === "irpf" && p.regimen === "estatal" && (
              <Field.Root>
                <Field.Label htmlFor="otras">
                  Otras aportaciones de este ejercicio
                </Field.Label>
                <Input
                  id="otras"
                  type="number"
                  min={0}
                  step={50}
                  inputMode="numeric"
                  value={p.otrasAportaciones}
                  onChange={(e) =>
                    actualizarNumero("otrasAportaciones", e.target.value)
                  }
                />
                <Field.HelperText>
                  Los 250 euros del micro-mecenazgo son un unico cubo por
                  contribuyente y ano: lo que consuman otras aportaciones resta
                  a esta.
                </Field.HelperText>
              </Field.Root>
            )}

            {p.perfil === "is" && (
              <Field.Root>
                <Field.Label htmlFor="tipo">Tipo impositivo</Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field
                    id="tipo"
                    value={p.tipoImpositivo}
                    onChange={(e) =>
                      onCambiar({ tipoImpositivo: Number(e.target.value) })
                    }
                  >
                    <option value={25}>25% - tipo general</option>
                    <option value={21}>21% - reducida</option>
                    <option value={19}>19% - microempresa</option>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Field.Root>
            )}

            <Box pt={2}>
              <Text
                fontSize="xs"
                fontWeight="bold"
                letterSpacing="0.1em"
                textTransform="uppercase"
                color="brand.fg"
                mb={2}
              >
                Condiciones
              </Text>
              <Stack gap={2}>
                {p.regimen === "navarra" && (
                  <Box
                    p={3}
                    borderRadius="md"
                    bg="accent.muted"
                    borderWidth="1px"
                    borderColor="accent.300"
                  >
                    <Text fontSize="sm">
                      En el regimen foral no se aplican los topes del articulo
                      20 ni el incremento por donativos reiterados. La ley foral
                      si permite que un Acuerdo de Gobierno eleve hasta 5 puntos
                      los porcentajes de las actividades prioritarias, pero se
                      aplica por relacion y no se puede calcular con estos
                      datos.
                    </Text>
                  </Box>
                )}

                {p.regimen === "estatal" && (
                  <>
                    <Checkbox.Root
                      checked={p.prioritaria}
                      onCheckedChange={(e) =>
                        onCambiar({ prioritaria: !!e.checked })
                      }
                      colorPalette="accent"
                      alignItems="flex-start"
                    >
                      <Checkbox.HiddenInput />
                      <Checkbox.Control mt="2px" />
                      <Checkbox.Label>
                        Va dirigida a una actividad prioritaria de mecenazgo
                        <Text
                          as="span"
                          display="block"
                          fontSize="xs"
                          color="fg.muted"
                          mt="1px"
                        >
                          Sube el tipo 5 puntos y el limite otros 5
                        </Text>
                      </Checkbox.Label>
                    </Checkbox.Root>

                    <Checkbox.Root
                      checked={p.reiterada}
                      onCheckedChange={(e) =>
                        onCambiar({ reiterada: !!e.checked })
                      }
                      colorPalette="accent"
                      alignItems="flex-start"
                    >
                      <Checkbox.HiddenInput />
                      <Checkbox.Control mt="2px" />
                      <Checkbox.Label>
                        Hay donativos a esta misma entidad en los 2 anos
                        anteriores
                        <Text
                          as="span"
                          display="block"
                          fontSize="xs"
                          color="fg.muted"
                          mt="1px"
                        >
                          Por importe igual o superior, durante 3 anos seguidos
                        </Text>
                      </Checkbox.Label>
                    </Checkbox.Root>
                  </>
                )}

                <Checkbox.Root
                  checked={p.certificado}
                  onCheckedChange={(e) =>
                    onCambiar({ certificado: !!e.checked })
                  }
                  colorPalette="accent"
                  alignItems="flex-start"
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control mt="2px" />
                  <Checkbox.Label>
                    La entidad ha emitido el certificado con los datos exigidos
                  </Checkbox.Label>
                </Checkbox.Root>

                <Checkbox.Root
                  checked={p.entregaSimbolica}
                  onCheckedChange={(e) =>
                    onCambiar({ entregaSimbolica: !!e.checked })
                  }
                  colorPalette="accent"
                  alignItems="flex-start"
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control mt="2px" />
                  <Checkbox.Label>
                    La entidad entrega algo a cambio, de caracter simbolico
                    <Text
                      as="span"
                      display="block"
                      fontSize="xs"
                      color="fg.muted"
                      mt="1px"
                    >
                      Hasta el 15% del valor y 25.000 euros como maximo
                    </Text>
                  </Checkbox.Label>
                </Checkbox.Root>

                {p.entregaSimbolica && (
                  <Field.Root pl={6}>
                    <Field.Label htmlFor="simbolico">
                      Valor de lo recibido a cambio
                    </Field.Label>
                    <Input
                      id="simbolico"
                      type="number"
                      min={0}
                      step={100}
                      inputMode="numeric"
                      value={p.valorSimbolico}
                      onChange={(e) =>
                        actualizarNumero("valorSimbolico", e.target.value)
                      }
                    />
                  </Field.Root>
                )}
              </Stack>
            </Box>
          </Stack>
        </Card.Body>
      </Card.Root>

      <Stack gap={5}>
        <Card.Root>
          <Card.Header>
            <Card.Title>Resultado</Card.Title>
          </Card.Header>
          <Card.Body>
            <Table.Root size="sm" variant="line" interactive={false}>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Tipo de deduccion aplicable</Table.Cell>
                  <Table.Cell textAlign="end" fontWeight="bold">
                    {r.tipoEtiqueta}
                  </Table.Cell>
                </Table.Row>
                {p.regimen === "estatal" ? (
                  <Table.Row>
                    <Table.Cell>Base de la deduccion</Table.Cell>
                    <Table.Cell textAlign="end" fontWeight="bold">
                      {euros(r.base)}
                    </Table.Cell>
                  </Table.Row>
                ) : (
                  r.lineas.map((l) => (
                    <Table.Row key={l.concepto}>
                      <Table.Cell>
                        <Text fontWeight="semibold">{l.concepto}</Text>
                        <Text fontSize="xs" color="fg.muted">
                          {l.detalle}
                        </Text>
                      </Table.Cell>
                      <Table.Cell textAlign="end" fontWeight="semibold">
                        {euros(l.importe)}
                      </Table.Cell>
                    </Table.Row>
                  ))
                )}
                <Table.Row>
                  <Table.Cell bg="brand.subtle">
                    <Text fontWeight="semibold" color="brand.fg">
                      {p.regimen === "estatal"
                        ? "Deduccion en la cuota"
                        : "Ahorro estimado"}
                    </Text>
                  </Table.Cell>
                  <Table.Cell bg="brand.subtle" textAlign="end">
                    <Text fontSize="xl" fontWeight="bold" color="brand.fg">
                      {euros(r.deduccion)}
                    </Text>
                  </Table.Cell>
                </Table.Row>
                {p.regimen === "estatal" && (
                  <Table.Row>
                    <Table.Cell color="fg.muted">
                      Pendiente para los 10 anos siguientes
                    </Table.Cell>
                    <Table.Cell textAlign="end" color="fg.muted">
                      {r.pendiente > 0.5 ? euros(r.pendiente) : "—"}
                    </Table.Cell>
                  </Table.Row>
                )}
                <Table.Row>
                  <Table.Cell fontWeight="semibold">Coste neto real</Table.Cell>
                  <Table.Cell textAlign="end" fontWeight="bold">
                    {euros(r.neto)}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>

            <Box mt={5}>
              <Box display="flex" h="34px" borderRadius="md" overflow="hidden">
                <Box
                  w={`${r.descuento}%`}
                  bg="accent.solid"
                  color="#2b2320"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xs"
                  fontWeight="bold"
                  transition="width .3s ease"
                >
                  te devuelve
                </Box>
                <Box
                  flex="1"
                  bg="bg.muted"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xs"
                  color="fg.muted"
                >
                  neto
                </Box>
              </Box>
              <HStack
                justify="space-between"
                mt={2}
                fontSize="xs"
                color="fg.muted"
              >
                <Text>{Math.round(r.descuento)}% del importe donado</Text>
                <Text>{Math.round(100 - r.descuento)}% coste final</Text>
              </HStack>
            </Box>

            {r.avisos.length > 0 && (
              <Box
                mt={5}
                p={4}
                borderRadius="md"
                bg={
                  r.avisos.some((a) => a.bloqueante)
                    ? "red.subtle"
                    : "accent.muted"
                }
                borderWidth="1px"
                borderColor={
                  r.avisos.some((a) => a.bloqueante) ? "red.300" : "accent.300"
                }
              >
                <Heading as="h3" size="xs" mb={2}>
                  {r.avisos.some((a) => a.bloqueante)
                    ? "Revisa antes de continuar"
                    : "Notas"}
                </Heading>
                <Stack gap={2}>
                  {r.avisos.map((a, i) => (
                    <HStack key={i} gap={2} alignItems="flex-start">
                      <Box
                        mt="8px"
                        w="5px"
                        h="5px"
                        borderRadius="full"
                        bg="currentColor"
                        flexShrink={0}
                      />
                      <Text fontSize="sm">
                        <TextoAviso texto={a.texto} destacados={a.destacados} />
                      </Text>
                    </HStack>
                  ))}
                </Stack>
              </Box>
            )}
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Card.Title>
              {p.regimen === "navarra"
                ? "Regimen foral de Navarra"
                : `Escala del articulo ${p.perfil === "is" ? "20" : "19"}`}
            </Card.Title>
            <Card.Description>
              {p.regimen === "navarra"
                ? "Decreto Foral Legislativo 2/2023, de 24 de mayo"
                : p.perfil === "is"
                  ? "Impuesto sobre Sociedades"
                  : "Impuesto sobre la Renta de personas fisicas"}
            </Card.Description>
          </Card.Header>
          <Card.Body>
            {p.regimen === "navarra" ? (
              <Stack gap={2}>
                {ESCALA_NAVARRA.map((f) => (
                  <Grid
                    key={f.titulo}
                    templateColumns="1fr 64px"
                    gap={3}
                    alignItems="center"
                  >
                    <Box>
                      <Text fontSize="sm" fontWeight="semibold">
                        {f.titulo}
                      </Text>
                      <Text fontSize="xs" color="fg.muted">
                        {f.detalle}
                      </Text>
                    </Box>
                    <Text fontWeight="bold" textAlign="right">
                      {f.tipo === 0 ? "Tope" : `${f.tipo}%`}
                    </Text>
                  </Grid>
                ))}
                <Text fontSize="xs" color="fg.muted" mt={2}>
                  La ley foral permite que un Acuerdo de Gobierno eleve hasta 5
                  puntos los porcentajes de las actividades prioritarias. No se
                  aplica en este cálculo.
                </Text>
              </Stack>
            ) : p.perfil === "is" ? (
              <Barras />
            ) : (
              <Stack gap={2}>
                {ESCALA_IRPF.map((f) => (
                  <Grid
                    key={f.titulo}
                    templateColumns="1fr 56px"
                    gap={3}
                    alignItems="center"
                  >
                    <Box>
                      <Text fontSize="sm" fontWeight="semibold">
                        {f.titulo}
                      </Text>
                      <Text fontSize="xs" color="fg.muted">
                        {f.detalle}
                      </Text>
                    </Box>
                    <Text fontWeight="bold" textAlign="right">
                      {f.tipo}%
                    </Text>
                  </Grid>
                ))}
              </Stack>
            )}

            <Text fontSize="xs" color="fg.muted" mt={5}>
              {p.regimen === "navarra"
                ? "No aplica: los topes del artículo 20 y el incremento del 22 son del régimen estatal."
                : "Con destino a actividad prioritaria de mecenazgo (articulo 22):"}
            </Text>
            {p.regimen === "estatal" && (
              <Table.Root size="sm" variant="line" mt={2} interactive={false}>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Concepto</Table.ColumnHeader>
                    <Table.ColumnHeader textAlign="end">
                      IRPF
                    </Table.ColumnHeader>
                    <Table.ColumnHeader textAlign="end">IS</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {PRIORITARIAS.map((f) => (
                    <Table.Row key={f.concepto}>
                      <Table.Cell>{f.concepto}</Table.Cell>
                      <Table.Cell textAlign="end" fontWeight="semibold">
                        {f.irpf}
                      </Table.Cell>
                      <Table.Cell textAlign="end" fontWeight="semibold">
                        {f.is}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            )}
          </Card.Body>
        </Card.Root>
      </Stack>
    </Grid>
  );
}

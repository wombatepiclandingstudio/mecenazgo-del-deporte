"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Collapsible,
  Field,
  Grid,
  Heading,
  HStack,
  Input,
  List,
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
  type DestinoNavarra,
} from "@/lib/mecenazgo";
import type { EstadoApp } from "@/lib/estado";
import { hoyISO } from "@/lib/estado";
import {
  diasHasta,
  formatoTipo,
  programa as programaDe,
  repartoDe,
  resultadoPrograma,
} from "@/lib/programas";
import { usePdfRenderer, descargar } from "@/lib/pdf/usePdfRenderer";
import { modeloInforme } from "@/lib/pdf/informe";
import {
  AVISO_PRESUPUESTO,
  CALENDARIO_2026,
  CONDICIONES,
  ESCALA_IRPF,
  ESCALA_IS,
  ESCALA_NAVARRA,
  FIGURAS,
  IRPF_CUBO,
  LIMITE_SIMBOLICO,
  NAVARRA_DESTINOS,
  NAVARRA_PRIORITARIAS,
  NAVARRA_TOPE,
  PRIORITARIAS,
  PRIORITARIAS_TITULO,
  PROGRAMAS_2026,
  REGIMENES,
} from "@/lib/legal";

const CONDICION = new Map(CONDICIONES.map((c) => [c.id, c]));

interface Props {
  estado: EstadoApp;
  onCambiar: (parcial: Partial<EstadoApp["aportante"]>) => void;
  onPrograma: (parcial: Partial<EstadoApp["programa"]>) => void;
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

export function PanelAportante({ estado, onCambiar, onPrograma }: Props) {
  const p = estado.aportante;
  const [ajustesAbiertos, setAjustesAbiertos] = useState(false);
  // La fecha de hoy solo existe en el navegador: se calcula al montar para no
  // congelar en el HTML un plazo que dependa del dia de la visita.
  const [hoy, setHoy] = useState("");
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- la fecha de hoy solo existe en el navegador: leerla durante el render romperia la hidratacion.
    setHoy(hoyISO());
  }, []);

  /** Programa elegido, si la aportacion va a uno. */
  const prog = estado.programa.id ? programaDe(estado.programa.id) : null;

  /** Regla que aplica al destino foral elegido, segun el articulo que la fija. */
  const destinoForal = NAVARRA_DESTINOS.find(
    (d) => d.destino === p.destinoNavarra,
  );
  const destinoTexto =
    p.regimen !== "navarra" || !destinoForal
      ? ""
      : p.perfil === "is"
        ? destinoForal.is
        : destinoForal.irpf;

  /**
   * Los programas de la Fundacion son actividades prioritarias y, en el caso
   * de España Compite, tienen tope anual por aportante. El tope entra en el
   * calculo general para no tener dos motores de deduccion.
   */
  const parametros = useMemo(
    () =>
      prog && p.regimen === "estatal"
        ? {
            ...p,
            prioritaria: true,
            topeAportacion: prog.topeAnual ?? undefined,
          }
        : p,
    [p, prog],
  );
  const r = useMemo(() => calcular(parametros), [parametros]);

  /** Resultado propio del programa: canon, tope y via publicitaria. */
  const rp = useMemo(
    () =>
      prog
        ? resultadoPrograma({
            programa: prog.id,
            via: estado.programa.via,
            importe: p.importe,
            gastoPublicidad: estado.programa.gastoPublicidad,
            publicidadEsencial: estado.programa.publicidadEsencial,
            donacion: p.importe,
            hoy,
          })
        : null,
    [prog, estado.programa, p.importe, hoy],
  );

  /** Reparto posible en el calendario de pagos y dias que faltan. */
  const reparto = hoy ? repartoDe(hoy) : null;

  /** Avisos del calculo general y del programa, juntos. */
  const avisos = rp ? [...r.avisos, ...rp.avisos] : r.avisos;

  /** Informe en PDF: se genera en un worker y se descarga. */
  const { renderPdf, isRendering } = usePdfRenderer();
  const [errorPdf, setErrorPdf] = useState<string | null>(null);

  const bajarInforme = async () => {
    setErrorPdf(null);
    try {
      const bytes = await renderPdf(modeloInforme(estado));
      descargar(bytes, "informe-calculo-mecenazgo.pdf");
    } catch (error) {
      setErrorPdf(
        error instanceof Error ? error.message : "no se pudo generar el PDF",
      );
    }
  };

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
          <Stack gap={4}>
            <Tabs.Root
              value={p.perfil}
              onValueChange={(e) => onCambiar({ perfil: e.value as Perfil })}
              variant="subtle"
              colorPalette="brand"
            >
              <Tabs.List>
                <Tabs.Trigger value="is">Empresa (IS)</Tabs.Trigger>
                <Tabs.Trigger value="irpf">Persona fisica (IRPF)</Tabs.Trigger>
              </Tabs.List>
            </Tabs.Root>

            <Box>
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
                {REGIMENES.find((r) => r.regimen === p.regimen)?.texto}
              </Text>
            </Box>

            <Field.Root>
              <Field.Label htmlFor="programa">
                Programa de mecenazgo
              </Field.Label>
              <NativeSelect.Root>
                <NativeSelect.Field
                  id="programa"
                  value={estado.programa.id}
                  onChange={(e) => {
                    const id = e.target.value as EstadoApp["programa"]["id"];
                    onPrograma({ id, via: "donacion" });
                    if (id) onCambiar({ prioritaria: true });
                  }}
                >
                  <option value="">
                    Sin programa: mecenazgo general de la Ley 49/2002
                  </option>
                  {PROGRAMAS_2026.map((pr) => (
                    <option key={pr.id} value={pr.id}>
                      {pr.nombre}
                    </option>
                  ))}
                </NativeSelect.Field>
                <NativeSelect.Indicator />
              </NativeSelect.Root>
              <Field.HelperText>
                Los cuatro programas son actividades prioritarias de mecenazgo:
                suben el tipo cinco puntos.
              </Field.HelperText>
            </Field.Root>

            {prog && (
              <Box
                p={3}
                borderRadius="md"
                bg="accent.muted"
                borderWidth="1px"
                borderColor="accent.300"
              >
                <Stack gap={3}>
                  <Text fontSize="sm">{prog.elevacion}</Text>

                  {prog.viaPublicitaria && (
                    <>
                      <Text
                        fontSize="xs"
                        fontWeight="bold"
                        letterSpacing="0.1em"
                        textTransform="uppercase"
                        color="brand.fg"
                      >
                        Via de la aportacion
                      </Text>
                      <HStack gap={2}>
                        <Button
                          size="sm"
                          flex="1"
                          variant={
                            estado.programa.via === "donacion" ? "subtle" : "ghost"
                          }
                          colorPalette="brand"
                          onClick={() => onPrograma({ via: "donacion" })}
                        >
                          Donacion
                        </Button>
                        <Button
                          size="sm"
                          flex="1"
                          variant={
                            estado.programa.via === "publicidad"
                              ? "subtle"
                              : "ghost"
                          }
                          colorPalette="brand"
                          onClick={() => onPrograma({ via: "publicidad" })}
                        >
                          Publicidad
                        </Button>
                      </HStack>
                      <Text fontSize="xs" color="fg.muted">
                        Son vias excluyentes: si se aplica la deduccion por
                        publicidad, la donacion no puede acogerse a los demas
                        incentivos de la ley.
                      </Text>
                    </>
                  )}

                  {estado.programa.via === "publicidad" && (
                    <>
                      <Field.Root>
                        <Field.Label htmlFor="gasto-publicidad">
                          Gasto en propaganda y publicidad
                        </Field.Label>
                        <Input
                          id="gasto-publicidad"
                          type="number"
                          min={0}
                          step={500}
                          inputMode="numeric"
                          value={estado.programa.gastoPublicidad}
                          onChange={(e) =>
                            onPrograma({
                              gastoPublicidad: Math.max(
                                0,
                                Number(e.target.value) || 0,
                              ),
                            })
                          }
                        />
                      </Field.Root>
                      <Checkbox.Root
                        checked={estado.programa.publicidadEsencial}
                        onCheckedChange={(e) =>
                          onPrograma({ publicidadEsencial: !!e.checked })
                        }
                        colorPalette="accent"
                        alignItems="flex-start"
                      >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control mt="2px" />
                        <Checkbox.Label>
                          El soporte publicitario se refiere de modo esencial
                          a la divulgacion del acontecimiento
                          <Text
                            as="span"
                            display="block"
                            fontSize="xs"
                            color="fg.muted"
                            mt="1px"
                          >
                            Si no es esencial, la base de la deduccion es el{" "}
                            {formatoTipo(FIGURAS.basePublicidadNoEsencial)} del
                            gasto.
                          </Text>
                        </Checkbox.Label>
                      </Checkbox.Root>
                    </>
                  )}

                  {prog.topeAnual !== null && (
                    <Text fontSize="xs" color="fg.muted">
                      Tope anual por aportante: {euros(prog.topeAnual)}. El
                      exceso no entra en la base deducible.
                    </Text>
                  )}
                </Stack>
              </Box>
            )}

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

            <Collapsible.Root
              open={ajustesAbiertos}
              onOpenChange={(e) => setAjustesAbiertos(e.open)}
            >
              <Collapsible.Trigger asChild>
                <Button variant="outline" w="full" justifyContent="space-between">
                  {ajustesAbiertos ? "Ocultar ajustes" : "Afinar el calculo"}
                  <Collapsible.Indicator
                    aria-hidden="true"
                    display="inline-flex"
                    transition="transform .2s ease"
                    css={{ "&[data-state=open]": { transform: "rotate(180deg)" } }}
                  >
                    &#9662;
                  </Collapsible.Indicator>
                </Button>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Stack gap={4} pt={4}>
                  <Text fontSize="xs" color="fg.muted">
                    Con la base y el importe ya tienes una cifra. Estos datos la
                    afinan: tipo impositivo, otras aportaciones, destino foral y
                    donativos repetidos.
                  </Text>

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
                      <Field.HelperText>{IRPF_CUBO.texto}</Field.HelperText>
                    </Field.Root>
                  )}

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
                              Deportivo - actividad declarada de interes social
                              (arts. 39 a 42)
                            </option>
                            <option value="cultural">
                              Cultural - proyecto declarado de interes social
                            </option>
                            <option value="social">
                              Social - entidad reconocida por el Gobierno de
                              Navarra
                            </option>
                            <option value="medioambiental">
                              Medioambiental - entidad con reconocimiento previo
                            </option>
                          </NativeSelect.Field>
                          <NativeSelect.Indicator />
                        </NativeSelect.Root>
                        <Field.HelperText>{destinoTexto}</Field.HelperText>
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
                          <Field.HelperText>{NAVARRA_TOPE.texto}</Field.HelperText>
                        </Field.Root>
                      )}
                    </>
                  )}

                  {p.regimen === "estatal" && !prog && (
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
                          {CONDICION.get("prioritaria")?.etiqueta}
                          <Text
                            as="span"
                            display="block"
                            fontSize="xs"
                            color="fg.muted"
                            mt="1px"
                          >
                            {CONDICION.get("prioritaria")?.ayuda}
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
                          {CONDICION.get("reiterada")?.etiqueta}
                          <Text
                            as="span"
                            display="block"
                            fontSize="xs"
                            color="fg.muted"
                            mt="1px"
                          >
                            {CONDICION.get("reiterada")?.ayuda}
                          </Text>
                        </Checkbox.Label>
                      </Checkbox.Root>
                    </>
                  )}
                </Stack>
              </Collapsible.Content>
            </Collapsible.Root>

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
                      20 ni el incremento por donativos reiterados. El Decreto
                      Foral Legislativo 2/2023 fija su propio regimen: una
                      partida deducible en la base mas una deduccion sobre la
                      cuota liquida, que cambia segun el destino.
                    </Text>
                  </Box>
                )}

                {p.regimen === "navarra" && p.destinoNavarra === "deportivo" && (
                  <Checkbox.Root
                    checked={p.interesSocial}
                    onCheckedChange={(e) =>
                      onCambiar({ interesSocial: !!e.checked })
                    }
                    colorPalette="accent"
                    alignItems="flex-start"
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control mt="2px" />
                    <Checkbox.Label>
                      {CONDICION.get("interesSocial")?.etiqueta}
                      <Text
                        as="span"
                        display="block"
                        fontSize="xs"
                        color="fg.muted"
                        mt="1px"
                      >
                        {CONDICION.get("interesSocial")?.ayuda}
                      </Text>
                    </Checkbox.Label>
                  </Checkbox.Root>
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
                    {CONDICION.get("certificado")?.etiqueta}
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
                    {CONDICION.get("simbolico")?.etiqueta}
                    <Text
                      as="span"
                      display="block"
                      fontSize="xs"
                      color="fg.muted"
                      mt="1px"
                    >
                      {LIMITE_SIMBOLICO.texto}
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
              <Table.Caption captionSide="top">
                Calculo de la deduccion aplicable y del coste neto
              </Table.Caption>
              <Table.Body>
                <Table.Row>
                  <Table.Cell as="th" scope="row" fontWeight="normal">
                    Tipo de deduccion aplicable
                  </Table.Cell>
                  <Table.Cell textAlign="end" fontWeight="bold">
                    {r.tipoEtiqueta}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell as="th" scope="row" fontWeight="normal">
                    Articulo que lo fija
                  </Table.Cell>
                  <Table.Cell textAlign="end" fontWeight="bold">
                    {r.articulo}
                  </Table.Cell>
                </Table.Row>
                {p.regimen === "estatal" ? (
                  <Table.Row>
                    <Table.Cell as="th" scope="row" fontWeight="normal">
                      Base de la deduccion
                    </Table.Cell>
                    <Table.Cell textAlign="end" fontWeight="bold">
                      {euros(r.base)}
                    </Table.Cell>
                  </Table.Row>
                ) : (
                  r.lineas.map((l) => (
                    <Table.Row key={l.concepto}>
                      <Table.Cell as="th" scope="row" fontWeight="normal">
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
                {rp && (
                  <>
                    <Table.Row>
                      <Table.Cell as="th" scope="row" fontWeight="normal">
                        Canon de gestion del programa
                        <Text fontSize="xs" color="fg.muted">
                          {rp.canon.tramo}
                        </Text>
                      </Table.Cell>
                      <Table.Cell textAlign="end" fontWeight="bold">
                        {euros(rp.canon.importe)}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell as="th" scope="row" fontWeight="normal">
                        Neto al proyecto tras el canon
                      </Table.Cell>
                      <Table.Cell textAlign="end" fontWeight="bold">
                        {euros(rp.canon.neto)}
                      </Table.Cell>
                    </Table.Row>
                    {rp.tope.limite !== null && (
                      <Table.Row>
                        <Table.Cell as="th" scope="row" fontWeight="normal">
                          Tope anual por aportante
                          {rp.tope.exceso > 0 && (
                            <Text fontSize="xs" color="fg.muted">
                              Quedan {euros(rp.tope.exceso)} fuera de la base
                              deducible.
                            </Text>
                          )}
                        </Table.Cell>
                        <Table.Cell textAlign="end" fontWeight="bold">
                          {euros(rp.tope.limite)}
                        </Table.Cell>
                      </Table.Row>
                    )}
                  </>
                )}
                <Table.Row>
                  <Table.Cell as="th" scope="row" bg="brand.subtle">
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
                    <Table.Cell
                      as="th"
                      scope="row"
                      fontWeight="normal"
                      color="fg.muted"
                    >
                      Pendiente para los 10 anos siguientes
                    </Table.Cell>
                    <Table.Cell textAlign="end" color="fg.muted">
                      {r.pendiente > 0.5 ? euros(r.pendiente) : "—"}
                    </Table.Cell>
                  </Table.Row>
                )}
                <Table.Row>
                  <Table.Cell as="th" scope="row" fontWeight="semibold">
                    Coste neto real
                  </Table.Cell>
                  <Table.Cell textAlign="end" fontWeight="bold">
                    {euros(r.neto)}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>

            <Box mt={5}>
              <Box
                display="flex"
                h="34px"
                borderRadius="md"
                overflow="hidden"
                aria-hidden="true"
              >
                <Box
                  w={`${r.descuento}%`}
                  bg="accent.700"
                  color="accent.contrast"
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

            {avisos.length > 0 && (
              <Box
                mt={5}
                p={4}
                borderRadius="md"
                bg={
                  avisos.some((a) => a.bloqueante)
                    ? "red.subtle"
                    : "accent.muted"
                }
                borderWidth="1px"
                borderColor={
                  avisos.some((a) => a.bloqueante) ? "red.300" : "accent.300"
                }
              >
                <Heading as="h3" size="xs" mb={2}>
                  {avisos.some((a) => a.bloqueante)
                    ? "Revisa antes de continuar"
                    : "Notas"}
                </Heading>
                <List.Root gap={2} m={0} p={0} listStyle="none">
                  {avisos.map((a, i) => (
                    <List.Item
                      key={i}
                      display="flex"
                      gap={2}
                      alignItems="flex-start"
                    >
                      <Box
                        aria-hidden="true"
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
                    </List.Item>
                  ))}
                </List.Root>
              </Box>
            )}

            <HStack mt={5} gap={3} alignItems="center" flexWrap="wrap">
              <Button
                size="sm"
                variant="outline"
                colorPalette="brand"
                onClick={bajarInforme}
                disabled={isRendering}
              >
                {isRendering ? "Generando el PDF..." : "Informe de calculo (PDF)"}
              </Button>
              <Text fontSize="xs" color="fg.muted">
                Documento de trabajo, no es una declaracion ni un certificado.
              </Text>
            </HStack>
            {errorPdf && (
              <Text fontSize="xs" color="fg.muted" mt={2}>
                {errorPdf}
              </Text>
            )}
          </Card.Body>
        </Card.Root>

        {prog && (
          <Card.Root>
            <Card.Header>
              <Card.Title>Calendario del programa</Card.Title>
              <Card.Description>
                Los plazos no corren en el orden que se leen: primero la
                solicitud de ayuda, despues la donacion y al final el dinero.
              </Card.Description>
            </Card.Header>
            <Card.Body>
              <Table.Root size="sm" variant="line" interactive={false}>
                <Table.Caption captionSide="top">
                  Hitos de la convocatoria 2026
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
                        {h.fecha ? (
                          <>
                            <Text>{h.fecha.split("-").reverse().join("/")}</Text>
                            {hoy && (
                              <Text fontSize="xs" color="fg.muted">
                                {diasHasta(hoy, h.fecha) >= 0
                                  ? `quedan ${diasHasta(hoy, h.fecha)} dias`
                                  : "plazo vencido"}
                              </Text>
                            )}
                          </>
                        ) : (
                          <Text fontWeight="normal" fontSize="xs">
                            {h.plazo}
                          </Text>
                        )}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>

              {reparto && (
                <Box
                  mt={5}
                  p={3}
                  borderRadius="md"
                  bg="bg.subtle"
                  borderWidth="1px"
                  borderColor="border"
                >
                  <Text fontSize="sm">
                    {reparto.meses.length === 0
                      ? "El calendario de pagos de 2026 esta cerrado: no queda ningun mes para repartir la aportacion."
                      : `Quedan ${reparto.meses.length} meses de calendario de pagos: ${reparto.meses.join(
                          ", ",
                        )}. Cada fraccion debe ser de al menos ${euros(
                          reparto.fraccionMinima,
                        )}.`}
                  </Text>
                </Box>
              )}

              <Text fontSize="xs" color="fg.muted" mt={4}>
                {AVISO_PRESUPUESTO.texto}
              </Text>
            </Card.Body>
          </Card.Root>
        )}

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
                  {NAVARRA_PRIORITARIAS.texto}
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
                : PRIORITARIAS_TITULO.texto}
            </Text>
            {p.regimen === "estatal" && (
              <Table.Root size="sm" variant="line" mt={2} interactive={false}>
                <Table.Caption captionSide="top">
                  Porcentajes aplicables a actividades prioritarias de mecenazgo
                </Table.Caption>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader scope="col">
                      Concepto
                    </Table.ColumnHeader>
                    <Table.ColumnHeader scope="col" textAlign="end">
                      IRPF
                    </Table.ColumnHeader>
                    <Table.ColumnHeader scope="col" textAlign="end">
                      IS
                    </Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {PRIORITARIAS.map((f) => (
                    <Table.Row key={f.concepto}>
                      <Table.Cell as="th" scope="row" fontWeight="normal">
                        {f.concepto}
                      </Table.Cell>
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

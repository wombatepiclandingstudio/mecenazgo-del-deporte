"use client";

import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  Field,
  Grid,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { EstadoApp } from "@/lib/estado";
import { euros } from "@/lib/mecenazgo";
import type { EstadoDescarga } from "@/lib/certificado";

interface Props {
  estado: EstadoApp;
  onCambiar: (parcial: Partial<EstadoApp["certificado"]>) => void;
}

export function PanelCertificado({ estado, onCambiar }: Props) {
  const d = estado.certificado;
  const [descarga, setDescarga] = useState<EstadoDescarga>("inactivo");
  const [copiado, setCopiado] = useState(false);

  const faltan = [
    !d.entidad.trim() && "denominacion de la entidad",
    !d.nifEntidad.trim() && "NIF de la entidad",
    !d.donante.trim() && "donante",
    !d.nifDonante.trim() && "NIF del donante",
    !d.destino.trim() && "destino de la aportacion",
  ].filter(Boolean) as string[];

  const generar = async () => {
    setDescarga("generando");
    try {
      // El generador de PDF pesa varios cientos de kB: se carga solo al pulsar.
      const { descargarCertificado } = await import("@/lib/certificado");
      setDescarga(await descargarCertificado(d));
    } catch {
      setDescarga("error");
    }
  };

  const copiar = async () => {
    const texto = [
      "CERTIFICACION DE APORTACION",
      "-----------------------------------",
      `La entidad ${d.entidad || "[ENTIDAD]"}, con NIF ${d.nifEntidad || "[NIF]"}, certifica:`,
      `1. Que el donante es ${d.donante || "[DONANTE]"}, con NIF ${d.nifDonante || "[NIF]"}.`,
      "2. Que esta entidad se encuentra incluida entre las reguladas por el articulo 16 de la Ley 49/2002.",
      `3. Que el dia ${d.fecha.split("-").reverse().join("/")} ha recibido ${euros(d.importe || 0)} en concepto de aportacion.`,
      `4. Que el destino es: ${d.destino || "[DESTINO]"}.`,
      "5. Que la aportacion tiene caracter irrevocable y se realiza a favor de los fines de interes general.",
    ].join("\n");
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      setCopiado(false);
    }
  };

  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      gap={5}
      alignItems="start"
    >
      <Card.Root>
        <Card.Header>
          <Card.Title>Datos de la certificacion</Card.Title>
          <Card.Description>
            Los seis extremos que exige el articulo 24.3 de la Ley 49/2002
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap={4}>
            <Field.Root>
              <Field.Label htmlFor="entidad">
                Denominacion de la entidad
              </Field.Label>
              <Input
                id="entidad"
                placeholder="Asociacion, fundacion o entidad que recibe"
                value={d.entidad}
                onChange={(e) => onCambiar({ entidad: e.target.value })}
              />
            </Field.Root>

            <Field.Root>
              <Field.Label htmlFor="nifEntidad">NIF de la entidad</Field.Label>
              <Input
                id="nifEntidad"
                placeholder="G00000000"
                value={d.nifEntidad}
                onChange={(e) => onCambiar({ nifEntidad: e.target.value })}
              />
            </Field.Root>

            <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap={4}>
              <Field.Root>
                <Field.Label htmlFor="donante">Donante</Field.Label>
                <Input
                  id="donante"
                  placeholder="Nombre o razon social"
                  value={d.donante}
                  onChange={(e) => onCambiar({ donante: e.target.value })}
                />
              </Field.Root>
              <Field.Root>
                <Field.Label htmlFor="nifDonante">NIF del donante</Field.Label>
                <Input
                  id="nifDonante"
                  placeholder="B00000000"
                  value={d.nifDonante}
                  onChange={(e) => onCambiar({ nifDonante: e.target.value })}
                />
              </Field.Root>
            </Grid>

            <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap={4}>
              <Field.Root>
                <Field.Label htmlFor="importeCert">Importe</Field.Label>
                <Input
                  id="importeCert"
                  type="number"
                  min={0}
                  step={100}
                  inputMode="numeric"
                  value={d.importe}
                  onChange={(e) =>
                    onCambiar({
                      importe: Math.max(0, Number(e.target.value) || 0),
                    })
                  }
                />
              </Field.Root>
              <Field.Root>
                <Field.Label htmlFor="fecha">
                  Fecha de la aportacion
                </Field.Label>
                <Input
                  id="fecha"
                  type="date"
                  value={d.fecha}
                  onChange={(e) => onCambiar({ fecha: e.target.value })}
                />
              </Field.Root>
            </Grid>

            <Field.Root>
              <Field.Label htmlFor="destino">
                Destino de la aportacion
              </Field.Label>
              <Input
                id="destino"
                placeholder="Programa, proyecto o fines concretos"
                value={d.destino}
                onChange={(e) => onCambiar({ destino: e.target.value })}
              />
              <Field.HelperText>
                El destino es uno de los datos que la certificacion debe recoger
                de forma expresa.
              </Field.HelperText>
            </Field.Root>

            <Field.Root>
              <Field.Label htmlFor="cargo">Cargo que firma</Field.Label>
              <Input
                id="cargo"
                value={d.cargo}
                onChange={(e) => onCambiar({ cargo: e.target.value })}
              />
            </Field.Root>

            <HStack gap={3} pt={2} flexWrap="wrap">
              <Button
                colorPalette="brand"
                onClick={generar}
                loading={descarga === "generando"}
                loadingText="Generando PDF"
              >
                Descargar certificado en PDF
              </Button>
              <Button variant="outline" onClick={copiar}>
                {copiado ? "Copiado" : "Copiar como texto"}
              </Button>
            </HStack>

            {faltan.length > 0 && (
              <Box
                p={3}
                borderRadius="md"
                bg="accent.muted"
                borderWidth="1px"
                borderColor="accent.300"
              >
                <Text fontSize="sm" fontWeight="semibold" mb={1}>
                  Faltan datos: {faltan.join(", ")}
                </Text>
                <Text fontSize="xs" color="fg.muted">
                  El PDF se genera igualmente, pero con esos campos marcados
                  entre corchetes.
                </Text>
              </Box>
            )}

            {descarga === "error" && (
              <Box
                p={3}
                borderRadius="md"
                bg="red.subtle"
                borderWidth="1px"
                borderColor="red.300"
              >
                <Text fontSize="sm">
                  No se ha podido generar el PDF en este navegador. Prueba con
                  otro o actualiza la pagina.
                </Text>
              </Box>
            )}
          </Stack>
        </Card.Body>
      </Card.Root>

      <Stack gap={5}>
        <Card.Root variant="outline">
          <Card.Header>
            <Card.Title>Como queda el documento</Card.Title>
            <Card.Description>
              A4, una pagina, texto seleccionable
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <Box
              borderWidth="1px"
              borderColor="border"
              borderRadius="md"
              p={5}
              bg="bg.subtle"
              fontSize="sm"
              lineHeight="1.7"
            >
              <Heading as="h3" size="md" mb={1}>
                Certificacion de aportacion
              </Heading>
              <Text fontSize="xs" color="fg.muted" mb={4}>
                Ley 49/2002, de 23 de diciembre
              </Text>
              <Text mb={3}>
                La entidad <b>{d.entidad || "[DENOMINACION SOCIAL]"}</b>, con
                NIF {d.nifEntidad || "[NIF DE LA ENTIDAD]"}, certifica:
              </Text>
              <Stack gap={2} fontSize="sm">
                <Text>
                  <b>1.</b> Que el donante es {d.donante || "[DONANTE]"}, con
                  NIF {d.nifDonante || "[NIF]"}.
                </Text>
                <Text>
                  <b>2.</b> Que la entidad esta incluida entre las reguladas por
                  el articulo 16.
                </Text>
                <Text>
                  <b>3.</b> Que el dia {d.fecha.split("-").reverse().join("/")}{" "}
                  ha recibido {euros(d.importe || 0)} en concepto de aportacion.
                </Text>
                <Text>
                  <b>4.</b> Que la aportacion es en dinero y, por tanto, no
                  procede el documento que acredite la entrega de un bien donado
                  (apartado d) del articulo 24.3).
                </Text>
                <Text>
                  <b>5.</b> Que el destino es:{" "}
                  {d.destino || "[DESTINO DE LA APORTACION]"}.
                </Text>
                <Text>
                  <b>6.</b> Que la aportacion tiene caracter irrevocable y se
                  realiza a favor de los fines de interes general.
                </Text>
              </Stack>
            </Box>
            <HStack mt={3} gap={2} flexWrap="wrap">
              <Badge colorPalette="green" variant="subtle">
                texto seleccionable
              </Badge>
              <Badge colorPalette="gray" variant="subtle">
                A4 vertical
              </Badge>
              <Badge colorPalette="gray" variant="subtle">
                generado en el navegador
              </Badge>
            </HStack>
          </Card.Body>
        </Card.Root>

        <Box>
          <Heading as="h3" size="sm" mb={3}>
            Donde va el certificado
          </Heading>
          <Text fontSize="sm" color="fg.muted">
            El aportante lo necesita para aplicar la deduccion en su
            declaracion. Sin el, la aportacion no se deduce por muy correcta que
            sea la intencion.
          </Text>
        </Box>
      </Stack>
    </Grid>
  );
}

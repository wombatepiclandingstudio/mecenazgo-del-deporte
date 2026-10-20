"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { estadoInicial, type EstadoApp } from "@/lib/estado";
import { REQUISITOS } from "@/lib/legal";
import { usePersistido } from "@/lib/usePersistido";
import { PanelEntidad } from "./PanelEntidad";
import { PanelAportante } from "./PanelAportante";
import { PanelCertificado } from "./PanelCertificado";

const inicial = estadoInicial;

const PESTANAS = ["entidad", "aportante", "certificado"] as const;

/**
 * Herramienta interactiva. Va en su propia ruta (/simulador) para que la
 * portada sea la puerta de entrada y la ley quede aparte.
 */
export function Simulador() {
  const { estado, setEstado, listo, borrar } = usePersistido(inicial);
  const [pestana, setPestana] = useState<string>("entidad");

  // La portada enlaza a una puerta concreta: #aportante o #entidad.
  useEffect(() => {
    const h = window.location.hash.replace("#", "");
    if ((PESTANAS as readonly string[]).includes(h)) setPestana(h);
  }, []);

  const cambiarPestana = (valor: string) => {
    setPestana(valor);
    window.history.replaceState(null, "", `#${valor}`);
  };

  const cumplimiento = useMemo(() => {
    const hechos = REQUISITOS.filter((r) => estado.cumplimiento[r.id]).length;
    return {
      hechos,
      total: REQUISITOS.length,
      pct: Math.round((hechos / REQUISITOS.length) * 100),
    };
  }, [estado.cumplimiento]);

  const actualizarAportante = (parcial: Partial<EstadoApp["aportante"]>) =>
    setEstado((e) => ({ ...e, aportante: { ...e.aportante, ...parcial } }));

  const actualizarCertificado = (parcial: Partial<EstadoApp["certificado"]>) =>
    setEstado((e) => ({ ...e, certificado: { ...e.certificado, ...parcial } }));

  const alternarRequisito = (id: string, valor: boolean) =>
    setEstado((e) => ({
      ...e,
      cumplimiento: { ...e.cumplimiento, [id]: valor },
    }));

  return (
    <Container maxW="6xl" px={{ base: 4, md: 6 }}>
      <Stack gap={0} pt={{ base: 8, md: 10 }} pb={4}>
        <Heading as="h1" size="2xl" letterSpacing="-0.02em" maxW="24ch">
          Simulador de mecenazgo
        </Heading>
        <Text mt={3} color="fg.muted" fontSize="md" maxW="68ch">
          Tres pasos encadenados: comprobar si la entidad puede recibir,
          calcular que devuelve la aportacion y emitir el certificado. Los datos
          se guardan en este navegador.
        </Text>
      </Stack>

      <Tabs.Root
        value={pestana}
        onValueChange={(e) => cambiarPestana(e.value)}
        variant="enclosed"
        colorPalette="brand"
      >
        <Tabs.List flexWrap="wrap" gap={1}>
          <Tabs.Trigger value="entidad">
            Entidad acreedora
            {cumplimiento.pct === 100 && (
              <Badge ml={2} colorPalette="green" variant="solid" size="xs">
                lista
              </Badge>
            )}
          </Tabs.Trigger>
          <Tabs.Trigger value="aportante">Donante</Tabs.Trigger>
          <Tabs.Trigger value="certificado">Certificado</Tabs.Trigger>
        </Tabs.List>

        <Box pt={6}>
          <Tabs.Content value="entidad">
            <PanelEntidad
              estado={estado}
              onAlternar={alternarRequisito}
              cumplimiento={cumplimiento}
            />
          </Tabs.Content>

          <Tabs.Content value="aportante">
            <PanelAportante estado={estado} onCambiar={actualizarAportante} />
          </Tabs.Content>

          <Tabs.Content value="certificado">
            <PanelCertificado
              estado={estado}
              onCambiar={actualizarCertificado}
            />
          </Tabs.Content>
        </Box>
      </Tabs.Root>

      <HStack
        mt={10}
        pt={6}
        borderTopWidth="1px"
        borderColor="border"
        justify="space-between"
        flexWrap="wrap"
        gap={3}
      >
        <Text fontSize="sm" color="fg.muted">
          {listo
            ? "Los datos estan guardados en este navegador."
            : "Comprobando el almacenamiento local..."}
        </Text>
        <Button
          size="sm"
          variant="outline"
          colorPalette="gray"
          onClick={borrar}
        >
          Borrar datos guardados
        </Button>
      </HStack>
    </Container>
  );
}
